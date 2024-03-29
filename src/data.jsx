import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Godswill',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Peter',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '19 years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Nigerian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Awoyaya, lagos',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+234- 915-235-4081 ',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'petergodswill1100@gmail.com',
  },

  {
    id: 9,
    title: 'LinkedIn : ',
    description: 'peter godswill',
  },

  {
    id: 10,
    title: 'Langage : ',
    description: ' English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Year of <br /> Experience',
  },

  {
    id: 2,
    no: '20+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '10+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '3+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Web Developer <span> React </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2022',
    title: 'UI/UX Designer <span> Figma </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2019 - 2023',
    title: 'Videography',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'O level Degree <span> Malizzay High school </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Master Degree <span> KIEV University </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'Bachelor Degree <span> Tunis High School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '50',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '75',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '30',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '70',
  },

  // {
  //   id: 6,
  //   title: 'Jquery',
  //   percentage: '50',
  // },

  // {
  //   id: 7,
  //   title: 'Angular',
  //   percentage: '65',
  // },

  {
    id: 8,
    title: 'React',
    percentage: '60',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Riks radiant',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'riks__',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'html, css',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'riksradiant.netlify.app',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Kanga wine store',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'html & css',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://kanga-fine-wine.netlify.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'personal project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'html & javaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://vonshoes.netlify.app/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'langing page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'none',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: ' html ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: ' https://piggyproject.netlify.app/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'sign up page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'none',
      },
      {
        title: 'Language : ',
        desc: ' html & css',
      },
      {
        title: 'Preview : ',
        desc: 'none',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: ' landing page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'none',
      },
      {
        icon: <FaCode />,
        title: 'software : ',
        desc: 'adobe illustrator',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'none',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
