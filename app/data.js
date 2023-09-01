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
  logo,
} = images;
const { illustrationWoman, webDev } = svgs;
const { joinUsAnimation } = animations;
const { person1, person2, person3, post1, post2, post3, manuchim } = images;

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
      icon: webDev,
      title: 'Web Development',

      description:
        'Our team of seasoned experts transforms your ideas into captivating digital experiences.',
    },
    {
      icon: mobilePhone,
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
      icon: techSkill,
      title: 'Developer X',
      description:
        'The Dev X program is geared towards arming you and and your team with job critical skills and individuals through intense job-focused sessions.',
    },
    {
      icon: consulting,
      title: 'Consultation',
      description:
        'Providing expert guidance and advice to steer your digital strategies in the right direction.',
    },

    {
      icon: community,
      title: 'Community Management',
      description:
        'Nurturing and growing online communities to foster engagement and collaboration.',
    },
  ],
};

export const devXContent = {
  text: {
    title: 'The Developer-X Program',
    subTitle: 'Dev-X',
    description: `From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our Family Security Plan, you can rest easy knowing that you've taken the necessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most - your family's well-being.`,
    features: [
      { title: 'Cybersecurity solutions' },
      { title: 'Cybersecurity solutions' },
      { title: 'Cybersecurity solutions' },
      { title: 'Cybersecurity solutions' },
      { title: 'Cybersecurity solutions' },
      { title: 'Cybersecurity solutions' },
    ],
    cta: {
      btn1: {
        href: '#_',
        label: 'Get started',
      },
      btn2: {
        href: '#_',
        label: 'How it works?',
      },
    },
  },
  images: {
    img1: hero1,
    img2: hero2,
    img3: hero3,
    img4: hero4,
    img5: hero5,
  },
  experience: {
    years: '25+',
    label: 'years of experience',
  },
};

export const testimonialContent = {
  heading: {
    subTitle: 'Customers say...',
    title: 'Hear what our customers say',
    description:
      'From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with',
    cta: {
      cta_href: '#_',
      cta_label: 'Get Started',
    },
  },

  testimonials: [
    {
      img: person1,
      name: 'Jane Cooper',
      position: 'Cutsomer - Dallas, TX',
      testimony:
        'With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!',
    },
    {
      img: person2,
      name: 'Alisa Richardson',
      position: 'Cutsomer - Miami, FL',
      testimony:
        'With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!',
    },
    {
      img: person3,
      name: 'Davon McKenny',
      position: 'Cutsomer - San Francisco, CA',
      testimony:
        'With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!',
    },
  ],
};

export const blogContent = {
  heading: {
    subTitle: 'Blog',
    title: 'Our Latest Articles',
    description:
      'We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations.',
  },
  recentBlog: [
    {
      permalink: '#_',
      featuredImg: post1,
      title: '10 Essential Tips for Protecting Your Home from Burglaries',
      excerpt:
        'Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft.',
      author: {
        img: manuchim,
        name: 'Manuchimso Oliver',
        position: 'Editor, CTO, Co-Founder',
      },
    },
    {
      permalink: '#_',
      featuredImg: post2,
      title: '10 Essential Tips for Protecting Your Home from Burglaries',
      excerpt:
        'Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft.',
      author: {
        img: manuchim,
        name: 'Manuchimso Oliver',
        position: 'Editor, CTO, Co-Founder',
      },
    },
    {
      permalink: '#_',
      featuredImg: post3,
      title: '10 Essential Tips for Protecting Your Home from Burglaries',
      excerpt:
        'Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft.',
      author: {
        img: manuchim,
        name: 'Manuchimso Oliver',
        position: 'Editor, CTO, Co-Founder',
      },
    },
    {
      permalink: '#_',
      featuredImg: post3,
      title: '10 Essential Tips for Protecting Your Home from Burglaries',
      excerpt:
        'Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft.',
      author: {
        img: manuchim,
        name: 'Manuchimso Oliver',
        position: 'Editor, CTO, Co-Founder',
      },
    },
    {
      permalink: '#_',
      featuredImg: post3,
      title: '10 Essential Tips for Protecting Your Home from Burglaries',
      excerpt:
        'Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft.',
      author: {
        img: manuchim,
        name: 'Manuchimso Oliver',
        position: 'Editor, CTO, Co-Founder',
      },
    },
    {
      permalink: '#_',
      featuredImg: post3,
      title: '10 Essential Tips for Protecting Your Home from Burglaries',
      excerpt:
        'Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft.',
      author: {
        img: manuchim,
        name: 'Manuchimso Oliver',
        position: 'Editor, CTO, Co-Founder',
      },
    },
  ],
  cta: {
    href: '#_',
    label: 'To view all articles',
    labelSuffix: 'click here',
  },
};

export const footerContent = {
  about: {
    logo: logo,
    description:
      'From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with',
    cta: {
      href: '#_',
      label: 'Learn more',
    },
  },
  footerLinks: [
    {
      heading: 'Company',
      links: [
        { href: '#_', label: 'Home' },
        { href: '#_', label: 'Our mission' },
        { href: '#_', label: 'Developer-X' },
        { href: '#_', label: 'About' },
        { href: '#_', label: 'Careers' },
        { href: '#_', label: 'Contact' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { href: '#_', label: 'Blog' },
        { href: '#_', label: 'Support' },
        { href: '#_', label: 'Privacy Policy' },
      ],
    },
  ],
  contact: {
    heading: 'Contact',
    description:
      'Please feel free to reach out to us with any inquiries, questions or assistance you may need.',
    address: {
      street: '23 Main Street, Abuja, FCT, Nigeria',
      phone: '(+234) 708-160-1461',
      email: 'hello@urbantech.com',
    },
  },
  copyright: {
    labelOne: 'Copyright 2023. Built with',
    labelTwo: 'by M. All rights reserved',
  },
};
