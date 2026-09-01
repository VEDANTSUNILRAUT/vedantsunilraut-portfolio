export interface EducationItem {
  id: string;
  levelTag: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  score: {
    type: "CGPA" | "Percentage";
    value: string;
    label: string;
  };
  status: string;
  description: string;
  highlights: string[];
  courses: string[];
  badge: string;
  isFeatured?: boolean;
  colorScheme: {
    border: string;
    glow: string;
    text: string;
    badgeBg: string;
    pillBg: string;
    gradient: string;
  };
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "graduation",
    levelTag: "BACHELOR OF ENGINEERING (B.E.)",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science & Engineering",
    institution: "Sipna College of Engineering & Technology, Amravati",
    location: "Maharashtra, India",
    duration: "2021 – 2025",
    score: {
      type: "CGPA",
      value: "9.6 / 10.0",
      label: "University & College Topper",
    },
    status: "Graduation (Completed)",
    description:
      "Graduated with a 9.6/10 CGPA, securing the University Topper and College Topper positions in Computer Science & Engineering. Developed a strong foundation in Computer Science, Software Development, native mobile architecture, and modern Web Technologies.",
    highlights: [
      "Secured University Topper & College Topper positions in Computer Science & Engineering with 9.6 / 10.0 CGPA",
      "Built Talent-Bridge, an AI-integrated placement web application, as a final-year project",
      "Participated in hackathons and coding competitions, strengthening problem-solving and teamwork skills",
      "Developed a strong foundation in core Computer Science, Software Engineering, and Web Technologies",
    ],
    courses: [
      "Data Structures & Algorithms",
      "Android SDK & Mobile Dev",
      "Object-Oriented Programming",
      "Database Management (SQL)",
      "Operating Systems",
      "Web Technologies",
      "Software Engineering",
      "Computer Networks",
    ],
    badge: "University Topper · 9.6 CGPA",
    isFeatured: true,
    colorScheme: {
      border: "hover:border-purple-500/60",
      glow: "from-purple-500/25 via-indigo-500/15 to-transparent",
      text: "text-purple-400",
      badgeBg: "bg-purple-500/10 border-purple-500/30 text-purple-300",
      pillBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      gradient: "from-purple-500 to-indigo-500",
    },
  },
  {
    id: "12th-hsc",
    levelTag: "HIGHER SECONDARY (12TH)",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science Stream",
    institution: "Adarsha Science, Jairamdas Bhagchand Arts & Birla Commerce Mahavidyalaya, Dhamangaon Railway",
    location: "Maharashtra, India",
    duration: "2020 – 2021",
    score: {
      type: "Percentage",
      value: "90.67%",
      label: "First Class with Distinction",
    },
    status: "Completed",
    description:
      "Completed higher secondary education with a strong focus on Science, physics, chemistry, and mathematics.",
    highlights: [
      "Achieved 90.67% in Higher Secondary Certificate (HSC) board examination",
      "Completed higher secondary education with a focused specialization in Science",
      "Actively participated in Volleyball representing the college team",
    ],
    courses: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "English Communication",
    ],
    badge: "HSC Science · 90.67%",
    isFeatured: false,
    colorScheme: {
      border: "hover:border-cyan-500/50",
      glow: "from-cyan-500/20 via-blue-500/10 to-transparent",
      text: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
      pillBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      gradient: "from-cyan-500 to-blue-600",
    },
  },
  {
    id: "10th-ssc",
    levelTag: "SECONDARY SCHOOL (10TH)",
    degree: "Secondary School Certificate (SSC)",
    field: "General Academics",
    institution: "Shri Kanhoji Baba Vidhyalay, Anjansingi",
    location: "Maharashtra, India",
    duration: "2018 – 2019",
    score: {
      type: "Percentage",
      value: "85.65%",
      label: "First Class with Distinction",
    },
    status: "Completed",
    description:
      "Achieved 85.65% in secondary education with a strong foundation in science, mathematics, and demonstrated leadership.",
    highlights: [
      "Achieved 85.65% in Secondary School Certificate (SSC) examinations",
      "Served as Volleyball Team Captain, demonstrating leadership and teamwork",
    ],
    courses: [
      "Mathematics & Geometry",
      "General Science",
      "Social Sciences",
      "English & Languages",
    ],
    badge: "SSC · 85.65%",
    isFeatured: false,
    colorScheme: {
      border: "hover:border-emerald-500/50",
      glow: "from-emerald-500/20 via-teal-500/10 to-transparent",
      text: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
      pillBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      gradient: "from-emerald-500 to-teal-600",
    },
  },
];

