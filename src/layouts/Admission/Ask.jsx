import React from 'react';

const Ask = () => {
  return (
    <section style={{ marginTop: '6.4rem' }} className="overflow-hidden">
      <div className="container px-4">
        <div
          className="px-8 py-20 overflow-hidden rounded-3xl"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="md:max-w-2xl text-left">
            <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
              Welcome to Our School
            </span>
            <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-white font-black tracking-tight">
              <span>Explore Our Legacy</span>
            </h1>
            <p className="mb-8 text-xl text-gray-400 font-bold">
              Join a community of learners and educators committed to excellence and growth.
            </p>
            <div className="max-w-lg">
              <div className="flex flex-wrap justify-start">
                <div className="w-full md:w-auto p-2">
                  <a
                    className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
                <div className="w-full md:w-auto p-2">
                  <a
                    className="block w-full px-4 py-2.5 text-sm text-center text-gray-100 font-bold bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 rounded-full"
                    href="#"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ask;
