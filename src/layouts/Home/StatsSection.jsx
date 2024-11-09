import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Stat = ({ targetNumber, description, iconSrc }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = targetNumber;
      if (start === end) return;

      const duration = 2000;
      const incrementTime = Math.abs(Math.floor(duration / (end - start)));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [inView, targetNumber]);

  return (
    <div ref={ref} className="w-full xs:w-80 mb-4 py-7 px-7 bg-white rounded-4xl shadow-lg">
      <div className="flex items-center">
        <img className="block mr-6" src={iconSrc} alt="" />
        <div>
          <span className="block text-3xl font-bold leading-none">{count}</span>
          <span className="text-sm text-gray-500">{description}</span>
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="max-w-lg mx-auto lg:mx-0">
                <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                  🎓 SCHOOL HIGHLIGHTS
                </span>
                <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold mb-5">
                  <span>Celebrating</span>
                  <span className="font-serif italic">Our Achievements</span>
                </h1>
                <p className="max-w-md text-xl text-gray-500 font-semibold">
                  Discover our milestones and successes. From academic excellence to community engagement, explore how we make a difference.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-col max-w-lg mx-auto lg:mr-0">
  <Stat
    targetNumber={1200}
    description="Students Enrolled"
    iconSrc="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/stats/chat-icon-1.svg"
    className="rounded-lg shadow-lg" // Add the desired classes here
  />
  <Stat
    targetNumber={50}
    description="Qualified Faculty Members"
    iconSrc="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/stats/chat-icon-3.svg"
    className="rounded-lg shadow-lg" // Add the desired classes here
  />
  <Stat
    targetNumber={30}
    description="Extracurricular Activities"
    iconSrc="https://static.shuffle.dev/components/preview/c4e6b06e-6b70-403f-92e9-fa62e0a96eef/assets/public/saturn-assets/images/stats/chat-icon-2.svg"
    className="rounded-lg shadow-lg" // Add the desired classes here
  />
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
