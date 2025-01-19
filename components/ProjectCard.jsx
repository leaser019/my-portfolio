import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import PopupModal from './PopupModal';
import Button from './Button';
import aizen from '@/public/work/aizen.jpg';
import kamui from '@/public/work/kamui.jpg';
import pokedex from '@/public/work/pokedex.jpg';
import portfolio from '@/public/work/portfolio.jpg';
import cryptohunter from '@/public/work/crypto-hunter.jpg';
import redeye from '@/public/work/red-eye.jpg';
import evo from '@/public/work/evo.jpg';
import notion from '@/public/work/notion.jpg';
import nike from '@/public/work/nike.jpg';
import Transition from './Transition';

const ProjectCard = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const data = [
    {
      id: 1,
      image: aizen,
      title: 'Aizen',
      description: 'Create beautiful images and gifs of your source code',
      link: 'https://aizen.netlify.app/',
      target: '_self',
    },
    {
      id: 2,
      image: kamui,
      title: 'Kamui',
      description: 'Kanban board for planner with superpowers',
      link: 'https://kamui-kanban.netlify.app/',
      target: '_self',
    },
    {
      id: 3,
      image: pokedex,
      title: 'Pokedex',
      description: "Gotta Catch'em All. Explore your Pokemon",
      link: 'https://pokedex-polly.netlify.app/',
      target: '_self',
    },
    {
      id: 4,
      image: evo,
      title: 'Evo Gym',
      description: 'Gym Landing Page',
      link: 'https://evogymm.netlify.app/',
      target: '_blank',
    },
    {
      id: 5,
      image: nike,
      title: 'Nike Store',
      description: 'Nike Store Landing Page',
      link: 'https://nikestore-polly.netlify.app/',
      target: '_blank',
    },
    {
      id: 6,
      image: notion,
      title: 'Potion',
      description: 'Connected workspace where better, faster work happens.',
      link: 'https://potion-write.vercel.app/',
      target: '_blank',
    },
    {
      id: 7,
      image: portfolio,
      title: 'Portfolio',
      description: 'Portfolio made using Next.js and Tailwind CSS',
      link: '',
      target: '',
    },
    {
      id: 8,
      image: cryptohunter,
      title: 'Crypto Hunter',
      description: 'Get the Trending Crypto list with its Price',
      link: 'https://crytocurrencyhunter.netlify.app/',
      target: '_self',
    },
    {
      id: 9,
      image: redeye,
      title: 'Red Eye',
      description: 'Question based website to know your movie genre',
      link: 'https://red-eye.netlify.app/',
      target: '_self',
    },
  ];

  const handleExpand = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {data.map((project) => {
        return (
          <Transition
            key={project.id}
            delay={project.id * 100}
            className={`rounded-lg mb-12 flex flex-col items-center p-6 ${
              currentTheme === 'dark'
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-700'
            } shadow-lg`}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={(e) => {
                if (project.title === 'Portfolio') {
                  e.preventDefault();
                  alert('You are already on this site! 🤩');
                } else if (project.title === 'Pokedex') {
                  e.preventDefault();
                  alert(
                    'Ash Ketchum asked you to open in desktop browser.. 🚀'
                  );
                }
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <motion.div
              className="flex flex-col items-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-semibold text-[1.5rem] mt-3">
                {project.title}
              </h1>
              <Button
                className="mt-4 px-4 py-2"
                onClick={() => {
                  handleExpand(project);
                }}
              >
                Expand
              </Button>
            </motion.div>
          </Transition>
        );
      })}
      {selectedProject && (
        <PopupModal project={selectedProject} onClose={handleClose} />
      )}
    </div>
  );
};

export default ProjectCard;
