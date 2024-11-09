import React from 'react';
import { useParams } from 'react-router-dom';
import teamMembers from '../../data/teamMembers.json';

const TeamPost = () => {
  const { id } = useParams();
  const member = teamMembers.find(member => member.id === id);

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <section style={{ marginTop: '4.8rem' }} className="mx-auto max-w-screen-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-8 ">
          <div className="w-full md:w-1/2 px-2" style={{ marginRight: '-4rem' }}> 
            <img
              className="object-cover"
              src={member.imgSrc}
              alt={member.name}
              style={{ maxWidth: '100%', height: 'auto', width: '500px', maxHeight: '700px' }}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center px-2"> 
            <h2 className="text-3xl font-semibold mb-2">{member.name}</h2>
            <h3 className="text-xl text-gray-600 mb-2">{member.role}</h3>
            <p className="text-lg mb-2">{member.desc1}</p>
            <p className="text-lg">{member.desc2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPost;
