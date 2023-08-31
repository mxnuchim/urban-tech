import Image from 'next/image';
import Blog from './components/Blog';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';
import DeveloperX from './components/DeveloperX';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <DeveloperX />
      <Testimonial />
      <Blog />
    </>
  );
}
