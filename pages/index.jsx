import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Image from 'next/image';

import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Avatar_Black from '@/public/Avatar-black.png';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      <Head>
        <title>developer ✦ vominhkhang</title>
        <link rel="icon" href="/khang-logo.png" />
      </Head>
      <PageTransition>
        <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
          <div className="lg:h-screen 2xl:h-max max-h-[11rem] max-w-[90rem] mx-auto p-4">
            <div className="flex flex-row justify-between items-center mt-20 space-x-4">
              <div className="flex flex-row items-center justify-center space-x-4">
                <Image
                  className={`rounded-full ${
                    currentTheme === 'dark' ? 'shadow-sm shadow-white' : ''
                  }`}
                  src={Avatar_Black}
                  alt="vominhkhang"
                  width="80"
                  height="80"
                />
                <div className="flex flex-col">
                  <h2 className="flex sm:text-sm md:text-2xl lg:text-2xl">
                    <span className="font-semibold">Vo Minh Khang</span>
                  </h2>
                  <h3>
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link
                        href={'https://www.linkedin.com/in/vominhkhang'}
                        target="_blank"
                        className="text-[#717171bb] flex items-center"
                      >
                        <p>@vominhkhang</p>
                        <BsArrowUpRight className="stroke-1 h-3 ml-1" />
                      </Link>
                    </motion.div>
                  </h3>
                </div>
              </div>
              <div className="justify-center hidden md:flex lg:flex">
                <a
                  href="downloads/VoMinhKhang_CV.pdf"
                  download
                  className={`sm:text-base text-sm bg-gradient-to-r from-blue-500 to-pink-500 text-white sm:font-semibold font-bold py-2 px-4 rounded-full animate-gradient ${
                    currentTheme === 'dark' ? 'shadow-sm shadow-white' : ''
                  }`}
                >
                  My CV
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 text-base md:text-lg lg:text-lg 2lg:text-lg">
            <p className="sm:leading-6 md:leading-6 lg:leading-8 text-justify">
              I am a senior Computer Science student at the School of Computer
              Science and Engineering, International University - VNU-HCM, with
              a focus on solving complex challenges through innovative
              solutions. I am eager to discuss how my skills can contribute to
              your project and add value to your work.
            </p>
          </div>
          <div className="mt-10 mx-auto">
            <Experience />
          </div>
          <div className="mt-28 mx-auto ">
            <Contact />
          </div>
        </div>
      </PageTransition>
    </>
  );
}
