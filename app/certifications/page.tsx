import React from "react";
import Link from "next/link";
import { Award, CheckCircle2, ShieldCheck, ArrowRight, ExternalLink, Calendar, MapPin } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 pt-20">
      {/* Header Banner */}
      <section className="bg-[#0f264d] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-sliit-orange">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link href="/" className="hover:text-sliit-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-sliit-orange">Professional Certifications</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Asian FinTech Academy (AFTA) &amp; GAFM USA
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            World-class chartered certifications, executive masterclasses at luxury venues like Hilton Colombo, and global board qualifications accredited under Triple ISO standards.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* SECTION 1: AFTA */}
        <div id="fintech" className="space-y-8 scroll-mt-24">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">Cutting-Edge Financial Tech</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Asian FinTech Academy (AFTA)
              </h2>
            </div>
            <span className="text-xs font-bold text-sliit-navy bg-sliit-navy-50 px-3 py-1 rounded-full">
              Hong Kong University (HKU) Aligned
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                The Asian FinTech Academy (AFTA) at Global Stanford Campus is Sri Lanka&apos;s leading executive body delivering advanced technology education in digital assets, open banking, decentralized finance (DeFi), and AI-driven underwriting.
              </p>
              <p>
                Curricula are modeled on prestigious coursework from the University of Hong Kong (HKU), providing graduates with global credential parity recognized across Singapore, Dubai, London, and Colombo.
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center gap-2 text-slate-800 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Executive Cohorts hosted at Hilton Colombo &amp; Grand Venues</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Exclusive Industry Guest Lecturers from Banking &amp; RegTech</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dual Certification with Global Verification IDs</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20register%20for%20the%20AFTA%20FinTech%20Certification."
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-xs shadow-md transition-all"
                >
                  Enroll in Next FinTech Cohort
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200 h-80">
              <img
                src="/images/afta_fintech_banner.jpeg"
                alt="AFTA FinTech Banner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: GAFM USA & TRIPLE ISO */}
        <div id="gafm" className="space-y-8 scroll-mt-24 pt-8">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">Chartered Global Credentials</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                GAFM USA Board Certifications
              </h2>
            </div>
            <span className="text-xs font-bold text-sliit-orange bg-sliit-orange-50 px-3 py-1 rounded-full">
              Triple ISO Certified Partner
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200 h-80">
              <img
                src="/images/gafm_logo_banner.jpeg"
                alt="GAFM Board Banner"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                The Global Academy of Finance and Management (GAFM USA) is an internationally recognized accreditation council operating under ISO 21001 (Educational Organization Management Systems), ISO 29993, and ISO 9001 quality standards.
              </p>
              <p>
                Professionals across Sri Lanka can obtain chartered designations such as Chartered Financial Manager (CFM), Master Financial Planner (MFP), and Certified Risk Analyst (CRA) directly recognized in over 150 countries.
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center gap-2 text-slate-800 font-bold">
                  <ShieldCheck className="w-4 h-4 text-sliit-navy shrink-0" />
                  <span>Direct Membership &amp; Post-Nominal Designations</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-bold">
                  <ShieldCheck className="w-4 h-4 text-sliit-navy shrink-0" />
                  <span>Annual Global Awarding Ceremonies in Colombo</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-bold">
                  <ShieldCheck className="w-4 h-4 text-sliit-navy shrink-0" />
                  <span>Strict Alignment with International Financial Ethics</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20apply%20for%20GAFM%20Board%20Certification."
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-sliit-navy hover:bg-[#0f264d] text-white font-bold text-xs shadow-md transition-all"
                >
                  Apply for GAFM Board Certification
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: RECOGNISED PRIOR LEARNING (RPL) */}
        <div id="rpl" className="bg-[#112850] text-white rounded-3xl p-8 sm:p-12 space-y-6 scroll-mt-24">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">
              Executive Fast-Track
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Recognised Prior Learning (RPL) Evaluation
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Have you worked in managerial, executive, or technical positions for 3 to 10+ years without a formal degree? Through our globally validated RPL framework, your work experience, prior training, and portfolios are evaluated for direct credit exemption towards Bachelor&apos;s or Master&apos;s degrees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-1.5">
              <span className="text-xs font-black text-sliit-orange uppercase">Step 01</span>
              <h4 className="font-bold text-sm text-white">CV &amp; Portfolio Submission</h4>
              <p className="text-xs text-slate-300">Submit your comprehensive resume and professional portfolio for academic audit.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-1.5">
              <span className="text-xs font-black text-sliit-orange uppercase">Step 02</span>
              <h4 className="font-bold text-sm text-white">Credit Exemption Audit</h4>
              <p className="text-xs text-slate-300">Our academic board assesses your competencies against international credit matrices.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-1.5">
              <span className="text-xs font-black text-sliit-orange uppercase">Step 03</span>
              <h4 className="font-bold text-sm text-white">Fast-Track Graduation</h4>
              <p className="text-xs text-slate-300">Enroll directly into the final capstone or top-up modules to complete your degree.</p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20an%20RPL%20Evaluation%20for%20my%20work%20experience."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              <span>Submit CV for RPL Free Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* SECTION 4: CERTIFICATE SAMPLE SHOWCASE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold text-base text-slate-900">Sample AFTA HKU FinTech Certificate</h3>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-card">
              <img
                src="/images/afta_certificate_sample.jpeg"
                alt="AFTA Certificate Sample"
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base text-slate-900">Sample GAFM USA Board Charter Certificate</h3>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-card">
              <img
                src="/images/gafm_certificate_sample.jpeg"
                alt="GAFM Certificate Sample"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
