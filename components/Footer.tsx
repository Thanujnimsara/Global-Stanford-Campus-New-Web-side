import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#09172f] text-slate-300 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-4 border-sliit-orange">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Accreditation & Trust Strip */}
        <div className="pb-10 border-b border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-sliit-orange font-black text-sm tracking-wide">UGC RECOGNISED</span>
            <span className="text-[11px] text-slate-400">Degree Pathways in Sri Lanka</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-sliit-orange font-black text-sm tracking-wide">TVEC REGISTERED</span>
            <span className="text-[11px] text-slate-400">Institutional Reg: P01/0819</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-sliit-orange font-black text-sm tracking-wide">GAFM &amp; AFTA</span>
            <span className="text-[11px] text-slate-400">Global Executive Certifications</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-sliit-orange font-black text-sm tracking-wide">TRIPLE ISO</span>
            <span className="text-[11px] text-slate-400">ISO 21001 • 29993 • 9001</span>
          </div>
        </div>

        {/* 4 Column Main Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: About Institute */}
          <div className="lg:col-span-2 space-y-5">
            <Link className="flex items-center gap-3 group inline-flex" href="/">
              <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-sliit-orange/40 bg-white p-1">
                <img src="/logo.png" alt="GSC Crest" className="w-full h-full object-contain" />
              </div>
              <div className="leading-tight">
                <span className="text-white font-black text-lg tracking-tight group-hover:text-sliit-orange transition-colors">
                  GLOBAL STANFORD <span className="text-sliit-orange">CAMPUS</span>
                </span>
                <p className="text-slate-400 font-bold text-[10px] tracking-wider uppercase">
                  Higher Education Since 2007 • UGC Degree Pathways
                </p>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Global Stanford Campus is a premier higher educational institute in Sri Lanka, offering UGC-recognised degree pathways, 24 specialized diplomas, 1-year fast-track BBA top-up programmes, postgraduate degrees, and world-renowned GAFM USA and Asian FinTech Academy credentials.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sliit-orange shrink-0 mt-0.5" />
                <span>Head Office: No 255, 3rd Floor, Kandy Road, Dalugama, Kelaniya, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sliit-orange shrink-0" />
                <span>0117 173 030 / +94 11 766 2626 / +94 77 107 0711</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sliit-orange shrink-0" />
                <a href="mailto:privacy@globalstanfordcampus.com" className="hover:text-sliit-orange transition-colors">
                  privacy@globalstanfordcampus.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Academic Programmes */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sliit-orange"></span>
              Academic Catalog
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link className="hover:text-sliit-orange transition-colors" href="/programmes#bachelors">
                  1-Year BBA Top-Up (120 Cr)
                </Link>
              </li>
              <li>
                <Link className="hover:text-sliit-orange transition-colors" href="/programmes#diplomas">
                  24 Diploma Programmes (30 Cr)
                </Link>
              </li>
              <li>
                <Link className="hover:text-sliit-orange transition-colors" href="/programmes#higher-diplomas">
                  8 Higher Diplomas (60 Cr)
                </Link>
              </li>
              <li>
                <Link className="hover:text-sliit-orange transition-colors" href="/programmes#postgraduate">
                  Master of Education (M.Ed)
                </Link>
              </li>
              <li>
                <Link className="hover:text-sliit-orange transition-colors" href="/programmes#postgraduate">
                  MBA (Banking &amp; Management)
                </Link>
              </li>
              <li>
                <Link className="hover:text-sliit-orange transition-colors" href="/programmes#doctorates">
                  Doctor of Philosophy (PhD)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Professional Certifications */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sliit-orange"></span>
              FinTech &amp; GAFM
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link className="hover:text-sliit-orange transition-colors" href="/certifications#fintech">
                  Asian FinTech Academy (AFTA)
                </Link>
              </li>
              <li>
                <Link className="hover:text-sliit-orange transition-colors" href="/certifications#fintech">
                  HKU FinTech Certification
                </Link>
              </li>
              <li>
                <Link className="hover:text-sliit-orange transition-colors" href="/certifications#fintech">
                  Hilton Executive Cohorts
                </Link>
              </li>
              <li>
                <Link className="hover:text-sliit-orange transition-colors" href="/certifications#gafm">
                  GAFM USA Board Certifications
                </Link>
              </li>
              <li>
                <Link className="hover:text-sliit-orange transition-colors" href="/certifications#rpl">
                  Prior Learning (RPL) Evaluation
                </Link>
              </li>
              <li>
                <Link className="hover:text-sliit-orange transition-colors" href="/certifications#gafm">
                  Triple ISO Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Network Hotlines */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sliit-orange"></span>
              Campuses Hotline
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-slate-300 font-semibold">Kelaniya (Main):</span>
                <a href="tel:0117173030" className="text-sliit-orange hover:underline font-mono">0117 173 030</a>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-slate-300 font-semibold">Kandy Branch:</span>
                <a href="tel:0812121821" className="text-sliit-orange hover:underline font-mono">0812 121 821</a>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-slate-300 font-semibold">Matara Branch:</span>
                <a href="tel:0417655556" className="text-sliit-orange hover:underline font-mono">041 765 5556</a>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-slate-300 font-semibold">Badulla Branch:</span>
                <a href="tel:0744124771" className="text-sliit-orange hover:underline font-mono">0744 124 771</a>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-slate-300 font-semibold">Ampara Branch:</span>
                <a href="tel:0744124774" className="text-sliit-orange hover:underline font-mono">0744 124 774</a>
              </li>
              <li className="flex justify-between items-center py-1">
                <span className="text-slate-300 font-semibold">Jaffna Branch:</span>
                <a href="tel:0744124772" className="text-sliit-orange hover:underline font-mono">0744 124 772</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Global Stanford Campus. All rights reserved. Recognized Higher Educational Institute.
          </p>

          <div className="flex flex-wrap items-center gap-5 font-semibold text-slate-300">
            <Link href="/privacy" className="hover:text-sliit-orange transition-colors">
              Privacy Policy (PDPA)
            </Link>
            <Link href="/convocation24" className="hover:text-sliit-orange transition-colors">
              Convocation 2024
            </Link>
            <Link href="/convocation25" className="hover:text-sliit-orange transition-colors">
              Convocation 2025
            </Link>
            <Link href="/about" className="hover:text-sliit-orange transition-colors">
              Accreditations
            </Link>
            <Link href="/branches" className="hover:text-sliit-orange transition-colors">
              Campus Locations
            </Link>
            <a
              href="https://wa.me/94741623123"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all font-bold"
            >
              <Phone className="w-3 h-3" />
              WhatsApp Admissions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
