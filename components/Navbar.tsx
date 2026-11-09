"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [certDropdownOpen, setCertDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-slate-950 text-slate-300 text-[10px] py-1 px-4 sm:px-8 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="font-semibold tracking-wide text-slate-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            Admissions Open for 2026/2027 Academic Year • Island-wide Learning Centres • UGC Recognized Degrees
          </p>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Call: 0117 173 030 / 0744 124 772</span>
            <span>•</span>
            <a
              href="https://wa.me/94741623123"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 font-bold hover:underline"
            >
              WhatsApp: +94 74 162 3123
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="transition-all duration-300 bg-white/90 backdrop-blur-sm border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link className="flex items-center gap-2.5 group cursor-pointer" href="/">
            <div className="w-8 h-8 rounded-lg overflow-hidden ring-2 ring-red-600/30 group-hover:ring-red-600 transition-all shadow-xs bg-white p-0.5">
              <img src="/logo.png" alt="GSC Crest" className="w-full h-full object-contain" />
            </div>
            <div className="leading-tight">
              <p className="text-slate-900 font-black text-sm tracking-tight group-hover:text-red-700 transition-colors">
                Global Stanford <span className="text-red-700">CAMPUS</span>
              </p>
              <p className="text-slate-500 font-bold text-[9px] tracking-wider uppercase">
                Higher Ed Since 2007 • UGC Recognized
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              className="px-2.5 py-1.5 text-xs rounded-lg transition-all font-bold cursor-pointer text-slate-800 hover:text-red-700 hover:bg-red-50/70"
              href="/"
            >
              Home
            </Link>
            <Link
              className="px-2.5 py-1.5 text-xs rounded-lg transition-all font-bold cursor-pointer text-slate-800 hover:text-red-700 hover:bg-red-50/70"
              href="/about"
            >
              About Us
            </Link>

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <Link
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs rounded-lg transition-all font-bold cursor-pointer text-slate-800 hover:text-red-700 hover:bg-red-50/70"
                href="/programmes"
              >
                <span>Academic Programs</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </Link>
              {programsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/programmes#diplomas"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    24 Diploma Programs (30 Cr)
                  </Link>
                  <Link
                    href="/programmes#higher-diplomas"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    8 Higher Diplomas (60 Cr)
                  </Link>
                  <Link
                    href="/programmes#bachelors"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    1-Year Fast-Track BBA Top-Up
                  </Link>
                  <Link
                    href="/programmes#postgraduate"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Postgraduate (M.Ed &amp; MBA)
                  </Link>
                  <Link
                    href="/programmes#doctorates"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Doctor of Philosophy (PhD)
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
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs rounded-lg transition-all font-bold cursor-pointer text-slate-800 hover:text-red-700 hover:bg-red-50/70"
                href="/certifications"
              >
                <span>Certifications</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </Link>
              {certDropdownOpen && (
                <div className="absolute top-full left-0 w-60 bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/certifications#fintech"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Asian FinTech Academy (AFTA)
                  </Link>
                  <Link
                    href="/certifications#gafm"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    GAFM Board Certifications
                  </Link>
                  <Link
                    href="/certifications#rpl"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Prior Learning (RPL) Evaluation
                  </Link>
                </div>
              )}
            </div>

            <Link
              className="px-2.5 py-1.5 text-xs rounded-lg transition-all font-bold cursor-pointer text-slate-800 hover:text-red-700 hover:bg-red-50/70"
              href="/faculty"
            >
              Academic Staff
            </Link>
            <Link
              className="px-2.5 py-1.5 text-xs rounded-lg transition-all font-bold cursor-pointer text-slate-800 hover:text-red-700 hover:bg-red-50/70"
              href="/branches"
            >
              Branches
            </Link>
            <Link
              className="px-2.5 py-1.5 text-xs rounded-lg transition-all font-bold cursor-pointer text-slate-800 hover:text-red-700 hover:bg-red-50/70"
              href="/#faq"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://wa.me/94741623123"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 text-[11px] font-bold text-emerald-700 border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>WhatsApp CV</span>
            </a>
            <Link
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white text-[11px] font-extrabold shadow-md shadow-red-700/25 transition-all hover:scale-[1.02] flex items-center gap-1.5"
              href="/login"
            >
              <span>Portal Login</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-red-700 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-red-50 rounded-lg"
          >
            Home
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/about"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-red-50 rounded-lg"
          >
            About Us
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/programmes"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-red-50 rounded-lg"
          >
            Academic Programs
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/certifications"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-red-50 rounded-lg"
          >
            Certifications (AFTA &amp; GAFM)
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/faculty"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-red-50 rounded-lg"
          >
            Academic Staff
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/branches"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-red-50 rounded-lg"
          >
            Branches Network
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/#faq"
            className="block px-3 py-2 text-sm font-bold text-slate-800 hover:bg-red-50 rounded-lg"
          >
            FAQ
          </Link>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/94741623123"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2 text-xs font-bold text-emerald-700 border border-emerald-300 rounded-lg bg-emerald-50"
            >
              WhatsApp: +94 74 162 3123
            </a>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/login"
              className="w-full text-center py-2 text-xs font-bold text-white bg-red-700 rounded-lg shadow-md"
            >
              Portal Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

