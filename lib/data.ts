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
    title: "College",
    location: "Bangalore, India",
    description:
      "I graduated with Bachelor's degree in Computer Science and Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Developer Intern",
    location: "Delhi, India",
    description:
      "I worked as a Developer Intern for 3 months, gaining hands-on experience in development. During this time, I also upskilled to full-stack development",
    icon: React.createElement(CgWorkAlt),
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
  "Java",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;