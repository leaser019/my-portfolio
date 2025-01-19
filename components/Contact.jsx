import Image from 'next/image';
import { TfiLinkedin, TfiEmail } from 'react-icons/tfi';
import Rectangle from '../public/Rectangle.svg';
import { SiZalo } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="h-max xl:px-12 lg:h-[22rem] p-6 sm:p-8 md:px-10 pt-32 md:pt-40 lg:pt-10 bg-gradient-to-tr dark:from-[#df51ad3e] dark:to-[#eb587d2a] from-[#f6ebeb90] to-[#fff8ec60] flex flex-col lg:flex-row mx-auto rounded-3xl shadow-md drop-shadow-2xl backdrop-blur-xl items-center justify-center lg:justify-between ">
      <div className="order-2 sm:w-[75%] lg:w-[80%] lg:basis-[60%] flex flex-col space-y-6 cirGradient bg-clip-text">
        <h2 className=" tracking-normal bg-gradient-to-br from-blue-400 via-indigo-600 to-red-500 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-semibold selection:text-gray-700 dark:selection:text-white/90 ">
          Hello! Let&apos;s Connect
        </h2>
        <p className="text-sm md:text-md font-normal lg:text-lg xl:text-lg text-justify ">
          If you have any inquiries or wish to discuss potential opportunities,
          please feel free to contact me through the provided links.
        </p>
        <div className="grid grid-rows-3 text-[0.7rem] md:text-[0.85rem] lg:text-base gap-2 md:gap-3 lg:gap-4">
          <a
            href="https://zalo.me/0888032465"
            target="_blank"
            className=" flex align-middle items-center font-jak font-bold space-x-1 w-max "
          >
            <SiZalo className="text-[#518FC7] dark:text-[#2498fe] h-5 w-5 md:h-6 md:w-6 " />
            <h5 className="text-transparent dark:text-[#2498fe]">0888032465</h5>
          </a>
          <a
            href="https://www.linkedin.com/in/vominhkhang"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex align-middle items-center font-jak font-bold space-x-1 w-max "
          >
            <TfiLinkedin className="text-[#CA6298] dark:text-[#ff339c] h-4 w-4 md:h-5 md:w-5" />
            <h5 className="text-transparent dark:text-[#ff339c]">
              vominhkhang
            </h5>
          </a>
          <a
            href="mailto:vomkhang35@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex align-middle items-center font-jak font-bold space-x-1 w-max "
          >
            <MdEmail className="text-[#CA6298] dark:text-[#ff339c] h-4 w-4 md:h-5 md:w-5 " />
            <h5 className="text-transparent dark:text-[#ff339c]">
              vomkhang35@gmail.com
            </h5>
          </a>
        </div>
      </div>
      <div className=" order-1 lg:order-2 absolute -rotate-[15deg] lg:rotate-0 lg:flex top-6 right-4 md:top-10 md:right-12 lg:basis-[40%]">
        <Image
          src={Rectangle}
          alt="contact"
          width={750}
          height={650}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          loading="lazy"
          className="select-none backdrop-shadow-xl h-24 w-24 md:h-40 md:w-44 lg:w-[15rem] lg:h-[16rem] xl:w-[16rem] xl:h-[18rem]"
        />
      </div>
    </div>
  );
};

export default Contact;
