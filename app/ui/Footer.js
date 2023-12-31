'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiChevronRight, BiSolidHeart } from 'react-icons/bi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { HiLocationMarker, HiPhone, HiOutlineMail } from 'react-icons/hi';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { footerContent } from '../data';

const Footer = () => {
  return (
    <footer role="contentinfo" className="py-20 bg-white" id="contact">
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src={footerContent.about.logo}
                width={157}
                height={30}
                alt=""
              />
            </Link>
            <p className="leading-relaxed mb-7">
              {footerContent.about.description}
            </p>
            <p className="">
              <Link
                href={footerContent.about.cta.href}
                className="flex space-x-2 outline-none items-center font-semibold text-primary group"
              >
                <span>{footerContent.about.cta.label}</span>
                <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-black">
                  <BiChevronRight className="text-lg" />
                </span>
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink, index) => (
                <div key={index ?? footerLink.heading}>
                  <h3 className="font-semibold text-heading mb-5">
                    {footerLink.heading}
                  </h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link, index) => (
                      <li className="mb-3" key={link.label}>
                        <Link
                          href={link.href}
                          target="_blank"
                          className="group flex items-center duration-300 transition-all ease-in-out hover:text-primary"
                        >
                          <span>{link.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                            <BiChevronRight className="text-xl" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <h3 className="font-semibold text-heading mb-5">
              {footerContent.contact.heading}
            </h3>
            <p className="leading-relaxed mb-7">
              {footerContent.contact.description}
            </p>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <HiLocationMarker className="text-xl text-primary" />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiPhone className="text-xl text-primary" />
                <span>{footerContent.contact.address.phone}</span>
              </li>

              <li className="flex items-start space-x-3 mb-5">
                <HiOutlineMail className="text-xl text-primary" />
                <Link href={`mailto:${footerContent.contact.address.email}`}>
                  <span>{footerContent.contact.address.email}</span>
                </Link>
              </li>
            </ul>
            <div className="flex gap-5">
              <Link
                href={'https://twitter.com/urbantech_X'}
                target="_blank"
                className="text-primary hover:text-black"
              >
                <BsTwitter size={30} />
              </Link>
              <Link
                href={'https://www.instagram.com/urbantech_x/'}
                target="_blank"
                className="text-primary hover:text-black"
              >
                <BsInstagram size={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-gray-200">
          <p className="">
            {footerContent.copyright.labelOne}{' '}
            {footerContent.copyright.labelTwo}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
