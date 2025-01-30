import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

const LanguageSwitcher = () => {
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState(router.locale);
  const [isHovered, setIsHovered] = useState(false);

  const flags = {
    en: '/flags/en.webp',
    vi: '/flags/vi.webp',
  };

  useEffect(() => {
    const savedLocale = localStorage.getItem('language');
    if (savedLocale && savedLocale !== currentLocale) {
      changeLanguage(savedLocale);
    }
  }, [currentLocale]);

  const changeLanguage = useCallback(
    async (newLocale) => {
      try {
        localStorage.setItem('language', newLocale);
        setCurrentLocale(newLocale);
        await router.push(router.pathname, router.asPath, {
          locale: newLocale,
          scroll: false,
        });
      } catch (error) {
        console.error('Error changing language:', error);
      }
    },
    [router]
  );

  return (
    <div
      className="relative my-3 px-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => changeLanguage(currentLocale === 'en' ? 'vi' : 'en')}
        className="relative inline-flex items-center rounded-full
          transition-all duration-500 ease-in-out 
          bg-white/50 dark:bg-[#35353579]
          backdrop-blur-sm
          h-8 mx-2 hover:shadow-md hover:scale-[1.02]
          transform-gpu will-change-transform
          drop-shadow-xs"
        role="switch"
        style={{ width: isHovered ? '80px' : '32px' }}
        aria-checked={currentLocale === 'en'}
        title={`Switch to ${currentLocale === 'en' ? 'Vietnamese' : 'English'}`}
      >
        {isHovered ? (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-100 transition-all duration-500">
            <Image
              src={flags['vi']}
              alt="Vietnamese"
              width={16}
              height={16}
              className={`rounded-full transition-opacity duration-300 ${
                currentLocale === 'vi' ? 'opacity-100' : 'opacity-40'
              }`}
            />
            <Image
              src={flags['en']}
              alt="English"
              width={16}
              height={16}
              className={`rounded-full transition-opacity duration-300 ${
                currentLocale === 'en' ? 'opacity-100' : 'opacity-40'
              }`}
            />
            <span
              className={`absolute h-8 w-8 transition-all duration-300 transform bg-white rounded-full shadow-lg flex items-center justify-center ${
                currentLocale === 'en' ? 'right-0' : 'left-0'
              }`}
            >
              <Image
                src={flags[currentLocale]}
                alt={currentLocale === 'en' ? 'English' : 'Vietnamese'}
                width={20}
                height={20}
                className="rounded-full"
              />
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={flags[currentLocale]}
              alt={currentLocale === 'en' ? 'English' : 'Vietnamese'}
              width={20}
              height={20}
              className="rounded-full"
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
