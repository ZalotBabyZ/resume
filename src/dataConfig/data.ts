import { IResumeConfig } from "./dataType";
import photo from "../asset/photo/photo_2024.png";

export const RESUME_CONFIG: IResumeConfig = {
  personalInfo: {
    fullName: "Chutinan Chirdchoothum",
    role: "Senior Fullstack Developer",
    phone: "+66 88-631-9555",
    email: "babyzalot@outlook.com",
    linkedinUrl: "https://www.linkedin.com/in/BabyZalot",
    githubUrl: "https://github.com/ZalotBabyZ",
    photoUrl: {photo, classOverride:"w-40 h-40 rounded-full mb-4 border-4 border-white shadow-md object-cover object-top"}
  },
  professionalSummary: "Senior Fullstack Developer (React/NodeJS/React Native) with 5 years of experience, specializing in architectural innovations that eliminate redundant workflows for QA and developers. Excels in cross-functional collaboration (PO, QA, UX/UI) to establish highly scalable and maintainable project foundations. Currently driven to design AI-integrated internal tools and architectures that optimize team efficiency, empowering cross-functional teams to systematically focus on true business value.",
  competencies: [
    { id: "comp-tech", category: "Technical Skills", skills: ["React", "React Native", "NodeJS", "TypeScript", "NextJS"],isA4: true },
    { id: "comp-ai", category: "AI Integration & Efficiency", skills: ["AI Power User (since 2025)", "AI Token Optimization", "Root-cause Analysis"],isA4: true },
    { id: "comp-proc", category: "Process & Leadership", skills: ["Cross-functional Collab", "Agile/Scrum", "Pre-dev Planning", "UI/UX Standardizing"],isA4: true },
    { id: "comp-arch", category: "Architecture & Innovation", skills: ["Core Structure Design", "Centralized Configuration", "Reusable Components", "AI Tools Integration"],isA4: true }
  ],
  experiences: [
  {
    "id": "exp-1",
    "company": "Self-directed Study & Project Development",
    "role": "AI Architecture & Tooling Researcher",
    "duration": "Jan 2026 – Present",
    "highlights": [
      {
        "id": "exp-1-hl-1",
        "title": "AI-Driven SDLC Redesign & Human-in-the-Loop (HITL)",
        "description": "Pioneered an experimental workflow utilizing customized AI (Gemini GEM) to translate business requirements directly into baseline code during the PO-client discovery phase."
      },
      {
        "id": "exp-1-hl-2",
        "title": "Cross-Role Handoff Optimization",
        "description": "Validated a \"Human-in-the-Loop\" model, concluding that AI effectively accelerates cross-role handoffs, while human expertise remains critical for architectural integrity and complex debugging, empowering the team to strictly focus on high-value tasks."
      },
      {
        "id": "exp-1-hl-3",
        "title": "Advanced Context & Token Management",
        "description": "Conducted continuous research on AI tokenization and context window limits. Developed highly efficient strategies that yield precise, production-ready outputs while strictly minimizing token consumption and maximizing AI accuracy."
      }
    ]
  },
  {
    "id": "exp-2",
    "company": "Axons (CPF IT Center)",
    "role": "Lead Fullstack Developer (Frontend Focus)",
    "duration": "Jan 2025 – Dec 2025",
    "highlights": [
      {
        "id": "exp-2-hl-1",
        "title": "Team Leadership & Process Alignment",
        "description": "Directed frontend architecture across 3 distinct teams. Collaborated closely with POs and UX/UI during the pre-dev phase to align technical feasibility, effectively mitigating technical risks and ensuring smooth project delivery."
      },
      {
        "id": "exp-2-hl-2",
        "title": "Cross-Functional Collaboration",
        "description": "Streamlined collaboration between UX/UI and Dev teams by establishing standardized workflows and documentation, ensuring seamless handoffs and maintaining project momentum."
      },
      {
        "id": "exp-2-hl-3",
        "title": "AI Power User & Workflow Optimization",
        "description": "AI-assisted development, delivering complex features 2-4x faster compared to traditional development timelines with near-zero bugs. Strategically managed AI token limits (using 3x fewer premium requests) and reinvested saved time into designing cross-team architectures."
      },
      {
        "id": "exp-2-hl-4",
        "title": "Cognitive-Based Mentorship",
        "description": "Empowered junior developers to reach professional team standards by analyzing their cognitive processing style and tailoring tasks to match their foundational knowledge."
      }
    ]
  },
  {
    "id": "exp-3",
    "company": "Axons (CPF IT Center)",
    "role": "Fullstack Developer",
    "duration": "Aug 2023 – Dec 2024",
    "highlights": [
      {
        "id": "exp-3-hl-1",
        "title": "Rapid Requirement Adaptation",
        "description": "Leveraged highly flexible core architectures to rapidly adapt to various complex requirements. As a key example, a major late-stage vendor integration was completed in just 2 weeks instead of the initial 2+ month estimate."
      },
      {
        "id": "exp-3-hl-2",
        "title": "Structural Innovation (Core Components)",
        "description": "Engineered and implemented centralized core structures, notably dynamic PDF and Excel import/export modules. This initiative allowed seamless cross-flow adaptability regardless of user technical depth."
      },
      {
        "id": "exp-3-hl-3",
        "title": "QA & Dev Optimization",
        "description": "Developed a centralized configuration system that eliminated redundant UI/action testing for QA. This strategic shift allowed QA to focus entirely on core business logic impacts, while simultaneously reducing code duplication and code review time for developers."
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
    { id: "edu-thammasat", degree: "M.Eng. in Artificial Intelligence and IoT", institution: "Thammasat University (TUXSA)", duration: "Jan 2026 – Present" },
    { id: "edu-stamford", degree: "Master of Business Administration (MBA)", institution: "Stamford International University", duration: "Jan 2025 – Present" },
    { id: "edu-swpark", degree: "Fullstack JavaScript Bootcamp", institution: "Software Park Thailand Code Camp", duration: "Sep 2020 – Dec 2020" },
    { id: "edu-siriraj", degree: "B.Sc. in Medical Science", institution: "Faculty of Medicine Siriraj Hospital, Mahidol University", duration: "2009 – 2016" },
    { id: "edu-triamudom", degree: "High School Diploma (Science-Math)", institution: "Triam Udom Suksa School", duration: "2006 – 2009" }
  ]
};