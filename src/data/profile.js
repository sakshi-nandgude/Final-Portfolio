// ─────────────────────────────────────────────────────────────
// PROFILE: edit your name, intro, contact details and links here.
// ─────────────────────────────────────────────────────────────
export const profile = {
  name: "Sakshi Vijay Nandgude",
  headline: "Data analyst and analytics engineer",
  roles: [
    "Data Analyst",
    "Analytics Engineer",
    "Software Engineer",
    "Data Engineer",
    "Data Scientist",
  ],
  intro:
    "I build analytics that run in production: data pipelines, quality checks, dashboards and the APIs behind them.",

  // Shown in the About section. Add more strings for more paragraphs.
  summary: [
    "Data professional and software engineer based in Limerick, Ireland, currently finishing an MSc in Business Analytics at the University of Limerick (2026) on top of a Computer Science degree (BCA, 9.32 CGPA, First Class with Distinction).",
    "I build systems that run in production (backend APIs, cloud infrastructure and agentic AI pipelines), combining engineering rigour with analytics and business intelligence. I have worked across the full analytics lifecycle: requirements gathering, data quality assessment, machine learning, dashboard design and executive-level reporting.",
    "Currently performing real-time data quality assurance on live AFL sports data feeds at Stats Perform.",
  ],

  location: "Limerick, Ireland",
  email: "sakshinandgude6@gmail.com",
  phone: "+353 858083112", // set to "" to hide the phone number
  workAuth: "Work authorised Stamp 1G",

  links: {
    linkedin: "https://www.linkedin.com/in/sakshi-nandgude-2457a4302/",
    github: "https://github.com/sakshi-nandgude",
  },

  // File placed in the /public folder. Set to "" to hide the button.
  resume: "",

  // The small "result table" in the hero. Add or remove rows freely.
  snapshot: [
    { label: "role", value: "Data Analyst · Analytics Engineer · Data Engineer" },
    { label: "now", value: "AFL Analyst, Stats Perform" },
    { label: "studying", value: "MSc Business Analytics, University of Limerick (2026)" },
    { label: "degree", value: "BCA, 9.32 CGPA, First Class with Distinction" },
    { label: "stack", value: "Python · SQL · Power BI · Spark · Azure" },
    { label: "based in", value: "Limerick, Ireland" },
    { label: "work auth", value: "Stamp 2 (Stamp 1G after course completion)" },
  ],
};

// Navigation order. `id` must match a section id in App.jsx.
export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];
