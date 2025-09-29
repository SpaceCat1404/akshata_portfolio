export const portfolioData = {
  name: "Akshata Amara",
  email: "akshata.amara007@gmail.com",
  phone: "+91 9963847771",
  github: "https://github.com/Akshata-Amara",
  linkedin: "https://www.linkedin.com/in/akshata-amara-b3164a259/",
  tagline: "I break, build, and secure intelligent systems—then write the story so everyone gets it.",
  intro: "19 y | B.Tech AI/ML | Cyber-Security & Gen-AI builder | Ex-Vice-Captain | 98.6 % CBSE X | 8.58 CGPA | 3× Top-5 % Intl | Led 2 flagship projects | 1-click deploy portfolio below",
  areasOfExcellence: [
    { title: "Offensive & Defensive Security", description: "RSA P2P E2E chat, encryption algorithms, CTF lover" },
    { title: "Generative AI / LLM", description: "Transformer fine-tuning, prompt-injection defense, RAG pipelines" },
    { title: "Full-Stack Craft", description: "Python (FastAPI, Django) ► React (Next.js, TS) ► Postgres ► AWS / Vercel" },
    { title: "Data Ops", description: "Dataset curation, vector DBs, CI/CD, Git-flow, Docker, TDD" },
    { title: "Leadership & Storytelling", description: "School Vice-Captain, Cybernautica 2024 Lead, URA award-winning writer" },
  ],
  projects: [
    {
      title: "RSA P2P Secure Chat",
      description: "End-to-end encrypted room-based messenger; 0 deps crypto core; 1k+ GitHub stars.",
      tech: ["Python", "Cryptography", "Sockets", "E2E Encryption"],
      demoUrl: "https://github.com/Akshata-Amara/RSA-P2P-ENCRYPTED-CHAT-ROOM",
      repoUrl: "https://github.com/Akshata-Amara/RSA-P2P-ENCRYPTED-CHAT-ROOM",
      gif: "https://raw.githubusercontent.com/Akshata-Amara/RSA-P2P-ENCRYPTED-CHAT-ROOM/main/demo.gif",
    },
    {
      title: "Cantibot (ATL Lead)",
      description: "LLM-driven civic-help chatbot; 10k+ student queries answered; Karnataka Govt. featured.",
      tech: ["Generative AI", "LLM", "Python", "RAG"],
      demoUrl: "https://github.com/Akshata-Amara",
      repoUrl: "https://github.com/Akshata-Amara",
      gif: "https://raw.githubusercontent.com/Akshata-Amara/RSA-P2P-ENCRYPTED-CHAT-ROOM/main/demo.gif", // Reusing existing valid GIF
    },
    {
      title: "PaperPal",
      description: "Next.js + FastAPI, one-click spins up a dynamic research assistant.",
      tech: ["Next.js", "FastAPI", "React", "Python", "Gen-AI"],
      demoUrl: "https://github.com/Akshata-Amara",
      repoUrl: "https://github.com/Akshata-Amara",
      gif: "https://raw.githubusercontent.com/Akshata-Amara/RSA-P2P-ENCRYPTED-CHAT-ROOM/main/demo.gif", // Reusing existing valid GIF
    },
  ],
  achievements: [
    { title: "Mini-Nobel Laureate Scholar ��19", description: "national top 30" },
    { title: "Asset Intl.", description: "top 5 %ile 3 yrs consecutively" },
    { title: "Design Championship", description: "regional finalist ’20" },
    { title: "WhiteHat Jr.", description: "JS & Python double certification" },
    { title: "CBSE X", description: "98.6 % (school record)" },
    { title: "CBSE XII", description: "86.4 % while founding 2 tech clubs" },
  ],
  education: {
    university: "PES University, Bangalore",
    degree: "B.Tech CSE (AI/ML)",
    years: "2022-26",
    cgpa: "8.58/10",
  },
  microCertifications: [
    "Oracle Java",
  ],
  blogPosts: [
    {
      slug: "intro-to-ctf",
      title: "A Beginner's Guide to Capture The Flag (CTF)",
      date: "2024-07-15",
      content: "Capture The Flag (CTF) competitions are a fantastic way to learn and practice cybersecurity skills. This post breaks down the common categories like Web Exploitation, Cryptography, Reverse Engineering, and Forensics. We'll walk through a simple crypto challenge to get you started. The key is persistence and learning how to think like an attacker. Stay curious, and happy hacking!",
    },
    {
      slug: "defending-against-prompt-injection",
      title: "Defending LLMs: An Overview of Prompt Injection Attacks",
      date: "2024-06-28",
      content: "As Large Language Models (LLMs) become more integrated into applications, securing them is paramount. Prompt injection is a critical vulnerability where an attacker can hijack the model's output by crafting malicious inputs. This post explores different types of injection attacks, from simple instruction hijacking to more sophisticated multi-modal attacks. We'll also discuss defensive strategies like input sanitization, instruction defense, and using separate, privileged models for sensitive operations.",
    },
  ],
};
export type PortfolioData = typeof portfolioData;