import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#09172f] text-slate-300 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-4 border-sliit-orange">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Accreditation & Trust Strip */}
        <div className="pb-10 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto gap-6 text-center">
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-sliit-orange font-black text-sm tracking-wide">UGC RECOGNISED</span>
            <span className="text-[11px] text-slate-400">Degree Pathways in Sri Lanka</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-sliit-orange font-black text-sm tracking-wide">GAFM &amp; AFTA</span>
            <span className="text-[11px] text-slate-400">Global Executive Certifications</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-sliit-orange font-black text-sm tracking-wide">ESTABLISHED 2007</span>
            <span className="text-[11px] text-slate-400">19+ Years of Academic Heritage</span>
          </div>
        </div>

        {/* Main Institute Brand & Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-2">
          {/* Col 1: Institute Brand & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <Link className="flex items-center justify-center lg:justify-start gap-3.5 group inline-flex" href="/">
              <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-sliit-orange/50 bg-white p-1.5 shadow-md shrink-0">
                <img src="/logo.png" alt="Global Stanford Campus Crest" className="w-full h-full object-contain" />
              </div>
              <div className="leading-tight text-left">
                <span className="text-white font-black text-xl sm:text-2xl tracking-tight group-hover:text-sliit-orange transition-colors">
                  GLOBAL STANFORD <span className="text-sliit-orange">CAMPUS</span>
                </span>
                <p className="text-slate-400 font-bold text-xs tracking-wider uppercase mt-0.5">
                  Higher Education Since 2007 • UGC Recognised Pathways
                </p>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl font-normal">
              Global Stanford Campus is a premier higher educational institute in Sri Lanka, offering UGC-recognised degree pathways, 24 specialized diplomas, 1-year fast-track BBA top-up programmes, postgraduate degrees, and world-renowned GAFM USA and Asian FinTech Academy credentials.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sliit-orange" />
                UGC Degree Pathways
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sliit-orange" />
                Global University Articulations
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sliit-orange" />
                Chartered Executive Credentials
              </span>
            </div>
          </div>

          {/* Col 2: High-Clarity Contact Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-xs border border-white/10 rounded-3xl p-6 sm:p-7 space-y-4 shadow-lg text-left">
            <h4 className="text-white font-black text-sm uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-sliit-orange"></span>
              Campus Inquiries &amp; Admissions
            </h4>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-sliit-orange/15 border border-sliit-orange/30 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-sliit-orange" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Head Office Campus</p>
                <p className="text-xs sm:text-[13px] text-white font-medium mt-0.5 leading-snug">
                  No 255, 3rd Floor, Kandy Road, Dalugama, Kelaniya, Sri Lanka
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-sliit-orange/15 border border-sliit-orange/30 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4 text-sliit-orange" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Admissions Hotlines</p>
                <p className="text-xs sm:text-[13px] text-white font-medium mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <a href="tel:+94774623123" className="hover:text-sliit-orange transition-colors">+94 77 462 3123</a>
                  <span className="text-slate-500">•</span>
                  <a href="tel:+94114455155" className="hover:text-sliit-orange transition-colors">+94 11 445 5155</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-sliit-orange/15 border border-sliit-orange/30 flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-4 h-4 text-sliit-orange" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Address</p>
                <a
                  href="mailto:info@globalstanfordcampus.com"
                  className="text-xs sm:text-[13px] text-white hover:text-sliit-orange transition-colors font-medium mt-0.5 block"
                >
                  info@globalstanfordcampus.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Global Stanford Campus. All rights reserved. Recognized Higher Educational Institute.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5 font-semibold text-slate-300">
            <span className="text-slate-300 font-medium">
              Created by the IT Team of the Global Group
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-sliit-orange transition-colors">
              Privacy Policy (PDPA)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
