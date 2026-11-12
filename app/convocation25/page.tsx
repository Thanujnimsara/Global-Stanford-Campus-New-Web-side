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
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

export default function Convocation2025Page() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  const stats = [
    { number: "1,200+", label: "Conferred Graduates", sub: "Kiribathgoda, Kandy, Matara..." },
    { number: "4", label: "Academic Disciplines", sub: "Education, Mgmt, IT, Nursing" },
    { number: "100%", label: "International Recognition", sub: "IIC University of Technology" },
    { number: "BMICH", label: "Ceremony Venue", sub: "Colombo, Sri Lanka" },
  ];

  const gallery = [
    { src: "/images/convocation/2025_img01.jpeg", alt: "Graduation Ceremony Hall", caption: "Grand Auditorium at BMICH" },
    { src: "/images/convocation/2025_img02.jpeg", alt: "Graduate with Diploma", caption: "Achievement Moment" },
    { src: "/images/convocation/2025_img03.jpeg", alt: "Graduates Celebrating", caption: "Class of 2025 In Regalia" },
    { src: "/images/convocation/2025_img04.jpeg", alt: "Academic Procession", caption: "Dignitaries & Keynote Addresses" },
    { src: "/images/convocation/2025_img05.jpeg", alt: "Diploma Conferment", caption: "Stage Presentation of Honors" },
    { src: "/images/convocation/2025_img06.jpeg", alt: "Class of 2025", caption: "Graduates Fellowship" },
    { src: "/images/convocation/2025_img13.jpeg", alt: "Celebrating Families", caption: "Joyous Moments with Loved Ones" },
    { src: "/images/convocation/2025_img14.jpeg", alt: "Convocation Hall", caption: "Annual Graduation Assembly" },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 pt-20">
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950 isolate">
        {/* Background Image with Dark University Gradient */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/convocation/2025.jpeg"
            alt="Convocation 2025 Graduation Ceremony"
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
            <span className="text-sliit-orange">Convocation 2025</span>
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
            2025
          </h1>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-sm font-semibold tracking-wide text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>@globalstanfordcampus • BMICH Colombo</span>
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
              href="/convocation24"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
            >
              <span>Explore Convocation 2024</span>
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
                  src="/images/convocation/2025_img02.jpeg"
                  alt="Graduate with Diploma"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlapping Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#16366b] to-[#09172f] text-white p-5 rounded-2xl shadow-xl border-2 border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-sliit-orange" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">Milestone</span>
                </div>
                <div className="text-2xl font-black text-white">1,200+ Degrees</div>
                <div className="text-[11px] text-slate-300">Conferred at BMICH</div>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-sliit-orange text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>National Milestone</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f264d] tracking-tight leading-tight">
              Academic Excellence <br />
              <span className="text-sliit-orange">Achieved</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Global Stanford Campus marked a major milestone with over 1,200 graduates from branches in Kiribathgoda, Kandy, Matara, Ampara, and Bandulla receiving their degrees. Students completed programs in Education, Management, IT, and Nursing through classroom, online, and blended learning. Degrees awarded included Bachelor’s, Postgraduate Diplomas, Master’s, and Doctoral programs, affirming the institution’s commitment to world-class education.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0f264d]">Island-Wide Reach</h4>
                  <p className="text-xs text-slate-500">Graduates from Kiribathgoda, Kandy, Matara, Ampara, and Badulla campuses.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0f264d]">IIC University Recognition</h4>
                  <p className="text-xs text-slate-500">Conferred in partnership with IIC University of Technology, Cambodia.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0f264d]">Diverse Academic Paths</h4>
                  <p className="text-xs text-slate-500">Bachelor’s, Postgraduate Diplomas, Master’s, and PhD / DBA Doctorates.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0f264d]">GCE A/L Pathways</h4>
                  <p className="text-xs text-slate-500">Fast-track direct enrollment options for recent advanced-level qualifiers.</p>
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
            <span>Grand Assembly</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f264d] tracking-tight">
            Celebration &amp; Community at BMICH
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The convocation at the BMICH brought together graduates, families, and faculty in a proud celebration of achievement. With recognition from IIC University of Technology, Cambodia, and inspiring words from campus leadership, the event highlighted education as a pathway to both personal growth and national progress. New opportunities were also announced for students completing their GCE Advanced Level, with internationally recognized academic diplomas paving the way for future success.
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
                Class of 2025 Graduation Assembly
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
            Relive the inspiring highlights, diploma presentations, and shared moments of accomplishment from the 2025 convocation.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200/70 aspect-4/3 flex flex-col justify-end"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="relative z-10 p-4 text-white">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-xs sm:text-sm text-white drop-shadow-md">{item.caption}</p>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
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
                <p className="text-xs text-slate-400">Global Stanford Campus Convocation 2025</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-sliit-orange/20 text-sliit-orange font-bold">
                BMICH Colombo
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 7. Switch to 2024 Convocation Banner */}
      <section className="bg-gradient-to-r from-[#09172f] via-[#0f264d] to-[#16366b] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sliit-orange">Historical Archives</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Explore Convocation 2024</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              View the previous 2024 annual graduation assembly at BMICH and honors conferred upon 500 graduates.
            </p>
          </div>
          <Link
            href="/convocation24"
            className="px-7 py-3.5 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-sliit-orange/30 transition-all hover:scale-[1.03] whitespace-nowrap flex items-center gap-2"
          >
            <span>View Convocation 2024</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
