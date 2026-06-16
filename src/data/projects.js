export const projects = [
  {
    id: 1,
    title: 'Full Stack Expense Sharing App',
    description:
      'A collaborative expense management platform that allows groups to split bills, track shared expenses, and settle debts seamlessly. Features real-time balance calculations and smart split algorithms.',
    longDescription:
      'Built with MERN stack featuring JWT authentication, real-time updates, and intuitive UX for splitting bills among friends and groups.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Redux Toolkit'],
    category: 'fullstack',
    featured: true,
    github: 'https://github.com/saurabh-agrahari',
    live: '#',
    gradient: 'from-violet-600/20 to-purple-600/20',
    accentColor: '#6c63ff',
    stats: { users: '500+', features: '12+', apis: '20+' },
  },
  {
    id: 2,
    title: 'MERN E-Commerce Platform',
    description:
      'A production-grade e-commerce application with complete shopping cart, payment integration, product management, order tracking, and admin dashboard with analytics.',
    longDescription:
      'Full-featured e-commerce with Stripe payments, product search, filtering, admin dashboard, inventory management, and user authentication.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Redux Toolkit', 'JWT', 'REST API'],
    category: 'fullstack',
    featured: true,
    github: 'https://github.com/saurabh-agrahari',
    live: '#',
    gradient: 'from-emerald-600/20 to-teal-600/20',
    accentColor: '#43e97b',
    stats: { products: '1000+', orders: '50+', apis: '30+' },
  },
  {
    id: 3,
    title: 'Real-Time Chat Application',
    description:
      'A modern messaging platform with real-time communication, group chats, online presence indicators, typing animations, and message delivery receipts powered by Socket.IO.',
    longDescription:
      'Full-duplex real-time messaging using WebSockets with Socket.IO, featuring rooms, direct messaging, file sharing, and online status.',
    tags: ['React.js', 'Node.js', 'Socket.IO', 'MongoDB', 'JWT', 'Express'],
    category: 'fullstack',
    featured: true,
    github: 'https://github.com/saurabh-agrahari',
    live: '#',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    accentColor: '#38f9d7',
    stats: { messages: 'Real-time', rooms: 'Multi', latency: '<100ms' },
  },
  {
    id: 4,
    title: 'Admin Dashboard',
    description:
      'A comprehensive analytics dashboard with dynamic charts, data visualizations, user management, role-based access control, and real-time metrics monitoring.',
    longDescription:
      'Feature-rich admin panel with Chart.js visualizations, CRUD operations, role-based permissions, export functionality, and responsive design.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Chart.js', 'Redux', 'Tailwind CSS'],
    category: 'frontend',
    featured: false,
    github: 'https://github.com/saurabh-agrahari',
    live: '#',
    gradient: 'from-orange-600/20 to-red-600/20',
    accentColor: '#f093fb',
    stats: { charts: '10+', modules: '8+', users: 'Multi-role' },
  },
  {
    id: 5,
    title: 'Product Management System',
    description:
      'An enterprise-grade product catalog system with advanced search, multi-category filtering, bulk operations, and detailed product lifecycle management.',
    longDescription:
      'Built with Express.js and MySQL featuring complex joins, stored procedures, pagination, search with filters, and export to CSV/PDF.',
    tags: ['Node.js', 'Express.js', 'MySQL', 'React.js', 'Bootstrap', 'REST API'],
    category: 'backend',
    featured: false,
    github: 'https://github.com/saurabh-agrahari',
    live: '#',
    gradient: 'from-pink-600/20 to-rose-600/20',
    accentColor: '#ec4899',
    stats: { records: '10k+', apis: '25+', tables: '12+' },
  },
  {
    id: 6,
    title: 'Auth & Authorization System',
    description:
      'A robust authentication microservice with JWT tokens, refresh token rotation, role-based access control, OAuth integration, and rate limiting for enterprise security.',
    longDescription:
      'Complete auth system with JWT/refresh tokens, bcrypt hashing, RBAC, Google OAuth, email verification, and brute-force protection.',
    tags: ['Node.js', 'Express.js', 'JWT', 'MongoDB', 'bcrypt', 'OAuth'],
    category: 'backend',
    featured: false,
    github: 'https://github.com/saurabh-agrahari',
    live: '#',
    gradient: 'from-yellow-600/20 to-amber-600/20',
    accentColor: '#f59e0b',
    stats: { security: 'A+', roles: '5+', endpoints: '15+' },
  },
  {
    id: 7,
    title: 'Image Upload System',
    description:
      'A cloud-native image management platform with drag-and-drop upload, automatic optimization, CDN delivery via Cloudinary, and gallery management.',
    longDescription:
      'Multer + Cloudinary integration with image transformation pipeline, lazy loading, thumbnail generation, and secure signed uploads.',
    tags: ['Node.js', 'Multer', 'Cloudinary', 'Express.js', 'React.js', 'MongoDB'],
    category: 'backend',
    featured: false,
    github: 'https://github.com/saurabh-agrahari',
    live: '#',
    gradient: 'from-purple-600/20 to-indigo-600/20',
    accentColor: '#a855f7',
    stats: { uploads: 'Unlimited', cdn: 'Global', transform: 'Auto' },
  },
]

export const categories = ['all', 'fullstack', 'frontend', 'backend']
