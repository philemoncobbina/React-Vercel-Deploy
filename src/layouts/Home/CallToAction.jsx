import React from 'react';

const CallToAction = () => {
  return (
    <section id="about" className="bg-gray-100 pb-8 pt-20 dark:bg-gray-800 lg:pb-[70px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Brilliant Toolkit to Build Next.js SaaS Websites.
                </h2>
                <p className="mb-10 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  The main thrust is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables led by subject matter experts.
                  <br /><br />
                  The main thrust is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel.
                </p>
                <a href="/#" className="inline-block rounded-md border border-transparent bg-blue-600 px-8 py-3 text-center font-medium text-white hover:bg-blue-700">
                  Know More
                </a>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <img
                      alt="about image"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center"
                      sizes="100vw"
                      src="https://play.nextjstemplates.com/_next/image?url=%2Fimages%2Fabout%2Fabout-image-01.jpg&w=1920&q=75"
                    />
                  </div>
                </div>
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <img
                      alt="about image"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center"
                      sizes="100vw"
                      src="https://play.nextjstemplates.com/_next/image?url=%2Fimages%2Fabout%2Fabout-image-02.jpg&w=1920&q=75"
                    />
                  </div>
                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-gray-900 px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <span className="block text-5xl font-extrabold text-white">19</span>
                      <span className="block text-base font-semibold text-white">We have</span>
                      <span className="block text-base font-medium text-white text-opacity-70">Years of experience</span>
                    </div>
                    <div>
                      <span className="absolute left-0 top-0 -z-10">
                        <svg width="106" height="144" viewBox="0 0 106 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.1" x="-67" y="47.127" width="113.378" height="131.304" transform="rotate(-42.8643 -67 47.127)" fill="url(#paint0_linear_1416_214)"></rect>
                          <defs>
                            <linearGradient id="paint0_linear_1416_214" x1="-10.3111" y1="47.127" x2="-10.3111" y2="178.431" gradientUnits="userSpaceOnUse">
                              <stop stopColor="white"></stop>
                              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute right-0 top-0 -z-10">
                        <svg width="130" height="97" viewBox="0 0 130 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.1" x="0.867188" y="0.649902" width="113.378" height="131.304" transform="rotate(28.8381 0.867188 0.649902)" fill="url(#paint0_linear_1416_215)"></rect>
                          <defs>
                            <linearGradient id="paint0_linear_1416_215" x1="57.5559" y1="0.649902" x2="57.5559" y2="132.306" gradientUnits="userSpaceOnUse">
                              <stop stopColor="white"></stop>
                              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
