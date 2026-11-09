# Global Stanford Campus - Official Web & LMS Platform

Fully restored Next.js 14 web application clone for **Global Stanford Campus (GSC)** based on `https://gsc-flax.vercel.app/`.

---

## 🚀 Features Restored

1. **Public Marketing Pages**:
   - **Home (`/`)**: Complete hero with video banner, statistical highlights (19+ Years, 4,500+ Graduates, 24 Diplomas, 6 Campuses), "Start Your Academic Journey" pathway, institutional profile, programs preview, FinTech & GAFM certification highlights, distinguished faculty, island-wide branch cards, convocation gallery, searchable FAQ accordion, latest campus news, and WhatsApp consultation banner.
   - **About Us (`/about`)**: Institutional profile & heritage since 2007, TVEC registration, UGC recognition pathways, vision, mission, and convocation galleries.
   - **Academic Catalog (`/programmes`)**: Full 24 Diploma programs (30 Cr), 8 Higher Diplomas (60 Cr), 1-Year Fast-Track BBA Top-Up, Postgraduate (M.Ed & MBA), and PhD doctorates with direct pre-filled WhatsApp inquiry buttons.
   - **Branch Network (`/branches`)**: Kelaniya Main Campus, Kandy, Matara, Badulla, Ampara, and Jaffna branch locations, telephone lines, and mobile hotlines.
   - **Certifications (`/certifications`)**: Asian FinTech Academy (AFTA) HKU pathway, Hilton executive cohorts, GAFM Board Certifications, and Prior Learning (RPL) evaluation.
   - **Distinguished Faculty (`/faculty`)**: All 28 academic professors, lecturers, and consultants with portraits, designations, and bios.
   - **Privacy Policy (`/privacy`)**: Sri Lanka Personal Data Protection Act (PDPA) compliant policy with interactive table of contents.
   - **LMS Login Portal (`/login`)**: Role-based access control with automatic role detection (`Campus Administrator`, `Faculty Lecturer`, `Enrolled Student`, `Admissions Officer`), remember me, password change modal, and password recovery modal.

2. **Assets & Styling**:
   - All 44+ original images, campus crests, staff portraits, and graduation banners in `public/images/`.
   - Complete Tailwind CSS setup with custom institute colors, fonts, and smooth scrolling.
   - Responsive Header (`Navbar.tsx`) with mobile drawer and interactive dropdowns.
   - Comprehensive Institutional Footer (`Footer.tsx`).

---

## 🛠️ How to Run Locally

### Development Server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build:
```bash
npm run build
npm start
```

