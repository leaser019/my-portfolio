const Title = ({ children, className = '', level = 2 }) => {
  const HeadingTag = `h${level}`;
  
  return (
    <HeadingTag
      className={`font-semibold text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text dark:from-blue-400 dark:to-purple-400 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-colors duration-300 animate-gradient ${className}`}
    >
      {children}
    </HeadingTag>
  );
};

export default Title;
