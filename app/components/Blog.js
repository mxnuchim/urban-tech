'use client';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { blogContent } from '../data';
import 'swiper/css';
import Image from 'next/image';

const Blog = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);

  const sliderRef = useRef(null);

  useEffect(() => {
    setIsEnd(sliderRef?.current?.swiper?.isEnd);
    setIsBeginning(sliderRef?.current?.swiper?.isBeginning);
  });

  const prevHandler = useCallback(() => {
    if (!sliderRef?.current) return;
    sliderRef?.current?.swiper?.slidePrev();
  });
  const nextHandler = useCallback(() => {
    if (!sliderRef?.current) return;
    sliderRef?.current?.swiper?.slideNext();
  });

  return (
    <section className="py-20 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-10">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {blogContent.heading.subTitle && (
              <span
                className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight
          before:left-0 before:top-0 before:bottom-0 before:-z-10"
              >
                {blogContent.heading.subTitle}
              </span>
            )}
            {blogContent.heading.title && (
              <h2 className=" text-heading text-2xl lg:text-4xl font-bold mb-5">
                {blogContent.heading.title}
              </h2>
            )}
            {blogContent.heading.description && (
              <p className="text-body leading-relaxed">
                {blogContent.heading.description}
              </p>
            )}
          </div>
          <div className="lg:w-5/12 text-left lg:text-right">
            <div className="inline-flex ml-auto space-x-3">
              <div
                onClick={prevHandler}
                className={`${
                  isBeginning === true
                    ? 'opacity-30 bg-[#E1E7EA] cursor-auto'
                    : 'opacity-100 hover:bg-primary'
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
              >
                <BiChevronLeft
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                    isBeginning === true
                      ? 'group-hover:!text-primary'
                      : 'group-hover:text-white'
                  }`}
                />
              </div>

              <div
                onClick={nextHandler}
                className={`${
                  isEnd === true
                    ? 'opacity-30 bg-[#E1E7EA] cursor-auto'
                    : 'opacity-100 hover:bg-primary'
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
              >
                <BiChevronRight
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                    isEnd === true
                      ? 'group-hover:!text-primary'
                      : 'group-hover:text-white'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            968: {
              width: 968,
              slidesPerView: 2,
            },
          }}
          ref={sliderRef}
          speed={700}
          spaceBetween={30}
          onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          className="z-50 py-32 mb-24 relative flex items-stretch !overflow-visible before:content-[''] before:z-50 before:py-32
before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light"
        >
          {blogContent.recentBlog.map((blog, index) => (
            <SwiperSlide className="overflow-visible h-full" key={blog.title}>
              <div className="p-5 rounded-lg bg-white relative mt-10">
                <Link
                  href={blog.permalink}
                  className="relative -mt-10 inline-block overflow-hidden rounded-lg mb-4"
                >
                  <Image
                    src={blog.featuredImg}
                    width={782}
                    height={467}
                    alt=""
                  />
                </Link>
                <h2 className="text-heading text-lg font-bold leading-7 mb-5">
                  <Link href={blog.permalink} className="relative text-heading">
                    {blog.title}
                  </Link>
                </h2>
                <p className="relative mb-6">{blog.excerpt}</p>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={blog.author.img}
                      width={50}
                      height={50}
                      alt=""
                      className="rounded-full h-14 w-14 object-cover"
                    />
                  </div>
                  <div className="leading-5">
                    <strong className="text-primary">{blog.author.name}</strong>
                    <span className="block text-sm">
                      {blog.author.position}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mx-auto flex items-center justify-center">
          <Link
            href={blogContent.cta.href}
            className="transition-all duration-300 ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400"
          >
            {blogContent.cta.label}
            <strong className="text-primary pl-1 font-semibold">
              {blogContent.cta.labelSuffix}
            </strong>
            <span className="text-gray-300">|</span>
            <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
              <BiChevronRight className="w-6 h-6 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
