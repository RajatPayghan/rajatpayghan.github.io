
// ICONS
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  SparklesIcon,
  PencilLineIcon,
  NavigationIcon,
  Wand2Icon,
  BookmarkIcon,
  ArmchairIcon
} from 'lucide-react'

// SIDEMENU ONLINE PROFILES
export const PROFILES = {
  github: {
    title: 'GitHub',
    url: 'https://github.com/suyalcinkaya',
    icon: <GithubIcon size={16} />
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rajatpayghan',
    icon: <LinkedinIcon size={16} />
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/rajat.payghan',
    icon: <InstagramIcon size={16} />
  },
  youtube: {
    title: 'YouTube',
    url: 'https://www.youtube.com/c/jagermanmusic',
    icon: <YoutubeIcon size={16} />
  },
  readcv: {
    title: 'Read.cv',
    url: 'https://read.cv/onur'
  }
}

// ROUTING LINKS
export const LINKS = [
  {
    href: '/',
    label: 'Home',
    icon: <SparklesIcon size={16} />
  },
  {
    href: '/writing',
    label: 'Writing',
    icon: <PencilLineIcon size={16} />
  },
  {
    href: '/journey',
    label: 'Journey',
    icon: <NavigationIcon size={16} />
  },
  {
    href: '/stack',
    label: 'Stack',
    icon: <Wand2Icon size={16} />
  }
  // ,
  // {
  //   href: '/bookmarks',
  //   label: 'Bookmarks',
  //   icon: <BookmarkIcon size={16} />
  // }
]


// WORK EXPERIENCE
export const WORKS = [
  {
    href: 'https://www.adeccogroup.com/',
    title: 'The Adecco Group',
    subtitle: 'Process Intern',
    date: '2024 — \u00a0\u00a0',
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
    date: '2021 — \u00a0\u00a0',
  }
]
