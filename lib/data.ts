import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/ecommerce.png";

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
    title: "E-Commerce",
    description:
      "A full-stack e-commerce website for buying wearables with an admin dashboard, secure payments, and caching",
    tags: ["MERN", "Stripe", "Tailwind CSS", "Redis", "Postman"],
    imageUrl: ecommerceImg,
    url: "https://mern-ecommerce-jd74.onrender.com/",
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