"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./ToastContext";

export type UserRole = "ADMIN" | "SUPER_ADMIN" | "LECTURER" | "STUDENT" | "CALL_ROOM_OFFICER";

export interface User {
  id: number | string;
  name: string;
  email: string;
  role: UserRole;
  status?: string;
  must_change_password?: boolean;
  studentId?: string;
  admissionNo?: string;
  employeeId?: string;
  department?: string;
  program?: string;
  batch?: string;
  avatarLetter: string;
}

export const PRESET_USERS: Record<string, User> = {
  ADMIN: {
    id: 1,
    name: "Campus Administrator",
    email: "admin@stanfordcampus.edu.lk",
    role: "ADMIN",
    department: "Executive Management",
    program: "Governance & Operations",
    avatarLetter: "A",
  },
  SUPER_ADMIN: {
    id: 1,
    name: "Campus Administrator",
    email: "admin@stanfordcampus.edu.lk",
    role: "ADMIN",
    department: "Executive Management",
    program: "Governance & Operations",
    avatarLetter: "A",
  },
  LECTURER: {
    id: 2,
    name: "Campus Lecturer",
    email: "lecturer@stanfordcampus.edu.lk",
    role: "LECTURER",
    department: "Faculty of Management & FinTech",
    program: "Academic Lecturer",
    avatarLetter: "L",
  },
  STUDENT: {
    id: 3,
    name: "Campus Student",
    email: "student@stanfordcampus.edu.lk",
    role: "STUDENT",
    studentId: "GC/STUDENT",
    admissionNo: "GC/STUDENT",
    program: "Undergraduate Program",
    batch: "BATCH-2025",
    department: "Academic Studies",
    avatarLetter: "S",
  },
  CALL_ROOM_OFFICER: {
    id: 4,
    name: "Admissions Officer",
    email: "callroom@stanfordcampus.edu.lk",
    role: "CALL_ROOM_OFFICER",
    department: "Admissions & CRM",
    program: "Intake Officer",
    avatarLetter: "A",
  },
};

export function detectRoleFromEmail(email: string): UserRole {
  const t = (email || "").trim().toLowerCase();
  if (
    t.includes("superadmin") ||
    t.startsWith("sa.") ||
    t.includes("admin") ||
    t.startsWith("adm.") ||
    t.startsWith("admin@") ||
    t.includes("registrar") ||
    t.includes("management")
  ) {
    return "ADMIN";
  }
  if (
    t.includes("instructor") ||
    t.includes("lecturer") ||
    t.includes("faculty") ||
    t.includes("prof") ||
    t.includes("teacher") ||
    t.includes("samantha")
  ) {
    return "LECTURER";
  }
  if (t.includes("callroom") || t.includes("crm") || t.includes("telecall") || t.includes("officer")) {
    return "CALL_ROOM_OFFICER";
  }
  return "STUDENT";
}

export function normalizeRole(role?: string): UserRole {
  if (!role) return "STUDENT";
  const r = role.toUpperCase();
  if (r === "ADMIN" || r === "SUPER_ADMIN") return "ADMIN";
  if (r === "LECTURER" || r === "INSTRUCTOR" || r === "FACULTY") return "LECTURER";
  if (r === "CALL_ROOM_OFFICER" || r === "CRM_OFFICER" || r === "OFFICER") return "CALL_ROOM_OFFICER";
  return "STUDENT";
}

interface AuthContextType {
  user: User | null;
  role: UserRole | null;
  login: (roleOrEmail: string) => Promise<{ success: boolean; message?: string; dashboardUrl?: string }>;
  loginWithEmail: (
    email: string,
    password?: string
  ) => Promise<{ success: boolean; user?: User; message?: string; dashboardUrl?: string; code?: string }>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  login: async () => ({ success: false }),
  loginWithEmail: async () => ({ success: false }),
  logout: async () => {},
  refreshUser: async () => {},
  isAuthenticated: false,
  isLoading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { flashToast, toastLogin, toastLogout } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initAuth() {
      try {
        const storedRole = localStorage.getItem("gsc_user_role");
        const storedEmail = localStorage.getItem("gsc_user_email");
        if (storedEmail) {
          const role = detectRoleFromEmail(storedEmail);
          const baseUser = PRESET_USERS[role] || PRESET_USERS.STUDENT;
          setUser({
            ...baseUser,
            email: storedEmail,
            role: normalizeRole(storedRole || role),
          });
        }
      } catch (e) {
        console.error("Session sync error:", e);
      } finally {
        setIsLoading(false);
      }
    }
    initAuth();
  }, []);

  const loginWithEmail = async (email: string, password = "password123") => {
    try {
      const trimmed = email.trim();
      const role = detectRoleFromEmail(trimmed);
      const matched = PRESET_USERS[role] || {
        id: Date.now(),
        name: trimmed.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        email: trimmed,
        role: role,
        avatarLetter: (trimmed.charAt(0) || "U").toUpperCase(),
      };

      setUser(matched);
      try {
        localStorage.setItem("gsc_user_role", matched.role);
        localStorage.setItem("gsc_user_email", matched.email);
      } catch {}

      toastLogin(matched.name.split(" ")[0], matched.role);

      const dashboardUrls: Record<UserRole, string> = {
        ADMIN: "/admin/dashboard",
        SUPER_ADMIN: "/admin/dashboard",
        LECTURER: "/lecturer/dashboard",
        STUDENT: "/portal/lms",
        CALL_ROOM_OFFICER: "/staff/crm/overview",
      };
      const dashboardUrl = dashboardUrls[matched.role] || "/portal/lms";

      return {
        success: true,
        user: matched,
        dashboardUrl,
      };
    } catch (e: any) {
      return {
        success: false,
        message: e?.message || "Authentication error. Please check your credentials.",
      };
    }
  };

  const login = async (roleOrEmail: string) => {
    const roleKey = roleOrEmail.toUpperCase();
    if (PRESET_USERS[roleKey]) {
      return loginWithEmail(PRESET_USERS[roleKey].email, "password123");
    }
    return loginWithEmail(roleOrEmail, "password123");
  };

  const logout = async () => {
    toastLogout("You have safely ended your institutional session.");
    setUser(null);
    try {
      localStorage.removeItem("gsc_user_role");
      localStorage.removeItem("gsc_user_email");
    } catch {}
    router.push("/login");
  };

  const refreshUser = async () => {
    try {
      const storedEmail = localStorage.getItem("gsc_user_email");
      if (storedEmail) {
        const role = detectRoleFromEmail(storedEmail);
        setUser(PRESET_USERS[role] || null);
      }
    } catch {}
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role: user ? user.role : null,
        login,
        loginWithEmail,
        logout,
        refreshUser,
        isAuthenticated: !!user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

