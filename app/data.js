import { animations, images, svgs } from '@/public';
const {
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  mobilePhone,
  community,
  consulting,
  uxDesign,
  techSkill,
} = images;
const { illustrationWoman, webDev } = svgs;
const { joinUsAnimation } = animations;

export const navigationMenu = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#',
    label: 'How we work',
  },
  {
    href: '#',
    label: 'Our mission',
  },
  {
    href: '#',
    label: 'About',
  },
  {
    href: '#',
    label: 'Contact',
  },
];

export const heroContent = {
  text: {
    subheading: `Welcome to Urban Tech`,
    heading: `Building Tomorrow's Solutions Today.`,
    description: `At Urban Tech, we specialize in weaving together the threads of creativity and technology to craft solutions that meet your business needs. We're not just about code – we're about connecting with your audience through user-friendly designs and intuitive interfaces.`,
  },
  images: {
    img1: hero1,
    img2: hero2,
    img3: hero3,
    img4: hero4,
    img5: hero5,
  },
};

export const statsContent = {
  stats: [
    {
      number: '99.9%',
      label: 'Project Completion Rate',
    },
    {
      number: '15+',
      label: 'Solutions Delivered',
    },
    {
      number: '5/5',
      label: 'Client Ratings',
    },
  ],
  getStarted: {
    heading: 'Begin your journey with us',
    description:
      'We are your innovation partner. From conceptualization to realization, we breathe life into your ideas, crafting digital solutions that transcend your expectations',
    img: joinUsAnimation,
    cta: {
      cta_href: '#_',
      cta_label: 'Learn more',
    },
  },
};

export const servicesContent = {
  heading: {
    title: 'Our Services',
    subTitle: 'What We Offer',
    description:
      'Explore our range of comprehensive services designed to meet your digital needs.',
  },
  items: [
    {
      icon: webDev, // Replace with actual icon class or source
      title: 'Web Development',

      description:
        'Our team of seasoned experts transforms your ideas into captivating digital experiences.',
    },
    {
      icon: mobilePhone, // Replace with actual icon class or source
      title: 'Mobile App Development',
      description:
        'Building dynamic and user-friendly mobile applications that meet modern demands.',
    },
    {
      icon: uxDesign,
      title: 'UI/UX Design',
      description:
        'Immerse your users in an exceptional digital journey with our UI/UX design expertise. ',
    },
    {
      icon: techSkill, // Replace with actual icon class or source
      title: 'Developer X',
      description:
        'The Dev X program is geared towards arming you and and your team with job critical skills and individuals through intense job-focused sessions.',
    },
    {
      icon: consulting, // Replace with actual icon class or source
      title: 'Consultation',
      description:
        'Providing expert guidance and advice to steer your digital strategies in the right direction.',
    },

    {
      icon: community, // Replace with actual icon class or source
      title: 'Community Management',
      description:
        'Nurturing and growing online communities to foster engagement and collaboration.',
    },
  ],
};
