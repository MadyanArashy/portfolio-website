import { Project, Certificate } from "@/types";
import ProjectArticles from "./projectArticles";

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistem Evaluasi Guru',
    description: {
      header:
        'Led a team to develop a teacher evaluation system for SMK Pesat. Oversaw client communication, task coordination, and deadline management.',
      text: ProjectArticles[0],
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
      text: ProjectArticles[1],
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
      text: ProjectArticles[2],
      techStack: [
        'MySQL',
        'React Native v0.81.4',
        'RN Reanimated v4.1.1',
        'TypeScript v5.9.2',
        'Expo v54.0.13',
        'Laravel v12.0',
      ]
    },
    thumbnailPath: '/images/screenshot-moodtracker-1.webp',
    imgPaths: [
      '/images/screenshot-moodtracker-1.webp',
      '/images/screenshot-moodtracker-2.webp',
      '/images/screenshot-moodtracker-3.webp',
      '/images/screenshot-moodtracker-4.webp',
      '/images/screenshot-moodtracker-5.webp',
      '/images/screenshot-moodtracker-6.webp',
      '/images/screenshot-moodtracker-7.webp',
      '/images/screenshot-moodtracker-8.webp',
    ],
    summary:
      'Multi-purpose task to-do list managing mobile application implementing RESTful API using local MySQL database, NewsAPI and MyAnimeList API.',
    href: 'https://github.com/MadyanArashy/moodtracker'
  },
  {
    id: 5,
    title: 'Laravel Library Management',
    description: {
      text: ProjectArticles[3],
      techStack: [
        'MySQL',
        'Laravel v11.9',
        'Pest v3.5',
        'TailwindCSS v3.4.14',
      ]
    },
    thumbnailPath: '/images/screenshot-library-management-1.webp',
    imgPaths: [
      '/images/screenshot-library-management-1.webp',
      '/images/screenshot-library-management-2.webp',
      '/images/screenshot-library-management-3.webp',
      '/images/screenshot-library-management-4.webp',
      '/images/screenshot-library-management-5.webp',
      '/images/screenshot-library-management-6.webp',
      '/images/screenshot-library-management-7.webp',
    ],
    summary:
      'Full-stack book lending management app for school libraries to simplify managing book inventory.',
    href: 'https://github.com/MadyanArashy/library-management-laravel'
  },

  // Hotel Expro
  {
    id: 6,
    title: 'Expro Hotel',
    description: {
      text: ProjectArticles[4],
      techStack: [
        'PHP',
        'Bootstrap v4'
      ],
    },
    thumbnailPath: '/images/screenshot-expro-hotel-1.webp',
    imgPaths: [
      '/images/screenshot-expro-hotel-1.webp',
      '/images/screenshot-expro-hotel-2.webp',
      '/images/screenshot-expro-hotel-3.webp',
      '/images/screenshot-expro-hotel-4.webp',
      '/images/screenshot-expro-hotel-5.webp',
      '/images/screenshot-expro-hotel-6.webp',
      '/images/screenshot-expro-hotel-7.webp',
      '/images/screenshot-expro-hotel-8.webp',
      '/images/screenshot-expro-hotel-9.webp',
      '/images/screenshot-expro-hotel-10.webp',
      '/images/screenshot-expro-hotel-11.webp',
      '/images/screenshot-expro-hotel-12.webp',
      '/images/screenshot-expro-hotel-13.webp',
    ],
    summary: 'Full-stack hotel booking app built with PHP and Bootstrap',
    href: 'https://github.com/MadyanArashy/sertikom-semester-2'
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'TOEIC English Test',
    date: '2025',
    description: 'Achieved an English <abbr title="Test of English for International Communication">TOEIC</abbr> score of **975**, administered by **<abbr title="International Test Center">ITC</abbr>** Ltd.',
    summary: 'Achieved an English TOEIC score of 975, administered by International Test Center Ltd.',
    thumbnailPath: '/images/TOEIC-madyan-arashy.jpg',
  },
  {
    id: 2,
    title: 'Fullstack Mobile App',
    date: '2025',
    description: 'Built a fullstack mobile app using React Native and Laravel. Scored **90 (Competent)**, certified by **GINVO Studio**.',
    summary: 'Built a fullstack mobile app using React Native and Laravel. Scored 90 (Competent), certified by GINVO Studio.',
    thumbnailPath: '/images/sertikom-4.jpg',
    imgPaths: [
      '/images/sertikom-4.jpg',
      '/images/sertikom-4-back.jpg',
    ]
  },
  {
    id: 3,
    title: 'Web Development with Laravel Framework',
    date: '2024',
    description: 'Built a library management application using Laravel. Scored **93 (Competent)**, certified by **PT Kreasi Media**.',
    summary: 'Built a library management application using Laravel. Scored 93 (Competent), certified by PT Kreasi Media.',
    thumbnailPath: '/images/sertikom-3.jpg',
    imgPaths: [
      '/images/sertikom-3.jpg',
      '/images/sertikom-3-back.jpg',
    ]
  },
  {
    id: 4,
    title: 'Web-Based Application with PHP and MySQL',
    date: '2024',
    description: 'Built a hotel booking web application using PHP. Scored **100 (Highly Competent)**, certified by **PT Dimensi Kreasi Nusantara**.',
    summary: 'Built a hotel booking web application using PHP. Scored 100 (Highly Competent), certified by PT Dimensi Kreasi Nusantara.',
    thumbnailPath: '/images/sertikom-2.jpg',
    imgPaths: [
      '/images/sertikom-2.jpg',
      '/images/sertikom-2-back.jpg',
    ]
  },
  {
    id: 5,
    title: 'Landing Page Development with HTML and CSS',
    date: '2023',
    description: 'Built a landing page using HTML and CSS. Scored **100 (Competent)**, certified by **PT Wan Teknologi Internasional**.',
    summary: 'Built a landing page using HTML and CSS. Scored 100 (Competent), certified by PT Wan Teknologi Internasional.',
    thumbnailPath: '/images/sertikom-1.jpg',
    imgPaths: [
      '/images/sertikom-1.jpg',
      '/images/sertikom-1-back.jpg',
    ]
  },
]