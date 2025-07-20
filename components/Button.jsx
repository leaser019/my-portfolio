const Button = ({
  children,
  onClick,
  currentTheme,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      className={`bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full animate-gradient ${
        currentTheme === 'dark' ? 'shadow-sm shadow-white' : ''
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || (typeof children === 'string' ? children : 'Button')}
    >
      {children}
    </button>
  );
};

export default Button;
