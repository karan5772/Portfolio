export const data = {
  name: "Karan Kumar",
  title: "MERN Stack & Gen AI Developer",
  location: "India",
  summary:
    "Freelance MERN Stack & Gen AI developer. I build full-stack web apps, AI-powered tools, and REST APIs — from idea to deployment. B.Tech Computer Engineering graduate, BKBIET Pilani, 2026.",
  profileImage:
    "https://github.com/karan5772/MyTute/blob/main/frontend/public/KaranKumar.jpg?raw=true",
  email: "karankumar8239@gmail.com",
  phone: "+916350320901",
  resumeUrl:
    "https://drive.google.com/file/d/1ZEeh9m7UDY9raQQiTN-6Hd6EEFCspGl2/view?usp=sharing",

  roles: [
    "MERN Stack Developer",
    "Gen AI Engineer",
    "Full Stack Developer",
    "Open Source Enthusiast",
  ],

  social: [
    { platform: "GitHub", url: "https://github.com/karan5772", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/karan5772", icon: "linkedin" },
    { platform: "X / Twitter", url: "https://x.com/karankumar5772", icon: "twitter" },
    { platform: "Hashnode", url: "https://hashnode.com/@karan5772", icon: "hashnode" },
  ],

  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Qdrant DB",
    "OpenAI SDK",
    "LangChain",
    "Gen AI",
    "Docker",
    "REST APIs",
    "Git",
    "Clerk Auth",
  ],

  projects: [
    {
      title: "MyTute AI",
      image:
        "https://raw.githubusercontent.com/karan5772/MyTute/refs/heads/main/frontend/public/Screenshot1.png",
      description:
        "RAG-based AI tutor that answers questions from user PDFs and YouTube transcripts using OpenAI and Qdrant. Features per-user ephemeral collections with session-based isolation and auto-clear on exit.",
      tags: ["React.js", "Node.js", "Express.js", "OpenAI", "LangChain", "Qdrant DB", "Clerk Auth"],
      repoUrl: "https://github.com/karan5772/mytute",
      featured: true,
    },
    {
      title: "Repo Review",
      image:
        "https://raw.githubusercontent.com/karan5772/ai-revierer/refs/heads/main/Screenshot%202026-05-24%20at%204.00.02%E2%80%AFPM.png",
      description:
        "AI-powered code review assistant that analyzes GitHub repositories using LLMs to provide actionable feedback, identify bugs, and visualize code quality metrics.",
      tags: ["React.js", "Node.js", "Express.js", "OpenAI SDK", "CodeMirror"],
      repoUrl: "https://github.com/karan5772/ai-revierer",
      featured: false,
    },
    {
      title: "DSASnippets",
      image:
        "https://github.com/karan5772/dsasnippets/blob/main/Screenshot%202025-12-08%20at%203.57.16%E2%80%AFPM.png?raw=true",
      description:
        "Coding practice platform supporting multiple programming languages with Judge0 for real-time code execution and AI-generated coding problems.",
      tags: ["MERN", "Judge0", "Docker", "PostgreSQL"],
      repoUrl: "https://github.com/karan5772/dsasnippets",
      featured: false,
    },
    {
      title: "QuizApp",
      image:
        "https://github.com/karan5772/quizApp/blob/main/Screenshot%202025-12-08%20at%204.13.06%E2%80%AFPM.png?raw=true",
      description:
        "Full-stack platform for coding and MCQ-based quizzes with analytics and performance tracking for students and educators.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
      repoUrl: "https://github.com/karan5772/quizApp",
      featured: false,
    },
    {
      title: "Agentic CLI Dev Tool",
      image:
        "https://github.com/karan5772/codingAgent/blob/main/Screenshot%202025-12-08%20at%204.15.08%E2%80%AFPM.png?raw=true",
      description:
        "AI-powered CLI that acts as a developer agent, inspired by Cursor, using the start→plan→act→observe loop. Capable of autonomously generating full-stack apps from natural language.",
      tags: ["Node.js", "JavaScript", "OpenAI"],
      repoUrl: "https://github.com/karan5772/codingAgent",
      featured: false,
    },
  ],

  experience: [
    {
      company: "Google",
      position: "Student Ambassador — Google Gemini",
      period: "2025",
      description:
        "Organised workshops and events to promote awareness and adoption of Google Gemini and AI. Acted as a liaison between Google and students, fostering a developer community and sharing feedback.",
      type: "ambassador",
    },
    {
      company: "Code Caffeine, Jhunjhunu",
      position: "Web Development Intern",
      period: "2025",
      description:
        "Contributed to internal web tools using React.js and Node.js. Built reusable components and secure REST APIs.",
      type: "internship",
    },
    {
      company: "BILLFOREST Solutions, Patna",
      position: "Web Development Intern",
      period: "2024",
      description:
        "Designed social media graphics, banners, and presentation assets. Contributed to branding, layout planning, and UI mockups for internal projects.",
      type: "internship",
    },
  ],

  education: [
    {
      institution: "B K Birla Institute of Engineering & Technology, Pilani",
      degree: "B.Tech — Computer Engineering",
      period: "2022 – 2026",
      gpa: null,
      description: "Graduated 2026. Focused on full-stack development, machine learning, and AI applications. Served as Google Student Ambassador for Gemini — organised developer workshops and promoted AI adoption across campus.",
    },
    {
      institution: "Birla School, Pilani",
      degree: "Senior Secondary — CBSE",
      period: "2022",
      gpa: null,
      description: "Science stream with Mathematics, Physics, and Computer Science.",
    },
  ],

  achievements: [
    { title: "AWS APAC Solutions Architecture", org: "AWS", year: "2024" },
    { title: "Deloitte Technology Job Simulation", org: "Deloitte", year: "2024" },
    { title: "Deloitte Australia Cybersecurity Simulation", org: "Deloitte", year: "2024" },
    { title: "HackerRank CSS Certification", org: "HackerRank", year: "2023" },
    { title: "Complete Web Development Bootcamp", org: "Udemy / Hitesh Choudhary", year: "2023" },
    { title: "Web Dev Cohort Live 1.0", org: "ChaiCode", year: "2024" },
    { title: "GenAI with JS", org: "ChaiCode", year: "2024" },
  ],

  nav: ["Home", "About", "Projects", "Experience", "Education", "Contact"],
}
