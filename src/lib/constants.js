// ICONS
import { Phone, Github, Linkedin, Youtube, Mail } from 'lucide-react';

const ICON_SIZE = 32;
const STROKE_WIDTH = 2;

// SIDEMENU ONLINE PROFILES
export const PROFILES = [
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
  {
    title: 'Mail',
    url: 'mailto:rajat.payghan@gmail.com',
    color: '#34A853',
    icon: <Mail size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
  },
  {
    title: 'Phone',
    url: 'tel:+919834324959',
    color: '#008080',
    icon: <Phone size={ICON_SIZE} strokeWidth={STROKE_WIDTH} />,
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
