import React, { useState, useEffect } from 'react';
import { getUserDetails } from "../../Services/ChangePassword";

const DashboardSection = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDetails = await getUserDetails();
        if (userDetails) {
          setUser(userDetails);
        }
      } catch (error) {
        console.error('Failed to fetch user details:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div style={{ marginTop: '6.4rem' }} className="container max-w-7xl mt-8 sm:mt-5">
      <div className="mb-5 ">
        <h3 className="text-2xl font-bold capitalize">
          Welcome, {user ? `${user.first_name} ${user.last_name}` : ''}
        </h3>
      </div>

      <div className="flex  justify-center flex-col mx-auto sm:flex-row gap-4">
        {/* Left Div */}
        <div className="bg-gray-100 p-5 rounded-lg shadow-md h-80 w-full sm:w-[61.5rem]">
          <h5 className="mb-3">My Tasks</h5>
          <div className="flex justify-center flex-col items-center mt-[-1.7rem] h-full">
            <img
              className="mb-2 w-[16.25rem] max-w-full"
              src="https://cdni.iconscout.com/illustration/free/thumb/free-task-list-2080780-1753768.png"
              alt="Task Image"
            />
            <p className="text-base font-medium">You have no tasks.</p>
          </div>
        </div>

        {/* Right Div */}
        <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full sm:w-[23.625rem]">
          <label className="block mb-2">About Us</label>
          <h3 className="mb-3">Ridoana</h3>
          <p className="mb-3">
            Ridoana Junior High School is a dedicated educational institution committed to connecting and simplifying the learning journey. Ridoana operates with a vision to nurture young minds.
          </p>
          <p>
            <a href="/about-us" className="text-blue-500 underline">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
