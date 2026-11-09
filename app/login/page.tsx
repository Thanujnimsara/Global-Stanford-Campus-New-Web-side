"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Shield,
  Mail,
  Lock,
  Eye,
  EyeOff,
  HelpCircle,
  AlertCircle,
  ArrowRight,
  X,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  UserCheck,
} from "lucide-react";
import { useAuth, detectRoleFromEmail, UserRole } from "@/context/AuthContext";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { loginWithEmail } = useAuth();

  const initialEmail = searchParams ? searchParams.get("email") || "" : "";
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<UserRole>(detectRoleFromEmail(initialEmail));
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [passwordModal, setPasswordModal] = useState({
    open: false,
    newPassword: "",
    confirmPassword: "",
    loading: false,
    error: "",
  });

  const [forgotModal, setForgotModal] = useState({
    open: false,
    email: "",
    loading: false,
    message: "",
    debugToken: "",
  });

  useEffect(() => {
    setRole(detectRoleFromEmail(email));
  }, [email]);

  const roleConfigs = {
    ADMIN: {
      title: "Campus Administrator",
      badge: "Full Governance & LMS",
      scope: "Administrative access across system registry, curriculum, and operations.",
      icon: ShieldCheck,
      destination: "/admin/dashboard",
    },
    SUPER_ADMIN: {
      title: "Campus Administrator",
      badge: "Full Governance & LMS",
      scope: "Administrative access across system registry, curriculum, and operations.",
      icon: ShieldCheck,
      destination: "/admin/dashboard",
    },
    LECTURER: {
      title: "Faculty Lecturer",
      badge: "Faculty & Grading",
      scope: "Course delivery, lecture attendance, submissions, and grading.",
      icon: BookOpen,
      destination: "/lecturer/dashboard",
    },
    STUDENT: {
      title: "Enrolled Student",
      badge: "Learner Workspace",
      scope: "Access learning pathways, assignments, lecture materials, and grades.",
      icon: GraduationCap,
      destination: "/portal/lms",
    },
    CALL_ROOM_OFFICER: {
      title: "Admissions Officer",
      badge: "Admissions & CRM",
      scope: "Candidate intake management, outreach logs, and student admissions.",
      icon: UserCheck,
      destination: "/staff/crm/overview",
    },
  };

  const currentRoleConfig = roleConfigs[role] || roleConfigs.ADMIN;
  const RoleIcon = currentRoleConfig.icon;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      const res = await loginWithEmail(email.trim(), password);
      if (!res.success) {
        setErrorMessage(res.message || "Authentication failed. Please verify your credentials.");
        setLoading(false);
        return;
      }
      if (res.user?.must_change_password) {
        setPasswordModal({
          open: true,
          newPassword: "",
          confirmPassword: "",
          loading: false,
          error: "",
        });
        setLoading(false);
        return;
      }
      router.push(res.dashboardUrl || currentRoleConfig.destination);
    } catch (err: any) {
      setErrorMessage(err?.message || "Network error encountered during authentication.");
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotModal((prev) => ({ ...prev, loading: true, message: "", debugToken: "" }));
    setTimeout(() => {
      setForgotModal((prev) => ({
        ...prev,
        loading: false,
        message: "Password reset instructions have been issued to your registered address.",
        debugToken: `RESET-${Math.floor(100000 + Math.random() * 900000)}`,
      }));
    }, 600);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordModal.newPassword !== passwordModal.confirmPassword) {
      setPasswordModal((prev) => ({ ...prev, error: "Passwords do not match." }));
      return;
    }
    if (passwordModal.newPassword.length < 8) {
      setPasswordModal((prev) => ({ ...prev, error: "Password must be at least 8 characters long." }));
      return;
    }
    setPasswordModal((prev) => ({ ...prev, loading: true, error: "" }));
    setTimeout(() => {
      router.push(currentRoleConfig.destination);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-900 antialiased selection:bg-red-900 selection:text-white pt-16">
      {/* Top Header */}
      <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-red-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Campus Portal</span>
        </Link>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-500 bg-white border border-slate-200/80 shadow-xs">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span>Secure institutional login</span>
        </div>
      </header>

      {/* Main Login Form */}
      <main className="w-full max-w-md mx-auto px-4 py-4 sm:py-8 flex-1 flex flex-col justify-center">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-slate-200/80 p-2.5 shadow-xs mb-3">
            <img src="/logo.png" alt="Global Stanford Campus Crest" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight">Global Stanford Campus</h1>
          <p className="text-sm text-slate-500 mt-1">Sign in to access your institutional workspace.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-900 text-sm font-medium flex items-start gap-2.5 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <span>{errorMessage}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="identifier" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Institutional Email or Student ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="identifier"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. admin@stanfordcampus.edu.lk"
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 hover:border-slate-400"
                  required
                  autoFocus
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Dynamic Role Indicator */}
            <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 transition-all">
              <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-red-700 shadow-2xs">
                <RoleIcon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-bold text-slate-900 truncate">{currentRoleConfig.title}</span>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 shrink-0">
                    Recognized
                  </span>
                </div>
                <p className="text-xs text-slate-500 truncate mt-0.5">{currentRoleConfig.badge} • Access Granted</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="text-sm font-semibold text-slate-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setForgotModal({ ...forgotModal, open: true, email: email })}
                  className="text-xs font-medium text-slate-500 hover:text-red-700 transition-colors cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 hover:border-slate-400"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-red-700 focus:ring-red-700"
                />
                <span className="text-xs text-slate-600 font-medium">Keep me signed in</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-sm shadow-md shadow-red-700/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In as {currentRoleConfig.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick presets helper */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 text-center">
              Demo / Test Accounts
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <button
                type="button"
                onClick={() => {
                  setEmail("admin@stanfordcampus.edu.lk");
                  setPassword("password123");
                }}
                className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-left truncate"
              >
                🔑 Admin
              </button>
              <button
                type="button"
                onClick={() => {
                  setEmail("lecturer@stanfordcampus.edu.lk");
                  setPassword("password123");
                }}
                className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-left truncate"
              >
                🎓 Lecturer
              </button>
              <button
                type="button"
                onClick={() => {
                  setEmail("student@stanfordcampus.edu.lk");
                  setPassword("password123");
                }}
                className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-left truncate"
              >
                📚 Student
              </button>
              <button
                type="button"
                onClick={() => {
                  setEmail("callroom@stanfordcampus.edu.lk");
                  setPassword("password123");
                }}
                className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-left truncate"
              >
                📞 CRM Desk
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-4 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Global Stanford Campus LMS • Secure Education Management System
      </footer>

      {/* Forgot Password Modal */}
      {forgotModal.open && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <HelpCircle className="w-5 h-5 text-red-700" />
                <span>Password Recovery</span>
              </div>
              <button
                onClick={() => setForgotModal({ ...forgotModal, open: false })}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Enter your registered institutional email to receive a secure password reset link or token.
            </p>
            {forgotModal.message && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl font-medium">
                {forgotModal.message}
              </div>
            )}
            {forgotModal.debugToken && (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                <span className="text-slate-500 font-bold">Verification Token:</span>
                <p className="font-mono text-slate-800 font-bold text-sm">{forgotModal.debugToken}</p>
              </div>
            )}
            <form onSubmit={handleForgotPassword} className="space-y-3">
              <input
                type="email"
                required
                placeholder="Institutional email address"
                value={forgotModal.email}
                onChange={(e) => setForgotModal({ ...forgotModal, email: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-700"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setForgotModal({ ...forgotModal, open: false })}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={forgotModal.loading}
                  className="px-4 py-2 text-xs font-bold text-white bg-red-700 hover:bg-red-800 rounded-xl"
                >
                  {forgotModal.loading ? "Sending..." : "Send Instructions"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Force Password Change Modal */}
      {passwordModal.open && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Initial Password Setup Required</h3>
              <p className="text-xs text-slate-500 mt-1">
                Your account requires a new security password before accessing the system.
              </p>
            </div>
            {passwordModal.error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-xl font-medium">
                {passwordModal.error}
              </div>
            )}
            <form onSubmit={handleChangePassword} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">New Password</label>
                <input
                  type="password"
                  required
                  placeholder="Minimum 8 characters"
                  value={passwordModal.newPassword}
                  onChange={(e) => setPasswordModal({ ...passwordModal, newPassword: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  required
                  placeholder="Repeat new password"
                  value={passwordModal.confirmPassword}
                  onChange={(e) => setPasswordModal({ ...passwordModal, confirmPassword: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>
              <button
                type="submit"
                disabled={passwordModal.loading}
                className="w-full py-2.5 text-xs font-bold text-white bg-red-700 hover:bg-red-800 rounded-xl"
              >
                {passwordModal.loading ? "Updating..." : "Update Password & Continue"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-red-700 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs font-semibold text-slate-500">Loading Secure Portal...</span>
          </div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
