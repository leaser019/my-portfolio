import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import PopupModal from './PopupModal';
import Button from './Button';
import Transition from './Transition';
import { BsArrowUpRight } from 'react-icons/bs';
import Title from './Title';
import { work as data } from '@/assets';

const ProjectCard = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleExpand = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {data.map((project) => (
        <Transition
          key={project.id}
          delay={project.id * 100}
          className={`rounded-xl mb-12 flex flex-col items-start p-6 ${
            currentTheme === 'dark'
              ? 'bg-gray-800 text-white'
              : 'bg-white text-black'
          } hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg backdrop-blur-sm transition-all duration-300`}
        >
          <Link
            href={project?.github || project?.demo}
            target={project.target}
            className="relative w-full aspect-video overflow-hidden rounded-lg"
            onClick={(e) => {
              if (project.title === 'Portfolio') {
                e.preventDefault();
                alert('You are already on this site! 🤩');
              }
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fit
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover hover:scale-125 transition-all duration-700 ease-in-out transform"
              priority={project.id === 1}
            />
          </Link>

          <motion.div
            className="flex flex-col w-full mt-4 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between text-left">
              <Title>{project.title}</Title>
              {project?.github ? (
                <Link
                  href={project?.github}
                  target={project.target}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <BsArrowUpRight className="w-4 h-4" />
                </Link>
              ) : null}
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
              {project.cardDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-md bg-gray-100 
                    dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Button
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg
                hover:bg-blue-600 transition-colors duration-300
                dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={() => setSelectedProject(project)}
            >
              Learn More
            </Button>
          </motion.div>
        </Transition>
      ))}

      {selectedProject && (
        <PopupModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectCard;
