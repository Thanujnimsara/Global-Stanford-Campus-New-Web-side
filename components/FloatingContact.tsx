"use client";

import React, { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  const [showCallTooltip, setShowCallTooltip] = useState(false);
  const [showWaTooltip, setShowWaTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Phone Call Floating Button */}
      <div className="relative flex items-center">
        {showCallTooltip && (
          <div className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap shadow-xl border border-slate-700 animate-in fade-in slide-in-from-right-2 duration-150">
            <span>Call Hotline: 0117 173 030</span>
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45 border-t border-r border-slate-700"></div>
          </div>
        )}
        <a
          href="tel:0117173030"
          onMouseEnter={() => setShowCallTooltip(true)}
          onMouseLeave={() => setShowCallTooltip(false)}
          aria-label="Call Admissions Hotline 0117 173 030"
          className="w-13 h-13 rounded-full bg-[#16366b] hover:bg-[#0f264d] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all border-2 border-white/20 group"
        >
          <Phone className="w-5 h-5 text-white transition-transform group-hover:rotate-12" />
        </a>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="relative flex items-center">
        {showWaTooltip && (
          <div className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0f264d] text-white text-xs font-bold whitespace-nowrap shadow-xl border border-white/10 animate-in fade-in slide-in-from-right-2 duration-150">
            <span>Chat on WhatsApp (+94 74 162 3123)</span>
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0f264d] rotate-45 border-t border-r border-white/10"></div>
          </div>
        )}
        <a
          href="https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setShowWaTooltip(true)}
          onMouseLeave={() => setShowWaTooltip(false)}
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all border-2 border-white group"
        >
          {/* Subtle Ping Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>
          <MessageCircle className="w-7 h-7 text-white transition-transform group-hover:scale-110" />
        </a>
      </div>
    </div>
  );
}
