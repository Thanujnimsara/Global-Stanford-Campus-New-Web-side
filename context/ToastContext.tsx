"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { AlertCircle, CheckCircle2, Info, LogIn, LogOut, X } from "lucide-react";

export interface ToastItem {
  id: string;
  title: string;
  message: string;
  type: "success" | "error" | "info" | "login" | "logout";
}

interface ToastContextType {
  toast: (title: string, message: string, type?: ToastItem["type"]) => void;
  toastSuccess: (title: string, message: string) => void;
  toastError: (title: string, message: string) => void;
  toastInfo: (title: string, message: string) => void;
  toastLogout: (message?: string) => void;
  toastLogin: (name: string, role: string) => void;
  flashToast: (title: string, message: string, type?: ToastItem["type"]) => void;
}

const ToastContext = createContext<ToastContextType>({
  toast: () => {},
  toastSuccess: () => {},
  toastError: () => {},
  toastInfo: () => {},
  toastLogout: () => {},
  toastLogin: () => {},
  flashToast: () => {},
});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (title: string, message: string, type: ToastItem["type"] = "success") => {
      const id = `${Date.now()}-${Math.random()}`;
      setToasts((prev) => [...prev.slice(-2), { id, title, message, type }]);
      setTimeout(() => {
        removeToast(id);
      }, 4000);
    },
    [removeToast]
  );

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("gsc_flash_toast");
      if (stored) {
        sessionStorage.removeItem("gsc_flash_toast");
        const parsed = JSON.parse(stored);
        addToast(parsed.title, parsed.message, parsed.type);
      }
    } catch {}
  }, [addToast]);

  const flashToast = useCallback((title: string, message: string, type: ToastItem["type"] = "success") => {
    try {
      sessionStorage.setItem("gsc_flash_toast", JSON.stringify({ title, message, type }));
    } catch {}
  }, []);

  const toastSuccess = useCallback((title: string, message: string) => addToast(title, message, "success"), [addToast]);
  const toastError = useCallback((title: string, message: string) => addToast(title, message, "error"), [addToast]);
  const toastInfo = useCallback((title: string, message: string) => addToast(title, message, "info"), [addToast]);
  const toastLogout = useCallback(
    (message: string = "You have safely ended your institutional session.") => {
      addToast("Logged out", message, "logout");
    },
    [addToast]
  );
  const toastLogin = useCallback(
    (name: string, role: string) => {
      addToast(`Signed in as ${name}`, `Access granted with ${role} privileges`, "login");
    },
    [addToast]
  );

  return (
    <ToastContext.Provider
      value={{
        toast: addToast,
        toastSuccess,
        toastError,
        toastInfo,
        toastLogout,
        toastLogin,
        flashToast,
      }}
    >
      {children}
      <div
        role="region"
        aria-label="Notifications"
        className="fixed bottom-5 right-5 z-[999999] flex flex-col gap-2.5 max-w-sm pointer-events-none"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto p-4 rounded-xl border shadow-lg backdrop-blur-md flex items-start gap-3 transition-all animate-in slide-in-from-bottom-5 duration-200 ${
              t.type === "error"
                ? "bg-red-50 border-red-200 text-red-900"
                : t.type === "login" || t.type === "success"
                ? "bg-slate-900 border-slate-800 text-white shadow-slate-900/40"
                : "bg-white border-slate-200 text-slate-800"
            }`}
          >
            {t.type === "error" && <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />}
            {t.type === "success" && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
            {t.type === "login" && <LogIn className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
            {t.type === "logout" && <LogOut className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />}
            {t.type === "info" && <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold leading-tight">{t.title}</p>
              <p className="text-[11px] opacity-80 mt-0.5 leading-snug">{t.message}</p>
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-slate-400 hover:text-slate-600 transition-colors shrink-0"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

