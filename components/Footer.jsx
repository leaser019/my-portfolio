import Star from '@/public/Star.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import GitHub from '../public/icons/github@2x.png';
import Gmail from '../public/icons/google@2x.png';
import LinkedIn from '../public/icons/linkedin@2x.png';

const Footer = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 mt-20 rounded-2xl shadow-2xl px-10 mx-10 mb-5 sm:mx-8 backdrop-blur-2xl border border-gray-100 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Vo Minh Khang
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Software Engineering
            </p>
          </div>

          <div className="flex space-x-6 items-center">
            <Link
              href="https://www.linkedin.com/in/vominhkhang"
              target="_blank"
              className="transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Image src={LinkedIn} alt="LinkedIn" width="28" height="28" />
            </Link>
            <Link
              href="https://github.com/leaser019?tab=repositories"
              target="_blank"
              className="transition-transform hover:scale-110"
              aria-label="Github"
            >
              <Image src={GitHub} alt="GitHub" width="28" height="28" />
            </Link>
            <Link
              href="mailto:vomkhang35@gmail.com"
              target="_blank"
              className="transition-transform hover:scale-110"
              aria-label="Email"
            >
              <Image src={Gmail} alt="Email" width="28" height="28" />
            </Link>
            {/* <Link
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Contact
            </Link> */}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Vo Minh Khang. All rights
              reserved.
            </p>

            <Link
              href="https://github.com/leaser019/my-portfolio"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center mt-4 md:mt-0 hover:text-purple-600 dark:hover:text-purple-400"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              aria-label="LMy Repository"
            >
              <span className="text-sm font-medium mr-2">
                Check out my code
              </span>
              <span className="relative">
                <Image
                  src={Star}
                  alt="star"
                  width="16"
                  height="16"
                  className={`transition-all duration-300 ${
                    isHovering ? 'rotate-180 scale-125' : ''
                  }`}
                />
                {isHovering && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-xs whitespace-nowrap">
                    Star my repo!
                  </span>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
