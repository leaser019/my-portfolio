import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import { useTheme } from 'next-themes';
import { IoClose } from 'react-icons/io5';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Title from './Title';
import { useRouter } from 'next/router';
import Link from 'next/link';

const PopupModal = ({ project, onClose }) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const router = useRouter();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm auto-y-overflow">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className={`${
          currentTheme === 'dark'
            ? 'bg-gray-800 text-white'
            : 'bg-white text-black'
        } relative rounded-xl shadow-2xl p-6 md:p-8 max-w-2xl w-full flex flex-col items-center max-h-[120vh]`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl hover:rotate-90 transition-transform"
        >
          <IoClose />
        </button>

        {/* Title */}
        <Title className="mb-4">{project.title}</Title>

        {/* Project Image */}
        <div className="relative w-full aspect-video mb-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Technologies */}
        <div className="flex gap-2 flex-wrap justify-center mb-4">
          {project.technologies?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-500"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mb-6 text-gray-600 dark:text-gray-300 text-justify">
          {project?.description}
        </p>

        {/* Team & Timeline & Responsible  */}
        <div className="w-full mb-6 space-y-4">
          {project.responsible && (
            <div className="text-sm">
              <h3 className="font-semibold mb-1">Responsibilities</h3>
              <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside text-justify">
                {project?.responsible.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </div>
          )}
          {project.team && (
            <div className="text-sm">
              <h3 className="font-semibold mb-1">Team Members</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project?.team.join(', ')}
              </p>
            </div>
          )}

          {project.timeline && (
            <div className="text-sm">
              <h3 className="font-semibold mb-1">Timeline</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project?.timeline}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {project.github && (
            <Link
              href={project?.github}
              target={project.target}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-500 ease-in-out transform hover:scale-105"
            >
              <FaGithub /> GitHub
            </Link>
          )}
          {project.demo && (
            <Link
              href={project?.demo}
              target={project.target}
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-500 ease-in-out transform hover:scale-105"
            >
              <FaExternalLinkAlt /> Demo
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PopupModal;
