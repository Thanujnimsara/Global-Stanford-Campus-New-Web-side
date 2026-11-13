"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Phone,
  ArrowRight,
  Menu,
  X,
  GraduationCap,
  Award,
  Users,
  MapPin,
  HelpCircle,
  LogIn,
  Search,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [certDropdownOpen, setCertDropdownOpen] = useState(false);
  const [convoDropdownOpen, setConvoDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* SLIIT Style Top Utility Bar */}
      <div className="bg-[#0f264d] text-slate-200 text-[11px] py-1.5 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-[1460px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sliit-orange/20 text-sliit-orange font-bold text-[10px] tracking-wide border border-sliit-orange/30">
              <span className="w-1.5 h-1.5 rounded-full bg-sliit-orange animate-ping"></span>
              2026/2027 INTAKES OPEN
            </span>
            <span className="text-slate-300 text-xs hidden lg:inline">
              UGC Recognised Degree Pathways • Higher Education Since 2007
            </span>
          </div>

          <div className="flex items-center gap-3 xl:gap-4 text-slate-300 font-medium whitespace-nowrap">
            <a
              href="tel:0117173030"
              className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-sliit-orange shrink-0" />
              <span>Hotline: 0117 173 030 / 0744 124 772</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="https://wa.me/94741623123"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              <span>WhatsApp: +94 74 162 3123</span>
            </a>
            <span className="text-white/20">|</span>
            <Link
              href="/login"
              className="text-slate-300 hover:text-sliit-orange transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              <LogIn className="w-3 h-3 shrink-0" />
              <span>LMS Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-sliit-navy/5 border-b border-slate-200"
            : "bg-white border-b border-slate-100 shadow-xs"
        }`}
      >
        <div className="max-w-[1460px] mx-auto px-3 sm:px-4 lg:px-5 xl:px-6 h-20 flex items-center justify-between gap-2 xl:gap-3">
          {/* Logo & Institute Brand */}
          <Link className="flex items-center gap-2 xl:gap-2.5 shrink-0 group cursor-pointer" href="/">
            <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-xl overflow-hidden ring-2 ring-sliit-navy/15 group-hover:ring-sliit-orange transition-all shadow-xs bg-white p-1 shrink-0">
              <img src="/logo.png" alt="GSC Crest" className="w-full h-full object-contain" />
            </div>
            <div className="leading-tight shrink-0">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-[#16366b] font-black text-sm sm:text-base xl:text-lg tracking-tight group-hover:text-sliit-orange transition-colors">
                  GLOBAL STANFORD
                </span>
                <span className="text-sliit-orange font-black text-sm sm:text-base xl:text-lg tracking-tight">
                  CAMPUS
                </span>
              </div>
              <p className="text-slate-500 font-semibold text-[9px] xl:text-[10px] tracking-wider uppercase whitespace-nowrap hidden sm:block lg:hidden 2xl:block">
                Premier Higher Education • Roots Since 2007
              </p>
              <p className="text-slate-500 font-semibold text-[8px] tracking-wider uppercase whitespace-nowrap hidden xl:block 2xl:hidden">
                Roots Since 2007
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 shrink">
            <Link
              className={`px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-xs 2xl:text-[13px] font-bold tracking-tight xl:tracking-wide uppercase whitespace-nowrap rounded-lg transition-all ${
                pathname === "/"
                  ? "text-sliit-orange bg-orange-50/80 font-extrabold border-b-2 border-sliit-orange"
                  : "text-slate-700 hover:text-sliit-orange hover:bg-slate-50"
              }`}
              href="/"
            >
              HOME
            </Link>

            <Link
              className={`px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-xs 2xl:text-[13px] font-bold tracking-tight xl:tracking-wide uppercase whitespace-nowrap rounded-lg transition-all ${
                pathname === "/about"
                  ? "text-sliit-orange bg-orange-50/80 font-extrabold border-b-2 border-sliit-orange"
                  : "text-slate-700 hover:text-sliit-orange hover:bg-slate-50"
              }`}
              href="/about"
            >
              ABOUT US
            </Link>

            {/* Academic Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <Link
                className={`inline-flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-xs 2xl:text-[13px] font-bold tracking-tight xl:tracking-wide uppercase whitespace-nowrap rounded-lg transition-all ${
                  pathname.startsWith("/programmes")
                    ? "text-sliit-orange bg-orange-50/80 font-extrabold border-b-2 border-sliit-orange"
                    : "text-slate-700 hover:text-sliit-orange hover:bg-slate-50"
                }`}
                href="/programmes"
              >
                <span className="whitespace-nowrap">
                  <span className="hidden 2xl:inline">ACADEMIC </span>PROGRAMMES
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                    programsDropdownOpen ? "rotate-180 text-sliit-orange" : "text-slate-400"
                  }`}
                />
              </Link>
              {programsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 mb-1 text-[10px] font-black uppercase tracking-wider text-sliit-orange">
                    Study at Global Stanford
                  </div>
                  <Link
                    href="/programmes#bachelors"
                    className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-slate-800 hover:text-sliit-navy hover:bg-sliit-navy-50 rounded-xl transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-sliit-orange shrink-0" />
                    <div>
                      <p className="font-bold">1-Year Fast-Track BBA Top-Up</p>
                      <p className="text-[10px] text-slate-500 font-normal">
                        Direct Degree Completion (120 Credits)
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/programmes#diplomas"
                    className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-slate-800 hover:text-sliit-navy hover:bg-sliit-navy-50 rounded-xl transition-colors"
                  >
                    <Award className="w-4 h-4 text-sliit-navy shrink-0" />
                    <div>
                      <p className="font-bold">24 Diploma Programmes (30 Cr)</p>
                      <p className="text-[10px] text-slate-500 font-normal">
                        AI, Management, Economics, IT, Psychology, etc.
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/programmes#higher-diplomas"
                    className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-slate-800 hover:text-sliit-navy hover:bg-sliit-navy-50 rounded-xl transition-colors"
                  >
                    <Award className="w-4 h-4 text-sliit-navy shrink-0" />
                    <div>
                      <p className="font-bold">8 Higher Diplomas (60 Cr)</p>
                      <p className="text-[10px] text-slate-500 font-normal">
                        Advanced Professional Qualifications
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/programmes#postgraduate"
                    className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-slate-800 hover:text-sliit-navy hover:bg-sliit-navy-50 rounded-xl transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-sliit-orange shrink-0" />
                    <div>
                      <p className="font-bold">Postgraduate (M.Ed &amp; MBA)</p>
                      <p className="text-[10px] text-slate-500 font-normal">
                        Master of Education &amp; MBA Banking / Management
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/programmes#doctorates"
                    className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-slate-800 hover:text-sliit-navy hover:bg-sliit-navy-50 rounded-xl transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-sliit-navy shrink-0" />
                    <div>
                      <p className="font-bold">Doctor of Philosophy (PhD)</p>
                      <p className="text-[10px] text-slate-500 font-normal">
                        PhD in Management &amp; Education Research
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Certifications Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCertDropdownOpen(true)}
              onMouseLeave={() => setCertDropdownOpen(false)}
            >
              <Link
                className={`inline-flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-xs 2xl:text-[13px] font-bold tracking-tight xl:tracking-wide uppercase whitespace-nowrap rounded-lg transition-all ${
                  pathname.startsWith("/certifications")
                    ? "text-sliit-orange bg-orange-50/80 font-extrabold border-b-2 border-sliit-orange"
                    : "text-slate-700 hover:text-sliit-orange hover:bg-slate-50"
                }`}
                href="/certifications"
              >
                <span className="whitespace-nowrap">CERTIFICATIONS</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                    certDropdownOpen ? "rotate-180 text-sliit-orange" : "text-slate-400"
                  }`}
                />
              </Link>
              {certDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 mb-1 text-[10px] font-black uppercase tracking-wider text-sliit-orange">
                    Global Professional Bodies
                  </div>
                  <Link
                    href="/certifications#fintech"
                    className="block px-3 py-2 text-xs font-semibold text-slate-800 hover:text-sliit-navy hover:bg-sliit-navy-50 rounded-xl transition-colors"
                  >
                    <p className="font-bold">Asian FinTech Academy (AFTA)</p>
                    <p className="text-[10px] text-slate-500">
                      HKU Course &amp; Hilton Executive Cohorts
                    </p>
                  </Link>
                  <Link
                    href="/certifications#gafm"
                    className="block px-3 py-2 text-xs font-semibold text-slate-800 hover:text-sliit-navy hover:bg-sliit-navy-50 rounded-xl transition-colors"
                  >
                    <p className="font-bold">GAFM USA Board Certifications</p>
                    <p className="text-[10px] text-slate-500">
                      Globally Recognized Board Standards
                    </p>
                  </Link>
                  <Link
                    href="/certifications#rpl"
                    className="block px-3 py-2 text-xs font-semibold text-slate-800 hover:text-sliit-navy hover:bg-sliit-navy-50 rounded-xl transition-colors"
                  >
                    <p className="font-bold">Prior Learning (RPL) Evaluation</p>
                    <p className="text-[10px] text-slate-500">
                      Experience-Based Degree Progression
                    </p>
                  </Link>
                </div>
              )}
            </div>

            {/* Convocations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setConvoDropdownOpen(true)}
              onMouseLeave={() => setConvoDropdownOpen(false)}
            >
              <div
                className={`inline-flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-xs 2xl:text-[13px] font-bold tracking-tight xl:tracking-wide uppercase whitespace-nowrap rounded-lg transition-all cursor-pointer ${
                  pathname.startsWith("/convocation")
                    ? "text-sliit-orange bg-orange-50/80 font-extrabold border-b-2 border-sliit-orange"
                    : "text-slate-700 hover:text-sliit-orange hover:bg-slate-50"
                }`}
              >
                <span className="whitespace-nowrap">CONVOCATIONS</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                    convoDropdownOpen ? "rotate-180 text-sliit-orange" : "text-slate-400"
                  }`}
                />
              </div>
              {convoDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 mb-1 text-[10px] font-black uppercase tracking-wider text-sliit-orange">
                    Annual Ceremonies
                  </div>
                  <Link
                    href="/convocation24"
                    className="flex items-center gap-3 px-3.5 py-2.5 text-xs font-semibold text-slate-800 hover:text-rose-600 hover:bg-rose-50/80 rounded-xl transition-colors group"
                  >
                    <span className="text-base group-hover:scale-110 transition-transform shrink-0">🎓</span>
                    <div>
                      <p className="font-bold">Convocation 2024</p>
                      <p className="text-[10px] text-slate-500 font-normal">BMICH Ceremony &amp; Gallery</p>
                    </div>
                  </Link>
                  <Link
                    href="/convocation25"
                    className="flex items-center gap-3 px-3.5 py-2.5 text-xs font-semibold text-slate-800 hover:text-rose-600 hover:bg-rose-50/80 rounded-xl transition-colors group border-t border-slate-100 mt-1"
                  >
                    <span className="text-base group-hover:scale-110 transition-transform shrink-0">🎓</span>
                    <div>
                      <p className="font-bold">Convocation 2025</p>
                      <p className="text-[10px] text-slate-500 font-normal">1,200+ Conferred Graduates</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              className={`px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-xs 2xl:text-[13px] font-bold tracking-tight xl:tracking-wide uppercase whitespace-nowrap rounded-lg transition-all ${
                pathname === "/faculty"
                  ? "text-sliit-orange bg-orange-50/80 font-extrabold border-b-2 border-sliit-orange"
                  : "text-slate-700 hover:text-sliit-orange hover:bg-slate-50"
              }`}
              href="/faculty"
            >
              <span className="whitespace-nowrap">
                <span className="hidden 2xl:inline">LECTURER PANEL</span>
                <span className="2xl:hidden">FACULTY</span>
              </span>
            </Link>

            <Link
              className={`px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-xs 2xl:text-[13px] font-bold tracking-tight xl:tracking-wide uppercase whitespace-nowrap rounded-lg transition-all ${
                pathname === "/branches"
                  ? "text-sliit-orange bg-orange-50/80 font-extrabold border-b-2 border-sliit-orange"
                  : "text-slate-700 hover:text-sliit-orange hover:bg-slate-50"
              }`}
              href="/branches"
            >
              CAMPUSES
            </Link>
          </nav>

          {/* SLIIT Style High-Contrast CTA Button */}
          <div className="hidden lg:flex items-center shrink-0 pr-1 xl:pr-2">
            <a
              href="https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20apply%20for%20admissions."
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sliit-orange hover:bg-sliit-orange-hover text-white text-[11px] xl:text-xs font-black tracking-wider uppercase shadow-md shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span className="whitespace-nowrap">APPLY NOW</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-sliit-navy transition-colors rounded-lg hover:bg-slate-100"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-4 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-xl"
          >
            Home
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/about"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-xl"
          >
            About Us
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/programmes"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-xl"
          >
            Academic Programmes
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/certifications"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-xl"
          >
            Certifications (AFTA &amp; GAFM)
          </Link>

          {/* Mobile Convocations Group */}
          <div className="pt-2 pb-1 border-y border-slate-100 my-1 bg-slate-50/50 rounded-xl px-2">
            <p className="px-2 pt-1 text-[10px] font-black uppercase tracking-wider text-sliit-orange">Annual Convocations</p>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/convocation24"
              className="flex items-center gap-2 px-2 py-2 text-sm font-bold text-slate-800 hover:text-rose-600 rounded-lg"
            >
              <span>🎓</span>
              <span>Convocation 2024</span>
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/convocation25"
              className="flex items-center gap-2 px-2 py-2 text-sm font-bold text-slate-800 hover:text-rose-600 rounded-lg"
            >
              <span>🎓</span>
              <span>Convocation 2025</span>
            </Link>
          </div>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/faculty"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-xl"
          >
            Lecturer Panel
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/branches"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-xl"
          >
            Campuses &amp; Branches
          </Link>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20apply%20for%20admissions."
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 text-xs font-black text-white bg-sliit-orange rounded-xl shadow-md uppercase tracking-wider"
            >
              Apply for Admissions
            </a>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/login"
              className="w-full text-center py-2.5 text-xs font-bold text-slate-900 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center gap-1.5"
            >
              <LogIn className="w-4 h-4 text-sliit-orange" />
              <span>Student / Lecturer LMS Portal</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
