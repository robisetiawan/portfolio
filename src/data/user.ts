import type { UserData } from "../types/portfolio";

export const USER_DATA: UserData = {
  name: "Robi Setiawan",
  role: "Full-Stack Developer",
  location: "Palembang, South Sumatera, Indonesia",
  email: "robistwn2000@gmail.com",
  summary:
    "Hello! I'm Robi Setiawan, a creative Full-Stack developer with 3+ years of experience in turning ideas into web products—from frontend to backend.",
  skills: [
    {
      name: "Backend & Database",
      items: ["PHP","Laravel","Node.js","MySQL", "SQL Server"]
    },
    {
        name: "Frontend ",
        items: ["Tailwind CSS", "Bootstrap","Javascript","Next.js", "React JS"]
    },
    {
      name: "CMS & Academic Systems",
      items: ["OJS", "WordPress"]
    },
  ],
  experience: [
    {
      company: "Universitas Bina Darma",
      role: "Full-Stack Developer",
      period: "May 2022 – Present",
      description: "Developed and maintained multiple full-stack applications using Laravel and Next.js. Managed SQL Server/MySQL databases."
    },
    {
      company: "PT. Lingkaran Sistem Intelektual",
      role: "Part-Time Full-Stack Developer",
      period: "Nov 2023 – Present",
      description: "Contributed to Lingkaran.id and ThinkEdu platforms focusing on content management and user interaction features."
    }
  ],
  projects: [
    {
      title: "Presensi Perkuliahan",
      description: "QR-code based attendance system.",
      tags: ["Laravel", "QR-Code", "Academic","Flutter","Next.js"],
      link: "#"
    },
    { title: "Esync", description: "Backend services for synchronizing academic data with the National Higher Education Feeder.", tags: ["API Integration", "Data Sync"], link: "#" },
    { title: "MBKM System", description: "End-to-end management for Merdeka Belajar programs, covering logbooks and assessment.", tags: ["Laravel", "Management System"], link: "#" },
    { title: "OBE System", description: "Curriculum mapping system for Outcome-Based Education standards.", tags: ["Education Tech", "Mapping"], link: "#" },
    { title: "Thinkedu", description: "Developed an online learning platform designed to deliver an engaging and structured learning experience.", tags: ["Laravel", "Learning Platform"], link: "https://thinkedu.id/" },
    { title: "Lingkaran.id", description: "News web platform focusing on content management and performance optimization.", tags: ["Next.js", "News Platform"], link: "https://lingkaran.id/" }
 
  ],
  certifications: [
    "Dicoding – JavaScript Programming",
    "Dicoding – Backend Development",
    "Dicoding – Web Programming",
    "Progate – HTML, CSS, SASS, JavaScript, Git",
    "Digitalent (Kominfo) – Front-End Development",
    "SoloLearn – HTML, JavaScript, Introduction to SQL",
    "SanberCode – React JS Web Frontend",
    "Hacktiv8 – AI Productivity and AI API Integration for Developers"
  ]
};
