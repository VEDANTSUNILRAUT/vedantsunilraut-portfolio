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
    levelTag: "BACHELOR'S DEGREE",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Institute of Engineering & Technology",
    location: "Maharashtra, India",
    duration: "2021 – 2025",
    score: {
      type: "CGPA",
      value: "8.85 / 10.0",
      label: "First Class with Distinction",
    },
    status: "Graduation (Completed)",
    description:
      "Comprehensive 4-year degree specializing in core computer science, software engineering principles, native mobile architecture, cloud systems, and modern full-stack web applications.",
    highlights: [
      "Specialized in Native Android (Kotlin/Compose) & Full-Stack Web Development",
      "Lead Student Developer for Campus Technical Fest & Engineering Society",
      "Created Capstone Project on High-Performance Mobile & Edge Computing Architecture",
      "Maintained top academic standing with 8.85 CGPA across all semesters",
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
    badge: "Graduation",
    colorScheme: {
      border: "hover:border-purple-500/50",
      glow: "from-purple-500/20 via-indigo-500/10 to-transparent",
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
    field: "Science Stream (Physics, Chemistry, Maths & CS)",
    institution: "Junior College of Science & Higher Secondary",
    location: "Maharashtra, India",
    duration: "2019 – 2021",
    score: {
      type: "Percentage",
      value: "91.80%",
      label: "Passed with High Distinction",
    },
    status: "12th Standard (Completed)",
    description:
      "Intensive 2-year pre-university education focused on advanced mathematics, physics, chemistry, and specialized computer science fundamentals.",
    highlights: [
      "Secured 91.80% overall score with High Distinction",
      "Achieved 98/100 in Computer Science paper & practicals",
      "Selected as Science Olympiad representative and Mathematics topper",
      "Built strong foundation in algorithmic logic, physics, and analytical calculus",
    ],
    courses: [
      "Computer Science & C++",
      "Higher Mathematics & Calculus",
      "Physics & Electronics",
      "Chemistry",
      "English Communication",
    ],
    badge: "12th Grade (HSC)",
    colorScheme: {
      border: "hover:border-cyan-500/50",
      glow: "from-cyan-500/20 via-blue-500/10 to-transparent",
      text: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
      pillBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      gradient: "from-cyan-500 to-blue-500",
    },
  },
  {
    id: "10th-ssc",
    levelTag: "SECONDARY SCHOOL (10TH)",
    degree: "Secondary School Certificate (SSC)",
    field: "General Academics & Foundation Science",
    institution: "St. Xavier High School",
    location: "Maharashtra, India",
    duration: "2018 – 2019",
    score: {
      type: "Percentage",
      value: "94.50%",
      label: "School Distinction Topper",
    },
    status: "10th Standard (Completed)",
    description:
      "Foundational high school education building exceptional strengths in mathematics, general science, logic puzzles, and fundamental computer usage.",
    highlights: [
      "Scored 94.50% in SSC Board Examinations, ranking among school toppers",
      "Awarded Excellence Medal in Science & Mathematics competitions",
      "Captain of School STEM Club & Lead organizer for Annual Science Fair",
      "Active participant in state-level quiz competitions and sports",
    ],
    courses: [
      "Mathematics & Geometry",
      "General Science & Physics",
      "Social Sciences",
      "Computer Fundamentals",
      "English & Languages",
    ],
    badge: "10th Grade (SSC)",
    colorScheme: {
      border: "hover:border-emerald-500/50",
      glow: "from-emerald-500/20 via-teal-500/10 to-transparent",
      text: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
      pillBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      gradient: "from-emerald-500 to-teal-500",
    },
  },
];
