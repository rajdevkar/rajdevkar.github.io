export interface Project {
  name: string;
  description: string;
  url?: string;
  repo?: string;
  tech: string[];
  featured?: boolean;
  year?: string;
  highlights?: string[];
}

export const PROJECTS: Project[] = [
  {
    name: 'Agency Cloud',
    description:
      'Finance management platform for businesses and freelancers — end-to-end invoicing, expense tracking, and reporting.',
    url: 'https://agencyon.cloud/',
    tech: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
    featured: true,
    year: '2022',
    highlights: [
      'Multi-tenant SaaS platform serving hundreds of businesses.',
      'Real-time financial reporting with GraphQL API integration.',
    ],
  },
  {
    name: 'Agency Cloud App',
    description:
      'Mobile companion app for Agency Cloud — manage finances on the go with real-time sync.',
    url: 'https://play.google.com/store/apps/details?id=com.niledeagencycloud&hl=en',
    tech: ['React Native', 'REST API', 'Firebase'],
    featured: true,
    year: '2022',
    highlights: [
      'Published on Google Play Store.',
      'Offline-first architecture with Firebase sync.',
    ],
  },
  {
    name: 'Floret College App',
    description:
      'College management app for Floret College of Designing — syllabus management, attendance, and announcements.',
    url: 'https://play.google.com/store/apps/details?id=com.floret&hl=en_IN',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    year: '2021',
  },
  {
    name: 'Trans-IT Coaching Institute',
    description:
      'Educational platform for students and teachers with class schedules, resources, and progress tracking.',
    url: 'https://play.google.com/store/apps/details?id=com.swapnealtechnologies.trans_it&hl=en_IN',
    tech: ['React Native', 'Firebase'],
    year: '2020',
  },
  {
    name: 'Squirrel – Delivery Partner',
    description:
      'Real-time delivery tracking app for a regional pizzeria — live maps, order status, and route optimization.',
    url: 'https://play.google.com/store/apps/details?id=com.squirrel.davanafood&hl=en_IN',
    tech: ['React Native', 'Google Maps API', 'Node.js'],
    year: '2020',
  },
  {
    name: 'WatchDroid',
    description:
      'A keylogger-based Android surveillance app designed to help parents monitor their children\'s mobile activities, secured with an advanced PIN protection system.',
    tech: ['Android', 'Java', 'Keylogger', 'Cybersecurity'],
    year: '2017',
    highlights: [
      '3rd Place — Mumbai Hackathon 2017',
      'Showcased innovation in cybersecurity and parental control solutions.',
    ],
  },
  {
    name: 'Personal Portfolio',
    description:
      'This portfolio site — built with Astro + Tailwind CSS, featuring dark mode and a clean minimal design.',
    repo: 'https://github.com/rajdevkar/rajdevkar.github.io',
    tech: ['Astro', 'Tailwind CSS', 'TypeScript'],
    featured: true,
    year: '2024',
  },
];
