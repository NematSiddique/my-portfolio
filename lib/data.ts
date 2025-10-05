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
    title: "Full Stack Developer Intern",
    location: "Bangalore, India",
    description:
      "Currently interning at BDIPlus as a Developer Intern, contributing to scalable full-stack applications. Worked on automating dynamic file generation with AWS S3, building optimized CRM APIs with customizable filters, and refactoring SQL queries to improve response time by 93%. Developed responsive React UIs with reusable components, integrated Redux for efficient state management, and contributed to backend systems leveraging an orchestrator and Redis for secure, dynamic execution flows.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - Present",
  },
  {
    title: "Developer Intern",
    location: "Delhi, India",
    description:
      "Completed a 3-month internship at Makers' Muse, where I contributed to real-world development projects and enhanced my technical expertise. During this period, I expanded my skill set from frontend to full-stack development, gaining exposure to modern frameworks and best practices.",
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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Node.js",
  "Express",
  "Java",
  "Python",
  "FastAPI",
  "Flask",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "AWS S3",
  "AWS Lambda",
  "REST APIs",
  "Git",
  "CI/CD",
  "Tailwind CSS",
  "Framer Motion",
  "Material UI",
  "Prisma ORM",
  "Cucumber",
  "Postman",
  "Docker",
  "Agile/Scrum",
] as const;