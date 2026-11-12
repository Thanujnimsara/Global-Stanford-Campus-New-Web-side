"use client";

import React, { useState } from "react";

export default function FloatingContact() {
  const [showCallTooltip, setShowCallTooltip] = useState(false);
  const [showWaTooltip, setShowWaTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-3 select-none pointer-events-auto">
      {/* 1. Phone Call Floating Button */}
      <div className="relative flex items-center justify-center">
        {showCallTooltip && (
          <div className="absolute right-full mr-3.5 hidden sm:flex items-center">
            <div className="px-3.5 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md text-white text-xs shadow-2xl border border-white/15 whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-150">
              <div className="font-semibold text-slate-300 text-[10px] uppercase tracking-wider">Hotline</div>
              <div className="font-bold text-white text-xs tracking-wide">0117 173 030</div>
            </div>
            <div className="w-2 h-2 bg-slate-900/95 rotate-45 -ml-1 border-t border-r border-white/15"></div>
          </div>
        )}

        <a
          href="tel:0117173030"
          onMouseEnter={() => setShowCallTooltip(true)}
          onMouseLeave={() => setShowCallTooltip(false)}
          aria-label="Call Admissions Hotline 0117 173 030"
          className="group relative w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-gradient-to-tr from-[#09172f] via-[#0f264d] to-[#1a3d7c] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(15,38,77,0.35)] hover:shadow-[0_12px_28px_rgba(15,38,77,0.5)] hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 border-2 border-white/90"
        >
          {/* Subtle Phone Glow */}
          <span className="absolute inset-0 rounded-full bg-white/5 group-hover:bg-white/15 transition-colors" />

          {/* Solid Phone Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-5 sm:h-5 fill-white text-white drop-shadow-sm transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-1-1z" />
          </svg>
        </a>
      </div>

      {/* 2. WhatsApp Floating Button */}
      <div className="relative flex items-center justify-center">
        {showWaTooltip && (
          <div className="absolute right-full mr-3.5 hidden sm:flex items-center">
            <div className="px-3.5 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md text-white text-xs shadow-2xl border border-white/15 whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-150">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-400 text-[10px] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Admissions Online
              </div>
              <div className="font-bold text-white text-xs tracking-wide">+94 74 162 3123</div>
            </div>
            <div className="w-2 h-2 bg-slate-900/95 rotate-45 -ml-1 border-t border-r border-white/15"></div>
          </div>
        )}

        <a
          href="https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setShowWaTooltip(true)}
          onMouseLeave={() => setShowWaTooltip(false)}
          aria-label="Chat with Admissions on WhatsApp"
          className="group relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#2ce672] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_32px_rgba(37,211,102,0.6)] hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 border-2 border-white"
        >
          {/* Subtle Ambient Ping Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

          {/* Active Online Status Dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full shadow-sm" />

          {/* Official WhatsApp Logo SVG */}
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 sm:w-8 sm:h-8 fill-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
