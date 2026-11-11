"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, GraduationCap, Mail, Phone, BookOpen } from "lucide-react";

export default function FacultyPage() {
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("all");

  const faculty = [
    { name: "Dr. Sandya Kumari", designation: "Dean / Senior Lecturer", dept: "Faculty of Management", qualification: "PhD in Management, MBA, BBA (Hons)", img: "/images/staff_portraits/staff_sandya_kumari.jpeg" },
    { name: "Sampath Bandara", designation: "Head of Academic Affairs", dept: "Academic Administration", qualification: "M.Sc, B.Sc (Hons), Senior Consultant", img: "/images/staff_portraits/staff_sampath_bandara.jpeg" },
    { name: "Asanka Weerasinghe", designation: "Corporate Consultant & Senior Lecturer", dept: "FinTech & Banking", qualification: "Chartered Financial Analyst, MBA, GAFM Fellow", img: "/images/staff_portraits/staff_asanka_weerasinghe.jpeg" },
    { name: "Prof. Jude Devabandu", designation: "Distinguished Visiting Professor", dept: "Faculty of Education", qualification: "PhD in Education, M.Ed, B.Ed (Hons)", img: "/images/staff_portraits/staff_jude_devabandu.jpeg" },
    { name: "Faizar Farook", designation: "Senior Lecturer", dept: "Faculty of Management", qualification: "MBA, PG Diploma in Business, B.Com", img: "/images/staff_portraits/staff_faizar.jpeg" },
    { name: "K. Prashanthan", designation: "Head of IT & Computing", dept: "Faculty of Information Technology", qualification: "M.Sc in Computer Science, B.Sc (Hons) IT", img: "/images/staff_portraits/staff_prashanthan.jpeg" },
    { name: "Dr. P. Gunawardhana", designation: "Senior Academic Lecturer", dept: "Faculty of Economics", qualification: "PhD in Economics, MA, BA (Hons)", img: "/images/staff_portraits/staff_gunawardhana.jpeg" },
    { name: "M. Eshwara", designation: "Lecturer in Business Studies", dept: "Faculty of Management", qualification: "MBA, BBA (Special)", img: "/images/staff_portraits/staff_eshwara.jpeg" },
    { name: "Kokila Priyanthi", designation: "Lecturer in Human Resource Management", dept: "Faculty of Management", qualification: "MHRM, B.Sc (HRM)", img: "/images/staff_portraits/staff_kokila_priyanthi.jpeg" },
    { name: "K. Siriwardana", designation: "Lecturer in Logistics & Supply Chain", dept: "Faculty of Management", qualification: "M.Sc in Logistics, CILT Chartered", img: "/images/staff_portraits/staff_siriwardana.jpeg" },
    { name: "Ramziya Begam", designation: "Lecturer in Tourism & Hospitality", dept: "Faculty of Management", qualification: "M.Sc in Tourism, B.A", img: "/images/staff_portraits/staff_ramziya_begam.jpeg" },
    { name: "Shantha Herath", designation: "Lecturer in Educational Psychology", dept: "Faculty of Education", qualification: "M.Ed, B.Ed, Diploma in Psychology", img: "/images/staff_portraits/staff_shantha_herath.jpeg" },
    { name: "Chandrasiri Yapa", designation: "Senior Consultant in Marketing", dept: "Faculty of Management", qualification: "Chartered Marketer, MBA, CIM UK", img: "/images/staff_portraits/staff_chandrasiri_yapa.jpeg" },
    { name: "W. Senadeera", designation: "Lecturer in Primary Education", dept: "Faculty of Education", qualification: "B.Ed, Higher National Diploma in Teaching", img: "/images/staff_portraits/staff_senadeera.jpeg" },
    { name: "Sumith Weerasinghe", designation: "Senior Lecturer in Accounting", dept: "Faculty of Management", qualification: "Chartered Accountant (CA), B.Sc Accounting", img: "/images/staff_portraits/staff_weerasinghe_sum.jpeg" },
    { name: "Anupama Ranaweera", designation: "Lecturer in Professional English", dept: "Faculty of Humanities", qualification: "MA in Linguistics, BA (Hons) English", img: "/images/staff_portraits/staff_anupama_ranaweera.jpeg" },
    { name: "Imanai Randhuli", designation: "Lecturer in Information Systems", dept: "Faculty of Information Technology", qualification: "B.Sc (Hons) in Software Engineering", img: "/images/staff_portraits/staff_imanai_randhuli.jpeg" },
    { name: "Harshani Sandanayake", designation: "Lecturer in Digital Marketing", dept: "Faculty of Management", qualification: "MBA, Google Certified Professional", img: "/images/staff_portraits/staff_harshani_sandanayake.jpeg" },
    { name: "Kanthi Bulegoda", designation: "Senior Lecturer in Education Management", dept: "Faculty of Education", qualification: "M.Ed, Post Graduate Diploma in Education", img: "/images/staff_portraits/staff_kanthi_bulegoda.jpeg" },
    { name: "Nayani Aberathna", designation: "Lecturer in Counselling & Psychology", dept: "Faculty of Healthcare & Psychology", qualification: "M.Sc in Clinical Psychology, BA", img: "/images/staff_portraits/staff_nayani_aberathna.jpeg" },
    { name: "Thasneema Farouk", designation: "Lecturer in Business Law & Ethics", dept: "Faculty of Management", qualification: "LL.M, LL.B (Hons), Attorney-at-Law", img: "/images/staff_portraits/staff_thasneema_farouk.jpeg" },
    { name: "Ishadi Nilaweera", designation: "Lecturer in Data Science & AI", dept: "Faculty of Information Technology", qualification: "M.Sc in Artificial Intelligence, B.Sc", img: "/images/staff_portraits/staff_ishadi_nilaweera.jpeg" },
    { name: "Dinuka Wanninayake", designation: "Lecturer in Cybersecurity", dept: "Faculty of Information Technology", qualification: "CISSP, B.Sc in Network Security", img: "/images/staff_portraits/staff_dinuka_wanninayake.jpeg" },
    { name: "Wimala Herath", designation: "Lecturer in Early Childhood Education", dept: "Faculty of Education", qualification: "B.Ed, Diploma in Early Childhood", img: "/images/staff_portraits/staff_wimala_herath.jpeg" },
    { name: "Chathurangi Ayesha", designation: "Lecturer in Entrepreneurship", dept: "Faculty of Management", qualification: "MBA, BBA (Special)", img: "/images/staff_portraits/staff_chathurngi_ayesha.jpeg" },
    { name: "Anuruddika Jayarathana", designation: "Lecturer in Office Systems", dept: "Faculty of Management", qualification: "Diploma in Secretarial Studies, B.Com", img: "/images/staff_portraits/staff_anuruddika_jayarathana.jpeg" },
    { name: "Sithumini Wijesekara", designation: "Lecturer in Customer Service Strategy", dept: "Faculty of Management", qualification: "MBA, B.Sc Management", img: "/images/staff_portraits/staff_sithumini_wijesekara.jpeg" },
    { name: "Chamath Nanayakkara", designation: "Lecturer in Blockchain Systems", dept: "Faculty of Information Technology", qualification: "B.Sc (Hons) Computing, Certified Blockchain Developer", img: "/images/staff_portraits/staff_chamath_nanayakkara.jpeg" },
  ];

  const filteredFaculty = faculty.filter((f) => {
    const matchesSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.designation.toLowerCase().includes(search.toLowerCase()) ||
      f.dept.toLowerCase().includes(search.toLowerCase());
    const matchesDept =
      filterDept === "all" ||
      (filterDept === "management" && f.dept.includes("Management")) ||
      (filterDept === "it" && f.dept.includes("Information Technology")) ||
      (filterDept === "education" && f.dept.includes("Education")) ||
      (filterDept === "fintech" && f.dept.includes("FinTech"));
    return matchesSearch && matchesDept;
  });

  return (
    <div className="bg-[#f8fafc] text-slate-900 pt-20">
      {/* Header Banner */}
      <section className="bg-[#0f264d] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-sliit-orange">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link href="/" className="hover:text-sliit-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-sliit-orange">Lecturer Panel</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Distinguished Lecturer Panel
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            Meet our esteemed panel of professors, doctorates, certified corporate consultants, and experienced lecturers dedicated to mentoring the next generation of global leaders.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        {/* Search & Department Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-200 shadow-card">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilterDept("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterDept === "all" ? "bg-sliit-navy text-white shadow-sm" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Departments
            </button>
            <button
              onClick={() => setFilterDept("management")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterDept === "management" ? "bg-sliit-navy text-white shadow-sm" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Management &amp; Business
            </button>
            <button
              onClick={() => setFilterDept("it")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterDept === "it" ? "bg-sliit-navy text-white shadow-sm" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              IT &amp; Computing
            </button>
            <button
              onClick={() => setFilterDept("education")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterDept === "education" ? "bg-sliit-navy text-white shadow-sm" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Education &amp; Pedagogy
            </button>
            <button
              onClick={() => setFilterDept("fintech")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterDept === "fintech" ? "bg-sliit-navy text-white shadow-sm" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              FinTech &amp; Banking
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search lecturer name, title, department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sliit-orange"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFaculty.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-3 border-slate-200 group-hover:border-sliit-orange transition-colors shadow-xs">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
                </div>

                <div className="text-center space-y-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-sliit-navy-50 text-sliit-navy">
                    {f.dept}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-sliit-navy transition-colors">
                    {f.name}
                  </h3>
                  <p className="text-xs font-bold text-sliit-orange">{f.designation}</p>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed pt-1">
                    {f.qualification}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-center">
                <a
                  href={`https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20classes%20conducted%20by%20${encodeURIComponent(f.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-sliit-navy hover:text-sliit-orange transition-colors flex items-center gap-1"
                >
                  <span>Inquire Regarding Lectures</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
