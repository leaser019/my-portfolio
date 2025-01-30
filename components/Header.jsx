/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation('common');
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter().asPath;
  const [mounted, setMounted] = useState(false);
  let Links = [
    { name: 'timeline', link: '/timeline' },
    { name: 'work', link: '/work' },
    { name: 'about', link: '/about' },
    { name: 'tech', link: '/tech' },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  let [open, setOpen] = useState(false);
  const touchRef = useRef();

  const clickHandler = (link) => {
    if (router != link) {
      setTimeout(() => {
        setOpen(false);
      }, 700);
    }
  };
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideAlerter(touchRef);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    setMounted(true);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <nav
      ref={touchRef}
      className={`${
        isScrolled && 'bg-opacity-[0.5] shadow-md drop-shadow-lg '
      } font-medium duration-500 bg-opacity-50 transition-all linear z-40 dark:text-white w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-6xl mx-auto  bg-white dark:bg-[#35353579] ${
        open && 'dark:bg-[#000] bg-opacity-100'
      } drop-shadow-xs backdrop-blur-sm top-6 sticky rounded-2xl py-3`}
    >
      <div className="flex justify-between md:space-x-8 lg:space-x-10 xl:space-x-12 md:flex items-center place-items-center md:justify-center py-1 md:py-1 px-3 md:px-4 lg:px-6">
        <div className="select-none order-2 md:order-1 cursor-pointer flex items-center text-gray-800 px-2 md:px-3">
          <Link
            href={'/'}
            className="md:space-x-6 lg:space-x-8 py-3 md:py-0 px-6 md:px-0"
          >
            <div className="select-none order-2 md:order-1 cursor-pointer flex items-center text-gray-800">
              <div className="select-none order-2 md:order-1 cursor-pointer flex items-center text-gray-800">
                <Link href="/" className="">
                  <h1 className="font-jak font-bold text-lg md:text-xl bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] dark:from-[#3b82f6] dark:via-[#60a5fa] dark:to-[#3b82f6] bg-clip-text text-transparent bg-[length:200%_auto] hover:bg-[length:100%_auto] transition-all duration-500 animate-gradient">
                    Minh Khang
                  </h1>
                </Link>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-2 md:order-last">
          {mounted && (
            <>
              {currentTheme === 'dark' ? (
                <>
                  <button
                    onClick={() => {
                      setTheme('light');
                    }}
                    className="w-max md:order-8 fill-purple-600 "
                  >
                    <MdOutlineLightMode className="w-4 h-4 " />{' '}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setTheme('dark');
                    }}
                    className="w-max md:order-8 fill-purple-600 "
                  >
                    <MdOutlineDarkMode className="w-4 h-4" />{' '}
                  </button>
                </>
              )}
            </>
          )}
          {/* <LanguageSwitcher /> */}
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="transition-all duration-500 ease-in order-3 text-lg flex flex-col space-y-[0.2rem]  cursor-pointer items-center font-semibold md:hidden"
        >
          <div
            className={` ${
              open && 'rotate-45 translate-y-[5px] '
            } relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black`}
          ></div>
          <div
            className={` ${
              open && 'opacity-0 translate-x-20'
            } relative rounded-xl origin-center transition-all duration-1000 ease-in-out w-4 h-[0.1rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black `}
          ></div>
          <div
            className={` ${
              open && '-rotate-45 -translate-y-[5px]'
            } relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black`}
          ></div>
        </div>
        <ul
          className={` rounded-3xl md:rounded-none  ${
            open ? 'dark:bg-[#000]' : 'dark:bg-[#35353500]'
          } bg-white  py-4 md:py-0 md:bg-inherit font-semibold order-4 md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-light-blue md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 lg:transition-none transition-all duration-500 ease-in ${
            open ? 'top-[3.5rem]' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-base md:my-0 my-7 px-4 md:px-0"
            >
              <Link
                href={link.link}
                onClick={() => clickHandler(`${link.name}`)}
                className={`${
                  router === link.link
                    ? ' text-purple-400 font-out'
                    : ' text-gray-700 dark:text-white font-out'
                } hover:text-purple-500 dark:hover:text-purple-500 duration-500`}
              >
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
