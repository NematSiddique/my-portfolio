import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/ecommerce.png";
import pmImg from "@/public/project_management.png";
import cryptoImg from "@/public/crypto-market.png";
import habitImg from "@/public/habit-at.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SDE-1 | BDIPlus",
    location: "Bangalore, India",
    description:
      "Optimized backend services and SQL queries using CTEs (20s → <2s latency, 93% improvement). Built asyncio-based APIs, developed microservices, and improved database schema reliability while mentoring new engineers.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2026 - Present",
  },
  {
    title: "Full Stack Intern | BDIPlus",
    location: "Bangalore, India",
    description:
      "Built internal tools and analytics dashboards. Automated AWS S3 file generation, introduced staging data storage, and worked with SSE for real-time data streaming.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2025 - Dec 2025",
  },
  {
    title: "Developer Intern | Makers' Muse",
    location: "Delhi, India",
    description:
      "Contributed to frontend development, UI improvements, and reusable web components while supporting inventory system integration.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "College",
    location: "Bangalore, India",
    description:
      "I graduated with Bachelor's degree in Computer Science and Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Project Management",
    description:
      "A full-stack project management app with task tracking, role-based access, and AWS-powered authentication.",
    tags: [
      "Next.js",
      "Node.js",
      "Redux Toolkit",
      "PostgreSQL",
      "Prisma",
      "AWS",
    ],
    imageUrl: pmImg,
    url: "https://github.com/NematSiddique/project-management.git/",
  },
  {
    title: "E-Commerce",
    description:
      "A full-stack e-commerce website for buying wearables with an admin dashboard, secure payments, and caching",
    tags: ["MERN", "Stripe", "Tailwind CSS", "Redis", "Postman"],
    imageUrl: ecommerceImg,
    url: "https://github.com/NematSiddique/mern-ecommerce.git/",
  },
  {
    title: "CryptoMarket",
    description:
      "A real-time cryptocurrency market tracker with dynamic coin data, interactive charts, and detailed token stats.",
    tags: ["React", "Redux Toolkit", "CoinGecko API", "Binance", "Recharts", "Tailwind CSS"],
    imageUrl: cryptoImg,
    url: "https://github.com/NematSiddique/crypto-market.git/",
  },
  {
    title: "Habit-At",
    description:
      "A personal habit and analytics tracker with interactive charts, goal streaks, and progress dashboards.",
    tags: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "Framer Motion"],
    imageUrl: habitImg,
    url: "https://github.com/NematSiddique/Habit-At.git/",
  },
] as const;

export const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Flask", "Node.js", "Express", "Asyncio"],
  },
  {
    category: "Architecture & APIs",
    skills: ["Microservices", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS S3", "Docker"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Redux"],
  },
  {
    category: "UI / Styling",
    skills: ["Tailwind CSS", "Material UI"],
  },
  {
    category: "Tools",
    skills: ["Git", "Postman", "Jira", "CI/CD", "Agile/Scrum", "Prisma ORM"],
  },
] as const;