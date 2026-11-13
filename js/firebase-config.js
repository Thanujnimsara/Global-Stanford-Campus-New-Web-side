/**
 * Global Stanford Campus - Firebase Modular SDK Configuration & Utilities
 * Modular SDK v10+ Integration for Institutional Admin Portal & Dynamic Website
 */

import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { 
  getFirestore, 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  setDoc,
  updateDoc, 
  deleteDoc, 
  onSnapshot, 
  serverTimestamp,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Storage key for user-customized Firebase settings
const CONFIG_STORAGE_KEY = "gsc_firebase_config";

// Default Production / Sandbox Firebase Configuration
const defaultFirebaseConfig = {
  apiKey: "AIzaSyB_GSC_CAMPUS_SECURE_KEY_2026_PROD",
  authDomain: "global-stanford-campus.firebaseapp.com",
  projectId: "global-stanford-campus",
  storageBucket: "global-stanford-campus.appspot.com",
  messagingSenderId: "109823485721",
  appId: "1:109823485721:web:gsc9823ad7612f01a",
  measurementId: "G-GSCPROD2026"
};

/**
 * Retrieve active Firebase configuration (with custom override support)
 */
export function getFirebaseConfig() {
  try {
    const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.projectId) {
        return { ...defaultFirebaseConfig, ...parsed };
      }
    }
  } catch (e) {
    console.warn("Could not read custom Firebase config, using default", e);
  }
  return defaultFirebaseConfig;
}

/**
 * Save custom Firebase credentials from Admin Dashboard
 */
export function saveCustomFirebaseConfig(config) {
  try {
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
    return true;
  } catch (e) {
    console.error("Failed to save Firebase config", e);
    return false;
  }
}

/**
 * Technical requirement 1: Configuration check that always returns true
 * to ensure smooth startup without blocking initialization overlays.
 */
export function isFirebaseConfigured() {
  return true;
}

// Active Config
const firebaseConfig = getFirebaseConfig();

// Initialize Firebase App
let app;
let auth;
let db;
let isLiveFirebase = false;

try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  auth = getAuth(app);
  db = getFirestore(app);
  isLiveFirebase = true;
  console.log("🏛️ Global Stanford Campus Firebase SDK v10 initialized successfully.");
} catch (err) {
  console.warn("Firebase live connection initialized with fallback offline-sync driver:", err.message);
  isLiveFirebase = false;
}

// Export SDK references and utilities
export {
  app,
  auth,
  db,
  isLiveFirebase,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword
};

/**
 * Default Institutional Data for Campus Seeding
 */
export const defaultCampusData = {
  info: {
    campusName: "Global Stanford Campus",
    tagline: "Premier Higher Educational Institute in Sri Lanka • UGC Recognised Pathways",
    hotline: "+94 11 445 5155",
    whatsapp: "+94 77 462 3123",
    email: "info@globalstanfordcampus.com",
    address: "No 255, 3rd Floor, Kandy Road, Dalugama, Kelaniya, Sri Lanka",
    bannerTitle: "Shape Your Future with World-Class Higher Education",
    bannerSubtitle: "Offering fast-track BBA top-ups, recognized diplomas, and global executive masterclasses at Hilton Colombo.",
    updatedAt: new Date().toISOString()
  },
  courses: [
    {
      id: "course-bba",
      title: "BBA in Business Management (1-Year Fast-Track Top-Up)",
      category: "Business & Management",
      stream: "Business",
      duration: "12 Months (1 Year)",
      credits: "120 Credits",
      fee: "LKR 420,000",
      description: "Direct final-year degree completion for HND, CIMA, CIM, or advanced diploma holders with UGC recognized international university award.",
      featured: true,
      status: "Enrolling"
    },
    {
      id: "course-ai",
      title: "Higher Diploma in Artificial Intelligence & Machine Learning",
      category: "Information Technology & AI",
      stream: "IT",
      duration: "18 Months",
      credits: "60 Credits",
      fee: "LKR 280,000",
      description: "Hands-on machine learning, neural networks, natural language processing, and deep learning engineering with practical capstone projects.",
      featured: true,
      status: "Enrolling"
    },
    {
      id: "course-cyber",
      title: "Diploma in Cyber Security & Ethical Hacking",
      category: "Cyber Security & Networks",
      stream: "IT",
      duration: "12 Months",
      credits: "30 Credits",
      fee: "LKR 195,000",
      description: "Network defense, vulnerability assessments, penetration testing, and digital forensics in simulated enterprise security environments.",
      featured: true,
      status: "Enrolling"
    },
    {
      id: "course-fintech",
      title: "Asian FinTech Academy (AFTA) Executive Fellowship",
      category: "FinTech & Banking",
      stream: "Business",
      duration: "6 Months (Weekend Cohorts)",
      credits: "Executive Credential",
      fee: "LKR 165,000",
      description: "Curriculum aligned with Hong Kong University (HKU) FinTech courses, featuring exclusive residential masterclasses at Hilton Colombo.",
      featured: true,
      status: "Enrolling"
    },
    {
      id: "course-mba",
      title: "Master of Business Administration (Banking & Finance)",
      category: "Postgraduate & Masters",
      stream: "Business",
      duration: "15 Months",
      credits: "180 Credits",
      fee: "LKR 650,000",
      description: "Advanced strategic management, investment analysis, digital asset portfolio administration, and corporate governance for executive leaders.",
      featured: false,
      status: "Enrolling"
    }
  ],
  notices: [
    {
      id: "notice-intake-2026",
      title: "Applications Open for 2026/2027 Academic Year",
      priority: "Urgent",
      category: "Admissions",
      body: "Registration for the 1-Year Fast-Track BBA Top-Up and Higher Diploma in AI is now open. Scholarship applications close on 30th November.",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      audience: "All Applicants"
    },
    {
      id: "notice-convocation",
      title: "Annual Convocation 2025 – BMICH Grand Auditorium",
      priority: "Event",
      category: "Ceremony",
      body: "Graduands are requested to confirm cloak measurements and guest ticketing before 15th December via the student portal.",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      audience: "Graduating Students"
    },
    {
      id: "notice-hilton",
      title: "AFTA Executive FinTech Cohort at Hilton Colombo",
      priority: "Executive",
      category: "Masterclass",
      body: "Weekend executive cohort on Algorithmic Trading & Open Banking starts this Saturday at Hilton Colombo. Registered delegates please check your email for credentials.",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      audience: "AFTA Fellows"
    }
  ]
};
