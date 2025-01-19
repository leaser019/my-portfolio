/* eslint-disable @next/next/no-img-element */
import FormalLine from '@/components/FormalLine';
import PageTransition from '@/components/PageTransition';
import Head from 'next/head';
import React from 'react';

const Timeline = () => {
  const educationData = [
    {
      id: 0,
      title: 'Bachelor of Computer Science',
      duration: '2021 - Present',
      org: 'International University - VNU-HCM',
      skills: [
        'Computer Science',
        'Software Engineering',
        'Web Developer',
        'AI',
      ],
      class:
        'bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800',
      logo: 'timeline/IU-logo.png',
      description:
        'Pursuing a Bachelor’s degree in Computer Science at International University - VNU-HCM, with a comprehensive focus on software engineering, web development, data science, and artificial intelligence. The curriculum provides in-depth knowledge of real-world project management and operations, alongside entrepreneurial training, preparing students for dynamic roles in the technology industry.',
    },
  ];

  const workData = [
    {
      id: 0,
      title: 'Research & Development',
      duration: 'Jan 2024 - Present ',
      org: 'AIoT Lab',
      skills: ['React.js', 'Express.js', 'Flask', 'Deep Learning', 'IoT'],
      class:
        'bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800',
      logo: 'timeline/AIoTLab-Logo.png',
      description:
        'Developed advanced systems for psychological assessment and educational management, utilizing cutting-edge technologies in AI, IoT, and Deep Learning to create innovative solutions. Collaborated with interdisciplinary teams to enhance the functionality and user experience of educational platforms, contributing to research initiatives aimed at improving psychological evaluation methodologies through IoT integration.',
    },
    {
      id: 1,
      title: 'Front End Developer Intern',
      duration: 'Feb 2021 - Jun 2021',
      org: 'UNIT Corp',
      skills: ['JavaScript', 'React.js', 'Node.js'],
      class:
        'bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800',
      logo: 'timeline/UNIT-logo.png',
      description:
        'As a Frontend Developer Intern at UNIT, I gained valuable experience working on internal company projects, enhancing my skills in MUI, React Hook Form, and Redux. This role provided hands-on learning in modern front-end technologies and allowed me to apply them effectively in real-world scenarios.',
    },
  ];

  const combinedData = [
    { section: 'Work Experience', data: workData },
    { section: 'Education', data: educationData },
  ];

  return (
    <PageTransition>
      <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]">
        <Head>
          <title>timeline ✦ vominhkhang</title>
          <link rel="icon" href="/Avatar-white.svg" />
        </Head>
        <main className="min-h-screen max-w-screen">
          <div className="pt-24 flex flex-col items-cen mx-auto">
            <h2 className="selection:text-black/40 dark:selection:text-white/40 bg-gradient-to-r from-emerald-600 to-teal-400 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
              Timeline
            </h2>
            <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
              Each milestone in my career reflects a journey of growth,
              learning, and accomplishment, shaping my professional and personal
              development.
            </p>
            <FormalLine />
            {combinedData.map((section, index) => (
              <div key={index} className="mt-10 md:ml-12 lg:ml-12">
                <h3 className="text-xl font-semibold mb-4">
                  {section.section}
                </h3>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                  {section.data.map((item) => (
                    <li className="mb-10 ms-6 flex items-center" key={item.id}>
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg
                          className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </span>
                      <div className="flex-1">
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          {item.duration}
                        </time>
                        <p>{item.org}</p>
                        <p className="mt-2 text-sm text-justify text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap mt-8">
                          {item.skills.map((i, idx) => (
                            <span key={idx} className={`${item.class}`}>
                              {i}
                            </span>
                          ))}
                        </div>
                      </div>
                      <img
                        src={item.logo}
                        alt={`${item.org} logo`}
                        className={`w-16 h-16 ml-4`}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default Timeline;
