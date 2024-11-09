import React from 'react';
import { FaChalkboardTeacher, FaBookReader, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';

const ValuesSection = () => {
  const values = [
    {
      icon: <FaChalkboardTeacher className="text-5xl text-blue-500" />,
      header: "Expert Faculty",
      paragraph: "Our faculty members are experts in their fields, dedicated to providing top-notch education and guidance to our students.",
    },
    {
      icon: <FaBookReader className="text-5xl text-green-500" />,
      header: "Innovative Learning",
      paragraph: "We embrace innovative teaching methods and technology to enhance the learning experience for all students.",
    },
    {
      icon: <FaHandsHelping className="text-5xl text-yellow-500" />,
      header: "Community Engagement",
      paragraph: "Our school actively participates in community service and encourages students to be socially responsible citizens.",
    },
    {
      icon: <FaGraduationCap className="text-5xl text-red-500" />,
      header: "Academic Excellence",
      paragraph: "We strive for academic excellence and provide a supportive environment to help students achieve their goals.",
    },
  ];

  return (
    <section className="relative md:py-24 bg-gray-100 overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-2xl lg:max-w-3xl mx-auto xl:max-w-7xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">Our Founding Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white p-6 shadow-md rounded-lg">
                {value.icon}
                <h3 className="text-xl font-semibold text-gray-700 mt-4">{value.header}</h3>
                <p className="text-gray-600 mt-2">{value.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
