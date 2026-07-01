import { IResumeConfig } from "./dataType";
import photo from "../asset/photo/photo_2024.png";

export const RESUME_CONFIG: IResumeConfig = {
  personalInfo: {
    fullName: "Chutinan Chirdchoothum",
    role: "Senior Frontend Developer",
    phone: "+66 88-631-9555",
    email: "babyzalot@outlook.com",
    linkedinUrl: "https://www.linkedin.com/in/BabyZalot",
    githubUrl: "https://github.com/ZalotBabyZ",
    photoUrl: {photo, classOverride:"w-40 h-40 rounded-full mb-4 border-4 border-white shadow-md object-cover object-top"}
  },
  professionalSummary: "Senior Fullstack Developer (React/NodeJS/React Native) with 5 years of experience, specializing in architectural innovations that eliminate redundant workflows for QA and developers. Excels in cross-functional collaboration (PO, QA, UX/UI) to establish highly scalable and maintainable project foundations. Currently driven to design AI-integrated internal tools and architectures that optimize team efficiency, empowering cross-functional teams to systematically focus on true business value.",
  competencies: [
    { id: "comp-tech", category: "Technical Skills", skills: ["React", "React Native", "NextJS", "JavaScript", "TypeScript", "Firebase", "NodeJS", "Nest.js", "PostgreSQL", "MongoDB"],isA4: true, A4Position: "body" },
    { id: "comp-arch", category: "Architecture & Innovation", skills: ["Monorepo Architecture", "Multi-tenant System Design", "Core Structure Design", "Centralized Configuration", "Reusable Components"],isA4: true,A4Position: "body" },
    { id: "comp-proc", category: "Process & Leadership", skills: ["Cross-functional Collab", "Agile/Scrum", "Pre-dev Planning", "UI/UX Standardizing", "Storybook", "Feature Toggle"],isA4: true,A4Position: "side" },
    { id: "comp-ai", category: "AI Integration & Efficiency", skills: [ "AI Token Optimization", "Root-cause Analysis"],isA4: true,A4Position: "side" }
  ],
  experiences: [
  {
    "id": "exp-2",
    "company": "Axons (CPF IT Center)",
    "role": "Fullstack Developer - with Lead Frontend",
    "duration": "Aug 2023 – Dec 2025",
    "highlights": [
      {
        "id": "exp-2-hl-1",
        "title": "Leadership & Cross-Functional Workflow",
        "description": "Led frontend architectural design and technical strategy across 3 development teams. Partnered with POs and UX/UI in pre-development to resolve technical constraints early and established standardized workflows and UI documentation. This streamlined UX/UI-to-Dev handoffs, maintained project momentum, and ensured on-time project deliveries."
      },
      {
        "id": "exp-2-hl-2",
        "title": "Core Architecture & Rapid Adaptation",
        "description": "Leveraged highly flexible core architectures to rapidly adapt to various complex requirements. As a key example, a major late-stage integration was completed in just 2 weeks instead of the initial 2+ month estimate. Additionally, engineered centralized core structures—notably dynamic PDF and Excel import/export modules—allowing seamless cross-flow adaptability."
      },
      {
        "id": "exp-2-hl-5",
        "title": "QA & Dev Optimization",
        "description": "Developed a centralized configuration system that eliminated redundant UI testing, enabling QA to focus strictly on core business logic while significantly reducing code duplication and code review time for developers."
      },
      {
        "id": "exp-2-hl-3",
        "title": "AI Power User & Workflow Optimization",
        "description": "Accelerated complex feature delivery with near-zero bugs using advanced AI prompt engineering. Strategically optimized AI token consumption (reducing premium requests by 3x) and reallocated saved hours to cross-team architectural design."
      },
      {
        "id": "exp-2-hl-4",
        "title": "Cognitive-Based Mentorship",
        "description": "Mentored and upskilled junior developers by tailoring task assignments to their technical baselines and problem-solving styles, rapidly elevating them to professional team standards."
      }
    ]
  },
  {
    "id": "exp-4",
    "company": "BlueSeas Enterprise Co., Ltd.",
    "role": "Fullstack Developer",
    "duration": "Oct 2022 – Jul 2023",
    "highlights": [
      {
        "id": "exp-4-hl-1",
        "title": "End-to-End Product Architecture",
        "description": "Architected and developed the company's core flagship product from the ground up as a solo fullstack developer, delivering a robust dynamic form generation and secure document routing system for official e-signatures."
      },
      {
        "id": "exp-4-hl-2",
        "title": "Advanced Code Analysis & QA Strategy",
        "description": "Conducted deep structural code reviews of outsourced React development. Proactively analyzed underlying coding patterns to accurately predict potential edge cases and regression bugs, strategically guiding BAs and Testers on targeted QA strategies to ensure high-quality software delivery."
      },
      {
        "id": "exp-4-hl-3",
        "title": "Progressive Mentorship",
        "description": "Guided software engineering interns through a structured mentorship approach, assigning progressively complex tasks to accelerate their technical development and practical problem-solving skills."
      }
    ]
  },
  {
    "id": "exp-5",
    "company": "Qbox Point Co., Ltd.",
    "role": "Mobile Developer (React Native)",
    "duration": "Mar 2021 – Sep 2022",
    "highlights": [
      {
        "id": "exp-5-hl-1",
        "title": "Mobile App Lifecycle Management",
        "description": "Led the mobile development lifecycle from concept to deployment using React Native, ensuring high performance, responsive UI, and seamless cross-platform functionality."
      }
    ]
  }
],
  educations: [
    { id: "edu-thammasat", degree: "M.Eng. in Artificial Intelligence and IoT - Online Program", institution: "Thammasat University", duration: "Jan 2026 – Present" },
    { id: "edu-stamford", degree: "Master of Business Administration - Weekend Program", institution: "Stamford International University", duration: "Jan 2025 – Present" },
    { id: "edu-swpark", degree: "Fullstack JavaScript Bootcamp", institution: "Software Park Thailand Code Camp", duration: "Sep 2020 – Dec 2020" },
    { id: "edu-siriraj", degree: "B.Sc. in Medical Science", institution: "Faculty of Medicine Siriraj Hospital, Mahidol University", duration: "2009 – 2016" },
    { id: "edu-triamudom", degree: "High School Diploma (Science-Math)", institution: "Triam Udom Suksa School", duration: "2006 – 2009" }
  ]
};