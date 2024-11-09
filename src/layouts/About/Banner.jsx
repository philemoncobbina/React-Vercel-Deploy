const Banner = () => (
   <section
     className="bg-gray-800 mb-6 rounded-md mx-auto max-w-screen-xl py-4"
     
   >
     <div className="container px-4 mx-auto">
       <div className="relative py-11 px-16 bg-coolGray-900 rounded-md overflow-hidden">
         <img className="absolute z-10 left-4 top-4" src="https://static.shuffle.dev/components/preview/88e9307f-3fef-4ff5-a095-3ea7d814a416/assets/public/flex-ui-assets/elements/dashboard/banners/dots-purple.svg" alt="" />
         <img className="absolute z-10 right-4 bottom-4" src="https://static.shuffle.dev/components/preview/88e9307f-3fef-4ff5-a095-3ea7d814a416/assets/public/flex-ui-assets/elements/dashboard/banners/dots-purple.svg" alt="" />
         <img className="absolute h-64 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover" src="https://static.shuffle.dev/components/preview/88e9307f-3fef-4ff5-a095-3ea7d814a416/assets/public/flex-ui-assets/elements/dashboard/banners/wave.svg" alt="" />
         <div className="relative z-20 flex flex-wrap items-center -m-3">
           <div className="w-full md:w-1/2 p-3">
             <h2 className="mb-6 text-3xl text-white font-bold tracking-tighter">Empowering students to achieve their full potential through a well-rounded education  </h2>
             <ul className="flex flex-wrap">
               <li className="flex items-center mr-6 text-sm text-coolGray-300 font-semibold">
                 <img className="relative top-px mr-2" src="https://static.shuffle.dev/components/preview/88e9307f-3fef-4ff5-a095-3ea7d814a416/assets/public/flex-ui-assets/elements/dashboard/banners/checkbox-red.svg" alt="" />
                 <span className="text-white">Supportive Community</span>
               </li>
               <li className="flex items-center mr-6 text-sm text-coolGray-300 font-semibold">
                 <img className="relative top-px mr-2" src="https://static.shuffle.dev/components/preview/88e9307f-3fef-4ff5-a095-3ea7d814a416/assets/public/flex-ui-assets/elements/dashboard/banners/checkbox-red.svg" alt="" />
                 <span className="text-white">Excellent Academics</span>
               </li>
               <li className="flex items-center mr-6 text-sm text-coolGray-300 font-semibold">
                 <img className="relative top-px mr-2" src="https://static.shuffle.dev/components/preview/88e9307f-3fef-4ff5-a095-3ea7d814a416/assets/public/flex-ui-assets/elements/dashboard/banners/checkbox-red.svg" alt="" />
                 <span className="text-white" >State-of-the-Art Facilities</span>
               </li>
             </ul>
           </div>
           <div className="w-full md:w-1/2 p-3">
             <button className="block md:ml-auto px-7 py-4 font-medium text-lg text-white bg-green-500 hover:bg-green-600 rounded-md">Enroll Now</button>
           </div>
         </div>
       </div>
     </div>
   </section>
);

export default Banner;
