const Title = ({ children, className = '' }) => {
  return (
    <h1
      className={`font-semibold text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text dark:from-blue-400 dark:to-purple-400 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-colors duration-300 animate-gradient ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
