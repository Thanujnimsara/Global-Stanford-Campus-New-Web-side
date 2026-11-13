import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  Phone,
  Building,
  GraduationCap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 pt-20">
      {/* Header Banner */}
      <section className="bg-[#0f264d] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-sliit-orange">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link href="/" className="hover:text-sliit-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-sliit-orange">About Us</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Institutional Profile &amp; Heritage
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            Established with academic roots dating back to 2007, Global Stanford Campus is dedicated to empowering leaders through globally recognized education, research, and professional excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Section 1: Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sliit-orange/10 text-sliit-orange flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Our Vision</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              To be the benchmark private higher education institution in South Asia, empowering transformative thinkers, ethical business leaders, and technologically proficient innovators capable of competing on the global stage.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sliit-navy-50 text-sliit-navy flex items-center justify-center">
              <Target className="w-6 h-6 text-sliit-navy" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Our Mission</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              To deliver affordable, high-quality, UGC-recognised degree pathways, professional diplomas, and executive certifications through state-of-the-art learning infrastructure, distinguished faculty, and student-centered pedagogy.
            </p>
          </div>
        </div>

        {/* Section 2: Core Accreditations & Approvals */}
        <div className="bg-[#112850] text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">Quality Assurance</span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Recognitions &amp; Quality Accreditations
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              We operate under rigorous academic standards and globally articulated higher educational frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-sliit-orange mx-auto" />
              <h4 className="font-bold text-sm text-white">UGC Recognised</h4>
              <p className="text-xs text-slate-300">
                All degree pathways articulated with UGC-approved universities.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-2">
              <Building className="w-8 h-8 text-sliit-orange mx-auto" />
              <h4 className="font-bold text-sm text-white">Global University Pathways</h4>
              <p className="text-xs text-slate-300">
                Direct credit transfers and degree completions through recognized foreign institutions.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-2">
              <GraduationCap className="w-8 h-8 text-sliit-orange mx-auto" />
              <h4 className="font-bold text-sm text-white">GAFM &amp; AFTA</h4>
              <p className="text-xs text-slate-300">
                Official accreditation and examination center for GAFM USA and Asian FinTech Academy.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Campus Heritage Timeline */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">Our Journey</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              19+ Years of Academic Heritage
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card space-y-2">
              <span className="text-2xl font-black text-sliit-orange">2007</span>
              <h4 className="font-bold text-sm text-slate-900">Foundational Roots</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Commenced vocational training, language skills, and foundational professional education in Kelaniya.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card space-y-2">
              <span className="text-2xl font-black text-sliit-orange">2018</span>
              <h4 className="font-bold text-sm text-slate-900">Campus Expansion</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Formally incorporated as Global Stanford Campus with expanded diploma faculties and higher education pathways.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card space-y-2">
              <span className="text-2xl font-black text-sliit-orange">2021</span>
              <h4 className="font-bold text-sm text-slate-900">Island-wide Network</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Established regional learning centres in Kandy, Matara, Badulla, Ampara, and Jaffna.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card space-y-2">
              <span className="text-2xl font-black text-sliit-orange">Today</span>
              <h4 className="font-bold text-sm text-slate-900">Over 4,500 Graduates</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Annual convocations at BMICH Colombo, offering undergraduate degrees, top-up pathways, and PhD research.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden shadow-card h-72">
            <img
              src="/images/gsc_convocation_bmich_group.jpeg"
              alt="Graduation Ceremony"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card h-72">
            <img
              src="/images/gsc_smart_classroom.jpeg"
              alt="Smart Classroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
