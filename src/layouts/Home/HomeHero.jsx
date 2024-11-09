import React from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";

const HomeHero = () => {
  return (
    <div style={{ marginTop: '4.4rem' }} className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-28 lg:pb-48 lg:pt-56">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <div className="z-10 flex ">
              <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <AnimatedShinyText className="inline-flex items-center text-neutral-400 justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  ✨ Ridoana Comprehensive School
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Ignite Minds, Shape Futures, Succeed
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              At Ridoana Comprehensive School, we provide a nurturing and dynamic learning environment where every student can thrive. Explore our diverse range of programs, dedicated faculty, and state-of-the-art facilities that support academic excellence and personal growth.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img src="https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Classroom" className="h-full w-full object-cover object-center rounded-lg" />
                        </div>
                      </BlurFade>
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Students" className="h-full w-full object-cover object-center rounded-lg" />
                        </div>
                      </BlurFade>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Library" className="h-full w-full object-cover object-center rounded-lg" />
                        </div>
                      </BlurFade>
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-md">
                          <img src="https://images.pexels.com/photos/8471850/pexels-photo-8471850.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Science Lab" className="h-full w-full object-cover object-center rounded-md" />
                        </div>
                      </BlurFade>
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sports" className="h-full w-full object-cover object-center rounded-md" />
                        </div>
                      </BlurFade>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Art" className="h-full w-full object-cover object-center rounded-lg" />
                        </div>
                      </BlurFade>
                      <BlurFade inView>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Outdoor" className="h-full w-full object-cover object-center rounded-lg" />
                        </div>
                      </BlurFade>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#contact" className="inline-block rounded-md border border-transparent bg-black px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
