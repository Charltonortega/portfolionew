import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="bg-white text-black p-4 fixed top-0 w-full" style={{ paddingBottom: 0 }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <a onClick={scrollToTop} className="cursor-pointer">
              charlton.dev
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-black-600 hover:text-gray-300 focus:outline-none focus:text-gray-300"
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
            <ul className="lg:flex space-x-4 font-bold">
              <li>
                <ScrollLink
                  to="top"
                  smooth={true}
                  duration={500}
                  onClick={scrollToTop}
                  className="hover:text-blue-600 py-2 px-4 block border-b-2 border-transparent"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="aboutme"
                  smooth={true}
                  duration={500}
                  className="hover:text-blue-600 py-2 px-1 block border-b-2 border-transparent"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="hover:text-blue-600 py-2 px-1 block border-b-2 border-transparent"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="hover:text-blue-600 py-2 px-1 block border-b-2 border-transparent"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
