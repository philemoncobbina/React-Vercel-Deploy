import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sabo Masties",
    designation: "Founder @ Rolex",
    content: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "https://play.nextjstemplates.com/_next/image?url=%2Fimages%2Ftestimonials%2Fauthor-01.png&w=64&q=75",
  },
  {
    id: 2,
    name: "Margin Gesmu",
    designation: "Founder @ UI Hunter",
    content: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "https://bootstrapmade.com/demo/templates/Active/assets/img/testimonials/testimonials-1.jpg",
  },
  {
    id: 3,
    name: "William Smith",
    designation: "Founder @ Trorex",
    content: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "https://bootstrapmade.com/demo/templates/Active/assets/img/testimonials/testimonials-2.jpg",
  },
];

const Testimonials = () => {
  const ratingIcons = Array(5).fill().map((_, index) => (
    <svg key={index} width="18" height="16" viewBox="0 0 18 16" className="fill-current text-yellow-500">
      <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
    </svg>
  ));

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">What our Clients Say</h3>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Testimonials</h2>
          <p className="text-base text-gray-700 dark:text-gray-400">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {ratingIcons}
                </div>
                <p className="text-gray-700 dark:text-gray-400 mb-4">
                  “{testimonial.content}”
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
