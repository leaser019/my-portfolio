import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Title from './Title';

const PopupModal = ({ project, onClose }) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const skin =
    currentTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black';
  useEffect(() => {
    console.log(
      window.scrollTo({
        top: document.body.scrollHeight / 3.2,
        behavior: 'smooth',
      })
    );
  }, []);

  if (!project) return null;
  return (
    <div
      className="fixed inset-0.5 z-50 flex items-center justify-center bg-black/60 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`${skin} relative w-full sm:max-w-xl lg:max-w-3xl rounded-2xl shadow-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <Title className="text-lg md:text-2xl">{project.title}</Title>
          <button
            onClick={onClose}
            className="text-2xl transition-transform hover:rotate-90"
          >
            <IoClose />
          </button>
        </header>

        {/* Body */}
        <section className="space-y-8 px-8 py-6 max-h-[70vh] overflow-y-auto">
          {/* Project Image */}
          <div className="relative w-full aspect-video">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          {project.description && (
            <p className="text-justify text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          )}

          {/* Details */}
          <div className="space-y-6">
            {project.responsible && (
              <div className="text-sm space-y-2">
                <h3 className="font-semibold">Responsibilities</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {project.responsible.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.team && (
              <div className="text-sm space-y-2">
                <h3 className="font-semibold">Team Members</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.team.join(', ')}
                </p>
              </div>
            )}

            {project.timeline && (
              <div className="text-sm space-y-2">
                <h3 className="font-semibold">Timeline</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.timeline}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-wrap justify-center gap-4 px-8 py-6 border-t border-white/10">
          {project.github && (
            <Link
              href={project.github}
              target={project.target}
              className="flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-5 py-2 font-medium text-white transition-transform duration-300 hover:scale-105"
            >
              <FaGithub /> GitHub
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target={project.target}
              className="flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-2 font-medium text-white transition-transform duration-300 hover:scale-105"
            >
              <FaExternalLinkAlt /> Demo
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
};

export default PopupModal;
