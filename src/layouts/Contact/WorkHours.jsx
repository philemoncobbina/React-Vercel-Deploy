import React from 'react';

const WorkHours = () => {
  return (
    <div className="w-full mt-5 mb-5 max-w-screen-lg mx-auto">
      {/* Centered header */}
      <h1 className="text-center text-2xl font-bold mb-8">SCHOOL HOURS</h1>

      {/* Row of three items */}
      <div className="flex gap-6 flex-col md:flex-row justify-center mb-8">
        <div className="text-center mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">Student School Hours</h4>
          <p className="mb-0">Monday – Thursday: 8:15 am – 2:50 pm</p>
          <p className="mt-0">Friday: 8:15 am – 1:00 pm</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">Regular Office Hours</h4>
          <p className="mb-0">Monday – Thursday: 7:45 am – 3:30 pm</p>
          <p className="mt-0">Friday: 7:45 am – 2:00 pm</p>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold">Summer Office Hours</h4>
          <p className="mb-0">Tuesday – Thursday: 10:00 am – 1:00 pm</p>
          <p className="mt-0">Closed on National and State Holidays</p>
        </div>
      </div>

      {/* Centered button */}
      <div className="flex justify-center">
  <a
    href="/reservation"
    className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    Schedule a Visit to Our Campus
  </a>
</div>

    </div>
  );
}

export default WorkHours;
