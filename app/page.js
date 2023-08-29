import Image from 'next/image';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Stats from './components/Stats';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Solutions />
    </>
  );
}
