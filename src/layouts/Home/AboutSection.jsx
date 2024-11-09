import React, { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function AboutSection() {
  const carouselApiRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    const handleNextSlide = () => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
      }
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          intervalIdRef.current = setInterval(handleNextSlide, 5000); // Change slide every 5 seconds
        } else {
          if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.5, // Adjust this value as needed
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutSectionRef} className="flex p-5 mx-auto max-w-screen-xl flex-col justify-content-center values-content">
      <div className="relative mx-auto mb-12 max-w-[620px] text-center pt-6 md:mb-20">
        <h2 className="mb-5 text-center font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
          Discover Our School's Core Values
        </h2>
        <p className="text-base text-dark-text">
          Learn more about our commitment to excellence in education and our vision for shaping future leaders.
        </p>
      </div>
      <Carousel setApi={(api) => carouselApiRef.current = api} className="w-full max-w-screen-xl">
        <CarouselContent>
          <CarouselItem>
            <div className="-mx-4 flex p-4 flex-wrap items-center">
              <div className="flex flex-col md:flex-row items-center">
                <img
                  src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/800x600"
                  alt="About Us"
                  className="w-full md:w-1/2"
                />
                <div className="text-center md:text-left md:w-1/2 md:ml-4 mt-4 md:mt-0">
                  <h2 className="text-xl text-center font-bold">About Us</h2>
                  <p className="text-center mt-2">
                    Our school is dedicated to providing a nurturing and challenging environment where students can thrive academically and personally. We strive to create a supportive community where every student is encouraged to reach their full potential.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="-mx-4 p-4 flex flex-wrap items-center">
              <div className="flex flex-col md:flex-row-reverse items-center">
                <img
                  src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/800x600"
                  alt="Mission"
                  className="w-full md:w-1/2"
                />
                <div className="text-center md:text-left md:w-1/2 md:mr-4 mt-4 md:mt-0">
                  <h2 className="text-xl text-center font-bold">Mission</h2>
                  <p className="text-center mt-2">
                    Our mission is to foster a learning environment that emphasizes academic excellence, personal growth, and social responsibility. We aim to equip students with the knowledge and skills necessary to excel in their future endeavors and contribute positively to society.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="-mx-4 p-4 flex flex-wrap items-center">
              <div className="flex flex-col md:flex-row items-center">
                <img
                  src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/800x600"
                  alt="Vision"
                  className="w-full md:w-1/2"
                />
                <div className="text-center md:text-left md:w-1/2 md:ml-4 mt-4 md:mt-0">
                  <h2 className="text-xl text-center font-bold">Vision</h2>
                  <p className="text-center mt-2">
                    Our vision is to be a leading educational institution recognized for excellence in teaching, innovation, and student success. We aspire to inspire a lifelong love of learning and prepare our students to be future leaders and global citizens.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="carousel-nav" />
        <CarouselNext className="carousel-nav" />
      </Carousel>
    </div>
  );
}
