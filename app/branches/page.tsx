import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight, Building, Mail } from "lucide-react";

export default function BranchesPage() {
  const branches = [
    {
      city: "Kelaniya (Head Office & Main Campus)",
      province: "Western Province",
      address: "No 255, 3rd Floor, Kandy Road, Dalugama, Kelaniya, Sri Lanka",
      phone: "0117 173 030",
      mobile: "0744 124 772",
      email: "kelaniya@globalstanfordcampus.com",
      hours: "Monday – Sunday: 8:30 AM – 5:30 PM",
      features: "Executive Boardroom, Interactive Lecture Theatres, LMS Digital Studio, Admissions Desk",
    },
    {
      city: "Kandy Regional Campus",
      province: "Central Province",
      address: "Kandy City Center Commercial Area, Kandy, Sri Lanka",
      phone: "0812 121 821",
      mobile: "0744 124 773",
      email: "kandy@globalstanfordcampus.com",
      hours: "Tuesday – Sunday: 8:30 AM – 5:00 PM",
      features: "Smart Classrooms, Student Counselling Centre, Weekend Batch Lecture Halls",
    },
    {
      city: "Matara Regional Campus",
      province: "Southern Province",
      address: "Anagarika Dharmapala Mawatha, Matara, Sri Lanka",
      phone: "041 765 5556",
      mobile: "0744 124 780",
      email: "matara@globalstanfordcampus.com",
      hours: "Tuesday – Sunday: 8:30 AM – 5:00 PM",
      features: "Maritime Logistics Desk, Student Study Pods, Exam Centre",
    },
    {
      city: "Badulla Regional Campus",
      province: "Uva Province",
      address: "Lower King Street, Badulla, Sri Lanka",
      phone: "0744 124 771",
      mobile: "0744 124 771",
      email: "badulla@globalstanfordcampus.com",
      hours: "Wednesday – Sunday: 8:30 AM – 5:00 PM",
      features: "Regional Learning Pod, Digital Lab, Teacher Education Wing",
    },
    {
      city: "Ampara Regional Campus",
      province: "Eastern Province",
      address: "Main Street, Ampara, Sri Lanka",
      phone: "0744 124 774",
      mobile: "0744 124 774",
      email: "ampara@globalstanfordcampus.com",
      hours: "Wednesday – Sunday: 8:30 AM – 5:00 PM",
      features: "Bilingual Lecture Facilities (Tamil / English), Multimedia Labs",
    },
    {
      city: "Jaffna Regional Campus",
      province: "Northern Province",
      address: "Hospital Road, Jaffna, Sri Lanka",
      phone: "0744 124 772",
      mobile: "0744 124 772",
      email: "jaffna@globalstanfordcampus.com",
      hours: "Wednesday – Sunday: 8:30 AM – 5:00 PM",
      features: "IT Computer Labs, Regional Library, Undergraduate Study Lounge",
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 pt-20">
      {/* Header Banner */}
      <section className="bg-[#0f264d] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-sliit-orange">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Link href="/" className="hover:text-sliit-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-sliit-orange">Campuses &amp; Branches</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Island-wide Campus Network
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            Global Stanford Campus brings recognized higher education closer to you with regional centres spanning Western, Central, Southern, Uva, Eastern, and Northern provinces.
          </p>
        </div>
      </section>

      {/* Main Campuses List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-sliit-orange/10 text-sliit-orange">
                    {b.province}
                  </span>
                  <Building className="w-5 h-5 text-sliit-navy" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {b.city}
                </h3>

                <div className="space-y-2 text-xs text-slate-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-sliit-orange shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-sliit-navy shrink-0" />
                    <span>Landline: <a href={`tel:${b.phone}`} className="font-bold font-mono hover:underline">{b.phone}</a></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hotline: <a href={`tel:${b.mobile}`} className="font-bold font-mono hover:underline">{b.mobile}</a></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{b.hours}</span>
                  </p>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700 block mb-0.5">Facilities Available:</span>
                  {b.features}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`tel:${b.mobile}`}
                  className="text-xs font-bold text-sliit-navy hover:text-sliit-orange transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Branch</span>
                </a>

                <a
                  href={`https://wa.me/94741623123?text=Hello%20Global%20Stanford%20Campus%2C%20I%20would%20like%20to%20visit%20the%20${encodeURIComponent(b.city)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-sliit-orange hover:bg-sliit-orange-600 text-white font-bold text-xs shadow-sm transition-all"
                >
                  WhatsApp Branch
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
