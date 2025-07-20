import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import { BsArrowUpRight } from 'react-icons/bs';

import FloatBlack from '@/public/float-black.webp';
import FloatWhite from '@/public/float-white.webp';
import FormalLine from './FormalLine';

const Experience = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className=" mt-15 lg:mt-5 flex flex-col justify-start space-y-12 mx-auto items-center md:mt-12 lg:min-h-screen">
      <div className="w-[80%] mx-auto">
        <FormalLine />
      </div>
      <div className="flex flex-col relative space-y-16 md:space-y-10 lg:space-y-8 items-center">
        <div className="drop-shadow-2xl flex flex-col space-y-4 mx-6 md:mx-20 lg:mx-0 md:w-[70%] lg:w-[80%] max-w-2xl">
          <div className="mx-auto text-center font-bold font-deca text-2xl text-indigo-500 dark:text-[#4cc9f0]">
            Development
          </div>
          <div className="font-normal sm:text-[0.95rem] md:text-base text-justify dark:text-[#fff]">
            Specializing in front-end development with a focus on React.js, I
            excel in creating visually engaging and user-friendly websites.
            Additionally, I have experience in back-end development using
            Node.js and Express.js, allowing me to contribute to full-stack
            projects with a seamless integration of both front-end and back-end.
            Each project I undertake reflects a unique blend of functionality
            and aesthetic appeal, tailored to enhance user experience.
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full h-80 transition duration-150 ease-out">
          <Image
            priority
            src={currentTheme === 'dark' ? FloatBlack : FloatWhite}
            alt="Design Image"
            className="w-1/3 h-auto object-cover"
          />
        </div>
      </div>
      <div className="w-[80%] max-w-2xl mx-auto">
        <div className="text-justify font-normal mb-6 tracking-normal text-sm leading-5 sm:text-base lg:text-lg ">
          I have gained significant experience in this domain, and the following
          is a selection of projects I have developed, demonstrating my ability
          to apply this knowledge effectively.Through these works, I aim to
          showcase my dedication to continuous improvement and innovation within
          the field.
        </div>
        <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
          <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
            <Link
              href="/work"
              className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
            >
              <BsArrowUpRight className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
              <p>Projects</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
