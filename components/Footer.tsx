import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#f0f4f8] border-t border-slate-200/80 pt-16 pb-10 px-4 sm:px-6 z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1: Institute Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link className="flex items-center gap-2.5 group" href="/">
              <div className="w-9 h-9 rounded-lg overflow-hidden ring-2 ring-red-600/30 group-hover:ring-red-600 transition-all shadow-xs bg-white p-0.5">
                <img src="/logo.png" alt="GSC Crest" className="w-full h-full object-contain" />
              </div>
              <div className="leading-tight">
                <p className="text-slate-900 font-black text-base tracking-tight group-hover:text-red-700 transition-colors">
                  Global Stanford <span className="text-red-700">CAMPUS</span>
                </p>
                <p className="text-slate-500 font-bold text-[9px] tracking-wider uppercase">
                  Higher Ed Since 2007 • UGC Recognized
                </p>
              </div>
            </Link>
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Global Stanford Campus is a premier private higher educational institute delivering UGC-recognized degree
              pathways, TVEC accredited professional diplomas, and world-class FinTech certifications under GAFM USA and
              Asian FinTech Academy.
            </p>
            <div className="space-y-1.5 text-xs text-slate-600 pt-1">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>0117 173 030 / +94 11 766 2626 / +94 77 107 0711</span>
              </p>
              <p className="flex items-start gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <a href="mailto:privacy@globalstanfordcampus.com" className="hover:text-red-700 transition-colors">
                  privacy@globalstanfordcampus.com
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold text-sm">Academic Programs</h4>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/programmes#diplomas">
                  24 Diploma Programs (30 Cr)
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/programmes#higher-diplomas">
                  8 Higher Diplomas (60 Cr)
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/programmes#bachelors">
                  BBA Degrees (120 Cr)
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/programmes#bachelors">
                  1-Year Top-Up Pathway
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/programmes#postgraduate">
                  Master of Education (M.Ed)
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/programmes#postgraduate">
                  MBA (Management &amp; Banking)
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/programmes#doctorates">
                  PhD in Education &amp; Mgt
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: FinTech & GAFM */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold text-sm">FinTech &amp; GAFM</h4>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/certifications#fintech">
                  Asian FinTech Academy (AFTA)
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/certifications#fintech">
                  HKU-Based FinTech Course
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/certifications#fintech">
                  Hilton Colombo Executive Cohorts
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/certifications#gafm">
                  GAFM Board Certifications
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/certifications#rpl">
                  Recognised Prior Learning (RPL)
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/certifications#gafm">
                  Triple ISO Framework
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/certifications#gafm">
                  Colombo Awarding Ceremonies
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Network */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold text-sm">Campus Network</h4>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/branches#western">
                  Kelaniya: 0117 173 030
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/branches#central">
                  Kandy: 0812 121 821
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/branches#southern">
                  Matara: 041 765 5556
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/branches#uva">
                  Badulla: 0744 124 771
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/branches#eastern">
                  Ampara: 0744 124 774
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-700 transition-colors" href="/branches#northern">
                  Jaffna: 0744 124 772
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © 2026 Global Stanford Campus. All rights reserved. Registered private higher-education institute in Sri Lanka.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-xs text-slate-500 font-medium">
            <Link
              className="hover:text-red-700 font-bold text-slate-700 transition-colors underline decoration-red-700/40"
              href="/privacy"
            >
              Privacy Policy (PDPA)
            </Link>
            <Link className="hover:text-red-700 transition-colors" href="/about">
              UGC Accreditation
            </Link>
            <Link className="hover:text-red-700 transition-colors" href="/certifications#gafm">
              Triple ISO 21001/29993/9001
            </Link>
            <Link className="hover:text-red-700 transition-colors" href="/branches">
              Branch Locations
            </Link>
            <a
              href="https://wa.me/94741623123"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-700 transition-colors font-bold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp Admissions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

