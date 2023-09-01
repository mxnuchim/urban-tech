'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { navigationMenu } from '../data';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { BiChevronRight } from 'react-icons/bi';
import { images, svgs } from '@/public';
import Button from '../components/shared/Button';

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const { logo } = images;

  useEffect(() => {
    function handleResize() {
      if (typeof window !== 'undefined') {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });

        if (dimensions.width > 768 && navOpen) {
          setNavOpen(false);
        }
        window.addEventListener('resize', handleResize);
      }
    }
    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/** Logo */}
            <div>
              <Link href={'/'}>
                <Image src={logo} width={157} height={30} alt="" />
              </Link>
            </div>

            {/** Navigation Menu */}
            <div className="hidden text-center lg:block">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, index) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/** CTA */}
            <div className="">
              <Button href={'/'} btnText="Get started" />

              <button className="block lg:hidden" onClick={mobileMenuHandler}>
                <HiOutlineMenuAlt3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/** For Mobile Devices */}
      <div
        className={
          navOpen
            ? 'py-0 block fixed w-screen z-[9999]'
            : 'py-0 hidden fixed w-screen z-[9999]'
        }
      >
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileMenuHandler}
        ></div>

        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center space-x-3">
            <button
              className="flex items-center space-x-3"
              onClick={mobileMenuHandler}
            >
              <GrClose />
              <span>Close</span>
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {navigationMenu.map((item, index) => (
                <li key={item.label}>
                  <Link
                    className="group flex items-center py-2 duration-300 transition-all ease-in-out text-black hover:text-primary"
                    href={item.href}
                  >
                    <span> {item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
