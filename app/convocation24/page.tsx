"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

export default function Convocation2024Page() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  const stats = [
    { number: "500+", label: "Graduates Conferred", sub: "Undergraduate to Doctoral" },
    { number: "4", label: "Academic Disciplines", sub: "Education, Mgmt, IT, Nursing" },
    { number: "5", label: "Island-wide Campuses", sub: "Kiribathgoda, Kandy, Matara..." },
    { number: "100%", label: "International Recognition", sub: "UGC Pathway Partnerships" },
  ];

  const gallery = [
    { src: "/images/convocation/2024_img01.jpeg", alt: "Graduation Ceremony Hall", caption: "BMICH Grand Auditorium" },
    { src: "/images/convocation/2024_img02.jpeg", alt: "Graduate with Diploma", caption: "Achievement Moment" },
    { src: "/images/convocation/2024_img03.jpeg", alt: "Graduates Celebrating", caption: "Class of 2024 In Regalia" },
    { src: "/images/convocation/2024_img04.jpeg", alt: "Academic Procession", caption: "Procession of Dignitaries" },
    { src: "/images/convocation/2024_img05.jpeg", alt: "Conferment of Degrees", caption: "Stage Presentation of Diplomas" },
    { src: "/images/convocation/2024_img06.jpeg", alt: "Faculty and Graduates", caption: "Campus Fellowship & Memories" },
    { src: "/images/convocation/profile2024.jpeg", alt: "Distinguished Graduate", caption: "Academic Excellence Awardee" },
    { src: "/images/gsc_convocation_bmich_group.jpeg", alt: "BMICH Conferred Group", caption: "Annual Convocation Batch" },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 pt-20">
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950 isolate">
        {/* Background Image with Dark University Gradient */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/convocation/2024_img01.jpeg"
            alt="Convocation 2024 BMICH Auditorium"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#071326]/95 via-[#091b38]/85 to-[#091b38]/70" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#071326] via-transparent to-[#071326]/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wide uppercase mb-6 text-slate-200">
            <Link href="/" className="hover:text-sliit-orange transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-sliit-orange" />
            <span className="text-sliit-orange">Convocation 2024</span>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center backdrop-blur-md shadow-xl">
              <GraduationCap className="w-10 h-10 text-amber-400" />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif italic text-slate-300 tracking-wider mb-2">
            The Graduation Ceremony
          </h2>
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white tracking-tight drop-shadow-2xl leading-none mb-6">
            2024
          </h1>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-sm font-semibold tracking-wide text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>@globalstanfordcampus • BMICH Main Hall, Colombo</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-10">
            <a
              href="#memorable-moments"
              className="px-7 py-3.5 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-sliit-orange/30 transition-all hover:scale-[1.03] flex items-center gap-2"
            >
              <span>View Ceremony Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/convocation25"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
            >
              <span>Explore Convocation 2025</span>
              <ChevronRight className="w-4 h-4 text-sliit-orange" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Key Highlights Stats Ribbon */}
      <section className="bg-[#112850] text-white py-10 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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

      {/* 3. Academic Excellence Achieved */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Photo with Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="w-72 h-80 sm:w-88 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/convocation/profile2024.jpeg"
                  alt="Graduate Portrait"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlapping Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#16366b] to-[#09172f] text-white p-5 rounded-2xl shadow-xl border-2 border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-sliit-orange" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">Conferred</span>
                </div>
                <div className="text-2xl font-black text-white">500+ Degrees</div>
                <div className="text-[11px] text-slate-300">Awarded at BMICH</div>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-sliit-orange text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Milestone Achievement</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f264d] tracking-tight leading-tight">
              Academic Excellence <br />
              <span className="text-sliit-orange">Achieved</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Global Stanford Campus proudly celebrates the success of 500 graduates who earned degrees across Education, Management, IT, and Nursing. Their dedication and perseverance reflect the campus’s commitment to academic growth, international recognition, and preparing leaders for tomorrow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0f264d]">Multidisciplinary Excellence</h4>
                  <p className="text-xs text-slate-500">Education, Management, IT, and Nursing qualifications.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0f264d]">Flexible Study Modes</h4>
                  <p className="text-xs text-slate-500">Physical classroom, interactive digital LMS, and blended streams.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0f264d]">Degree Levels Conferred</h4>
                  <p className="text-xs text-slate-500">Bachelor’s, Postgraduate Diplomas, Master’s, and Doctoral programs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0f264d]">Global Recognition</h4>
                  <p className="text-xs text-slate-500">Affiliated degree qualifications paving the way for global mobility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Celebration & Community Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sliit-navy/10 text-[#16366b] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-sliit-orange" />
            <span>Community & Fellowship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f264d] tracking-tight">
            Celebration &amp; Community
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The graduation ceremony united students, families, and faculty in a joyous celebration. With words of inspiration from distinguished guests, the event honored not only personal achievement but also the shared spirit of community and national progress through education.
          </p>

          <div className="pt-4">
            <div className="inline-flex items-center gap-6 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sliit-orange" />
                BMICH, Colombo, Sri Lanka
              </span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sliit-orange" />
                Annual Convocation Ceremony
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Memorable Moments Gallery */}
      <section id="memorable-moments" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-sliit-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ceremony Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f264d] tracking-tight">
            Memorable Moments
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Capturing the smiles, pride, and landmark memories of our 2024 graduates at the prestigious BMICH Auditorium.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-200/80 h-72 sm:h-80 lg:h-72 flex flex-col justify-end"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 via-45% to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Floating Zoom Icon */}
              <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-sliit-orange group-hover:scale-110 transition-all shadow-md">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>

              <div className="relative z-10 p-4 sm:p-5 text-white">
                <span className="inline-block px-2 py-0.5 rounded-md bg-sliit-orange text-white text-[10px] font-black uppercase tracking-wider mb-1.5 shadow-xs">
                  Ceremony Photo
                </span>
                <p className="font-bold text-sm sm:text-base text-white drop-shadow-md leading-snug group-hover:text-amber-300 transition-colors">
                  {item.caption}
                </p>
                <p className="text-[11px] text-slate-300 font-medium flex items-center gap-1 mt-1 opacity-90">
                  <span>Click to view photo</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-sliit-orange" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-sliit-orange transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm sm:text-base">{selectedImage.caption}</h4>
                <p className="text-xs text-slate-400">Global Stanford Campus Convocation 2024</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-sliit-orange/20 text-sliit-orange font-bold">
                BMICH Colombo
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 7. Switch to 2025 Convocation Banner */}
      <section className="bg-gradient-to-r from-[#09172f] via-[#0f264d] to-[#16366b] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sliit-orange">Next Convocation Ceremony</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Explore Convocation 2025</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Discover the Class of 2025 graduation milestones with over 1,200 conferred graduates across our 5 branch network.
            </p>
          </div>
          <Link
            href="/convocation25"
            className="px-7 py-3.5 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-sliit-orange/30 transition-all hover:scale-[1.03] whitespace-nowrap flex items-center gap-2"
          >
            <span>View Convocation 2025</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
