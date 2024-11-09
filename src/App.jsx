
import './App.css'
import './index.css'

import React from 'react';

const App = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-6">
      {/* Main Header and Paragraph */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Main Header</h1>
        <p className="text-lg">This is a paragraph below the main header.</p>
      </div>

      {/* First Div */}
      <div className="flex mx-auto flex-col md:flex-row items-center mx-auto p-2">
        <div className="md:w-1/2 w-full md:mr-4 mb-4 md:mb-0 order-2 md:order-1">
          <img
            src="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Description of image"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 w-full md:text-left text-center order-1 md:order-2">
          <h2 className="text-xl font-bold mb-4">Richard Sam Dankwah, <br/> Head Teacher</h2>
          <p className="text-base hidden md:block">This is a paragraph that will be displayed alongside the header.</p>
        </div>
      </div>
      <div className=" flex items-center justify-center">
      <p className="block md:hidden text-cent">"This text is visible  ,hblholipop' only on small screens.</p>
      </div>
      <div className="  flex items-center  justify-center">
      <p className=" lg:w-9/12 w-full text-centre"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, asperiores hic dicta praesentium vitae cum! Dolores ab praesentium pariatur consectetur cupiditate doloremque unde sapiente ut, culpa nulla facere quasi quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae molestiae repellendus quibusdam quasi sint repellat adipisci maiores provident. Voluptate consequuntur minus fugiat aperiam ab mollitia reiciendis aliquid quaerat nesciunt.</p>
      </div>
      
      {/* Second Div */}
      <div className="flex flex-col-reverse md:flex-row items-center p-2">
        <div className="md:w-1/2 w-full md:mr-4 mb-4 md:mb-0 order-1">
          <img
            src="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Description of image"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 w-full md:text-left text-center order-1">
          <h2 className="text-xl font-bold mb-4">Caulins Kwesi Adjey, <br/> Director General</h2>
          <p className="text-base hidden md:block">This is a paragraph that will be displayed alongside the header.</p>
        </div>
      </div>
      <div className=" flex items-center justify-center">
      <p className="block md:hidden text-cent">"This text is visible  ,hblholipop' only on small screens.</p>
      </div>
      <div className="  flex items-center  justify-center">
      <p className=" lg:w-9/12 w-full text-centre"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, asperiores hic dicta praesentium vitae cum! Dolores ab praesentium pariatur consectetur cupiditate doloremque unde sapiente ut, culpa nulla facere quasi quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae molestiae repellendus quibusdam quasi sint repellat adipisci maiores provident. Voluptate consequuntur minus fugiat aperiam ab mollitia reiciendis aliquid quaerat nesciunt.</p>
      </div>
      
      {/* Third Div */}
      <div className="flex flex-col md:flex-row items-center p-2">
        <div className="md:w-1/2 w-full md:mr-4 mb-4 md:mb-0 order-2">
          <img
            src="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Description of image"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 w-full md:text-left text-center order-1">
          <h2 className="text-xl font-bold mb-4">Dominic Prat Antwi, <br/> Director General</h2>
          <p className="text-base hidden md:block">This is a paragraph that will be displayed alongside the header.</p>
        </div>
      </div>
      <div className=" flex items-center justify-center">
      <p className="block md:hidden text-cent">"This text is visible  ,hblholipop' only on small screens.</p>
      </div>
      <div className="  flex items-center  justify-center">
      <p className=" lg:w-9/12 w-full text-centre"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, asperiores hic dicta praesentium vitae cum! Dolores ab praesentium pariatur consectetur cupiditate doloremque unde sapiente ut, culpa nulla facere quasi quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae molestiae repellendus quibusdam quasi sint repellat adipisci maiores provident. Voluptate consequuntur minus fugiat aperiam ab mollitia reiciendis aliquid quaerat nesciunt.</p>
      </div>
    </div>
  );
};

export default App;
