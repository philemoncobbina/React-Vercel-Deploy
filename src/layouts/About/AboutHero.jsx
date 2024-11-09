import React from 'react';

const AboutHero = () => {
  return (
    <section style={{ marginTop: '6.4rem' }} className="overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className="px-6 py-16 overflow-hidden rounded-lg shadow-lg"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '30rem',
          }}
        >
          <div className="md:max-w-xl text-left">
            <h1 className="font-heading mb-4 text-4xl lg:text-5xl text-white font-extrabold">
              About Our School
            </h1>
            <p className="mb-6 text-lg text-gray-300">
              Our school is committed to providing a nurturing and challenging environment where students can achieve academic excellence and personal growth. Learn more about our mission, vision, and the values that drive us.
            </p>
            <div className="flex space-x-4">
              <a
                className="px-5 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                href="/"
              >
                Back To Home
              </a>
              <button
                className="px-5 py-3 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                 About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
