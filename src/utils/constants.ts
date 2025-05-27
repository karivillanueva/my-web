export const APP_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  BLOGS: '/blogs',
  CONTACT: '/contact',
};

export const navItems = [
  { href: APP_ROUTES.HOME, label: 'Home' },
  { href: APP_ROUTES.ABOUT, label: 'About' },
  { href: APP_ROUTES.BLOGS, label: 'Blogs' },
  { href: APP_ROUTES.CONTACT, label: 'Contact' },
];

export const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/karime-villanueva-585136ab/',
};

export const BLOGS = [
  {
    title: 'What is AI & Machine Learning: How it works & more (2024)',
    image: '/images/ai-post.png',
    link: 'https://loopstudio.dev/what-is-ai-and-machine-learning/',
  },
];

export const EXPERIENCE = [
  {
    title: 'Software Engineer',
    subtitle: 'LoopStudio (2022–2025, Remote)',
    text: 'Developed mobile and web applications across multiple industries including AI, healthcare and construction.',
  },
  {
    title: 'Frontend Developer',
    subtitle: 'Qubika (2021–2022, Remote)',
    text: 'Focused on custom mobile apps using React Native and Swift.',
  },
  {
    title: 'Project Manager',
    subtitle: 'CIR & Proyectos Ingeniería SRL (2017–2021, Uruguay)',
    text: 'Managed large-scale industrial projects, leading teams of up to 50 people.',
  },
];

export const EDUCATION = [
  {
    title: 'Software Engineering',
    subtitle: 'University of the Republic of Uruguay (2018–2024)',
  },
  {
    title: 'B.S. in Mechanical Engineering',
    subtitle: 'University of the Republic of Uruguay (2014–2018)',
  },
  {
    title: 'M.S. in Data Science & Machine Learning',
    subtitle: 'In progress',
  },
];

export const TECH_STACK = [
  'React / React Native / Next.js',
  'TypeScript / JavaScript',
  'Tailwind CSS / Styled Components',
  'Redux / Firebase / HTML / CSS',
  'Python / LangChain / MongoDB / ElasticSearch',
  'Figma / Git / Jira / Slack',
  'AI Tools (V0, Cursor, ChatGPT)',
  'Project Leadership & Agile Methodologies',
];

export const ABOUT_ME_DETAILS = [
  'Always exploring new technologies and frameworks.',
  'Efficient developer leveraging AI to enhance productivity.',
  'Strong communicator and team collaborator.',
  'Passionate about UX, accessibility, and clean code.',
  'Big fan of music, travel, and coffee.',
];

export enum CALL_STATUS {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
