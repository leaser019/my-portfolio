import dotKepler from '@/public/work/dotKepler.webp';
import evallos from '@/public/work/EVALLOS.webp';
import giftShop from '@/public/work/giftShop.webp';
import humanAnatomy from '@/public/work/human-anatomy.webp';
import motoService from '@/public/work/motoSer.webp';
import nextmind from '@/public/work/nextmind.webp';
import portfolio from '@/public/work/portfolio.webp';
import txtimg from '@/public/work/text-img-retr.webp';

const work = [
  {
    id: 0,
    image: evallos,
    title: 'Evallos',
    cardDescription: 'Higher Education Quality Assessment System',
    description:
      'Evallos is The assessment of the level of achievement of course learning outcomes is the most crucial step for improving the quality of the course, contributing to the assessment of the level of achievement of the learning outcomes of an academic program. Currently in the pilot phase at International University and being implemented at Nguyen Tat Thanh University.Evallos built as a system for evaluating learning outcomes at the university level, reducing manual grading by 70%.',
    technologies: ['React', 'MongoDB', 'Express', 'ShadCN', 'Docker'],
    demo: 'https://evallos.aiotlab.vn/',
    responsible: [
      'Developed the front-end interface and integrated the back-end API to create user experience.',
    ],
  },
  {
    id: 1,
    image: dotKepler,
    title: 'DotKepler Application',
    cardDescription: 'Tracking Application Development Progress',
    description:
      'Kepler is a robust task tracking application designed to streamline project management and team collaboration. With a modern interface and advanced features, Kepler empowers teams to stay organized and productive.',
    github: 'https://github.com/leaser019/Task-Tracking-Application',
    demo: 'https://dotkepler.vercel.app',
    team: ['Tran Vu Khanh Hung', 'Nguyen Hoang Gia An', 'Vo Minh Khang'],
    timeline: 'September 2024 - December 2024',
    responsible: [
      'Developed the front-end interface and integrated the back-end API to create user experience.',
      'Implemented Redux for state management and Socket.io for real-time updates.',
      'Designed and developed the UI/UX for the application',
    ],
    technologies: [
      'React',
      'MongoDB',
      'Express',
      'Tailwind CSS',
      'Redux',
      'Redis',
      'Socket.io',
    ],
    target: '_self',
  },

  {
    id: 2,
    image: txtimg,
    title: 'Text Image Retrieval',
    cardDescription: 'Text and Image Deep Learning Retrieval System',
    description:
      'A Text-Image Retrieval System uses CLIP and FAISS to efficiently match text and images, enabling real-time indexing and retrieval for applications like news bulletins.',
    github: 'https://github.com/leaser019/text_img_retrieval',
    team: [
      'Pham Le Duc Thinh',
      'Nguyen Thanh Binh',
      'Vo Minh Khang',
      'Huynh Ho Tan Duong',
      'Nguyen Tuan Kiet',
    ],
    timeline: 'September 2024 - October 2024',
    responsible: [
      'Developed the front-end and integrated the CLIP model for text and image retrieval.',
      'Implemented FAISS for efficient indexing and retrieval of text and images.',
      'Designed and developed the UI/UX for the application.',
      'Training and fine-tuning the CLIP model for better performance.',
    ],
    technologies: ['Python', 'Flask', 'CLIP', 'FAISS', 'Transnet'],
    target: '_self',
  },
  {
    id: 3,
    image: giftShop,
    title: 'Gift Shop Mobile App',
    cardDescription: 'AR System for Human Anatomy Education',
    description:
      'The Gift Shop Mobile App is a React Native platform for browsing, customizing, and purchasing gifts. It features secure payments, user profiles, and order management, with a backend powered by Node.js and Express.',
    github: 'https://github.com/koitran14/Gift-Shop-Mobile-App',
    responsible: [
      'Developed and integrated the back-end API.',
      'Tested and debugged the application for performance and security.',
    ],
    team: [
      'Tran Ngoc Dang Khoi',
      'Nguyen Hoang Gia An',
      'Nguyen Trong Nguyen',
      'Nguyen Tran Hoang Ha',
      'Tran The Phong',
      'Pham Nguyen Dang Khoi',
      'Vo Minh Khang',
    ],
    timeline: 'March 2024 - May 2024',
    technologies: ['React Native', 'NodeJS', 'Express', 'MongoDB'],
    target: '_self',
  },

  {
    id: 4,
    image: portfolio,
    title: 'Portfolio',
    cardDescription: "Khang's Personal Portfolio",
    description:
      'This portfolio showcases my projects, skills, and experience as a full-stack developer. Built with Next.js and Tailwind CSS, it features a clean, modern and responsive layout.',
    github: 'https://github.com/leaser019/my-portfolio',
    team: ['Vo Minh Khang'],
    demo: 'https://vominhkhang.vercel.app/',
    timeline: 'January 2025',
    technologies: ['NextJs', 'Tailwind CSS', 'Framer Motion'],
    target: '_self',
  },
  {
    id: 5,
    image: nextmind,
    title: 'NExTMind',
    cardDescription: 'Psychological Logging Mobile Application',
    description:
      'NExTMind is a mobile application that helps users track their mental health and well-being. Users can log their mood, emotions, and activities, and receive personalized recommendations for self-care and mental health resources.',
    github: 'https://github.com/leaser019?tab=repositories',
    responsible: ['Developed the front-end interface.'],
    team: [
      'Tran Vu Khanh Hung',
      'Tran Quang Tri',
      'Nguyen Hoang Luan',
      'Vo Minh Khang',
    ],
    timeline: 'September 2024 - Present',
    technologies: ['React Native', 'NodeJS', 'Express', 'MongoDB'],
    target: '_self',
  },
  {
    id: 5,
    image: motoService,
    title: 'MotoService',
    cardDescription: 'Motorcycle Service Booking System Application',
    description:
      'MotoService is a mobile application that connects motorcycle owners with service providers. Users can book services, track repairs, and manage their vehicles, while service providers can manage bookings, track payments, and communicate with customers.',
    github: 'https://github.com/leaser019/MotorService',
    team: ['Vo Minh Khang', 'Nguyen Hoang Gia An'],
    timeline: 'November 2023 - January 2024',
    technologies: ['Java', 'JDBC', 'MySQL'],
    target: '_self',
  },
  {
    id: 7,
    image: humanAnatomy,
    title: 'Human Anatomy AR',
    cardDescription: 'AR System for Human Anatomy Education',
    description:
      'Human Anatomy VR is an immersive educational application designed to help users explore and understand the intricacies of the human body using Virtual Reality (VR). Developed with Unity, combines VR technology with 3D models to create an engaging learning experience for students, educators.',
    github: 'https://github.com/leaser019/human-anatomy-vr',
    responsible: ['Implement anatomy access to AR application by Unity.'],
    team: ['Vo Minh Khang', 'Quach Thien Phuc'],
    timeline: 'September 2024 - January 2025',
    technologies: ['Unity', 'C#'],
    target: '_self',
  },
];

export default work;
