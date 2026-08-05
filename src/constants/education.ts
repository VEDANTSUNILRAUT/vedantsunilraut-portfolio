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
    levelTag: "BACHELOR'S DEGREE (B.TECH / B.E.)",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Sipna College of Engineering & Technology, Amravati",
    location: "Maharashtra, India",
    duration: "2021 – 2025",
    score: {
      type: "CGPA",
      value: "9.60 / 8.85 CGPA",
      label: "First Class with Distinction",
    },
    status: "Graduation (Completed)",
    description:
      "Comprehensive degree specializing in core computer science, software engineering principles, native mobile architecture, cloud systems, and modern full-stack web applications.",
    highlights: [
      "Class & Department Topper in 8th Semester & 7th Semester",
      "Class Topper & 2nd in Department in 4th Semester",
      "Lead Student Developer & Organizer for Campus Technical Fest & Engineering Society",
      "Vidyoten Makeathon Winner & Kridayan Cricket Team Member",
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
    institution: "Adarsha Science, Jairamdas Bhagchand Arts and Birla Commerce Mahavidyalaya",
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
      "Setter & Attacker for College Volleyball Team",
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
      border: "hover:border-purple-500/50",
      glow: "from-purple-500/20 via-violet-500/10 to-transparent",
      text: "text-purple-400",
      badgeBg: "bg-purple-500/10 border-purple-500/30 text-purple-300",
      pillBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      gradient: "from-purple-500 to-violet-600",
    },
  },
  {
    id: "10th-ssc",
    levelTag: "SECONDARY SCHOOL (10TH)",
    degree: "Secondary School Certificate (SSC)",
    field: "General Academics & Foundation Science",
    institution: "Shree Kanhoji Baba Vidyalaya, Anjansingi",
    location: "Maharashtra, India",
    duration: "2013 – 2019",
    score: {
      type: "Percentage",
      value: "94.50%",
      label: "School Distinction Topper",
    },
    status: "10th Standard (Completed)",
    description:
      "Foundational high school education building exceptional strengths in mathematics, general science, logic puzzles, and fundamental computer usage.",
    highlights: [
      "Academic topper for six consecutive years (5th to 10th grade)",
      "Exam Center Topper in 10th Grade Board Exams",
      "Captain of Cricket Team & Volleyball Team",
      "2nd Place in Taluka Level Quiz Competition (Twice) & Winner in Debate/Science Fair",
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
      border: "hover:border-violet-500/50",
      glow: "from-violet-500/20 via-indigo-500/10 to-transparent",
      text: "text-violet-400",
      badgeBg: "bg-violet-500/10 border-violet-500/30 text-violet-300",
      pillBg: "bg-violet-500/10 text-violet-300 border-violet-500/20",
      gradient: "from-violet-500 to-indigo-600",
    },
  },
];

