// ICONS
import { Phone, Mail, Home } from 'lucide-react';
import { GitHub, LinkedIn, YouTube, Gmail } from './icons';

const ICON_SIZE = 16;
const STROKE_WIDTH = 2;

export const DOCK_ITEMS = [
  {
    icon: (
      <Home
        className='dark:text-neutral-100 text-neutral-900'
        size={ICON_SIZE}
        strokeWidth={1}
      />
    ),
    label: 'Home',
    href: '/',
  },
  {
    icon: (
      <LinkedIn
        className='dark:text-neutral-100 text-neutral-900'
        size={ICON_SIZE}
        strokeWidth={1}
      />
    ),
    label: 'Linkedin',
    href: 'https://google.com',
  },
  {
    icon: (
      <GitHub
        className='dark:text-neutral-100 text-neutral-900'
        size={ICON_SIZE}
        strokeWidth={1}
      />
    ),
    label: 'Github',
    href: 'https://google.com',
  },
  {
    icon: (
      <Mail
        className='dark:text-neutral-100 text-neutral-900'
        size={ICON_SIZE}
        strokeWidth={1}
      />
    ),
    label: 'Mail',
    href: '/blog',
  },
];

// SOCIALS : Links to All Stuff
export const SOCIALS = [
  {
    title: 'Email',
    url: 'mailto:rajat.payghan@gmail.com',
    color: '#34A853',
  },
  {
    title: 'Resume',
    url: 'https://drive.google.com/file/d/1Qhv6ZdEHSbvjMXVwkE9HiqcsqlNHdSk2/view',
    color: '#FF0000',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/RajatPayghan',
    color: '#333333',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rajatpayghan',
    color: '#0077B5',
  },
];

// WORK EXPERIENCE
export const WORKS = [
  {
    href: 'https://www.wellsfargo.com/',
    title: 'Wells Fargo Tech',
    subtitle: 'Software Engineer',
    isCurr: true,
    dateStart: '2025',
    dateEnd: 'Now',
    imgSrc: '/assets/work-logos/Logo-WF.avif',
  },
  {
    href: '',
    title: 'Freelance Designer',
    subtitle: 'Product Designer',
    isCurr: true,
    dateStart: '2021',
    dateEnd: 'Now',
    imgSrc: '/assets/work-logos/Logo-FD.avif',
  },
  {
    href: 'https://www.adeccogroup.com/',
    title: 'The Adecco Group',
    subtitle: 'Process Intern',
    isCurr: false,
    dateStart: '2025',
    dateEnd: '24\u00a0',
    imgSrc: '/assets/work-logos/Logo-TAG.avif',
  },
  {
    href: 'https://bits-sutechteam.org/',
    title: "Students' Union Tech Team",
    subtitle: 'Head of Product',
    isCurr: false,
    dateStart: '2022',
    dateEnd: '24\u00a0',
    imgSrc: '/assets/work-logos/Logo-SUTT.avif',
  },
  {
    href: 'https://sellersetu.in/',
    title: 'SellerSetu',
    subtitle: 'Product Manager',
    isCurr: false,
    dateStart: '2022',
    dateEnd: '24\u00a0',
    imgSrc: '/assets/work-logos/Logo-SellerSetu.avif',
  },
  {
    href: 'https://imdpune.gov.in',
    title: 'Indian Met. Dept. Pune',
    subtitle: 'Frontend Developer',
    isCurr: false,
    dateStart: '2023',
    dateEnd: '23\u00a0',
    imgSrc: '/assets/work-logos/Logo-IMD.avif',
  },
];
