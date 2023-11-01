import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <a href="/">
              <Icon icon="ri:home-fill" color="white" />
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="lg:flex space-x-4">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-300 py-2 px-4 block border-b-2 border-transparent hover:border-yellow-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-gray-300 py-2 px-4 block border-b-2 border-transparent hover:border-yellow-400"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-300 py-2 px-4 block border-b-2 border-transparent hover:border-yellow-400"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/resume"
                  className="hover:text-gray-300 py-2 px-4 block border-b-2 border-transparent hover:border-yellow-400"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;