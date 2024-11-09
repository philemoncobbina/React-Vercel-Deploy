import React from 'react';

const AboutHistory = () => {
  return (
    <section className="relative md:py-24 overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-2xl lg:max-w-3xl mx-auto xl:max-w-7xl">
          <div className="flex flex-wrap items-center">
            <div className="w-full xl:w-1/2 px-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Our School's Rich History
                </h1>
                <p className="mt-6 text-lg text-gray-500">
                  Founded in [Year], [Your School Name] has been a pillar of education and community for generations. From our humble beginnings in a small classroom to our present-day campus, we've nurtured curious minds, fostered creativity, and instilled values that last a lifetime.
                </p>
              </div>
            </div>
            <div className="w-full xl:w-1/2 px-4">
              <div className="max-w-md xl:ml-auto">
                <p className="text-lg text-gray-500 mb-6">
                  Our alumni have gone on to achieve remarkable success in various fields, from academia to the arts, from technology to public service. We take pride in our legacy and continue to inspire future leaders.
                </p>
                <p className="text-lg text-gray-500 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Necessitatibus sunt atque deleniti quia, dignissimos rerum voluptatum pariatur odit ipsum sapiente dolore consectetur voluptatibus quae aliquam architecto voluptate voluptatem alias reprehenderit. Turpis turpis in justo pellentesque id nibh praesent. Posuere vel sit dignissim eu nisl.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
