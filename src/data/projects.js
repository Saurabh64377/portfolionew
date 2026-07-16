const GITHUB_PROFILE = 'https://github.com/Saurabh64377'

export const projects = [
  {
    id: 1,
    title: 'School ERP System',
    description:
      'A comprehensive school management platform with role-based access for administrators, teachers, students, and parents — covering attendance, examinations, and results in one place.',
    longDescription:
      'Built as a full-stack ERP to replace manual, paper-based school administration. The core challenge was designing a single data model that could serve four distinct roles with very different permissions without duplicating logic across the app.',
    tags: ['React', 'TypeScript', 'Node.js', 'MySQL', 'REST API'],
    category: 'fullstack',
    featured: true,
    github: GITHUB_PROFILE,
    live: null,
    liveLabel: 'Private Client Project',
    gradient: 'blue',
    accentColor: '#3B82F6',
    features: [
      'Role-based access control for admins, teachers, students and parents',
      'Attendance tracking with daily and term-level reporting',
      'Examination management with automated result generation',
      'Secure REST APIs backed by an optimized MySQL schema',
    ],
  },
  {
    id: 2,
    title: 'School AI & Robotics Inventory Management System',
    description:
      'A multi-tenant SaaS platform for managing AI & robotics lab inventory across multiple schools, with a Superadmin layer that oversees every tenant from one dashboard.',
    longDescription:
      'Designed as a SaaS product rather than a single-school tool: a Superadmin manages inventory across many schools, each with its own admins, teachers and students scoped to their own data.',
    tags: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
    category: 'fullstack',
    featured: true,
    github: GITHUB_PROFILE,
    live: null,
    liveLabel: 'Private Client Project',
    gradient: 'purple',
    accentColor: '#8B5CF6',
    features: [
      'Multi-tenant architecture — one Superadmin, many independently-scoped schools',
      'JWT authentication with role-based access for Superadmin, School Admin, Teacher and Student',
      'Centralized inventory tracking for AI & robotics lab equipment',
      'Express.js REST API layer over a normalized MySQL schema',
    ],
  },
  {
    id: 3,
    title: 'TeraStamp — Infrastructure Monitoring',
    description:
      'The public-facing site for TeraStamp, an infrastructure monitoring product — built and shipped end-to-end, from frontend to production deployment.',
    longDescription:
      'Took full ownership of both the frontend and the deployment pipeline: a responsive React frontend, a Node.js/Express contact API wired to Nodemailer, and a production server configured from scratch on AWS.',
    tags: ['React', 'Node.js', 'Express.js', 'Nodemailer', 'AWS EC2', 'Nginx'],
    category: 'fullstack',
    featured: true,
    github: GITHUB_PROFILE,
    live: 'https://terastamp.org',
    gradient: 'cyan',
    accentColor: '#06B6D4',
    features: [
      'Responsive React frontend with reusable, modern UI components',
      'REST API endpoint for contact form submissions via Node.js and Express.js',
      'Nodemailer integration delivering full form data straight to the admin inbox',
      'Deployed to AWS EC2 with Nginx, PM2 process management and SSL via Certbot',
    ],
  },
  {
    id: 4,
    title: 'Cinu.io',
    description:
      'A responsive company website built with React and a custom domain deployment — from routing and reusable UI components to going live.',
    longDescription:
      'A marketing/company site built to be fast and maintainable, using React Router for client-side navigation and a component library kept small and reusable on purpose.',
    tags: ['React', 'React Router', 'HTML5', 'CSS3', 'Bootstrap'],
    category: 'frontend',
    featured: false,
    github: GITHUB_PROFILE,
    live: 'https://cinu.io',
    gradient: 'emerald',
    accentColor: '#10B981',
    features: [
      'Responsive company website with reusable UI components',
      'Client-side routing and navigation with React Router',
      'Deployed and live under a custom domain configuration',
    ],
  },
  {
    id: 5,
    title: 'Target Coaching Classes',
    description:
      'A full-stack website for a coaching institute — course browsing, an achievements showcase, and a validated enrollment inquiry form backed by a MySQL API with email notifications.',
    longDescription:
      'Built end-to-end with an MVC-structured Express backend and a five-page React frontend. Inquiry submissions are validated server-side, persisted to MySQL, and trigger an email notification via Gmail SMTP through Nodemailer — independent of email delivery success.',
    tags: ['React', 'Node.js', 'Express.js', 'MySQL', 'Nodemailer'],
    category: 'fullstack',
    featured: false,
    github: 'https://github.com/Saurabh64377/tcc_web',
    live: null,
    liveLabel: 'No Live Demo',
    gradient: 'blue',
    accentColor: '#3B82F6',
    features: [
      'Five-page React frontend: Home, About, Achievements, Batches and Contact',
      'MVC-structured Express backend with dedicated controllers, routes and config',
      'Server-side validated enrollment inquiries persisted to MySQL',
      'Nodemailer email notifications via Gmail SMTP on each inquiry',
    ],
  },
  {
    id: 6,
    title: 'CRUD SaaS Practice',
    description:
      'A hands-on MERN practice build exploring a SaaS-style CRUD architecture, with a clean separation between the Express API and the React client.',
    longDescription:
      'A learning-focused project used to practice a production-style project layout — a dedicated backend API and frontend client — rather than a single monolithic app.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'fullstack',
    featured: false,
    github: 'https://github.com/Saurabh64377/curd_saas_prac',
    live: null,
    liveLabel: 'Practice Project',
    gradient: 'purple',
    accentColor: '#8B5CF6',
    features: [
      'Full CRUD API built with Node.js and Express.js',
      'Separate backend/frontend structure mirroring a production SaaS layout',
      'End-to-end MERN data flow practice, from API to UI',
    ],
  },
]

export const categories = ['all', 'fullstack', 'frontend']
