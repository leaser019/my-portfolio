import { useEffect } from 'react';
import Head from 'next/head';
import ProjectCard from '@/components/ProjectCard';
import PageTransition from '@/components/PageTransition';
import FormalLine from '@/components/FormalLine';

export default function Work() {
  return (
    <PageTransition>
      <div className="px-10 sm:px-20 md:px-32 lg:px-60 mx-auto max-w-[75rem]">
        <Head>
          <title>work ✦ vominhkhang</title>
          <link rel="icon" href="/khang-logo.png" />
        </Head>
        <main className="min-h-screen max-w-screen">
          <div className="pt-24 flex flex-col items-center mx-auto">
            <h2
              className={
                'selection:text-black/40 dark:selection:text-white/40 bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold'
              }
            >
              Work
            </h2>
            <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
              It has been a privilege to dedicate my passion and effort to these
              projects. I invite you to take a moment to explore them.
            </p>
            <FormalLine />
          </div>
          <div className="mt-20 mb-20">
            <ProjectCard />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
