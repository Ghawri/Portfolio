export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Utility';
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Intermediate';
    icon?: string;
  }[];
}

export const personalInfo = {
  name: "Ishant Ghawri",
  role: "Full Stack Web Developer",
  tagline: "Specializing in MERN Stack, Next.js, and High-Performance Web Applications",
  bio: "Passionate and detail-oriented Full Stack Developer with 2+ years of experience engineering dynamic, user-centric web applications. Holding a Bachelor of Computer Applications (BCA) and currently pursuing a Master of Computer Applications (MCA), I combine solid theoretical foundations with hands-on production expertise in modern JavaScript, React, Next.js, Node.js, and database architecture.",
  availability: "Available for Full-time Roles & Freelance Projects",
  location: "India",
  email: "ishantghawri2002@gmail.com",
  github: "https://github.com/Ghawri",
  linkedin: "https://www.linkedin.com/in/ishantghawri/",
  resumeUrl: "/Ishant-resume.pdf",
  profileImage: "/assets/mypic.jpeg",
  aboutImage: "/assets/myaboutpic.jpeg",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Core Technologies", value: "12+" },
    { label: "Degree Level", value: "BCA / MCA" },
  ]
};

export const educationList = [
  {
    degree: "Master of Computer Applications (MCA)",
    status: "Currently Pursuing",
    focus: "Advanced Software Engineering, Cloud Systems, and Full Stack Architectures",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    status: "Completed",
    focus: "Data Structures, Database Management Systems, Web Technologies, and OOP",
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Proficient" },
      { name: "HTML5 & Semantic Web", level: "Advanced" },
      { name: "Modern CSS3 & Flex/Grid", level: "Advanced" },
      { name: "Responsive UI/UX Design", level: "Advanced" },
    ]
  },
  {
    title: "Backend & Systems",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "Socket.io (WebSockets)", level: "Proficient" },
      { name: "PHP", level: "Intermediate" },
      { name: "JWT & Authentication", level: "Proficient" },
    ]
  },
  {
    title: "Databases & Cloud",
    iconName: "Database",
    skills: [
      { name: "MongoDB & Mongoose", level: "Advanced" },
      { name: "MySQL / Relational DB", level: "Proficient" },
      { name: "Render Deployment", level: "Advanced" },
      { name: "Vercel & Netlify", level: "Proficient" },
      { name: "Database Schema Design", level: "Proficient" },
    ]
  },
  {
    title: "Tools & DevOps Workflow",
    iconName: "Cpu",
    skills: [
      { name: "Git & Version Control", level: "Advanced" },
      { name: "GitHub & CI/CD", level: "Advanced" },
      { name: "Postman API Testing", level: "Advanced" },
      { name: "VS Code & Debugging", level: "Advanced" },
      { name: "npm / pnpm / yarn", level: "Advanced" },
    ]
  }
];

export const projectsList: ProjectItem[] = [
  {
    id: "wechat-app",
    title: "Real-Time Chat Application (WeChat)",
    category: "Full Stack",
    description: "An instant messaging platform featuring real-time bidirectional communication via WebSockets, persistent user authentication, online presence tracking, and responsive message threading.",
    highlights: [
      "Real-time bidirectional messaging powered by Socket.io",
      "Secure JWT authentication and bcrypt password hashing",
      "Dynamic message history persistence with MongoDB",
      "Mobile-optimized responsive chat interface"
    ],
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "CSS3"],
    image: "/assets/chatapp.png",
    githubUrl: "https://github.com/Ghawri/wechat",
    liveUrl: "https://wechat-032b.onrender.com",
    featured: true
  },
  {
    id: "text-utils",
    title: "TextUtils - React Productivity App",
    category: "Frontend",
    description: "A fast, client-side text analytics and transformation suite built with React. Enables users to instantly inspect word counts, reading duration, case modifications, whitespace cleanup, and clipboard exports.",
    highlights: [
      "Instant real-time word, character, and sentence counters",
      "Multiple text transformation pipelines (Uppercase, Lowercase, Inverse, Clear)",
      "High-contrast dark & light mode toggling",
      "Copy-to-clipboard with user visual feedback"
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    image: "/assets/react.png",
    githubUrl: "https://github.com/Ghawri/TextUtils-React",
    liveUrl: "https://ghawri.github.io/TextUtils-React/",
    featured: true
  },
  {
    id: "tic-tac-toe",
    title: "Interactive Tic-Tac-Toe Game",
    category: "Utility",
    description: "A sleek, responsive browser-based multiplayer Tic-Tac-Toe game featuring intelligent winning-pattern detection, turn indicators, move counter, and game state reset mechanics.",
    highlights: [
      "Dynamic win condition analysis algorithm across 8 combinations",
      "Active player turn indicator with animated highlight",
      "Smooth victory state celebration and reset controls",
      "Fully responsive touch and click interaction design"
    ],
    tech: ["JavaScript", "HTML5 Canvas/DOM", "CSS3 Animations"],
    image: "/assets/tictactoe.png",
    githubUrl: "https://github.com/Ghawri/tic-tac-toe",
    liveUrl: "https://ghawri.github.io/Tic-Tac-Toe-Front2/",
    featured: false
  }
];
