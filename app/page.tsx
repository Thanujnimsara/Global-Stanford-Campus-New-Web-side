"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Search,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Building,
  Laptop,
  Briefcase,
  HelpCircle,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"bachelors" | "diplomas" | "higher" | "postgrad" | "phd" | "fintech">("bachelors");
  const [searchLevel, setSearchLevel] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { number: "19+", label: "Years of Academic Roots", sub: "Est. 2007 in Sri Lanka" },
    { number: "4,500+", label: "Qualified Graduates", sub: "Across All Disciplines" },
    { number: "24+", label: "Diploma & Degree Streams", sub: "Undergraduate to PhD" },
    { number: "6", label: "Regional Campuses", sub: "Island-wide Network" },
    { number: "100%", label: "UGC Recognised Pathways", sub: "TVEC Registered Institute" },
  ];

  const bachelors = [
    {
      title: "BBA in Business Management (1-Year Fast-Track Top-Up)",
      credits: "120 Credits",
      duration: "1 Year Fast-Track (or 3-4 Yrs)",
      mode: "Blended (Online / Weekend)",
      desc: "Designed for diploma and higher diploma holders seeking direct final-year degree completion with UGC recognition.",
      inquiry: "1-Year Fast-Track Top-Up Degree",
    },
    {
      title: "BBA in Information Systems & Technology",
      credits: "120 Credits",
      duration: "1 Year Top-Up / 3 Years",
      mode: "Weekend / Digital Learning",
      desc: "Comprehensive curriculum combining enterprise software, database management, and executive computing.",
      inquiry: "BBA in Information Systems",
    },
    {
      title: "BBA in Human Resource Management",
      credits: "120 Credits",
      duration: "1 Year Top-Up / 3 Years",
      mode: "Blended Learning",
      desc: "Equipping aspiring leaders with strategic talent management, labour law, and organizational leadership skills.",
      inquiry: "BBA in HRM",
    },
    {
      title: "BBA in Economics & Global Finance",
      credits: "120 Credits",
      duration: "1 Year Top-Up / 3 Years",
      mode: "Blended Learning",
      desc: "Focus on corporate finance, international economics, financial modelling, and market dynamics.",
      inquiry: "BBA in Economics",
    },
  ];

  const diplomas = [
    { name: "Diploma in Artificial Intelligence (AI)", field: "Technology", duration: "6-12 Months", credits: "30 Credits" },
    { name: "Diploma in Cybersecurity & Network Defense", field: "Technology", duration: "6-12 Months", credits: "30 Credits" },
    { name: "Diploma in Blockchain & Web3 Technologies", field: "Technology", duration: "6-12 Months", credits: "30 Credits" },
    { name: "Diploma in Information Technology (IT)", field: "Technology", duration: "6-12 Months", credits: "30 Credits" },
    { name: "Diploma in Business Management", field: "Management", duration: "6-12 Months", credits: "30 Credits" },
    { name: "Diploma in Human Resource Management (HRM)", field: "Management", duration: "6-12 Months", credits: "30 Credits" },
    { name: "Diploma in Digital Marketing & E-Commerce", field: "Marketing", duration: "6-12 Months", credits: "30 Credits" },
    { name: "Diploma in Tourism & Hospitality Management", field: "Hospitality", duration: "6-12 Months", credits: "30 Credits" },
    { name: "Diploma in Logistics & Supply Chain Management", field: "Logistics", duration: "6-12 Months", credits: "30 Credits" },
    { name: "Diploma in Psychology & Counselling", field: "Healthcare", duration: "6-12 Months", credits: "30 Credits" },
    { name: "Diploma in Primary School Education & Teaching", field: "Education", duration: "6-12 Months", credits: "30 Credits" },
    { name: "Diploma in Professional English", field: "Languages", duration: "6-12 Months", credits: "30 Credits" },
  ];

  const higherDiplomas = [
    { title: "Higher Diploma in Business Administration", duration: "18 Months", credits: "60 Credits", path: "Leads to Final Year BBA" },
    { title: "Higher Diploma in Information Technology & Computing", duration: "18 Months", credits: "60 Credits", path: "Direct Software/IT Pathway" },
    { title: "Higher Diploma in Human Resource Leadership", duration: "18 Months", credits: "60 Credits", path: "Leads to Final Year BBA" },
    { title: "Higher Diploma in Logistics & Global Supply Chains", duration: "18 Months", credits: "60 Credits", path: "Industry-aligned accreditation" },
  ];

  const postgradPrograms = [
    {
      title: "Master of Education (M.Ed)",
      credits: "60 Credits",
      duration: "2 Years",
      desc: "Designed for education administrators, principals, and senior teachers aiming for academic leadership.",
      badge: "Postgraduate Degree",
    },
    {
      title: "Master of Business Administration (MBA) — Management",
      credits: "60 Credits",
      duration: "2 Years",
      desc: "Executive strategic management, international business, and leadership for corporate professionals.",
      badge: "Postgraduate Degree",
    },
    {
      title: "Master of Business Administration (MBA) — Banking & Finance",
      credits: "60 Credits",
      duration: "2 Years",
      desc: "Advanced financial management, risk analysis, and capital markets for banking sector executives.",
      badge: "Postgraduate Degree",
    },
    {
      title: "Postgraduate Diploma in Education Management",
      credits: "32 Credits",
      duration: "1 Year",
      desc: "Curriculum planning, pedagogical governance, and institutional management.",
      badge: "PG Diploma",
    },
  ];

  const doctoralPrograms = [
    {
      title: "Doctor of Philosophy (PhD) in Management",
      credits: "60 Credits",
      duration: "3 Years",
      desc: "Original research, thesis defense, and academic publication under internationally qualified supervisors.",
    },
    {
      title: "Doctor of Philosophy (PhD) in Education",
      credits: "60 Credits",
      duration: "3 Years",
      desc: "Rigorous educational research tackling educational leadership, curriculum development, and pedagogy.",
    },
  ];

  const fintechPrograms = [
    {
      title: "Asian FinTech Academy (AFTA) Executive Certification",
      partner: "HKU-Based Coursework & Global Curriculum",
      venue: "Hilton Colombo Executive Cohorts & Digital Sessions",
      desc: "Comprehensive modules covering blockchain, AI in finance, RegTech, payment systems, and digital currencies.",
    },
    {
      title: "GAFM USA Board Certifications & Fellowships",
      partner: "Global Academy of Finance & Management (USA)",
      venue: "Triple ISO 21001 / 29993 / 9001 Certified Framework",
      desc: "Internationally chartered certifications recognised across global financial institutions and multinational corporations.",
    },
    {
      title: "Recognised Prior Learning (RPL) Evaluation Pathway",
      partner: "Global Accreditation Board",
      venue: "Direct Assessment of Executive Work Experience",
      desc: "Evaluate your years of managerial or technical expertise to receive formal degree credits or certifications.",
    },
  ];

  const campuses = [
    { city: "Kelaniya", type: "Main Campus & Head Office", phone: "0117 173 030", mobile: "0744 124 772", addr: "No 255, 3rd Floor, Kandy Road, Dalugama" },
    { city: "Kandy", type: "Regional Centre (Central)", phone: "0812 121 821", mobile: "0744 124 773", addr: "Kandy City Center Area, Kandy" },
    { city: "Matara", type: "Regional Centre (Southern)", phone: "041 765 5556", mobile: "0744 124 780", addr: "Anagarika Dharmapala Mawatha, Matara" },
    { city: "Badulla", type: "Regional Centre (Uva)", phone: "0744 124 771", mobile: "0744 124 771", addr: "Lower King Street, Badulla" },
    { city: "Ampara", type: "Regional Centre (Eastern)", phone: "0744 124 774", mobile: "0744 124 774", addr: "Main Street, Ampara" },
    { city: "Jaffna", type: "Regional Centre (Northern)", phone: "0744 124 772", mobile: "0744 124 772", addr: "Hospital Road, Jaffna" },
  ];

  const faqs = [
    {
      q: "Are degrees from Global Stanford Campus recognized by UGC Sri Lanka?",
      a: "Yes. All Bachelor's degrees, BBA top-ups, MBA, and PhD programs offered through Global Stanford Campus are delivered via UGC-recognized partner universities and TVEC registered educational frameworks.",
    },
    {
      q: "What is the 1-Year Fast-Track BBA Top-Up Degree?",
      a: "The Top-Up pathway allows candidates holding an HND, Advanced Diploma, full professional qualification (CIMA, CIM, ABE), or relevant work experience to enter directly into the final year (120 Credits) and graduate in 12 months.",
    },
    {
      q: "Can I study while working full-time?",
      a: "Yes! All programmes feature flexible weekend batches (Saturday or Sunday) along with live interactive online lectures and 24/7 LMS access designed specifically for working executives and professionals.",
    },
    {
      q: "What certifications are provided by Asian FinTech Academy (AFTA) & GAFM?",
      a: "AFTA programs feature curriculum based on HKU (Hong Kong University) FinTech courses, with residential/executive sessions held at Hilton Colombo. GAFM USA board certifications operate under Triple ISO 21001/29993/9001 quality frameworks.",
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 pt-20">
      {/* ============================================================== */}
      {/* 1. SLIIT STYLE HERO BANNER & SEARCH WIDGET                     */}
      {/* ============================================================== */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#0f264d]">
        {/* Background Image with Deep Navy Gradient */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/gsc_convocation_bmich_group.jpeg"
            alt="Global Stanford Campus Convocation"
            className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1833] via-[#0f264d]/90 to-[#16366b]/80" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 w-full flex-1 flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-sliit-orange animate-pulse"></span>
              <span>UGC RECOGNISED PATHWAYS • TVEC REGISTERED • EST. 2007</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Excellence in Higher Education.{" "}
              <span className="text-sliit-orange block mt-2">
                A World of Opportunities.
              </span>
            </h1>

            {/* Concise Subtitle (No walls of text!) */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              Join thousands of successful graduates. Pursue UGC-recognized Bachelor’s degrees, 1-Year Fast-Track Top-Up pathways, 24 specialized diplomas, MBA, and PhD research across 6 island-wide learning centres.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#programmes-explorer"
                className="px-7 py-3.5 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-sliit-orange/30 transition-all hover:scale-[1.03] flex items-center gap-2"
              >
                <span>CHOOSE YOUR PROGRAMME</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20apply%20for%20admissions."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>
        </div>

        {/* SLIIT Style Quick Programme Finder Bar */}
        <div className="w-full bg-white/95 backdrop-blur-md border-t border-white/20 py-5 px-4 sm:px-6 lg:px-8 shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 items-center">
              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                  Degree Level
                </label>
                <select
                  value={searchLevel}
                  onChange={(e) => setSearchLevel(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sliit-orange"
                >
                  <option value="all">All Study Levels</option>
                  <option value="bachelors">1-Year BBA Top-Up / Bachelors</option>
                  <option value="diplomas">24 Specialized Diplomas</option>
                  <option value="higher">Higher Diplomas (60 Cr)</option>
                  <option value="postgrad">Postgraduate (M.Ed &amp; MBA)</option>
                  <option value="phd">Doctor of Philosophy (PhD)</option>
                  <option value="fintech">Asian FinTech &amp; GAFM USA</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                  Field of Study
                </label>
                <select
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sliit-orange"
                >
                  <option>All Academic Fields</option>
                  <option>Business Management &amp; HR</option>
                  <option>Artificial Intelligence &amp; IT</option>
                  <option>Cybersecurity &amp; Blockchain</option>
                  <option>Economics &amp; Global Finance</option>
                  <option>Psychology &amp; Counselling</option>
                  <option>Education &amp; Teaching</option>
                  <option>Tourism &amp; Logistics</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-slate-500 mb-1">
                  Campus Location
                </label>
                <select
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sliit-orange"
                >
                  <option>Kelaniya (Main Campus)</option>
                  <option>Kandy Regional Campus</option>
                  <option>Matara Regional Campus</option>
                  <option>Badulla Regional Campus</option>
                  <option>Ampara Regional Campus</option>
                  <option>Jaffna Regional Campus</option>
                </select>
              </div>

              <div className="pt-2 md:pt-4">
                <a
                  href="#programmes-explorer"
                  className="w-full py-2.5 px-4 bg-sliit-navy hover:bg-[#0f264d] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Search className="w-4 h-4 text-sliit-orange" />
                  <span>FIND PROGRAMMES</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SLIIT STYLE METRIC STATS BANNER                             */}
      {/* ============================================================== */}
      <section className="bg-[#112850] text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-sliit-orange tracking-tight">
                  {s.number}
                </div>
                <div className="text-sm font-bold text-slate-100">{s.label}</div>
                <div className="text-[11px] text-slate-400 font-medium">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SLIIT STYLE PROGRAMMES EXPLORER WITH TABS                   */}
      {/* ============================================================== */}
      <section id="programmes-explorer" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sliit-orange/10 text-sliit-orange text-xs font-bold tracking-wider uppercase">
            Study at Global Stanford Campus
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Shape Your Future,{" "}
            <span className="text-sliit-navy">Choose the Right Programme</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Whether you want a 1-year top-up degree, a specialized diploma, or doctoral research, explore our industry-focused curricula.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveTab("bachelors")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "bachelors"
                  ? "bg-sliit-navy text-white shadow-md shadow-sliit-navy/30"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              🎓 1-Year BBA Top-Up (120 Cr)
            </button>
            <button
              onClick={() => setActiveTab("diplomas")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "diplomas"
                  ? "bg-sliit-navy text-white shadow-md shadow-sliit-navy/30"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              📜 24 Diplomas (30 Cr)
            </button>
            <button
              onClick={() => setActiveTab("higher")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "higher"
                  ? "bg-sliit-navy text-white shadow-md shadow-sliit-navy/30"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              🏛️ Higher Diplomas (60 Cr)
            </button>
            <button
              onClick={() => setActiveTab("postgrad")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "postgrad"
                  ? "bg-sliit-navy text-white shadow-md shadow-sliit-navy/30"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              🎓 Postgraduate (M.Ed &amp; MBA)
            </button>
            <button
              onClick={() => setActiveTab("phd")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "phd"
                  ? "bg-sliit-navy text-white shadow-md shadow-sliit-navy/30"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              🔬 PhD Doctorates
            </button>
            <button
              onClick={() => setActiveTab("fintech")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "fintech"
                  ? "bg-sliit-navy text-white shadow-md shadow-sliit-navy/30"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              💳 FinTech &amp; GAFM
            </button>
          </div>
        </div>

        {/* Tab 1: Bachelors Top-Up */}
        {activeTab === "bachelors" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {bachelors.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-sliit-orange/10 text-sliit-orange">
                      {b.credits}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{b.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sliit-navy transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                  <div className="text-[11px] text-slate-500 font-medium">
                    <span className="font-bold text-slate-700">Delivery:</span> {b.mode}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/programmes#bachelors"
                    className="text-xs font-bold text-sliit-navy hover:text-sliit-orange transition-colors flex items-center gap-1"
                  >
                    <span>View Curriculum</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                      b.inquiry
                    )}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-xs shadow-sm transition-all"
                  >
                    Apply on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: 24 Diplomas */}
        {activeTab === "diplomas" && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {diplomas.map((d, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-sliit-navy hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-slate-400">{d.field}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                        {d.credits}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 leading-snug">{d.name}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Duration: {d.duration}</p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/programmes#diplomas"
                      className="text-[11px] font-bold text-sliit-navy hover:underline"
                    >
                      Syllabus
                    </Link>
                    <a
                      href={`https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                        d.name
                      )}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link
                href="/programmes#diplomas"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sliit-navy text-white text-xs font-bold hover:bg-[#0f264d] transition-colors"
              >
                <span>View Full List of All 24 Diplomas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Tab 3: Higher Diplomas */}
        {activeTab === "higher" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {higherDiplomas.map((h, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700">
                      {h.credits}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{h.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{h.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advanced 60-credit framework serving as the intermediate foundation leading directly into final-year Bachelor&apos;s degrees.
                  </p>
                  <div className="text-[11px] text-sliit-orange font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Progression: {h.path}</span>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/programmes#higher-diplomas"
                    className="text-xs font-bold text-sliit-navy hover:underline"
                  >
                    View Modules
                  </Link>
                  <a
                    href={`https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                      h.title
                    )}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-xs"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Postgraduate (M.Ed & MBA) */}
        {activeTab === "postgrad" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {postgradPrograms.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-sliit-navy/10 text-sliit-navy font-bold">
                      {p.badge} • {p.credits}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{p.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/programmes#postgraduate"
                    className="text-xs font-bold text-sliit-navy hover:underline"
                  >
                    Curriculum &amp; Admission
                  </Link>
                  <a
                    href={`https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                      p.title
                    )}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-xs"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: PhD Research */}
        {activeTab === "phd" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {doctoralPrograms.map((d, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-sliit-orange/10 text-sliit-orange">
                      Doctoral Degree • {d.credits}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{d.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{d.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{d.desc}</p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/programmes#doctorates"
                    className="text-xs font-bold text-sliit-navy hover:underline"
                  >
                    Research Guidelines
                  </Link>
                  <a
                    href={`https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                      d.title
                    )}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-xs"
                  >
                    Submit Proposal
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 6: FinTech & GAFM */}
        {activeTab === "fintech" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {fintechPrograms.map((f, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-sliit-orange">
                    {f.partner}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{f.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                  <p className="text-[11px] text-slate-500 font-semibold">📍 {f.venue}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href="/certifications"
                    className="w-full py-2.5 rounded-xl bg-sliit-navy hover:bg-[#0f264d] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Certification Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ============================================================== */}
      {/* 4. SLIIT STYLE "A LEGACY OF EXCELLENCE" SHOWCASE               */}
      {/* ============================================================== */}
      <section className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Top Showcase: Dual-Column Layout as seen on SLIIT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Narrative, Link, Celebration Photo + Orange Badge */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-sliit-orange">
                  A Legacy of Excellence
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.15]">
                  A Legacy of Excellence with Thousands of Success Stories
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  With over 19 years of institutional excellence and roots dating back to 2007, Global Stanford Campus has empowered generations of graduates through innovation, academic excellence, and a strong commitment to student success.
                </p>
                <div className="pt-1">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-sliit-orange hover:text-sliit-orange-hover group transition-colors"
                  >
                    <span>Our Story</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Photo Card with Overlapping Orange Badge */}
              <div className="relative pt-4 sm:pt-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100 group">
                  <img
                    src="/images/gsc-graduates-celebration.jpg"
                    alt="Global Stanford Campus Graduates Celebrating Convocation"
                    className="w-full h-72 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Overlapping Orange Badge (Bottom Right) */}
                <div className="absolute -bottom-6 right-4 sm:right-8 bg-gradient-to-br from-[#f58220] to-[#e07110] text-white p-5 sm:p-6 rounded-3xl shadow-2xl shadow-orange-500/25 border-4 border-white min-w-[170px] sm:min-w-[200px] text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-white">
                    4,500+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white/95 mt-1">
                    Graduates Empowered
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Navy Experience Badge + Portrait Photo + Narrative + 2 Stats */}
            <div className="lg:col-span-6 space-y-8 pt-6 lg:pt-0">
              {/* Top Row: Navy Badge + Main Graduation Portrait */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6">
                {/* Navy Experience Badge */}
                <div className="bg-[#16366b] text-white p-6 sm:p-7 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center shrink-0 sm:w-44 border-4 border-white/15">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight leading-none text-white">
                    19+
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-200 mt-2">
                    Years Experience
                  </span>
                </div>

                {/* Graduation Portrait Photo */}
                <div className="flex-1 relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100 group">
                  <img
                    src="/images/gsc-graduates-portrait.jpg"
                    alt="Global Stanford Campus Convocation Graduates in Academic Regalia"
                    className="w-full h-64 sm:h-72 md:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Bottom narrative */}
              <div className="space-y-6 pt-2">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Our commitment to academic excellence is driven by a distinguished faculty who bring both expertise and mentorship to the classroom. Students benefit from personalised guidance, access to modern facilities, and an inclusive environment that fosters critical thinking, creativity, and lifelong learning.
                </p>

                {/* Two Stat Callouts with Dark Navy Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sliit-navy/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-[#16366b] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <GraduationCap className="w-6 h-6 text-sliit-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Experience</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                        Over 19+ Years of Academic Heritage
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sliit-orange/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-[#16366b] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Award className="w-6 h-6 text-sliit-orange" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Alumni Network</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                        Over 4,500+ Success Stories
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting 4-Pillar Advantage Cards */}
          <div className="pt-8 border-t border-slate-200/80">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50/70 rounded-2xl p-6 shadow-sm hover:shadow-cardHover border border-slate-200/80 transition-all space-y-3 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-sliit-navy-50 text-sliit-navy flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6 text-sliit-orange" />
                </div>
                <h3 className="font-bold text-base text-slate-900">UGC Recognised Pathways</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Degree pathways articulated through UGC-recognized foreign universities and accredited under the Tertiary and Vocational Education Commission (TVEC).
                </p>
              </div>

              <div className="bg-slate-50/70 rounded-2xl p-6 shadow-sm hover:shadow-cardHover border border-slate-200/80 transition-all space-y-3 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-sliit-navy-50 text-sliit-navy flex items-center justify-center font-bold">
                  <Briefcase className="w-6 h-6 text-sliit-orange" />
                </div>
                <h3 className="font-bold text-base text-slate-900">1-Year Top-Up Completion</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Direct final-year entry for HND, CIMA, or experienced diploma holders, saving you 2 years while attaining a full 120-credit BBA degree.
                </p>
              </div>

              <div className="bg-slate-50/70 rounded-2xl p-6 shadow-sm hover:shadow-cardHover border border-slate-200/80 transition-all space-y-3 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-sliit-navy-50 text-sliit-navy flex items-center justify-center font-bold">
                  <Laptop className="w-6 h-6 text-sliit-orange" />
                </div>
                <h3 className="font-bold text-base text-slate-900">Smart Modern Classrooms</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Equipped with interactive smart displays, enterprise LMS, hybrid streaming for distance learners, and 24/7 digital library access.
                </p>
              </div>

              <div className="bg-slate-50/70 rounded-2xl p-6 shadow-sm hover:shadow-cardHover border border-slate-200/80 transition-all space-y-3 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-sliit-navy-50 text-sliit-navy flex items-center justify-center font-bold">
                  <Award className="w-6 h-6 text-sliit-orange" />
                </div>
                <h3 className="font-bold text-base text-slate-900">Global FinTech &amp; GAFM</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Direct partnerships with Asian FinTech Academy (AFTA) and GAFM USA with executive masterclasses at luxury hotels like Hilton Colombo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SLIIT STYLE CAMPUS LIFE & FACILITIES (REAL PHOTOS)          */}
      {/* ============================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">
            Experience GSC
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Discover Life at Global Stanford Campus
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto font-normal">
            Take a look at our grand convocation ceremonies, smart learning facilities, and vibrant academic community.
          </p>
        </div>

        {/* Photo Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-card group h-72 sm:h-96">
            <img
              src="/images/gsc_convocation_bmich_group.jpeg"
              alt="BMICH Convocation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="px-3 py-1 rounded-full bg-sliit-orange text-white text-[10px] font-black uppercase w-max mb-2">
                Annual Convocation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                Grand Convocation at BMICH Colombo
              </h3>
              <p className="text-xs text-slate-200 mt-1">
                Celebrating thousands of qualified graduates awarded international degrees and diplomas.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-card group h-72 sm:h-96">
            <img
              src="/images/gsc_smart_classroom.jpeg"
              alt="Smart Classrooms"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="px-3 py-1 rounded-full bg-sliit-navy text-white text-[10px] font-black uppercase w-max mb-2">
                Modern Infrastructure
              </span>
              <h3 className="text-lg font-bold leading-tight">
                Smart Digital Classrooms
              </h3>
              <p className="text-xs text-slate-200 mt-1">
                Interactive multimedia lecture theatres and executive teaching facilities.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-card group h-64 sm:h-80">
            <img
              src="/images/gsc_academic_procession.jpeg"
              alt="Academic Procession"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="px-3 py-1 rounded-full bg-sliit-orange text-white text-[10px] font-black uppercase w-max mb-2">
                Faculty Heritage
              </span>
              <h3 className="text-base font-bold">Academic Procession</h3>
              <p className="text-xs text-slate-200 mt-0.5">
                Led by prominent professors and industry scholars.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-card group h-64 sm:h-80">
            <img
              src="/images/afta_fintech_banner.jpeg"
              alt="Hilton Colombo Cohort"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase w-max mb-2">
                Executive Workshops
              </span>
              <h3 className="text-base font-bold">Hilton Colombo Cohorts</h3>
              <p className="text-xs text-slate-200 mt-0.5">
                FinTech masterclasses and corporate executive forums.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-card group h-64 sm:h-80">
            <img
              src="/images/gsc_convocation_1.jpeg"
              alt="Graduate Honors"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="px-3 py-1 rounded-full bg-sliit-navy text-white text-[10px] font-black uppercase w-max mb-2">
                Student Honors
              </span>
              <h3 className="text-base font-bold">Empowering Leaders</h3>
              <p className="text-xs text-slate-200 mt-0.5">
                Guiding students towards prestigious global careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. SLIIT STYLE DISTINGUISHED FACULTY CARDS                    */}
      {/* ============================================================== */}
      <section className="bg-slate-100/60 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">
                Academic Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
                Learn from Renowned Faculty
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Over 28 qualified professors, PhD holders, industry consultants, and senior lecturers.
              </p>
            </div>
            <Link
              href="/faculty"
              className="inline-flex items-center gap-2 text-xs font-bold text-sliit-navy hover:text-sliit-orange transition-colors"
            >
              <span>Explore All 28 Faculty Members</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Dr. Sandya Kumari", role: "Dean / Senior Lecturer", img: "/images/staff_portraits/staff_sandya_kumari.jpeg", dept: "Management" },
              { name: "Sampath Bandara", role: "Head of Academic Programs", img: "/images/staff_portraits/staff_sampath_bandara.jpeg", dept: "Academics" },
              { name: "Asanka Weerasinghe", role: "Consultant / Lecturer", img: "/images/staff_portraits/staff_asanka_weerasinghe.jpeg", dept: "FinTech" },
              { name: "Prof. Jude Devabandu", role: "Visiting Professor", img: "/images/staff_portraits/staff_jude_devabandu.jpeg", dept: "Education" },
              { name: "Faizar Farook", role: "Corporate Lecturer", img: "/images/staff_portraits/staff_faizar.jpeg", dept: "Business" },
              { name: "K. Prashanthan", role: "Senior Lecturer", img: "/images/staff_portraits/staff_prashanthan.jpeg", dept: "Information Tech" },
            ].map((f, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 text-center border border-slate-200/90 shadow-card hover:shadow-cardHover transition-all flex flex-col items-center group"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-slate-200 group-hover:border-sliit-orange transition-colors">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-xs text-slate-900 group-hover:text-sliit-navy transition-colors">
                  {f.name}
                </h4>
                <p className="text-[10px] text-sliit-orange font-bold mt-0.5">{f.role}</p>
                <span className="mt-2 text-[9px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  {f.dept}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. SLIIT STYLE ISLAND-WIDE CAMPUSES CARDS                     */}
      {/* ============================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">
            Regional Presence
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Island-wide Campus Network
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto font-normal">
            Accessible higher education across Sri Lanka with modern regional learning centres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campuses.map((c, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-cardHover transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-black text-slate-900">{c.city}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sliit-orange/10 text-sliit-orange">
                    {c.type}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{c.addr}</p>
                <div className="space-y-1 pt-2 text-xs">
                  <p className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-sliit-orange" />
                    <span>Tel: <a href={`tel:${c.phone}`} className="font-mono font-bold hover:underline">{c.phone}</a></span>
                  </p>
                  <p className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Mobile: <a href={`tel:${c.mobile}`} className="font-mono font-bold hover:underline">{c.mobile}</a></span>
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link href="/branches" className="text-xs font-bold text-sliit-navy hover:underline">
                  Branch Details
                </Link>
                <a
                  href={`https://wa.me/94741623123?text=Hello%2C%20I%20would%20like%20to%20visit%20the%20${encodeURIComponent(
                    c.city
                  )}%20campus.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-[11px]"
                >
                  Contact Branch
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. SLIIT STYLE INTAKE & EVENTS ANNOUNCEMENT BANNER             */}
      {/* ============================================================== */}
      <section className="bg-[#0f264d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">
                What’s Happening at GSC
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                Upcoming Intakes &amp; Academic Notices
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-14 h-14 rounded-xl bg-sliit-orange text-white flex flex-col items-center justify-center shrink-0 font-black">
                <span className="text-lg leading-none">2026</span>
                <span className="text-[10px] uppercase">INTAKE</span>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-sm text-white">2026/2027 Academic Year Admissions</h4>
                <p className="text-xs text-slate-300">
                  Applications are open for 24 Diplomas and 1-Year Fast-Track BBA Top-Up programmes across all centres.
                </p>
                <a
                  href="https://wa.me/94741623123?text=Hello%2C%20I%20would%20like%20to%20apply%20for%20the%202026/2027%20intake."
                  className="inline-flex items-center gap-1 text-xs font-bold text-sliit-orange hover:underline pt-1"
                >
                  <span>Apply for this Intake</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-14 h-14 rounded-xl bg-sliit-navy-600 text-white flex flex-col items-center justify-center shrink-0 font-black">
                <span className="text-lg leading-none">AFTA</span>
                <span className="text-[10px] uppercase">FINTECH</span>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-sm text-white">Hilton Executive FinTech Cohort</h4>
                <p className="text-xs text-slate-300">
                  Upcoming weekend executive masterclass and networking sessions at Hilton Colombo with HKU curriculum.
                </p>
                <Link
                  href="/certifications#fintech"
                  className="inline-flex items-center gap-1 text-xs font-bold text-sliit-orange hover:underline pt-1"
                >
                  <span>Enroll in FinTech Cohort</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-14 h-14 rounded-xl bg-emerald-600 text-white flex flex-col items-center justify-center shrink-0 font-black">
                <span className="text-lg leading-none">BMICH</span>
                <span className="text-[10px] uppercase">AWARDS</span>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-sm text-white">Annual Convocation Registration</h4>
                <p className="text-xs text-slate-300">
                  Graduating students are invited to complete graduation registration for the upcoming BMICH ceremony.
                </p>
                <a
                  href="tel:0117173030"
                  className="inline-flex items-center gap-1 text-xs font-bold text-sliit-orange hover:underline pt-1"
                >
                  <span>Call Convocation Desk</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. SLIIT STYLE SEARCHABLE FAQ ACCORDION                        */}
      {/* ============================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Everything you need to know about UGC recognition, study formats, 12-month top-ups, and GAFM certifications.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900 hover:text-sliit-navy transition-colors"
              >
                <span>{f.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    activeFaq === idx ? "rotate-180 text-sliit-orange" : ""
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fade-in font-normal">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. FINAL SLIIT HIGH-CONVERTING CTA BANNER                     */}
      {/* ============================================================== */}
      <section className="bg-gradient-to-r from-[#0a1833] via-[#16366b] to-[#0f264d] text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-sliit-orange text-white text-xs font-black uppercase tracking-wider inline-block">
            Start Your Academic Journey Today
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Ready to Earn Your UGC Recognised Degree?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Speak directly with an admissions advisor for personalized evaluation, fee structures, and immediate enrollment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20apply%20for%20admissions."
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-sliit-orange/40 transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>APPLY VIA WHATSAPP NOW</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:0117173030"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-slate-300" />
              <span>Call Hotlines: 0117 173 030</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
