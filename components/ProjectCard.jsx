import { work as data } from '@/assets';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import Button from './Button';
import PopupModal from './PopupModal';
import Title from './Title';
import Transition from './Transition';

const ProjectCard = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const skin =
    currentTheme === 'dark'
      ? 'bg-gray-800 text-white hover:bg-gray-700/80'
      : 'bg-white text-black hover:bg-gray-50';

  return (
    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => (
        <Transition key={project.id} delay={project.id * 100}>
          <motion.div
            whileHover={{
              y: -6,
              boxShadow: '0 15px 25px -5px rgba(0,0,0,0.2)',
            }}
            className={`group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${skin}`}
          >
            <Link
              href={project.github || project.demo || '#'}
              target={project.target}
              onClick={(e) => {
                if (project.title === 'Portfolio') {
                  e.preventDefault();
                  alert("You're already here! 🤩");
                }
              }}
              className="relative aspect-video w-full overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={project.id === 1}
              />
              <div className="absolute inset-0 hidden bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:block" />
            </Link>

            <div className="flex flex-1 flex-col space-y-4 px-6 pb-6 pt-4">
              <div className="flex items-center justify-between">
                <Title className="text-lg md:text-xl">{project.title}</Title>
                {project.github && (
                  <Link
                    href={project.github}
                    target={project.target}
                    className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <BsArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </div>

              <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                {project.cardDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                className="mt-auto w-full rounded-lg bg-blue-500 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                onClick={() => setSelectedProject(project)}
              >
                Learn More
              </Button>
            </div>
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
