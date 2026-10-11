export const portfolioData = {
  personal: {
    name: "Chandashi Gupta",
    title: "Software Engineering Student",
    subtitle:
      "Artificial Intelligence & Machine Learning student building full-stack and AI-driven applications.",
    introduction:
      "Software Engineering student with hands-on experience building full-stack and AI-driven applications end to end — from schema design and backend APIs to real-time, client-side systems.",
    github: "https://github.com/chandshi-g",
    linkedin: "https://linkedin.com/in/chandashi-gupta-821062324",
    codolio: "https://codolio.com/profile/mushkiii26",
  },

  education: [
    {
      institution: "VIT Bhopal University",
      degree: "B.Tech — Artificial Intelligence & Machine Learning",
      period: "Expected graduation: 2028",
      cgpa: "8.6",
    },
  ],

  skills: {
    languages: ["Java", "Python", "JavaScript", "C++", "SQL"],
    frameworks: ["Spring Boot", "React", "Node.js / Express", "Vue.js"],
    toolsAndPlatforms: [
      "MySQL",
      "MongoDB",
      "Docker",
      "Git / GitHub",
      "AWS fundamentals",
      "REST API Design",
      "Networking",
    ],
    coreCS: [
      "Data Structures & Algorithms",
      "Object-Oriented Design",
      "Problem Solving",
      "Complexity Analysis",
      "Computer Networks",
    ],

    aiAssistedDevelopment: [
      "GitHub Copilot",
      "Google Antigravity",
      "Ollama + Llama 3.1",
      "Google Gemini API integration",
      "Prompt Engineering",
    ],
  },


  projects: [
    {
      id: "huddle",
      name: "Huddle",
      subtitle: "Hackathon Team-Coordination Telegram Bot",
      type: "Hackathon Project",
      technologies: ["Python", "FastAPI", "PostgreSQL", "CrewAI"],
      achievement: "",
      description:
        "AI-powered Telegram bot designed for hackathon team coordination.",
      keyPoints: [
        "Designed the PostgreSQL data layer for a 4-agent CrewAI system.",
        "Solved concurrent read/write access so agents could safely share task and progress state.",
        "Built FastAPI webhook and query functions used by the other agent modules.",
        "Built task auto-assignment based on member skillset.",
        "Implemented real-time notifications for pending work.",
      ],
      contributionNote:
        "Contributed to the data layer and FastAPI integration.",
      githubUrl: "https://github.com/chandshi-g/Huddle",
      liveUrl: "",
    },
    {
      id: "drishti",
      name: "Drishti",
      subtitle: "Real-Time Eye Health Monitor",
      type: "Hackathon Project",
      technologies: [
        "React",
        "MediaPipe FaceMesh",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      achievement: "First Runner-Up — Hackmatrix Hackathon",
      description:
        "Real-time eye health monitoring application using computer vision to track blink rate and screen distance and provide digital wellness guidance.",
      keyPoints: [
        "Tuned MediaPipe FaceMesh landmark tracking for stable blink-rate and screen-distance readings at 30+ FPS entirely client-side.",
        "Built Node.js/Express and MongoDB backend for session analytics.",
        "Designed rules-based coaching such as 20-20-20 rule reminders.",
        "Coaching reacts to live tracking data in real time.",
      ],
      contributionNote: "",
      githubUrl: "https://github.com/chandshi-g/Drishti",
      liveUrl: "",
    },
    {
      id: "ecommerce",
      name: "E-Commerce Application",
      subtitle: "Full-Stack E-Commerce Platform",
      type: "Personal Project",
      technologies: ["Spring Boot", "Vue.js", "MySQL", "Docker", "Stripe"],
      achievement: "",
      description:
        "Full-stack e-commerce application built end to end with Spring Boot, Vue.js, MySQL, Docker, and Stripe.",
      keyPoints: [
        "Designed relational schema connecting users, products, cart, wishlist, and orders.",
        "Built Spring Boot REST API and Vue.js frontend.",
        "Containerized the application using Docker.",
        "Implemented user authentication.",
        "Integrated Stripe for payment processing.",
      ],
      contributionNote: "",
      githubUrl: "https://github.com/chandshi-g/E-Commerce-app",
      liveUrl: "",
    },
  ],

  contributions: [
    {
      id: "dsa-community",
      organization: "DSA Community, VIT Bhopal",
      role: "Core Member",
      description:
        "Collaborated with team members to organize technical events, coding workshops, and community-driven learning initiatives focused on Data Structures and Algorithms.",
    },
    {
      id: "gfg-chapter",
      organization: "GeeksforGeeks Student Chapter, VIT Bhopal",
      role: "Social Media Team Member",
      description:
        "Created and managed social media content, promoted technical events and coding workshops, and contributed to student participation and community outreach.",
    },
  ],

  certifications: [
    {
      title: "Fundamentals of AI and ML",
      issuer: "Vityarthi, VIT Bhopal University",
    },
    {
      title: "Open Source Software (Linux)",
      issuer: "Vityarthi, VIT Bhopal University",
    },
    {
      title: "Applied Machine Learning in Python",
      issuer: "Coursera",
    },
  ],

  beyondTech: [
    {
      label: "Writing",
      description:
        "Sometimes thoughts are easier to write down than explain.",
    },
    {
      label: "Badminton",
      description:
        "A good excuse to get away from the screen and move around.",
    },
    {
      label: "Chess",
      description:
        "A casual game of chess whenever I feel like thinking a few moves ahead.",
    },
    {
      label: "Exploring",
      description:
        "Finding new places, wandering around, and getting out of the usual routine.",
    },
  ],

  contact: {
    email: "chandashig26@gmail.com",
    github: "https://github.com/chandshi-g",
    linkedin: "https://linkedin.com/in/chandashi-gupta-821062324",
    codolio: "https://codolio.com/profile/mushkiii26",
  },
}
