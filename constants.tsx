
import { JobSector } from './types';

export const MOTIVATIONAL_QUOTES = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Your career is like a garden. It can hold an assortment of life's experiences. — Eileen Fisher",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "The future depends on what you do today. — Mahatma Gandhi"
];

export const JOB_SECTORS: JobSector[] = [
  {
    id: "1",
    title: "Software Development",
    category: "Technology",
    description: "Builds applications and systems using programming languages to solve real-world problems.",
    salary: "₹4,00,000 – ₹12,00,000 per annum",
    icon: "fa-code",
    roadmap: ["Obtain foundational degree in relevant field", "Learn programming languages and development tools", "Build real-world projects", "Complete certifications", "Apply for internships / entry-level roles"],
    requirements: ["Bachelor’s Degree", "Strong Analytical Skills", "Programming Knowledge", "Good Communication"]
  },
  {
    id: "2",
    title: "Web Development",
    category: "Technology",
    description: "Creates and maintains websites and web applications with responsive designs.",
    salary: "₹3,00,000 – ₹10,00,000 per annum",
    icon: "fa-globe",
    roadmap: ["Learn HTML, CSS, JavaScript", "Master frontend/backend frameworks", "Build portfolio websites", "Gain internship experience", "Apply for web developer roles"],
    requirements: ["Basic Coding Skills", "Creativity", "Problem Solving", "Web Technologies Knowledge"]
  },
  {
    id: "3",
    title: "UI / UX Design",
    category: "Creative",
    description: "Designs intuitive and user-friendly digital interfaces and experiences.",
    salary: "₹4,00,000 – ₹12,00,000 per annum",
    icon: "fa-pen-nib",
    roadmap: ["Learn design principles", "Master design tools (Figma, Adobe XD)", "Create design portfolio", "Conduct user research", "Apply for junior designer roles"],
    requirements: ["Creativity", "Design Thinking", "Prototyping Skills", "Communication"]
  },
  {
    id: "4",
    title: "Data Science & Analytics",
    category: "Technology",
    description: "Analyzes data to extract insights and support decision-making.",
    salary: "₹6,00,000 – ₹15,00,000 per annum",
    icon: "fa-chart-pie",
    roadmap: ["Learn statistics and mathematics", "Master Python / R", "Work with real datasets", "Build data projects", "Apply for analyst roles"],
    requirements: ["Analytical Skills", "Programming Knowledge", "Statistics", "Problem Solving"]
  },
  {
    id: "5",
    title: "Artificial Intelligence & Machine Learning",
    category: "Technology",
    description: "Develops intelligent systems that learn and improve automatically.",
    salary: "₹7,00,000 – ₹18,00,000 per annum",
    icon: "fa-robot",
    roadmap: ["Learn ML fundamentals", "Study algorithms and models", "Build AI projects", "Gain certifications", "Apply for ML roles"],
    requirements: ["Strong Math Skills", "Python Programming", "Logical Thinking", "Research Ability"]
  },
  {
    id: "6",
    title: "Cyber Security",
    category: "Technology",
    description: "Protects systems and networks from cyber threats and attacks.",
    salary: "₹5,00,000 – ₹14,00,000 per annum",
    icon: "fa-shield-halved",
    roadmap: ["Learn networking basics", "Study security concepts", "Practice ethical hacking", "Earn security certifications", "Apply for security analyst roles"],
    requirements: ["Networking Knowledge", "Ethical Mindset", "Analytical Thinking", "Attention to Detail"]
  },
  {
    id: "7",
    title: "Mobile App Development",
    category: "Technology",
    description: "Builds mobile applications for Android and iOS platforms.",
    salary: "₹4,00,000 – ₹12,00,000 per annum",
    icon: "fa-mobile-screen",
    roadmap: ["Learn Java/Kotlin or Swift", "Use mobile frameworks", "Develop sample apps", "Publish apps", "Apply for app developer roles"],
    requirements: ["Programming Skills", "UI Sense", "Problem Solving", "Platform Knowledge"]
  },
  {
    id: "8",
    title: "Cloud Computing",
    category: "Technology",
    description: "Manages cloud infrastructure and services for scalable applications.",
    salary: "₹6,00,000 – ₹16,00,000 per annum",
    icon: "fa-cloud",
    roadmap: ["Learn cloud basics", "Master AWS/Azure/GCP", "Work on cloud projects", "Get certified", "Apply for cloud roles"],
    requirements: ["Networking Basics", "System Knowledge", "Cloud Platforms", "Analytical Skills"]
  },
  {
    id: "9",
    title: "Networking & System Administration",
    category: "Technology",
    description: "Maintains computer networks and IT infrastructure.",
    salary: "₹3,00,000 – ₹8,00,000 per annum",
    icon: "fa-server",
    roadmap: ["Learn networking concepts", "Practice system administration", "Earn certifications", "Gain hands-on experience", "Apply for admin roles"],
    requirements: ["Networking Skills", "Troubleshooting", "Technical Knowledge", "Attention to Detail"]
  },
  {
    id: "10",
    title: "Digital Marketing",
    category: "Marketing",
    description: "Promotes products and brands through online platforms.",
    salary: "₹3,00,000 – ₹9,00,000 per annum",
    icon: "fa-bullhorn",
    roadmap: ["Learn SEO & SEM", "Practice social media marketing", "Run campaigns", "Build portfolio", "Apply for marketing roles"],
    requirements: ["Creativity", "Marketing Knowledge", "Communication", "Analytical Skills"]
  },
  {
    id: "11",
    title: "Social Media Manager",
    category: "Marketing",
    description: "Manages brand presence across social media platforms.",
    salary: "₹3,00,000 – ₹8,00,000 per annum",
    icon: "fa-hashtag",
    roadmap: ["Learn platform strategies", "Create content", "Analyze engagement", "Grow brand pages", "Apply for SMM roles"],
    requirements: ["Content Skills", "Creativity", "Communication", "Trend Awareness"]
  },
  {
    id: "12",
    title: "Content Writing",
    category: "Marketing",
    description: "Creates written content for websites, blogs, and marketing.",
    salary: "₹2,50,000 – ₹7,00,000 per annum",
    icon: "fa-file-signature",
    roadmap: ["Improve writing skills", "Learn SEO basics", "Build writing samples", "Freelance or intern", "Apply for writer roles"],
    requirements: ["Language Skills", "Creativity", "Research Ability", "Time Management"]
  },
  {
    id: "13",
    title: "Graphic Design",
    category: "Creative",
    description: "Creates visual content for branding and marketing.",
    salary: "₹3,00,000 – ₹9,00,000 per annum",
    icon: "fa-palette",
    roadmap: ["Learn design basics", "Master design tools", "Build portfolio", "Work on real projects", "Apply for designer roles"],
    requirements: ["Creativity", "Design Tools", "Visual Thinking", "Communication"]
  },
  {
    id: "14",
    title: "Animation & Multimedia",
    category: "Creative",
    description: "Produces animated visuals and multimedia content.",
    salary: "₹3,50,000 – ₹10,00,000 per annum",
    icon: "fa-film",
    roadmap: ["Learn animation software", "Practice motion design", "Build demo reel", "Work on projects", "Apply for animator roles"],
    requirements: ["Creativity", "Animation Skills", "Software Knowledge", "Patience"]
  },
  {
    id: "15",
    title: "Game Development",
    category: "Creative",
    description: "Designs and develops video games.",
    salary: "₹4,00,000 – ₹12,00,000 per annum",
    icon: "fa-gamepad",
    roadmap: ["Learn game engines", "Study game design", "Build small games", "Publish projects", "Apply for game roles"],
    requirements: ["Programming Skills", "Creativity", "Logical Thinking", "Passion for Games"]
  },
  {
    id: "16",
    title: "E-Commerce & Online Business",
    category: "Business",
    description: "Manages online stores and digital sales strategies.",
    salary: "₹4,00,000 – ₹10,00,000 per annum",
    icon: "fa-cart-shopping",
    roadmap: ["Learn e-commerce tools", "Study digital sales", "Manage online platforms", "Optimize operations", "Apply for roles"],
    requirements: ["Business Skills", "Marketing Knowledge", "Analytical Thinking", "Communication"]
  },
  {
    id: "17",
    title: "Banking & Finance",
    category: "Finance",
    description: "Manages financial transactions and investments.",
    salary: "₹4,00,000 – ₹12,00,000 per annum",
    icon: "fa-building-columns",
    roadmap: ["Study finance basics", "Learn banking systems", "Gain certifications", "Intern in banks", "Apply for roles"],
    requirements: ["Numerical Skills", "Financial Knowledge", "Integrity", "Analytical Skills"]
  },
  {
    id: "18",
    title: "Accounting & Auditing",
    category: "Finance",
    description: "Handles financial records and audits.",
    salary: "₹3,00,000 – ₹9,00,000 per annum",
    icon: "fa-calculator",
    roadmap: ["Learn accounting principles", "Practice tools", "Earn certifications", "Gain experience", "Apply for roles"],
    requirements: ["Accuracy", "Accounting Knowledge", "Ethics", "Analytical Skills"]
  },
  {
    id: "19",
    title: "Business Administration",
    category: "Management",
    description: "Manages business operations and strategies.",
    salary: "₹4,00,000 – ₹12,00,000 per annum",
    icon: "fa-briefcase",
    roadmap: ["Study business fundamentals", "Learn management skills", "Intern with companies", "Develop leadership", "Apply for admin roles"],
    requirements: ["Leadership", "Communication", "Decision Making", "Organization Skills"]
  },
  {
    id: "20",
    title: "Human Resource Management",
    category: "Management",
    description: "Manages recruitment and employee relations.",
    salary: "₹3,50,000 – ₹9,00,000 per annum",
    icon: "fa-users",
    roadmap: ["Learn HR principles", "Study labor laws", "Handle recruitment", "Gain experience", "Apply for HR roles"],
    requirements: ["Communication", "People Skills", "Ethics", "Organization"]
  },
  {
    id: "21",
    title: "Marketing & Sales",
    category: "Management",
    description: "Promotes and sells products/services.",
    salary: "₹3,00,000 – ₹10,00,000 per annum",
    icon: "fa-handshake",
    roadmap: ["Learn marketing basics", "Practice sales strategies", "Gain field experience", "Build performance record", "Apply for roles"],
    requirements: ["Communication", "Persuasion Skills", "Confidence", "Market Knowledge"]
  },
  {
    id: "22",
    title: "Entrepreneurship & Startups",
    category: "Management",
    description: "Builds and manages new business ventures.",
    salary: "Variable (Depends on Venture)",
    icon: "fa-lightbulb",
    roadmap: ["Identify business idea", "Learn management skills", "Build MVP", "Launch startup", "Scale business"],
    requirements: ["Risk Taking", "Leadership", "Creativity", "Decision Making"]
  },
  {
    id: "23",
    title: "Education & Teaching",
    category: "Academic",
    description: "Educates and mentors students.",
    salary: "₹2,50,000 – ₹8,00,000 per annum",
    icon: "fa-chalkboard-user",
    roadmap: ["Obtain relevant degree", "Learn teaching methods", "Gain classroom experience", "Get certified", "Apply for teaching roles"],
    requirements: ["Subject Knowledge", "Patience", "Communication", "Teaching Skills"]
  },
  {
    id: "24",
    title: "Research & Development",
    category: "Academic",
    description: "Innovates and develops new solutions and technologies.",
    salary: "₹5,00,000 – ₹14,00,000 per annum",
    icon: "fa-microscope",
    roadmap: ["Study advanced concepts", "Conduct research", "Publish papers", "Gain lab experience", "Apply for R&D roles"],
    requirements: ["Research Skills", "Analytical Thinking", "Innovation", "Technical Knowledge"]
  },
  {
    id: "25",
    title: "Healthcare & Medical Services",
    category: "Healthcare",
    description: "Provides medical care and health services.",
    salary: "₹4,00,000 – ₹15,00,000 per annum",
    icon: "fa-stethoscope",
    roadmap: ["Study medical field", "Gain clinical training", "Obtain licenses", "Practice professionally", "Specialize"],
    requirements: ["Medical Knowledge", "Compassion", "Ethics", "Patience"]
  },
  {
    id: "26",
    title: "Biotechnology",
    category: "Healthcare",
    description: "Applies biology and technology for innovation.",
    salary: "₹4,00,000 – ₹12,00,000 per annum",
    icon: "fa-dna",
    roadmap: ["Study biotechnology", "Conduct lab work", "Research projects", "Earn certifications", "Apply for roles"],
    requirements: ["Biology Knowledge", "Research Skills", "Accuracy", "Analytical Thinking"]
  },
  {
    id: "27",
    title: "Pharmaceutical Industry",
    category: "Healthcare",
    description: "Develops and distributes medicines.",
    salary: "₹4,00,000 – ₹12,00,000 per annum",
    icon: "fa-pills",
    roadmap: ["Study pharmacy", "Learn drug development", "Gain industry exposure", "Earn licenses", "Apply for roles"],
    requirements: ["Scientific Knowledge", "Ethics", "Attention to Detail", "Communication"]
  },
  {
    id: "28",
    title: "Mechanical Engineering",
    category: "Engineering",
    description: "Designs and maintains mechanical systems.",
    salary: "₹3,50,000 – ₹10,00,000 per annum",
    icon: "fa-gears",
    roadmap: ["Study engineering basics", "Learn CAD tools", "Gain practical training", "Intern in industries", "Apply for roles"],
    requirements: ["Technical Skills", "Problem Solving", "Mathematics", "Creativity"]
  },
  {
    id: "29",
    title: "Electrical & Electronics Engineering",
    category: "Engineering",
    description: "Works on electrical and electronic systems.",
    salary: "₹4,00,000 – ₹11,00,000 per annum",
    icon: "fa-bolt",
    roadmap: ["Study core subjects", "Practice lab work", "Learn design tools", "Gain experience", "Apply for roles"],
    requirements: ["Circuit Knowledge", "Technical Skills", "Analytical Thinking", "Safety Awareness"]
  },
  {
    id: "30",
    title: "Civil Engineering",
    category: "Engineering",
    description: "Designs and constructs infrastructure projects.",
    salary: "₹3,50,000 – ₹10,00,000 per annum",
    icon: "fa-trowel-bricks",
    roadmap: ["Study civil engineering", "Learn design software", "Work on site projects", "Gain certifications", "Apply for roles"],
    requirements: ["Structural Knowledge", "Planning Skills", "Problem Solving", "Teamwork"]
  },
  {
    id: "31",
    title: "Automobile Engineering",
    category: "Engineering",
    description: "Designs and improves vehicle systems.",
    salary: "₹4,00,000 – ₹11,00,000 per annum",
    icon: "fa-car",
    roadmap: ["Study automobile engineering", "Learn vehicle systems", "Gain workshop experience", "Work on projects", "Apply for roles"],
    requirements: ["Mechanical Knowledge", "Innovation", "Technical Skills", "Problem Solving"]
  },
  {
    id: "32",
    title: "Logistics & Supply Chain Management",
    category: "Services",
    description: "Manages movement of goods and services.",
    salary: "₹4,00,000 – ₹10,00,000 per annum",
    icon: "fa-truck-ramp-box",
    roadmap: ["Learn logistics concepts", "Study inventory management", "Gain industry experience", "Optimize processes", "Apply for roles"],
    requirements: ["Planning Skills", "Analytical Thinking", "Organization", "Communication"]
  },
  {
    id: "33",
    title: "Hospitality & Tourism",
    category: "Services",
    description: "Manages travel, hotels, and customer services.",
    salary: "₹3,00,000 – ₹8,00,000 per annum",
    icon: "fa-plane-up",
    roadmap: ["Study hospitality management", "Gain service experience", "Learn customer handling", "Intern in hotels", "Apply for roles"],
    requirements: ["Communication", "Customer Service", "Professionalism", "Adaptability"]
  },
  {
    id: "34",
    title: "Government & Public Services",
    category: "Services",
    description: "Works in public sector and government departments.",
    salary: "₹3,50,000 – ₹12,00,000 per annum",
    icon: "fa-landmark",
    roadmap: ["Prepare for competitive exams", "Study public administration", "Clear exams", "Training", "Serve in role"],
    requirements: ["Discipline", "Integrity", "Knowledge", "Commitment"]
  },
  {
    id: "35",
    title: "Environmental Science",
    category: "Academic",
    description: "Works on environmental protection and sustainability.",
    salary: "₹4,00,000 – ₹10,00,000 per annum",
    icon: "fa-leaf",
    roadmap: ["Study environmental science", "Conduct field research", "Work on sustainability projects", "Gain certifications", "Apply for roles"],
    requirements: ["Environmental Knowledge", "Research Skills", "Analytical Thinking", "Passion for Nature"]
  }
];
