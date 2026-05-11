import type { ClientCategory } from "@/types/content";

export const clientCategories: ClientCategory[] = [
  {
    id: "cafes-restaurants",
    label: "Cafes and restaurants",
    actionFrame: "Menu views, bookings, event inquiries, and local discovery.",
    examples: ["Cafe", "Cloud kitchen", "Fine-dine restaurant"],
    trustProblem: "People need ambiance, menu clarity, location confidence, and proof before visiting.",
    primaryActions: ["Call", "Reserve", "View menu", "Get directions"],
  },
  {
    id: "hotels-stays",
    label: "Hotels and stays",
    actionFrame: "Direct bookings, room discovery, and seasonal campaigns.",
    examples: ["Boutique hotel", "Homestay", "Serviced apartment"],
    trustProblem: "Guests need real expectations, location clarity, policies, and a reason to book direct.",
    primaryActions: ["Check availability", "Call", "View rooms", "Ask a question"],
  },
  {
    id: "schools-institutes",
    label: "Schools and institutes",
    actionFrame: "Admissions, parent trust, program discovery, and inquiry routing.",
    examples: ["Preschool", "Coaching center", "Skill institute"],
    trustProblem: "Parents and learners compare credibility, outcomes, curriculum, and responsiveness.",
    primaryActions: ["Book a visit", "Download details", "Apply", "Ask admissions"],
  },
  {
    id: "clinics-wellness",
    label: "Clinics and wellness",
    actionFrame: "Appointment inquiries, specialist pages, and patient education.",
    examples: ["Dental clinic", "Physiotherapy", "Skin clinic"],
    trustProblem: "Patients need safety signals, credentials, treatment clarity, and simple appointment paths.",
    primaryActions: ["Book appointment", "Call", "View services", "Find clinic"],
  },
  {
    id: "b2b-suppliers",
    label: "B2B suppliers",
    actionFrame: "Lead generation, catalog clarity, quote requests, and national search reach.",
    examples: ["Manufacturer", "Distributor", "Service contractor"],
    trustProblem: "Buyers need capability proof, compliance signals, category depth, and fast quote handling.",
    primaryActions: ["Request quote", "View catalog", "Send requirements", "Call sales"],
  },
];
