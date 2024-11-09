import React from 'react';
import { useContactForm } from '@/layouts/Home/ContactSection';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const ContactHero = () => {
  const {
    formData,
    isAlertOpen,
    handleInputChange,
    handleSubmit,
    setIsAlertOpen,
  } = useContactForm();

  return (
    <section className='w-full mt-5 container mx-auto px-4   '>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4 mx-auto">
          <div className="border border-gray-200 rounded-3xl p-6">
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center font-bold font-heading mb-4">Get in touch</h2>
              <p className="text-center text-gray-600 mb-8">Fill out the form to connect with a member of our team.</p>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-gray-800 font-medium">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-gray-800 font-medium">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-800 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block mb-2 text-gray-800 font-medium">Phone</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="+233 45 90737"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-gray-800 font-medium">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <div className="w-full px-2 mb-4">
                <label className="inline-flex">
                  <input type="checkbox" />
                  <span className="ml-2 text-sm text-gray-500">I agree to our friendly <a className="text-orange-500" href="#">privacy policy</a>.</span>
                </label>
              </div>
              <button className="block w-full p-4 text-sm font-semibold leading-none bg-orange-500 hover:bg-orange-700 text-white rounded" type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4 mx-auto">
          <h3 className="text-xl font-bold">Ridoana Comprehensive School</h3>
          <p className="mt-2">We are a community of learners. We will do whatever it takes to learn. We are building a strong foundation by believing we can, working our plan, then feeling the power of success!</p>
          <p className="mt-4">
            <strong>Address:</strong><br />
            2277 South 3000 East<br />
            St George, Utah 84790
          </p>
          <p className="mt-4">
            <strong>Phone:</strong> <a href="tel:435-673-2232" className="text-gray-500">435-673-2232</a><br />
            <strong>Email:</strong> <a href="mailto:Philemoncobbina19@gmail.com" className="text-gray-500">Philemoncobbina19@gmail.com</a>
          </p>
          <div className="mt-6 h-64 bg-gray-200 flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.11934125465!2d-0.0317500242890023!3d5.695892432225657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf81d489b01b4d%3A0xba16fe638c0eb2c8!2sRidoana%20Comprehensive%20School!5e0!3m2!1sen!2sgh!4v1720828943519!5m2!1sen!2sgh" 
              width="100%" 
              height="100%"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-alert-button {
          background-color: black;
          color: white;
          width: 80px;
          transition: background-color 0.3s ease;
        }
        .custom-alert-button:hover {
          background-color: #333;
        }
        @media (max-width: 600px) {
          .custom-alert-button {
            width: 100%;
          }
        }
      `}</style>
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogTrigger asChild>
          <Button style={{ display: 'none' }}></Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white p-6 rounded-lg shadow-lg">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-gray-900">Success</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600">
              Your message has been sent successfully!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="custom-alert-button" onClick={() => setIsAlertOpen(false)}>
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default ContactHero;
