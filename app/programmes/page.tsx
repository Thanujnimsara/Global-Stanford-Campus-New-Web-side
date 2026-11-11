"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  Phone,
  Search,
  Filter,
} from "lucide-react";

export default function ProgrammesPage() {
  const [filter, setFilter] = useState<"all" | "bachelors" | "diplomas" | "higher" | "postgrad" | "phd">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const bachelors = [
    {
      category: "bachelors",
      level: "Undergraduate Degree",
      title: "BBA in Business Management (1-Year Fast-Track Top-Up)",
      credits: "120 Credits",
      duration: "1 Year Fast-Track (or 3-4 Yrs)",
      mode: "Weekend / Blended Learning",
      desc: "Designed for diploma and higher diploma holders seeking direct final-year degree completion with UGC recognition.",
      modules: ["Strategic Management", "International Business", "Corporate Financial Reporting", "Leadership & Ethics", "Dissertation / Capstone"],
      inquiry: "1-Year Fast-Track Top-Up Degree",
    },
    {
      category: "bachelors",
      level: "Undergraduate Degree",
      title: "BBA in Information Systems & Technology",
      credits: "120 Credits",
      duration: "1 Year Top-Up / 3-4 Years",
      mode: "Weekend / Digital Learning",
      desc: "Comprehensive curriculum combining enterprise software, database management, and executive computing.",
      modules: ["Enterprise Architecture", "Database Administration", "Systems Analysis & Design", "IT Project Management", "Final Capstone"],
      inquiry: "BBA in Information Systems",
    },
    {
      category: "bachelors",
      level: "Undergraduate Degree",
      title: "BBA in Human Resource Management",
      credits: "120 Credits",
      duration: "1 Year Top-Up / 3-4 Years",
      mode: "Blended Learning",
      desc: "Equipping aspiring leaders with strategic talent management, labour law, and organizational leadership skills.",
      modules: ["Strategic HRM", "Industrial Relations & Law", "Organizational Behavior", "Performance Evaluation", "Applied HR Project"],
      inquiry: "BBA in HRM",
    },
    {
      category: "bachelors",
      level: "Undergraduate Degree",
      title: "BBA in Economics & Global Finance",
      credits: "120 Credits",
      duration: "1 Year Top-Up / 3-4 Years",
      mode: "Blended Learning",
      desc: "Focus on corporate finance, international economics, financial modelling, and market dynamics.",
      modules: ["Macroeconomic Policy", "Corporate Valuation", "Financial Risk Management", "International Trade", "Research Project"],
      inquiry: "BBA in Economics",
    },
  ];

  const diplomas = [
    { name: "Diploma in Artificial Intelligence (AI)", field: "Technology", duration: "6-12 Months", credits: "30 Credits", desc: "Machine learning, prompt engineering, computer vision, and neural network foundations." },
    { name: "Diploma in Cybersecurity & Network Defense", field: "Technology", duration: "6-12 Months", credits: "30 Credits", desc: "Ethical hacking, threat mitigation, firewall management, and digital forensics." },
    { name: "Diploma in Blockchain & Web3 Technologies", field: "Technology", duration: "6-12 Months", credits: "30 Credits", desc: "Smart contracts, decentralized finance (DeFi), tokenomics, and distributed ledgers." },
    { name: "Diploma in Information Technology (IT)", field: "Technology", duration: "6-12 Months", credits: "30 Credits", desc: "Full-stack development, database architecture, and computer networking." },
    { name: "Diploma in Business Management", field: "Management", duration: "6-12 Months", credits: "30 Credits", desc: "Principles of business operations, organizational planning, and corporate strategy." },
    { name: "Diploma in Human Resource Management (HRM)", field: "Management", duration: "6-12 Months", credits: "30 Credits", desc: "Talent acquisition, employee welfare, workforce performance, and labor compliance." },
    { name: "Diploma in Digital Marketing & E-Commerce", field: "Marketing", duration: "6-12 Months", credits: "30 Credits", desc: "SEO, PPC campaigns, social media branding, Google Analytics, and online sales funneling." },
    { name: "Diploma in Tourism & Hospitality Management", field: "Hospitality", duration: "6-12 Months", credits: "30 Credits", desc: "Front office, culinary management, international tourism operations, and guest relations." },
    { name: "Diploma in Logistics & Supply Chain Management", field: "Logistics", duration: "6-12 Months", credits: "30 Credits", desc: "Freight forwarding, inventory control, shipping operations, and warehouse logistics." },
    { name: "Diploma in Psychology & Counselling", field: "Healthcare", duration: "6-12 Months", credits: "30 Credits", desc: "Foundations of human behavior, therapeutic counselling, cognitive development, and mental health." },
    { name: "Diploma in Primary School Education & Teaching", field: "Education", duration: "6-12 Months", credits: "30 Credits", desc: "Child psychology, instructional design, pedagogical methodology, and classroom management." },
    { name: "Diploma in Professional English", field: "Languages", duration: "6-12 Months", credits: "30 Credits", desc: "Executive business writing, public speaking, corporate communication, and IELTS readiness." },
    { name: "Diploma in Economics", field: "Finance", duration: "6-12 Months", credits: "30 Credits", desc: "Microeconomics, macroeconomic policy, financial markets, and economic analytics." },
    { name: "Diploma in Sales & Marketing", field: "Marketing", duration: "6-12 Months", credits: "30 Credits", desc: "B2B sales strategy, negotiation techniques, market analysis, and customer retention." },
    { name: "Diploma in Insurance & Wealth Management", field: "Finance", duration: "6-12 Months", credits: "30 Credits", desc: "Actuarial principles, underwriting, policy management, and portfolio advisory." },
    { name: "Diploma in Customer Service", field: "Service", duration: "6-12 Months", credits: "30 Credits", desc: "Excellence in customer relations, CRM software, conflict resolution, and client experience." },
    { name: "Diploma in Office Management", field: "Administration", duration: "6-12 Months", credits: "30 Credits", desc: "Executive administrative workflows, documentation, secretarial duties, and digital tools." },
    { name: "Diploma in Entrepreneurship & Small Business", field: "Business", duration: "6-12 Months", credits: "30 Credits", desc: "Startup ideation, venture capital pitching, business registration, and growth scaling." },
    { name: "Diploma in Teaching", field: "Education", duration: "6-12 Months", credits: "30 Credits", desc: "Modern teaching methodologies, lesson planning, digital learning tools, and assessment." },
    { name: "Diploma in Banking & Financial Services", field: "Finance", duration: "6-12 Months", credits: "30 Credits", desc: "Commercial banking, credit assessment, treasury operations, and central bank regulations." },
    { name: "Diploma in International Relations", field: "Social Sciences", duration: "6-12 Months", credits: "30 Credits", desc: "Diplomacy, foreign policy, geopolitical security, and international treaties." },
    { name: "Diploma in Healthcare Management", field: "Healthcare", duration: "6-12 Months", credits: "30 Credits", desc: "Hospital administration, clinical workflows, patient safety standards, and public health." },
    { name: "Diploma in Public Relations & Media", field: "Media", duration: "6-12 Months", credits: "30 Credits", desc: "Press releases, crisis communication, media buying, and brand reputation management." },
    { name: "Diploma in Project Management", field: "Management", duration: "6-12 Months", credits: "30 Credits", desc: "Agile methodologies, Scrum, project budgeting, risk assessment, and stakeholder governance." },
  ];

  const higherDiplomas = [
    { title: "Higher Diploma in Business Administration", credits: "60 Credits", duration: "18 Months", path: "Leads directly to Final Year BBA", desc: "Advanced executive modules in business analytics, operations, and corporate strategy." },
    { title: "Higher Diploma in Information Technology & Computing", credits: "60 Credits", duration: "18 Months", path: "Leads to Final Year BBA / BSc IT", desc: "Full-stack software engineering, cloud computing, cybersecurity, and databases." },
    { title: "Higher Diploma in Human Resource Leadership", credits: "60 Credits", duration: "18 Months", path: "Leads to Final Year BBA HRM", desc: "Executive talent governance, global labor policies, organizational change management." },
    { title: "Higher Diploma in Logistics & Global Supply Chains", credits: "60 Credits", duration: "18 Months", path: "Leads to Final Year BBA Logistics", desc: "Multimodal freight management, international customs, maritime commerce, and supply resilience." },
    { title: "Higher Diploma in Marketing & Consumer Behavior", credits: "60 Credits", duration: "18 Months", path: "Leads to Final Year BBA Marketing", desc: "Omnichannel campaigns, market research, brand building, and behavioral economics." },
    { title: "Higher Diploma in Accounting & Financial Management", credits: "60 Credits", duration: "18 Months", path: "Leads to Final Year BBA Finance", desc: "IFRS compliance, managerial accounting, auditing, and corporate taxation." },
    { title: "Higher Diploma in Education Leadership & Pedagogy", credits: "60 Credits", duration: "18 Months", path: "Leads to B.Ed / M.Ed Pathways", desc: "Curriculum theory, institutional governance, modern pedagogy, and inclusive education." },
    { title: "Higher Diploma in Psychology & Applied Counselling", credits: "60 Credits", duration: "18 Months", path: "Advanced Psychology Pathway", desc: "Abnormal psychology, clinical counselling, psychometrics, and mental health intervention." },
  ];

  const postgrad = [
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
    {
      title: "Postgraduate Certificate in Education",
      credits: "24 Credits",
      duration: "6-12 Months",
      desc: "Focused pedagogical credential for active teaching professionals.",
      badge: "PG Certificate",
    },
  ];

  const doctorates = [
    {
      title: "Doctor of Philosophy (PhD) in Management",
      credits: "60 Credits",
      duration: "3 Years · Research & Thesis",
      desc: "Original research, thesis defense, and academic publication under internationally qualified supervisors.",
    },
    {
      title: "Doctor of Philosophy (PhD) in Education",
      credits: "60 Credits",
      duration: "3 Years · Research & Thesis",
      desc: "Rigorous educational research tackling educational leadership, curriculum development, and pedagogy.",
    },
  ];

  const filteredDiplomas = diplomas.filter(d =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.field.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f8fafc] text-slate-900 pt-20">
      {/* Header Banner */}
      <section className="bg-[#0f264d] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-sliit-orange">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link href="/" className="hover:text-sliit-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-sliit-orange">Academic Programmes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Academic Catalog &amp; Degree Pathways
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            Explore 24 specialized diplomas, 8 higher diplomas, 1-year fast-track BBA top-up degrees, MBA, and PhD research programmes recognised by UGC and TVEC.
          </p>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "all" ? "bg-sliit-orange text-white" : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              All Programmes
            </button>
            <button
              onClick={() => setFilter("bachelors")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "bachelors" ? "bg-sliit-orange text-white" : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              🎓 1-Yr BBA Top-Up (120 Cr)
            </button>
            <button
              onClick={() => setFilter("diplomas")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "diplomas" ? "bg-sliit-orange text-white" : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              📜 24 Diplomas (30 Cr)
            </button>
            <button
              onClick={() => setFilter("higher")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "higher" ? "bg-sliit-orange text-white" : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              🏛️ 8 Higher Diplomas (60 Cr)
            </button>
            <button
              onClick={() => setFilter("postgrad")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "postgrad" ? "bg-sliit-orange text-white" : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              🎓 Postgraduate (MBA &amp; M.Ed)
            </button>
            <button
              onClick={() => setFilter("phd")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "phd" ? "bg-sliit-orange text-white" : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              🔬 PhD Doctorates
            </button>
          </div>
        </div>
      </section>

      {/* Main Catalog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* SECTION 1: BACHELORS */}
        {(filter === "all" || filter === "bachelors") && (
          <div id="bachelors" className="space-y-6 scroll-mt-24">
            <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">Degree Pathway</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  1-Year Fast-Track BBA Top-Up Degrees (120 Credits)
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">UGC Recognised Universities</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bachelors.map((b, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-sliit-orange/10 text-sliit-orange">
                        {b.credits}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{b.duration}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                    
                    <div className="pt-2">
                      <span className="text-[11px] font-bold text-slate-700 block mb-1">Key Curriculum Modules:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {b.modules.map((m, mIdx) => (
                          <span key={mIdx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">Mode: <strong>{b.mode}</strong></span>
                    <a
                      href={`https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(b.inquiry)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-xs shadow-sm transition-all"
                    >
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: 24 DIPLOMAS */}
        {(filter === "all" || filter === "diplomas") && (
          <div id="diplomas" className="space-y-6 scroll-mt-24">
            <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">Vocational &amp; Professional</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  24 Specialized Diploma Programmes (30 Credits)
                </h2>
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search diplomas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sliit-orange"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDiplomas.map((d, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-card hover:border-sliit-navy transition-all flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-sliit-orange">{d.field}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                        {d.credits}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug">{d.name}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{d.desc}</p>
                    <p className="text-[11px] text-slate-400 font-medium">Duration: {d.duration}</p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-emerald-600 font-bold">Admissions Open</span>
                    <a
                      href={`https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(d.name)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-sliit-navy hover:bg-[#0f264d] text-white text-[11px] font-bold transition-colors"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 3: HIGHER DIPLOMAS */}
        {(filter === "all" || filter === "higher") && (
          <div id="higher-diplomas" className="space-y-6 scroll-mt-24">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">Advanced Framework</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                8 Higher Diplomas (60 Credits)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {higherDiplomas.map((h, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700">
                        {h.credits}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{h.duration}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{h.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{h.desc}</p>
                    <div className="text-[11px] text-sliit-orange font-bold flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Progression: {h.path}</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Flexible Delivery</span>
                    <a
                      href={`https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(h.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-xs"
                    >
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 4: POSTGRADUATE */}
        {(filter === "all" || filter === "postgrad") && (
          <div id="postgraduate" className="space-y-6 scroll-mt-24">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">Executive &amp; Master&apos;s</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Postgraduate Programmes (M.Ed &amp; MBA)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {postgrad.map((p, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-sliit-navy/10 text-sliit-navy font-bold">
                        {p.badge} • {p.credits}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{p.duration}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Executive Batch</span>
                    <a
                      href={`https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(p.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-xs"
                    >
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 5: DOCTORATES */}
        {(filter === "all" || filter === "phd") && (
          <div id="doctorates" className="space-y-6 scroll-mt-24">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-black uppercase tracking-wider text-sliit-orange">Highest Academic Distinction</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Doctor of Philosophy (PhD) Programmes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctorates.map((d, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-sliit-orange/10 text-sliit-orange font-bold">
                        {d.credits}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{d.duration}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{d.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{d.desc}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Research &amp; Publication</span>
                    <a
                      href={`https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(d.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-xs"
                    >
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
