import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { getUserDetails } from "../Services/ChangePassword";

import { isLoggedIn, logout } from "../Services/Login"; // Corrected import statement

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
   const navigate = useNavigate();

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

  

   const handleLogout = async () => {
    await logout(navigate);
    setUser(null);
  };

  const getLinkClass = (path) => {
    return window.location.pathname === path || (path !== '/' && window.location.pathname.startsWith(path))
      ? 'text-indigo-500'
      : 'text-gray-500 hover:text-gray-700';
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div style={{ height: '70px' }} className="max-w-7xl mx-auto px-4 pt-3 md:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-gray-800 no-underline">
                Ridoana
              </a>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a
                href="/"
                className={`${getLinkClass('/')} px-3 py-2 rounded-md text-sm font-medium no-underline`}
              >
                Home
              </a>
              <a
                href="/about"
                className={`${getLinkClass('/about')} px-3 py-2 rounded-md text-sm font-medium no-underline`}
              >
                About
              </a>
              <a
                href="/admission"
                className={`${getLinkClass('/admission')} px-3 py-2 rounded-md text-sm font-medium no-underline`}
              >
                Admission
              </a>
              <a
                href="/blog"
                className={`${getLinkClass('/blog')} px-3 py-2 rounded-md text-sm font-medium no-underline`}
              >
                Blog
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/contact"
              className={`${getLinkClass('/contact')} text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium no-underline`}
            >
              Contact
            </a>
            {user ? (
              <div className="relative w-48">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray w-48 text-gray-800 px-3 border py-2 rounded-md text-sm font-medium flex items-center justify-between"
      >
        {`${user.first_name} ${user.last_name}`}
        <FaChevronDown className="h-3 w-5 ml-2" />
      </button>
      {isOpen && (
        <div className="absolute w-48 top-10 right-0 bg-white border rounded-md shadow-md">
          <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">
            Profile
          </a>
          <a href="/changepassword" className="block px-4 py-2 hover:bg-gray-100">
            Change Password
          </a>
          <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
    </div>
            ) : (
              <>
                <a
                  href="/login"
                  className={`${getLinkClass('/login')} no-underline hidden md:inline-block bg-indigo-500 text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Sign In
                </a>
                <a
                  href="/signup"
                  className={`${getLinkClass('/signup')} no-underline hidden md:inline-block bg-gray-100 text-gray-800 px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className={`${getLinkClass('/')} block px-3 py-2 rounded-md text-base font-medium no-underline`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`${getLinkClass('/about')} block px-3 py-2 rounded-md text-base font-medium no-underline`}
          >
            About
          </a>
          <a
            href="/admission"
            className={`${getLinkClass('/admission')} block px-3 py-2 rounded-md text-base font-medium no-underline`}
          >
            Admission
          </a>
          <a
            href="/blog"
            className={`${getLinkClass('/blog')} block px-3 py-2 rounded-md text-base font-medium no-underline`}
          >
            Blog
          </a>
          <a
            href="/contact"
            className={`${getLinkClass('/contact')} block px-3 py-2 rounded-md text-base font-medium no-underline`}
          >
            Contact
          </a>
          {user ? (
            <>
              <a href="/profile" className="block px-3 py-2 rounded-md text-base font-medium no-underline text-gray-500 hover:text-gray-700">
                Profile
              </a>
              <a onClick={handleLogout} className="block cursor-pointer px-3 py-2 rounded-md text-base font-medium no-underline text-red-600 hover:text-red-800">
                Logout
              </a>
            </>
          ) : (
            <>
              <a href="/login" className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium no-underline">Sign In</a>
              <a href="/signup" className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium no-underline">Sign Up</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
