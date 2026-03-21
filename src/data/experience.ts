export interface Experience {
  company: string;
  role: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  description?: string;
  tech?: string[];
  current?: boolean;
  type: 'work' | 'education' | 'certification';
  url?: string;
}

export const EXPERIENCE: Experience[] = [
  {
    company: 'Publicis Groupe',
    role: 'Senior Frontend Developer',
    employmentType: 'Full-time',
    startDate: '02.2025',
    endDate: 'Present',
    description:
      'Leading frontend development for large-scale enterprise applications. Architecting scalable React components, optimizing performance, and collaborating across global teams.',
    tech: ['React', 'TypeScript', 'GraphQL', 'REST API', 'Redux', 'Performance Optimization'],
    current: true,
    type: 'work',
    url: 'https://www.publicisgroupe.com',
  },
  {
    company: 'Nilede Technologies',
    role: 'Team Lead & Senior Full Stack Developer',
    employmentType: 'Full-time',
    startDate: '11.2021',
    endDate: '02.2025',
    description:
      'Led a team of developers building a cloud-based multi-tenant finance management platform. Architected the React + Tailwind UI, integrated Laravel REST APIs with GraphQL, and shipped the companion React Native mobile app.',
    tech: ['React Native', 'TypeScript', 'GraphQL', 'REST API', 'Redux', 'Multi-tenant Architecture', 'Offline Support', 'Team Leadership'],
    type: 'work',
    url: 'https://nilde.in',
  },
  {
    company: 'BuildNBoost',
    role: 'Frontend & React Native Developer',
    employmentType: 'Full-time',
    startDate: '01.2019',
    endDate: '11.2021',
    description:
      'Built cross-platform mobile applications for education and coaching institutes. Delivered Trans-IT and Floret apps from design to Play Store launch.',
    tech: ['React Native', 'React', 'TypeScript', 'REST API', 'Redux', 'UI/UX', 'Performance Optimization'],
    type: 'work',
  },
  {
    company: 'Solution Technocity',
    role: 'Android Developer',
    employmentType: 'Full-time',
    startDate: '03.2018',
    endDate: '11.2018',
    description:
      'Developed native Android applications integrating with ERP systems and REST APIs for enterprise clients.',
    tech: ['Android', 'Java', 'ERP', 'REST API'],
    type: 'work',
  },
];

export const CERTIFICATIONS: Experience[] = [
  {
    company: 'Konkan Gyanpeeth College of Engineering, University of Mumbai',
    role: 'Bachelor of Engineering — Information Technology',
    employmentType: '',
    startDate: '2016',
    endDate: '06.01.2020',
    type: 'education',
    url: 'https://www.kgce.edu.in',
  },
];

export const PROJECTS_DATA = [
  {
    name: 'WatchDroid',
    year: '2017',
    icon: '⌚',
    description:
      'A keylogger-based Android surveillance app designed to help parents monitor their children\'s mobile activities, secured with an advanced PIN protection system.',
    highlights: [
      '3rd Place — Mumbai Hackathon 2017',
      'Showcased innovation in cybersecurity and parental control solutions.',
    ],
    tech: ['Award-winning', 'Android', 'Java', 'Keylogger', 'Cybersecurity', 'Parental Control'],
    url: null,
  },
];
