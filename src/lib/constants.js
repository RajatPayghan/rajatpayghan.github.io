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

// CONTACTS : Contacts in About Me Section
export const CONTACTS = [
  {
    title: 'Email',
    url: 'mailto:rajat.payghan@gmail.com',
    color: '#34A853',
    icon: <Gmail size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
  },
  // {
  //   title: 'Phone',
  //   url: 'tel:+919834324959',
  //   color: '#008080',
  //   icon: <Phone size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
  //   isLast: true,
  // },
];

// SOCIALS : Links to Social Profiles
export const SOCIALS = [
  {
    title: 'GitHub',
    url: 'https://github.com/RajatPayghan',
    color: '#333333',
    icon: <GitHub size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rajatpayghan',
    color: '#0077B5',
    icon: <LinkedIn size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/@rajatpayghan1384',
    color: '#FF0000',
    icon: <YouTube size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
  },
];

// WORK EXPERIENCE
export const WORKS = [
  {
    href: 'https://www.wellsfargo.com/',
    title: 'Wells Fargo Tech',
    subtitle: 'Software Engineer',
    date: '2025 — \u00a0\u00a0',
  },
  {
    href: 'https://www.adeccogroup.com/',
    title: 'The Adecco Group',
    subtitle: 'Process Intern',
    date: '2024 — 24',
  },
  {
    href: 'https://bits-sutechteam.org/',
    title: "Students' Union Tech Team",
    subtitle: 'Head of Product',
    date: '2022 — 24',
  },
  {
    href: 'https://sellersetu.in/',
    title: 'SellerSetu',
    subtitle: 'Product Manager',
    date: '2022 — 24',
  },
  {
    href: 'https://imdpune.gov.in',
    title: 'Indian Met. Dept. Pune',
    subtitle: 'Frontend Developer',
    date: '2023 — 23',
  },
  {
    href: '',
    title: 'Freelance Designer',
    subtitle: 'Product Designer',
    date: '2021 — 25',
  },
];
