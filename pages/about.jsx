import { useTheme } from 'next-themes';
import Head from 'next/head';
import Image from 'next/image';

import CategoryCard from '@/components/CategoryCard';

import FormalLine from '@/components/FormalLine';
import PageTransition from '@/components/PageTransition';
import Hero from '@/public/hero.webp';
import love_black from '@/public/love-black.svg';
import love_white from '@/public/love-white.svg';

export default function About() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <PageTransition>
      <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <Head>
          <title>about ✦ vominhkhang</title>
          <link rel="icon" href="/khang-logo.webp" />
        </Head>
        <main className="  max-w-screen ">
          <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
            <div className=" mx-auto flex flex-col ">
              <h1
                className={`mt-6 mb-12 bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold`}
              >
                About
              </h1>
              <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8">
                <Image
                  src={Hero}
                  height={800}
                  width={800}
                  className="select-none h-40 w-40 rounded-full"
                  alt="vominhkhang"
                  priority
                />
              </div>
              <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
                This is more things about me.
              </p>
              <FormalLine />
            </div>
            <CategoryCard />
            <div className=" text-[0.92rem] text-base mx-12 font-light dark:text-white text-gray-900 text-justify">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                <span className="inline-block">🚀</span> Front-end Engineer
                passionate about crafting modern, reactive, and user-friendly
                web applications using the latest technologies. I specialize in
                React.js, Next.js, and state management with Redux.js, with
                strong proficiency in JavaScript, TypeScript, and Tailwind CSS.
                I have extensive experience in building large-scale, responsive
                web applications that are cross-browser compatible and adhere to
                modern web design principles.{' '}
                <span className="inline-block">🌍 💻</span> In addition to my
                front-end expertise, I am proficient in backend development
                using Express and Flask. With Express, I create efficient and
                scalable server-side applications, leveraging its flexibility to
                build RESTful APIs and handle complex routing.{' '}
                <span className="inline-block">🔄</span> My experience with
                Flask allows me to develop lightweight, yet powerful backend
                solutions and implement AI models into websites, enhancing
                functionality and user experience.
                <span className="inline-block"> 🤖 🔧</span> These backend
                skills enable me to deliver comprehensive full-stack solutions
                that seamlessly integrate with modern front-end frameworks,
                ensuring a cohesive and robust application architecture.{' '}
                <span className="inline-block">🏗️✨</span>
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
                <p className="text-gray-400 select-none  dark:text-white/30 text-justify text-2xl dark:text-white mb-4">
                  Contact
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  While I may not be a widely recognized figure, i am readily
                  available for connection on my social media platforms. <br />
                  You can contact me on the{' '}
                  <span className="text-red-500 font-bold">Gmail</span>{' '}
                  <a
                    onClick={() =>
                      navigator.clipboard.writeText(
                        'shikhar.pranjal3@gmail.com'
                      )
                    }
                    className=" underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
                    href="mailto:vomkhang35@gmail.com"
                  >
                    {' '}
                    vomkhang35@gmail.com
                  </a>{' '}
                  or <span className="text-blue-700 font-bold">
                    LinkedIn
                  </span>{' '}
                  <a
                    href="http://linkedin.com/in/vominhkhang"
                    className=" underline underline-offset-4 decoration-2 decoration-purple-400 font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select"
                    rel="noopener noreferrer"
                    target="blank"
                  >
                    {' '}
                    Vo Minh Khang{' '}
                  </a>{' '}
                  or you can give direct message for me on{' '}
                  <span className="text-blue-500 font-bold">Zalo</span>{' '}
                  <a
                    href="https://zalo.me/0888032465"
                    target="blank"
                    rel="noopener noreferrer"
                    className=" font-semibold underline underline-offset-4 decoration-2 decoration-purple-400 dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
                  >
                    {' '}
                    @0888032465{' '}
                  </a>{' '}
                </p>
              </div>
            </div>
            <div className="flex mx-auto justify-center mt-16 select-none">
              <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
                dattebayo
              </span>
              {currentTheme === 'dark' ? (
                <Image
                  src={love_white}
                  alt="love"
                  width="30"
                  className="-mt-4"
                />
              ) : (
                <Image
                  src={love_black}
                  alt="love"
                  width="30"
                  className="-mt-4"
                />
              )}
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
