export const data = {
  name: "Karan Kumar",
  title: "MERN Stack & Gen AI Developer",
  location: "India",
  summary:
    "Freelance MERN Stack & Gen AI developer. I build full-stack web apps, AI-powered tools, and REST APIs, from idea to deployment. Shipped products with live payments, auth and AI, plus production systems for colleges and businesses, including a ticketing platform that handled 900+ users. B.Tech CSE graduate (9.1 CGPA), BKBIET Pilani, 2026.",
  profileImage: "/karan-kumar.jpg",
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
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/karan5772",
      icon: "linkedin",
    },
    {
      platform: "X / Twitter",
      url: "https://x.com/karankumar5772",
      icon: "twitter",
    },
    {
      platform: "Hashnode",
      url: "https://hashnode.com/@karan5772",
      icon: "hashnode",
    },
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
      title: "Bookcairn",
      image: "/projects/bookcairn-og.jpg",
      imageAspect: "1200 / 630",
      description:
        "A shelf for people who read tech books: rate a title out of five stars, tag it across 172 categories from compilers to engineering management, and keep a Want-to-read pile. Ships a 257-book catalogue resolved against Open Library, a \u2318K search palette over books, categories and readers, one-click shelving, a recommendation ranking sourced from a public meta-analysis of 36 engineering reading lists, public profile pages, per-URL SEO across every category and title, and an animated year-end recap exported to MP4 in the browser.",
      tags: [
        "Astro",
        "Svelte 5",
        "Cloudflare Workers",
        "D1",
        "Clerk",
        "Dodo Payments",
        "Tailwind 4",
      ],
      categories: ["fullstack"],
      liveUrl: "https://peppered.karankumar8239.workers.dev",
      repoUrl: null,
    },
    {
      title: "LinkRevive",
      image: "/projects/linkrevive-og.png",
      imageAspect: "1200 / 630",
      description:
        "SaaS that scans a YouTube channel's video descriptions for dead, untagged, and redirected affiliate links and estimates the yearly commission they cost. Free scan of the newest videos, a paid full report priced by catalog size, and weekly monitoring. Dual payments (Razorpay for INR, Dodo for USD), Clerk auth, and headless link re-checking.",
      tags: [
        "React.js",
        "Vite",
        "TypeScript",
        "Express.js",
        "MongoDB",
        "YouTube API",
        "Razorpay",
      ],
      categories: ["fullstack"],
      liveUrl: "https://linkrevive.karanchoudhary.dev",
      repoUrl: null,
    },
    {
      title: "Astro AI",
      image: "https://astro.karanchoudhary.dev/og.png",
      description:
        "Vedic astrology platform powered by AI. Generates a full sidereal birth chart from your birth date, time, and location, then lets you ask anything by text or real-time voice, with answers grounded in your actual planetary positions.",
      tags: ["Next.js", "OpenAI", "Voice AI", "Vedic Charts", "Real-time"],
      categories: ["ai", "fullstack"],
      liveUrl: "https://astro.karanchoudhary.dev",
      repoUrl: null,
    },
    {
      title: "Invoice Generator for Indian Freelancers",
      image: "https://invoice.karanchoudhary.dev/portfolio-image",
      description:
        "Free, GST-aware invoice generator for Indian freelancers. Handles CGST/SGST vs IGST automatically, PAN-only invoices without a GSTIN, exports under LUT, TDS notes, and real vector PDF downloads. No sign-up, and data never leaves the browser.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "react-pdf", "GST"],
      categories: ["fullstack"],
      liveUrl: "https://invoice.karanchoudhary.dev",
      repoUrl: "https://github.com/karan5772/InvoiceGenerator",
    },
    {
      title: "Bouquetgram",
      image: "/projects/bouquetgram-og.jpg",
      description:
        "Send a digital bouquet as a link: pick flowers, write a card, add a song and a 30-second voice note. Free to send with no accounts; songs and voice notes are small paid extras. Cards live in D1, voice notes in R2, and extras are paid through Razorpay.",
      tags: [
        "Astro",
        "Svelte 5",
        "Cloudflare Workers",
        "D1",
        "R2",
        "Razorpay",
        "Tailwind 4",
      ],
      categories: ["fullstack"],
      liveUrl: "https://bouquetgram.com",
      repoUrl: null,
    },
    {
      title: "Icon Saloon Slot Booking",
      image: "/projects/iconsalon-og.png",
      description:
        "Online slot reservations for a salon in Pilani. Customers pick services and a time, pay a reservation fee through Razorpay, and get a QR receipt. Slots are held for 5 minutes per attempt, payments are verified server-side, and the owner manages barbers, prices, services and days off from an admin panel. Rate-limited and D1-backed.",
      tags: ["Astro", "Cloudflare Workers", "D1", "Razorpay", "QR Codes"],
      categories: ["fullstack", "freelance"],
      liveUrl: "https://iconsalon.karankumar8239.workers.dev",
      repoUrl: null,
    },
    {
      title: "GATE CSE Visual Notes",
      image: "/projects/gate-cse-notes-og.png",
      description:
        "Visual, animated study notes for GATE Computer Science. Computer Organization & Architecture and Compiler Design are done, with 114 animated subtopics that walk through concepts step by step.",
      tags: ["React.js", "Vite", "Tailwind CSS", "Animation"],
      categories: ["fullstack"],
      liveUrl: "https://gate-cse-notes.karankumar8239.workers.dev",
      repoUrl: null,
    },
    {
      title: "Basant Event Ticketing",
      image: "https://bkbietbasant.in/BASANT.png",
      description:
        "Production ticketing system for BKBIET's annual cultural festival. Three-part system: a ticket booking portal, an admin dashboard for inventory and sales, and a scanner app for real-time entry verification at the gate. Served 900+ users, processed over \u20b910 lakh in transactions, and scaled to 450+ requests per minute.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      categories: ["freelance"],
      liveUrl: "https://bkbietbasant.in",
      repoUrl: null,
    },
    {
      title: "BKBIHE College Website",
      image: "https://bkbihe.vercel.app/og.png",
      description:
        "Complete institutional website covering 15+ pages: admissions, academics, faculty directory, infrastructure, research journal, and an AI-powered admission enquiry using Google Gemini.",
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
      title: "The Bliss Hotel",
      image: "https://thebliss-hotel.vercel.app/opengraph-image.jpg",
      imageAspect: "1200 / 630",
      description:
        "Luxury hotel website for a property in Pilani, Rajasthan. Deluxe rooms and premium suites with an availability checker and booking flow, a multi-cuisine restaurant and rooftop bar, a 500+ capacity conference hall, photo gallery, guest ratings, and a nearby-attractions guide.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React.js"],
      categories: ["freelance"],
      liveUrl: "https://thebliss-hotel.vercel.app",
      repoUrl: null,
    },
    {
      title: "Shree Anupam Hotel & Resort",
      image: "https://anupam-six.vercel.app/opengraph-image.png",
      imageAspect: "1200 / 630",
      description:
        "Website for a hotel, banquet, and farmhouse property in Chirawa, Rajasthan. Three room categories with live availability, an event enquiry and quote system for weddings and corporate offsites, a private farmhouse with heated pool, in-house Rajasthani and multi-cuisine dining, photo gallery, and testimonials.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React.js"],
      categories: ["freelance"],
      liveUrl: "https://anupam-six.vercel.app",
      repoUrl: null,
    },
    {
      title: "MyTute AI",
      image:
        "https://raw.githubusercontent.com/karan5772/MyTute/refs/heads/main/frontend/public/Screenshot1.png",
      description:
        "RAG-based AI tutor that answers questions from user PDFs and YouTube transcripts using OpenAI and Qdrant. Features per-user ephemeral collections with session-based isolation and auto-clear on exit.",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "OpenAI",
        "LangChain",
        "Qdrant DB",
        "Clerk Auth",
      ],
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
      imageAspect: "2988 / 1536",
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
        "Full-stack platform bridging the communication gap between students and faculty. Students raise grievances, faculty address them, with transparent status tracking and admin oversight throughout.",
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
        "Chat UI where you pick an AI persona (Hitesh Choudhary or Piyush Garg) and have a conversation in their voice. Frontend in vanilla HTML/CSS/JS; backend in Node.js using Google Gemini.",
      tags: ["Node.js", "Express.js", "Google Gemini", "JavaScript"],
      categories: ["ai"],
      repoUrl: "https://github.com/karan5772/Ai-Persona-Assistant",
    },
  ],

  experience: [
    {
      company: "Google",
      position: "Student Ambassador, Google Gemini",
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
      degree: "B.Tech, Computer Engineering",
      period: "2022 – 2026",
      gpa: "9.1 CGPA",
      description:
        "Graduated 2026 with a 9.1 CGPA. Focused on full-stack development, machine learning, and AI applications. Served as Google Student Ambassador for Gemini, organising developer workshops and promoting AI adoption across campus.",
    },
    {
      institution: "Birla School, Pilani",
      degree: "Senior Secondary (CBSE)",
      period: "2022",
      gpa: null,
      description:
        "Science stream with Mathematics, Physics, and Computer Science.",
    },
  ],

  achievements: [
    {
      title: "President, Nirmaan Organisation (BKBIET)",
      org: "BKBIET",
      year: "2025",
    },
    {
      title: "Tech Lead, Google Developer Student Clubs",
      org: "GDSC BKBIET",
      year: "2024",
    },
    {
      title: "Featured Developer on YouTube",
      org: "Chai aur Code",
      year: "2025",
    },
    { title: "AWS APAC Solutions Architecture", org: "AWS", year: "2024" },
    {
      title: "Deloitte Technology Job Simulation",
      org: "Deloitte",
      year: "2024",
    },
    {
      title: "Deloitte Australia Cybersecurity Simulation",
      org: "Deloitte",
      year: "2024",
    },
    { title: "HackerRank CSS Certification", org: "HackerRank", year: "2023" },
    {
      title: "Complete Web Development Bootcamp",
      org: "Udemy / Hitesh Choudhary",
      year: "2023",
    },
    { title: "Web Dev Cohort Live 1.0", org: "ChaiCode", year: "2024" },
    { title: "GenAI with JS", org: "ChaiCode", year: "2024" },
  ],

  nav: ["Home", "About", "Projects", "Experience", "Education", "Contact"],
};
