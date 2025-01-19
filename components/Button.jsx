const Button = ({
  children,
  onClick,
  currentTheme,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full animate-gradient ${
        currentTheme === 'dark' ? 'shadow-sm shadow-white' : ''
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
