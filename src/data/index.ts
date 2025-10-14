import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistem Evaluasi Guru",
    description: {
      header: "",
      text: "Teacher Evaluation System (Sistem Evaluasi Guru) is a web-based application built to simplify and automate the teacher evaluation process.",
      techStack: ['MySQL', 'PHP v8.3.12', 'Laravel v5.19.0', 'TailwindCSS v3.1.0', 'Pest v3.8.2', 'Git v2.46.2']
    },
    summary: "Web-based teacher evaluation system replacing manual spreadsheet workflows with automated, scalable assessments.",
    thumbnailPath: "/images/screenshot_sistem_evaluasi_guru_1.webp",
    imgPaths: [
      "/images/screenshot_sistem_evaluasi_guru_2.webp",
      "/images/screenshot_sistem_evaluasi_guru_3.webp",
      "/images/screenshot_sistem_evaluasi_guru_4.webp"
    ],
    href: "https://github.com/MadyanArashy/sistem-evaluasi-guru"
  },
  {
    id: 2,
    title: "InggrisLand",
    description: {
      header: "",
      text: "InggrisLand is an Indonesian web-based platform for learning English with progressive levels and extensive question banks.",
      techStack: ['MySQL', 'React v19.0.0', 'Axios v1.9.0', 'TailwindCSS v4.1.5', 'TypeScript v5.7.2', 'ESLint v9.22.0', 'Vite v6.3.1', 'Git v2.46.2']
    },
    summary: "Fullstack language-learning platform built for Indonesians to master English through structured lessons and gamified progression.",
    thumbnailPath: "/images/screenshot_inggrisland_1.webp",
    href: "https://github.com/MadyanArashy/inggrisland"
  },
]
