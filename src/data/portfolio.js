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
      title: "Astro AI",
      image: "https://astro.karanchoudhary.dev/og.png",
      description:
        "Vedic astrology platform powered by AI. Generates a full sidereal birth chart from your birth date, time, and location, then lets you ask anything — via text or real-time voice — with answers grounded in your actual planetary positions.",
      tags: ["Next.js", "OpenAI", "Voice AI", "Vedic Charts", "Real-time"],
      categories: ["ai", "fullstack"],
      liveUrl: "https://astro.karanchoudhary.dev",
      repoUrl: null,
    },
    {
      title: "Basant Event Ticketing",
      image: "/projects/basant.png",
      description:
        "Production ticketing system for BKBIET's annual cultural festival. Three-part system: a user-facing ticket booking portal, an admin dashboard for inventory and sales management, and a scanner app for real-time entry verification at the gate.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      categories: ["freelance"],
      liveUrl: "https://bkbietbasant.in",
      repoUrl: null,
    },
    {
      title: "BKBIHE College Website",
      image: "https://bkbihe.vercel.app/og.png",
      description:
        "Complete institutional website covering 15+ pages — admissions, academics, faculty directory, infrastructure, research journal, and an AI-powered admission enquiry using Google Gemini.",
      tags: ["React.js", "TypeScript", "Google Gemini", "Tailwind CSS"],
      categories: ["freelance"],
      liveUrl: "https://bkbihe.vercel.app",
      repoUrl: null,
    },
    {
      title: "Loop Moto India",
      image: "https://loopmoto.vercel.app/og.png",
      description:
        "Product and marketing website for an ARAI-certified EV retrofitting company. Showcases electric retrofit kits for cycles, bikes, and commercial vehicles with specs, turnkey solutions, and a pan-India service network.",
      tags: ["React.js", "Vite", "CSS"],
      categories: ["freelance"],
      liveUrl: "https://loopmoto.vercel.app",
      repoUrl: null,
    },
    {
      title: "MyTute AI",
      image:
        "https://raw.githubusercontent.com/karan5772/MyTute/refs/heads/main/frontend/public/Screenshot1.png",
      description:
        "RAG-based AI tutor that answers questions from user PDFs and YouTube transcripts using OpenAI and Qdrant. Features per-user ephemeral collections with session-based isolation and auto-clear on exit.",
      tags: ["React.js", "Node.js", "Express.js", "OpenAI", "LangChain", "Qdrant DB", "Clerk Auth"],
      categories: ["ai", "fullstack"],
      repoUrl: "https://github.com/karan5772/mytute",
    },
    {
      title: "Repo Review",
      image:
        "https://raw.githubusercontent.com/karan5772/ai-revierer/refs/heads/main/Screenshot%202026-05-24%20at%204.00.02%E2%80%AFPM.png",
      description:
        "AI-powered code review assistant that analyzes GitHub repositories using LLMs to provide actionable feedback, identify bugs, and visualize code quality metrics.",
      tags: ["React.js", "Node.js", "Express.js", "OpenAI SDK", "CodeMirror"],
      categories: ["ai"],
      repoUrl: "https://github.com/karan5772/ai-revierer",
    },
    {
      title: "DSASnippets",
      image:
        "https://github.com/karan5772/dsasnippets/blob/main/Screenshot%202025-12-08%20at%203.57.16%E2%80%AFPM.png?raw=true",
      description:
        "Coding platform where creators build problems and coders solve them. AI-generated problems, real-time code execution via Judge0, premium playlists, leaderboards, and daily streaks.",
      tags: ["React.js", "Node.js", "PostgreSQL", "Judge0", "Docker"],
      categories: ["fullstack"],
      repoUrl: "https://github.com/karan5772/dsasnippets",
    },
    {
      title: "QuizApp",
      image:
        "https://github.com/karan5772/quizApp/blob/main/Screenshot%202025-12-08%20at%204.13.06%E2%80%AFPM.png?raw=true",
      description:
        "Full-stack platform for coding and MCQ-based quizzes with analytics and performance tracking for students and educators.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
      categories: ["freelance", "fullstack"],
      repoUrl: "https://github.com/karan5772/quizApp",
    },
    {
      title: "Agentic CLI Dev Tool",
      image:
        "https://github.com/karan5772/codingAgent/blob/main/Screenshot%202025-12-08%20at%204.15.08%E2%80%AFPM.png?raw=true",
      description:
        "AI-powered CLI that acts as a developer agent, inspired by Cursor, using the start→plan→act→observe loop. Capable of autonomously generating full-stack apps from natural language.",
      tags: ["Node.js", "JavaScript", "OpenAI"],
      categories: ["ai"],
      repoUrl: "https://github.com/karan5772/codingAgent",
    },
    {
      title: "College Grievance Portal",
      image: "/projects/college-portal.jpg",
      description:
        "Full-stack platform bridging the communication gap between students and faculty. Students raise grievances, faculty address them — with transparent status tracking and admin oversight throughout.",
      tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      categories: ["freelance", "fullstack"],
      repoUrl: "https://github.com/karan5772/college-resolutation-portel",
    },
    {
      title: "X → Notion Extension",
      image: null,
      description:
        "Chrome extension (v1.3) that adds a one-click button on x.com to send any tweet directly to your Notion database. Uses the Notion API with a background service worker and content script injection.",
      tags: ["Chrome Extension", "JavaScript", "Notion API"],
      categories: ["fullstack"],
      repoUrl: "https://github.com/karan5772/Twitter-X--Notion",
    },
    {
      title: "Chai With AI Buddies",
      image: null,
      description:
        "Chat UI where you pick an AI persona — Hitesh Choudhary or Piyush Garg — and have a conversation in their voice. Frontend in vanilla HTML/CSS/JS; backend in Node.js using Google Gemini.",
      tags: ["Node.js", "Express.js", "Google Gemini", "JavaScript"],
      categories: ["ai"],
      repoUrl: "https://github.com/karan5772/Ai-Persona-Assistant",
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
