
export type Contact = {
  email: string;
  phone: string;
  location: string;
  website?: string;
  websiteLabel?: string;
  linkedin: string;
  linkedinLabel: string;
  github: string;
  githubLabel: string;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

export type Project = {
  name: string;
  period?: string;
  url?: string;
  points: string[];
};

export type SkillGroup = { label: string; items: string[] };

export type Certification = { title: string; issuer: string; detail?: string };

export type Education = {
  degree: string;
  institute: string;
  location?: string;
  period: string;
};

export type SmallProject = { name: string; url: string };

/* -------------------------------------------------------------------------- */
/*  1. IDENTITY                                                               */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Mohit Varshney",
  role: "Senior Frontend Developer",
  headline: "Senior Frontend Engineer | React • Next.js • TypeScript",
  // Hero ke liye chhota tagline
  tagline:
    "Building scalable, AI-ready, high-performance web applications with React, Next.js and modern frontend architecture.",
  // Resume summary (PDF me bhi yahi jaata hai)
  summary:
    "Senior Frontend Developer with 4.5+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and modern JavaScript. Specialized in performance optimization, reusable component architecture, SEO, and responsive UI development. Experienced in delivering enterprise-grade applications, integrating REST/GraphQL APIs, and leveraging AI-assisted development tools like GitHub Copilot, Cursor AI, and ChatGPT to accelerate development and improve code quality. Currently expanding into full-stack development with Node.js and Express.js.",
  yearsOfExperience: "4.5+",
  availableForWork: true,
  resumeFileName: "Mohit-Varshney-Frontend-Developer.pdf",
};

export const contact: Contact = {
  email: "varshneymohit35@gmail.com",
  phone: "+91 8077636394",
  location: "New Delhi, India",
  linkedin: "https://www.linkedin.com/in/mohit-varshney-5797a3291/",
  linkedinLabel: "https://www.linkedin.com/in/mohit-varshney-5797a3291/",
  github: "https://github.com/Mohit130422",
  githubLabel: "https://github.com/Mohit130422",
};

/* -------------------------------------------------------------------------- */
/*  2. STATS (hero ke neeche strip)                                           */
/* -------------------------------------------------------------------------- */

export const stats: { value: string; label: string }[] = [
  { value: "4.5+", label: "Years of experience" },
  { value: "20+", label: "Production Features" },
  { value: "10K+", label: "Daily Users" },
  { value: "92", label: "Lighthouse Score" },
  { value: "35%", label: "Faster Delivery" },
];

/* -------------------------------------------------------------------------- */
/*  3. SKILLS                                                                 */
/* -------------------------------------------------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SCSS / SASS",
    ],
  },
  {
    label: "Front-end",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "React Router",
      "Next.js App Router",
      "Server Components",
      "React Suspense",
      "Vite",
      "Webpack",
      "Tailwind CSS",
      "Shadcn ui",
      "Framer Motion",
    ],
  },
  {
    label: "Back-end",
    items: [
      "Node.js (Basic)",
      "Express.js (Basic)",
      "Rest APIs",
      "GraphQL",
      "JWT Authentication",
    ],
  },
  {
    label: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    label: "AI Assisted Development",
    items:[
      "GitHub Copilot",
      "ChatGPT",
      "Cursor AI",
      "AI-powered Code Review",
      "Prompt Engineering",
      "Bolt.new",
    ]
  },
  {
    label: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Vercel",
      "Docker",
      "Postman",
      "VS Code",
      "Figma"
    ],
  },
  {
    label: "Testing",
    items:[
      "Jest",
      "React Testing Library",
    ]
  },
  {
    label: "Core Competencies",
    items: [
      "Component Architecture",
      "Performance Optimization",
      "Accessibility (WCAG 2.1)",
      "SEO Optimization",
      "API Integration",
      "Authentication",
      "Responsive Design",
      "Code Splitting",
      "Web Vitals",
      "Cross-browser Compatibility",
    ],
  },
  {
    label: "Development Practices",
    items: [
      "Clean Code",
      "Reusable Components",
      "Design Systems",
      "Version Control",
      "CI/CD",
      "Agile/Scrum",
      "Code Reviews"
    ]
  }
];

/* -------------------------------------------------------------------------- */
/*  4. EXPERIENCE                                                             */
/* -------------------------------------------------------------------------- */

export const experience: Experience[] = [
  {
    role: "Senior Frontend Developer",
    company: "RapidShyp",
    location: "Gurugram, Haryana",
    period: "May 2025 – Present",
    current: true,
    points: [
      "Led development initiatives for an enterprise logistics platform, architecting scalable React.js solutions serving 10,000+ daily active users.",
      "Spearheaded the migration to Next.js, achieving a 60% improvement in SEO metrics and 50% faster page loads through server-side rendering and code splitting.",
      "Built and maintained reusable functional components using Hooks (useState, useEffect, useContext, custom hooks) for state and lifecycle management.",
      "Transformed a legacy JavaScript codebase with ES6+ features like async/await, resulting in 15% faster feature development and fewer reported bugs.",
      "Designed a reusable component library with Tailwind CSS, increasing development velocity by 35% and keeping UI/UX consistent across the platform.",
      "Diagnosed and resolved rendering bottlenecks using React DevTools and Chrome DevTools, improving Lighthouse scores from 65 to 92.",
      "Mentored a team of 3 junior developers on React best practices, code reviews and modern frontend architecture patterns.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "RapidShyp",
    location: "Gurugram, Haryana",
    period: "Feb 2024 – May 2025",
    points: [
      "Developed 15+ responsive web applications using React.js and modern JavaScript with mobile-first, cross-browser compatible design.",
      "Integrated RESTful APIs and optimized data-fetching, reducing API call overhead by 30% through efficient caching and request batching.",
      "Implemented responsive UI components with Bootstrap and custom SCSS, delivering pixel-perfect designs across desktop, tablet and mobile.",
      "Collaborated with backend developers, designers and product managers in an Agile environment to ship features on schedule.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "PK Online Ventures Pvt. Ltd.",
    location: "Gurugram, Haryana",
    period: "Mar 2022 – Feb 2024",
    points: [
      "Built interactive single-page applications using React.js and jQuery, handling complex state management and user interactions.",
      "Developed custom RESTful API integrations for an e-commerce platform, implementing secure authentication flows and data synchronization.",
      "Created responsive layouts using HTML5, CSS3, SASS and Bootstrap for an optimal experience across all devices.",
      "Applied modern ES6+ features including asynchronous data handling, destructuring and arrow functions to write clean, maintainable code.",
      "Participated in code reviews and contributed to frontend architecture decisions, establishing coding standards and best practices.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  5. PROJECTS                                                               */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    name: "RapidShyp",
    period: "Feb 2024 - Present",
    url: "https://rapidshyp.com",
    points: [
      "Built and optimized a Next.js 16-based enterprise logistics platform from scratch for 10,000+ daily active users.",
      "Achieved 60% improvement in SEO metrics and 50% faster page loads by implementing server-side rendering and code splitting.",
      "Resolved frontend bugs, optimized page performance, and implemented technical SEO best practices, improving website stability, load speed, and overall search engine visibility.",
      "Integrated Google Analytics and other tracking tools to monitor website traffic, user behavior, and campaign performance, providing actionable insights for continuous improvement.",
    ],
  },
  {
    name: "App for RapidShyp",
    period: "Feb 2024 - Present",
    url: "https://app.rapidshyp.com",
    points: [
      "Collaborated with backend developers and UI/UX designers to deliver high-quality web applications on schedule.",
      "Implemented responsive design patterns and mobile-first development approach, ensuring seamless user experience across devices.",
      "Consumed custom RESTful API integrations for an e-commerce platform, implementing secure authentication flows and data synchronization.",
      "Built a Next.js-based internal tool for RapidShyp, optimizing the codebase for performance and scalability.",
      "Mentored junior developers on React best practices and modern frontend development techniques.",
    ],
  },
  {
    name: "Transafe Services",
    period: "April 2025 - Present",
    url: "https://transafeservices.com",
    points: [
      "Developed and enhanced the Transafe Services platform using PHP CodeIgniter (CI), building responsive, maintainable, and SEO-optimized web applications.",
      "Increased website performance through code optimization, efficient database interactions, image optimization, caching strategies, and technical SEO improvements.",
      "Built and integrated secure RESTful APIs using PHP cURL for lead management, third-party services, and backend data synchronization while ensuring reliable server-side validation and authentication.",
    ],
  },
  {
    name: "Om Logistics & Supply Chain",
    period: "May 2026 - Present",
    url: "https://omlogisticssupplychain.com",
    points: [
      "Developed and maintained the Om Logistics Supply Chain (OLSC) static lead-generation website using Next.js, building responsive, SEO-optimized pages that delivered a seamless user experience across devices.",
      "Designed and launched high-converting marketing campaign landing pages while developing reusable React components, accelerating feature delivery and maintaining consistent UI/UX.",
      "Optimized website performance through technical SEO improvements, image optimization, and efficient coding practices while ensuring cross-browser compatibility and mobile-first design.",
    ],
  },
  {
    name: "Utsav Yoga",
    period: "Mar 2022 - Feb 2024",
    url: "https://utsavyoga.com",
    points: [
      "Built a responsive frontend for a yoga community: home page, profile page, media post, signup flow, followers page, post description page, ask-question page and promotion mailers.",
      "Developed a Utsav Yoga booking flow where a client can create, cancel, join and schedule sessions for the coming time.",
      "Designed a dummy UI/UX with prototype functionality, then developed the frontend layout with better CSS styling and dynamic functionality.",
    ],
  },
];

export const smallProjects: SmallProject[] = [
  {
    name: "Portfolio — FrontDev",
    url: "https://mohitdev.netlify.app/"
  },
  {
    name: "PK Online Ventures Pvt. Ltd.",
    url: "https://www.pkonline.in",
  },
  {
    name: "Railwire RailTel - Guest Wifi portal",
    url: "https://www.railwire.pkonline.in",
  },
];

/* -------------------------------------------------------------------------- */
/*  6. CERTIFICATIONS                                                         */
/* -------------------------------------------------------------------------- */

export const certifications: Certification[] = [
  {
    title: "React: The Complete Guide",
    issuer: "Udemy",
    detail:
      "Covered React fundamentals, Hooks, Redux, routing and DOM manipulation in depth.",
  },  
  {
    title: "Javascript Es6+",
    issuer: "Udemy",
    detail:
      "Covered Javascript fundamentals, syntax, and modern ES6 features including arrow functions, promises, async/await, and modules.",
  },
  {
    title: "Responsive Web Design and JavaScript",
    issuer: "Udemy / freeCodeCamp",
    detail: "HTML5, CSS3, JavaScript, ES6, service workers and jQuery.",
  },
];

/* -------------------------------------------------------------------------- */
/*  7. EDUCATION                                                              */
/* -------------------------------------------------------------------------- */

export const education: Education[] = [
  {
    degree: "Bachelor in Computer Application (BCA)",
    institute: "Indira Gandhi National Open University",
    location: "New Delhi, India",
    period: "2022 - 2025",
  },
  {
    degree: "Diploma in Computer Science",
    institute: "National Institute of Electronics & Information Technology",
    location: "Aligarh, Uttar Pradesh",
    period: "2016 - 2018",
  },
];

/* -------------------------------------------------------------------------- */
/*  8. NAVIGATION                                                             */
/* -------------------------------------------------------------------------- */

export const navigation: { label: string; href: string }[] = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/*  9. THEME (resume template se liya gaya palette)                           */
/*     PDF inline styles me bhi yahi hex values use hoti hain.                */
/* -------------------------------------------------------------------------- */

export const theme = {
  ink: "#2E3D4D", // dark navy panel
  inkDeep: "#22303D", // heading / darker navy
  teal: "#12A4B4", // accent
  tealDeep: "#0D8695",
  mist: "#E7E9EA", // light grey card
  mistSoft: "#F3F5F6",
  paper: "#FFFFFF",
  body: "#3F4A55",
  muted: "#6B7885",
  line: "#D5DADE",
};

export const siteMeta = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  url: contact.website,
};
