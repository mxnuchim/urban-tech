import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { testimonialContent } from '../data';

const Testimonial = () => {
  return (
    <section className="py-20 bg-light" id="reviews">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
            {testimonialContent.heading.subTitle && (
              <span
                className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight
          before:left-0 before:top-0 before:bottom-0 before:-z-10"
              >
                {testimonialContent.heading.subTitle}
              </span>
            )}

            {testimonialContent.heading.title && (
              <h2 className="itext-heading text-2xl lg:text-4xl font-bold mb-5">
                {testimonialContent.heading.title}
              </h2>
            )}

            {testimonialContent.heading.description && (
              <p className="text-body leading-relaxed mb-10">
                {testimonialContent.heading.description}
              </p>
            )}
            {testimonialContent.heading.cta.cta_href && (
              <Link
                href={testimonialContent.heading.cta.cta_href}
                className="py-2.5 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-gray-900 hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                {testimonialContent.heading.cta.cta_label}
              </Link>
            )}
          </div>
          <div className="lg:w-8/12">
            <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
              <div className="md:w-6/12 mb-6 md:mb-0">
                {testimonialContent.testimonials.map((testimonial, index) => {
                  if (index === 2) {
                    return null;
                  }
                  return (
                    <div
                      className={`bg-white p-7 rounded-lg w-full ${
                        index === 1 ? '' : 'mb-6'
                      }`}
                      key={index}
                    >
                      <div className="flex space-x-4 items-center mb-4">
                        <div className="relative">
                          {/* <Image
                            src={testimonial.img}
                            width={579}
                            height={720}
                            className="object-cover h-14 w-14 rounded-full"
                            alt=""
                          /> */}
                          <span className="absolute bottom-0 -right-2 w-6 h-6 bg-ptimary rounded-full flex items-center justify-center">
                            <Image
                              src={'/images/quote.svg'}
                              width={14}
                              height={9}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className=" leading-3">
                          {testimonial.name && (
                            <strong className="block text-heading text-lg">
                              {testimonial.name}
                            </strong>
                          )}
                          {testimonial.position && (
                            <span className=" text-sm">
                              {testimonial.position}
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <blockquote>
                          &ldquo;{testimonial.testimony}&ldquo;
                        </blockquote>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="md:w-6/12">
                <div>
                  <div className="w-16 h-16 hidden md:block bg-greenLight rounded-full mb-6"></div>

                  <div className="bg-white p-7 rounded-lg w-full mb-6">
                    <div className="flex space-x-4 items-center mb-4">
                      <div className="relative">
                        {/* <Image
                          src={testimonialContent.testimonials[2].img}
                          width={579}
                          height={720}
                          className="object-cover h-14 w-14 rounded-full"
                          alt=""
                        /> */}
                        <span className="absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Image
                            src={'/images/quote.svg'}
                            width={14}
                            height={9}
                            alt=""
                          />
                        </span>
                      </div>
                      <div className=" leading-3">
                        {testimonialContent.testimonials[2].name && (
                          <strong className="block text-heading text-lg">
                            {testimonialContent.testimonials[2].name}
                          </strong>
                        )}
                        {testimonialContent.testimonials[2].position && (
                          <span className=" text-sm">
                            {testimonialContent.testimonials[2].position}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <blockquote>
                        &ldquo;{testimonialContent.testimonials[2].testimony}
                        &ldquo;
                      </blockquote>
                    </div>
                  </div>
                  <div className="bg-[#F27763] hiddden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
