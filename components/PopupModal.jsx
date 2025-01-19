import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import { useTheme } from 'next-themes';

const PopupModal = ({ project, onClose }) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-end bg-black bg-opacity-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={`${
          currentTheme === 'dark'
            ? 'bg-gray-800 text-white'
            : 'bg-white text-black'
        } rounded-lg shadow-lg p-6 max-w-lg w-full flex flex-col items-center overflow-y-auto max-h-full`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'sticky',
          top: '8%',
          left: 0,
          right: 0,
          margin: '0 auto',
          width: 'fit-content',
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">{project.title}</h2>
        <div className="flex justify-center">
          <Image
            src={project.image}
            alt={project.title}
            width="400"
            height="300"
            className="rounded-lg mb-4"
          />
        </div>
        <p className="mb-4 text-center">{project.description}</p>
        <Button onClick={onClose} className="mt-4 px-4 py-2">
          Close
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default PopupModal;
