import { animations, images, svgs } from '@/public';
const {} = images;
const { webDev } = svgs;
const { joinUsAnimation } = animations;
const {
  hero1,
  hero11,
  hero2,
  hero3,
  hero4,
  hero5,
  hero10,
  hero7,
  hero6,
  hero8,
  hero9,
  mobilePhone,
  community,
  consulting,
  uxDesign,
  techSkill,
  logo,
  person1,
  person2,
  person3,
  manuchim,
  blog1,
  blog3,
  blog4,
  blog9,
  devX3,
  devX4,
  devX5,
  devX6,
} = images;

export const navigationMenu = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#our-work',
    label: 'Our work',
  },
  {
    href: '#dev-x',
    label: 'Dev-X',
  },
  {
    href: '#reviews',
    label: 'Reviews',
  },
  {
    href: '#articles',
    label: 'Articles',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
];

export const heroContent = {
  text: {
    subheading: `Welcome to Urban Tech`,
    heading: `Building Tomorrow's Solutions Today.`,
    description: `At Urban Tech, we specialize in weaving together the threads of creativity and technology to craft solutions that meet your business needs. We're not just about code – we're about connecting with your audience through user-friendly designs and intuitive interfaces.`,
  },
  //devX3 -> img1
  images: {
    img1: devX3,
    img2: hero8,
    img3: hero3,
    img4: hero10,
    img5: hero9,
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
    subTitle: 'Coming soon',
    description: `Dive headfirst into the world of tech and emerge job-ready with the Dev-X program - a turbocharged, job focused boot camp designed to equip you with the skills and knowledge to excel in today's fast-paced tech industry without the unnecessary clutter and delays of traditional boot camps. Learn from industry experts and seasoned senior developers and get job-ready in a fraction of the time.`,
    features: [
      { title: 'Full Stack Development' },
      { title: 'Mobile Development' },
      { title: 'UI/UX Design' },
      { title: 'DevOps Engineering' },
      { title: 'Data Analytics' },
      { title: 'Cloud Engineering' },
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
    img1: devX5,
    img2: devX6,
    img3: devX4,
  },
  experience: {
    years: '25+',
    label: 'years of experience',
  },
};

export const testimonialContent = {
  heading: {
    subTitle: 'Customer stories',
    title: 'Hear what our customers say',
    description:
      'From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us.',
    cta: {
      cta_href: '#_',
      cta_label: 'Get Started',
    },
  },

  testimonials: [
    {
      img: person1,
      name: 'Emeka U.',
      position: 'Cutsomer - Abuja, FCT, Nigeria.',
      testimony: `Working with your software development team across multiple products have been a game-changer for us. Your commitment to clear communication and attention to detail is top notch. Every project we've collaborated on has been completed on time and to a high quality. We appreciate your team's dedication and can't wait to work with you again!`,
    },
    {
      img: person2,
      name: 'D. Müller.',
      position: 'Cutsomer - Munich, Germany.',
      testimony: `We've been consistently impressed with the completeness and quality of the software solutions from Urban Tech. You've met and exceeded our expectations every step of the way. Your developers' ability to adapt to changing project requirements and maintain the highest level of quality is commendable. We're excited to continue growing with your support.`,
    },
    {
      img: person3,
      name: 'Davon M.',
      position: 'Cutsomer - Manchester, UK',
      testimony: `We've found a true partner in your company. Your team's responsiveness, technical expertise, and ability to deliver complete, high-quality projects are unmatched. You've played a crucial role in our company's growth and success. We look forward to many more successful collaborations.`,
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
      featuredImg: blog1,
      title:
        'A Day in the Life of a Developer: Balancing Work and Tech Lifestyle',
      excerpt:
        'Follow a developers daily routine, from coding challenges to staying updated with the latest tech trends, and discover tips for maintaining a healthy work-life balance.',
      author: {
        img: manuchim,
        name: 'Manuchimso Oliver',
        position: 'CTO, Co-Founder',
      },
    },
    {
      permalink: '#_',
      featuredImg: blog3,
      title: 'SaaS vs. Traditional Software: Pros and Cons for Businesses',
      excerpt:
        'Explore the advantages and disadvantages of Software as a Service (SaaS) compared to traditional software installations, helping businesses make informed decisions.',
      author: {
        img: manuchim,
        name: 'Manuchimso Oliver',
        position: 'Editor, CTO, Co-Founder',
      },
    },
    {
      permalink: '#_',
      featuredImg: blog4,
      title: 'Productivity Hacks for Developers',
      excerpt:
        'Check out this list of productivity tools and techniques that can help developers streamline their workflow and boost their efficiency.',
      author: {
        img: manuchim,
        name: 'Manuchimso Oliver',
        position: 'Editor, CTO, Co-Founder',
      },
    },
    {
      permalink: '#_',
      featuredImg: blog9,
      title: 'Tech Gadgets and Accessories for the Ultimate Workstation Setup',
      excerpt:
        'Explore the must-have gadgets and accessories to create an ergonomic and efficient workstation. From monitors to ergonomic chairs, optimize your workspace for maximum productivity and comfort.',
      author: {
        img: manuchim,
        name: 'Manuchimso Oliver',
        position: 'Editor, CTO, Co-Founder',
      },
    },

    {
      permalink: '#_',
      featuredImg: hero7,
      title: 'Women in Tech: Breaking Barriers and Shaping the Future',
      excerpt:
        'Celebrate the achievements and contributions of women in the tech industry. Highlight inspiring stories of female tech leaders, developers, and innovators who are paving the way for diversity and inclusion.',
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
    description: `At Urban Tech, we prioritize a client-centric work process that puts your product first. We begin with a thorough understanding of your vision and objectives. Our dedicated CTO, as well as designers and developers serve as your main point of contact, ensuring effective communication, seamless collaboration and that your project receives the attention and precision it deserves. Our focus on building long-term partnerships means we're with you every step of the way in achieving your digital goals.`,
    cta: {
      href: '#contact',
      label: 'Learn more',
    },
  },
  footerLinks: [
    {
      heading: 'Company',
      links: [
        { href: '#_', label: 'Home' },
        { href: '#our-work', label: 'Our work' },
        { href: '#dev-x', label: 'Developer-X' },
        { href: '#reviews', label: 'Reviews' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { href: '#articles', label: 'Articles' },
        { href: '#contact', label: 'Support' },
      ],
    },
  ],
  contact: {
    heading: 'Get in touch with us',
    description: `Ready to discuss your next project with us? Contacting us is simple, just send us a mail below. We provide direct access to dedicated senior designers and developers who will promptly assist you in kick-starting your project and ensuring a smooth collaboration from the get-go`,
    address: {
      street: 'Abuja, FCT, Nigeria.',
      phone: '(+234) 708-160-1461',
      email: 'hello@urbantech.com',
    },
  },
  copyright: {
    labelOne: 'Copyright 2023. Built with',
    labelTwo: 'by M. All rights reserved',
  },
};
