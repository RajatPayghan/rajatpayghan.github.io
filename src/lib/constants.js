// ICONS
import { Phone, Github, Linkedin, Youtube, Mail, Home } from 'lucide-react';

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
    onClick: () => alert('Home!'),
  },
  {
    icon: (
      <Linkedin
        className='dark:text-neutral-100 text-neutral-900'
        size={ICON_SIZE}
        strokeWidth={1}
      />
    ),
    label: 'Linkedin',
    onClick: () => alert('Archive!'),
  },
  {
    icon: (
      <Github
        className='dark:text-neutral-100 text-neutral-900'
        size={ICON_SIZE}
        strokeWidth={1}
      />
    ),
    label: 'Github',
    onClick: () => alert('Profile!'),
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
    onClick: () => alert('Settings!'),
  },
];

// CONTACTS : Contacts in About Me Section
export const CONTACTS = [
  {
    title: 'EMail',
    url: 'mailto:rajat.payghan@gmail.com',
    color: '#34A853',
    icon: <Mail size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
  },
  {
    title: 'Phone',
    url: 'tel:+919834324959',
    color: '#008080',
    icon: <Phone size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
    isLast: true,
  },
];

// SOCIALS : Links to Social Profiles
export const SOCIALS = [
  {
    title: 'GitHub',
    url: 'https://github.com/RajatPayghan',
    color: '#333333',
    icon: <Github size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rajatpayghan',
    color: '#0077B5',
    icon: <Linkedin size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/@rajatpayghan1384',
    color: '#FF0000',
    icon: <Youtube size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
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
    title: 'Students Union Tech Team',
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
