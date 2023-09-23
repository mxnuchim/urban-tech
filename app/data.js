import { animations, images, svgs } from '@/public';
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
  devX1,
  devX2,
  devX3,
  devX4,
  devX5,
  devX6,
  devX10,
  devX13,
  devX14,
  devX11,
  devX12,
} = images;

export const navigationMenu = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#services',
    label: 'Services',
  },
  {
    href: '#contact',
    label: 'Projects',
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
    href: '#contact',
    label: 'Contact',
  },
];

export const heroContent = {
  text: {
    subheading: `Welcome to Urban Tech Solutions`,
    heading: `Building Tomorrow's Solutions Today.`,
    description: `We're a dynamic company driven by a dual mission - building innovative solutions that empower businesses, and building a community of individuals from all levels in the tech industry. We specialize in crafting cutting-edge solutions for businesses. So whether you're here to transform your business, network with professionals of different levels, or advance in your tech journey, you can become a part of us. And together, we'll create a brighter, tech-driven future for everyone.`,
  },
  //devX11 -> img5
  images: {
    img1: devX3,
    img2: devX11,
    img3: hero3,
    img4: hero10,
    img5: devX13,
  },
};

export const statsContent = {
  stats: [
    {
      number: '100%',
      label: 'Project Completion Rate',
    },
    {
      number: '17+',
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
      cta_href: '#contact',
      cta_label: 'Learn more',
    },
  },
};

export const servicesContent = {
  heading: {
    title: 'What we do',
    subTitle: 'Our services',
    description:
      'Explore our range of comprehensive services designed to meet your digital needs.',
  },
  items: [
    {
      icon: webDev,
      title: 'Web Development',

      description: `Your online presence matters, and we understand that your website is often the first interaction customers have with your brand, and we make sure to deliver visually stunning and highly functional websites that leave a lasting impression`,
    },
    {
      icon: mobilePhone,
      title: 'Mobile App Development',
      description: `Our mobile development team specializes in creating innovative and user-friendly mobile apps for all platforms. Whether it's a consumer-facing app or a business tool, we ensure your mobile presence stands out`,
    },
    {
      icon: uxDesign,
      title: 'UI/UX Design',
      description: `Immerse your users in an exceptional digital journey that's bound to always that leave a lasting impression. Whether you're launching a new product or looking to revamp your existing platform, partner with us to set your brand apart today`,
    },
    {
      icon: techSkill,
      title: 'The Dev-X Program',
      description:
        'The Dev X program is a turbocharged bootcamp geared towards arming individuals and teams with job critical skills through intense sessions and workshops with highly experienced professionals.',
    },
    {
      icon: community,
      title: 'The Dev-X Community',
      description: `Our vibrant community dedicated to fostering collaboration, networking, and learning among individuals in tech. We're always open to engage with like-minded individuals and collaborate with other communities. So, don't hesitate to reach out – we're an email away.`,
    },
    {
      icon: consulting,
      title: 'IT Consultation',
      description: `Discover the full potential of your technology ecosystem. Our team of seasoned experts offers strategic insights to streamline your IT infrastructure, enhance security, and boost operational efficiency`,
    },
  ],
};

export const devXContent = {
  text: {
    title: 'The Dev-X Community',
    subTitle: 'Developer X',
    description: `Dev-X is our very own ecosystem dedicated to experienced and aspiring tech professionals. But that's not all – The Dev-X program is a turbocharged, job-focused bootcamp designed to equip members with critical tech skills, without the unnecessary clutter. We showcase and promote projects and tasks completed by community members to potential employers, and share job and internship opportunities. So whether you're switching careers, enhancing your skills, or networking, we're your express route to growth and success.`,
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
    years: '15+',
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
      cta_href: '#contact',
      cta_label: 'Get Started',
    },
  },

  testimonials: [
    {
      img: person1,
      name: 'Demola. A',
      position: 'Customer - Lagos, Nigeria.',
      testimony: `Working with your software development team across multiple products have been a game-changer for us. Your commitment to clear communication and attention to detail is top notch. Every project we've collaborated on has been completed on time and to a high quality. We appreciate your team's dedication and can't wait to work with you again!`,
    },
    {
      img: person2,
      name: 'Otto Müller.',
      position: 'Customer - Munich, Germany.',
      testimony: `We've been consistently impressed with the completeness and quality of the software solutions from Urban Tech. You've met and exceeded our expectations every step of the way. Your developers' ability to adapt to changing project requirements and maintain the highest level of quality is commendable. We're excited to continue growing with your support.`,
    },
    {
      img: person3,
      name: 'Edward M.',
      position: 'Customer - Manchester, UK',
      testimony: `We've found a true partner in your company. Your team's responsiveness, technical expertise, and ability to deliver complete, high-quality projects are unmatched. You've played a crucial role in our company's growth and success. We look forward to many more successful collaborations.`,
    },
  ],
};

export const blogContent = {
  heading: {
    subTitle: 'Blog',
    title: 'Our Featured Articles',
    description:
      'We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations.',
  },
  recentBlog: [
    {
      permalink:
        'https://dev.to/mxnuchim/a-day-in-the-life-of-a-lead-software-engineer-4o26',
      featuredImg: blog1,
      title:
        'A Day in the Life of a Lead Software Engineer: Balancing Work and Tech Lifestyle',
      excerpt: `Follow a senior developer's daily routine, from coding challenges to staying updated with the latest tech trends, and discover tips for maintaining a healthy work-life balance.`,
      author: {
        img: manuchim,
        name: 'Manuchim Oliver',
        position: 'Founder, CTO.',
      },
    },
    {
      permalink:
        'https://medium.com/@manuchimoliver779/saas-vs-traditional-application-software-the-pros-and-cons-56173feb3283',
      featuredImg: blog3,
      title: 'SaaS vs. Traditional Application Software: The Pros and Cons',
      excerpt:
        'Explore the advantages and disadvantages of Software as a Service (SaaS) compared to traditional application software, helping businesses make informed decisions.',
      author: {
        img: manuchim,
        name: 'Manuchim Oliver',
        position: 'Founder, CTO.',
      },
    },
    {
      permalink:
        'https://medium.com/@manuchimoliver779/productivity-hacks-for-developers-how-to-successfully-manage-your-time-948fc9a0e4e8',
      featuredImg: blog4,
      title:
        'Productivity Hacks for Developers: How to Successfully Manage Your Time',
      excerpt:
        'Check out this list of productivity tools and techniques that can help developers streamline their workflow and boost their efficiency.',
      author: {
        img: manuchim,
        name: 'Manuchim Oliver',
        position: 'Founder, CTO.',
      },
    },
    {
      permalink:
        'https://medium.com/@manuchimoliver779/best-practices-for-writing-clean-typescript-code-8a4a49e1f123',
      featuredImg: hero11,
      title: 'Best Practices For Writing Clean TypeScript Code 👨🏾‍💻',
      excerpt:
        'Unlock the power of TypeScript with these essential best practices for clean and efficient code. Explore project structuring, strong typing, consistency, functional programming, error handling, testing, documentation, and more.',
      author: {
        img: manuchim,
        name: 'Manuchim Oliver',
        position: 'Founder, CTO.',
      },
    },

    {
      permalink:
        'https://medium.com/@manuchimoliver779/blockchain-technology-explained-to-a-web-developer-1eddd2f35391',
      featuredImg: hero7,
      title: 'Blockchain Technology Explained to a Web Developer',
      excerpt:
        'This article breaks down complex concepts into digestible insights, covering blockchain fundamentals, use cases, and how it can revolutionize web development. Dive into the blockchain revolution and discover its potential for your web projects! ',
      author: {
        img: manuchim,
        name: 'Manuchim Oliver',
        position: 'Founder, CTO.',
      },
    },
  ],
  cta: {
    href: 'https://medium.com/@manuchimoliver779',
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
        { href: '#articles', label: 'Articles' },
      ],
    },
    {
      heading: 'Our Recent Projects',
      links: [
        {
          href: 'https://apps.apple.com/us/app/kiko-the-global-marketplace/id6449978195',
          label: 'Kiko',
        },
        { href: 'https://zootoapp.com/', label: 'Zooto' },
        {
          href: 'https://play.google.com/store/apps/details?id=com.scoop.app',
          label: 'Scoop',
        },
        { href: 'https://filparty.com/', label: 'Filparty' },
        // {
        //   href: 'https://play.google.com/store/apps/details?id=com.nata.app',
        //   label: `Nata`,
        // },
        {
          href: 'https://manuchimoliver.vercel.app/',
          label: `M's Portfolio`,
        },
      ],
    },
  ],
  contact: {
    heading: 'Get in touch with us',
    description: `Ready to discuss your next project with us? Contacting us is simple, just send us a mail below. We provide direct access to dedicated senior designers and developers who will promptly assist you in kick-starting your project and ensuring a smooth collaboration from the get-go`,
    address: {
      street: 'Abuja, FCT, Nigeria.',
      phone: '(+234) 708-160-1461',
      email: 'gourbantech@gmail.com',
      email2: '',
    },
  },
  copyright: {
    labelOne: 'Copyright 2023.',
    labelTwo: ' All rights reserved',
  },
};
