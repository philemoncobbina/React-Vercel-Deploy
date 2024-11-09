import teamMembers from '../../data/teamMembers.json';
import React from 'react';
import { Link } from 'react-router-dom';

const TeamSection = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      
      <div className="relative container px-4 mx-auto">
        <div className="max-w-2xl lg:max-w-3xl mx-auto xl:max-w-7xl">
          <div className="flex flex-wrap mb-20 -mx-4 items-center">
            <div className="w-full xl:w-1/2 px-4">
              <div>
                <h3 className="font-heading text-3xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-8">
                  <span>Get to know our amazing</span>
                  <span className="font-serif italic"> Team</span>
                </h3>
              </div>
            </div>
            <div className="w-full xl:w-1/2 px-4">
              <div className="max-w-md xl:ml-auto">
                <p className="text-lg text-gray-500 mb-6">
                  Mi turpis turpis in justo pellentesque id nibh praesent. Posuere vel sit dignissim eu nisl.
                </p>
                <a
                  className="inline-flex py-4 px-6 items-center text-sm text-orange-900 font-semibold bg-white border border-gray-200 hover:border-orange-900 rounded-full transition duration-200"
                  href="#"
                >
                  <span className="mr-4">See More Team</span>
                  <span>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="w-full md:w-1/2 xl:w-1/4 px-4 mb-12">
                <div className="max-w-xs md:max-w-none mx-auto">
                  <Link to={`/about/${member.id}`}>
                    <img
                      className="block mb-4 w-full h-72 object-cover rounded-3xl"
                      src={member.imgSrc}
                      alt={member.name}
                    />
                    <h5 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h5>
                    <span className="text-gray-500">{member.role}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
