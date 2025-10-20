import { Project, Certificates } from "@/types";

export const projectArticles: string[] =
[
  `
  ### About The Project
  **Teacher Evaluation System (Sistem Evaluasi Guru)** is a Laravel-based web app
  built to simplify and automate the teacher evaluation process. The project involved
  developing a system that allows school executive staff, such as principals and vice-principals,
  to evaluate teaching staff through configurable evaluation components.  
  <br/>
  Each component, evaluation and semesters are handled by an administrator, making the experience
  seamless for the user. Teachers are also able to look at their own evaluations, and honor teachers
  may be promoted to permanent teacher when their average evaluation score reach a certain threshold.  
  <br/>
  ### Features:
  - Authentication
  - Role-based authorization/access control
  - Teaching Staff Evaluation
  - Promotion of honor teachers
  - Create and update evaluation components
  `,

  `
  **InggrisLand** is an Indonesian web-based platform for learning English with progressive levels and extensive question banks.
  This application allowed users to explore quizzes and complete a set of questions in English and track how many
  questions they got right.
  <br/>
  This project includes authentication for users to save their progress and compare scores to their previous test.
  Built using the React library and TailwindCSS for a fast lightweight user interface and Node.js + Express as
  the main backend frameworks.
  `,

  `
  ### About The Project
  **Moodtracker** is React Native Expo + Laravel full-stack web app built to implement RESTful API
  `,
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistem Evaluasi Guru',
    description: {
      header:
        'Led a team to develop a teacher evaluation system for SMK Pesat. Oversaw client communication, task coordination, and deadline management.',
      text: projectArticles[0],
      techStack: [
        'MySQL',
        'PHP v8.3.12',
        'Laravel v5.19.0',
        'TailwindCSS v3.1.0',
        'Pest v3.8.2',
        'Git v2.46.2',
      ],
    },
    summary:
      'Web-based teacher evaluation system replacing manual spreadsheet workflows with automated, scalable assessments.',
    thumbnailPath: '/images/screenshot_sistem_evaluasi_guru_1.webp',
    imgPaths: [
      '/images/screenshot_sistem_evaluasi_guru_1.webp',
      '/images/screenshot_sistem_evaluasi_guru_2.webp',
      '/images/screenshot_sistem_evaluasi_guru_3.webp',
      '/images/screenshot_sistem_evaluasi_guru_4.webp',
    ],
    href: 'https://github.com/MadyanArashy/sistem-evaluasi-guru',
  },
  {
    id: 2,
    title: 'InggrisLand',
    description: {
      header: 'Inspired by similar existing language-learning apps. Learned how to create fullstack web applications using React and Node.js',
      text: projectArticles[1],
      techStack: [
        'MySQL',
        'React v19.0.0',
        'Axios v1.9.0',
        'TailwindCSS v4.1.5',
        'TypeScript v5.7.2',
        'ESLint v9.22.0',
        'Vite v6.3.1',
        'Git v2.46.2',
      ],
    },
    summary:
      'Fullstack language-learning platform built for Indonesians to master English through structured lessons and gamified progression.',
    thumbnailPath: '/images/screenshot_inggrisland_1.webp',
    imgPaths: [
      '/images/screenshot_inggrisland_1.webp',
      '/images/screenshot_inggrisland_2.webp',
      '/images/screenshot_inggrisland_3.webp',
      '/images/screenshot_inggrisland_4.webp',
    ],
    href: 'https://github.com/MadyanArashy/inggris-land',
  },
  {
    id: 3,
    title: 'Moodtracker',
    description: {
      text: projectArticles[0],
      techStack: [
        'MySQL',
        'React Native v0.81.4',
        'React Native Reanimated v4.1.1',
        'TypeScript v5.9.2',
        'Expo v54.0.13',
        'Laravel v12.0',
      ]
    },
    thumbnailPath: '/images/screenshot-expro-hotel-1.webp',
    summary:
      'Multi-purpose task to-do list managing mobile application implementing RESTful API using local MySQL database, NewsAPI and MyAnimeList API.',
    href: 'https://github.com/MadyanArashy/moodtracker'
  }
];

export const certificates: Certificates[] = [
  {
    id: 1,
    title: 'TOEIC English Test',
    description: 'Achieved an English TOEIC score of 895, administered by PT International Test Center (ITC).',
    imgPath: '/images/TOEIC-madyan-arashy.jpg'
  }
]