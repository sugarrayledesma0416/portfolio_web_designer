/*
   Copyright (C), 2024-2025, Sugar Ray
   Author: Sugar Ray
   FileName: constants.js
   Version: 1.0.0
   Creation: 26/11/2025
   Last modification: 26/11/2025
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faLinkedin,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  portfolio1,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
  portfolio10,
  portfolio11,
  portfolio12,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
  faFigma,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "Hello, I'm Sugar Ray, a Senior Full Stack Engineer with over 7 years of experience building scalable, high-performance applications across SaaS and enterprise environments. I specialize in backend development using Python (Django, Django REST Framework) and Node.js, along with modern frontend technologies like React, Next.js, and TypeScript.",
    "I have strong experience designing distributed systems and microservices, optimizing database performance, and building secure, production-grade APIs using REST and GraphQL. I consistently focus on improving scalability, reducing latency, and maintaining high availability in demanding environments.",
    "I work extensively with AWS, Docker, Kubernetes, and CI/CD pipelines to deliver reliable systems. I enjoy solving complex problems, writing clean and maintainable code, and collaborating with teams to build solutions that create real business impact.",
    "You can download my resume here.",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Hulk Cars",
    description:
      "Developed a Web3-based platform that enables tokenization of real-world vehicles as NFTs, allowing users to invest in and rent high-value assets like luxury cars. The system integrates blockchain-based ownership with a modern web interface, providing a seamless user experience for browsing, purchasing, and managing tokenized assets. Built with a scalable architecture to support secure transactions, asset tracking, and high-performance user interactions.",
    image: portfolio1,
    demo_link: "https://hulkcars.com/",
  },
  // {
  //   name: "Sigma Beauty",
  //   description:
  //     "This project implements Connect Four in Python and Pygame, featuring a GUI and gameplay modes for player vs. AI and AI vs. AI. The AI uses the MiniMax algorithm, with optional alpha-beta pruning for improved performance.",
  //   image: portfolio2,
  //   demo_link: "https://sigmabeauty.com/",
  // },
  {
    name: "Scribble Together",
    description:
      "Built a real-time collaborative whiteboard application enabling users to draw, write, and share ideas simultaneously across multiple devices. Implemented live synchronization using WebSockets, interactive canvas features, and scalable backend services with Node.js/Django and Redis. Developed a responsive UI with React to deliver seamless collaboration. The platform is designed for efficient remote teamwork, diagramming, and problem-solving.",
    image: portfolio3,
    demo_link: "https://scribbletogether.com/",
  },
  {
    name: "Habit Tracker App",
    description:
      "Developed a gamified habit tracking application with task and reward systems to improve user engagement and productivity. Built REST APIs using Django/Node.js for managing habits, progress, and user data, and developed a dynamic frontend with React for real-time updates. Integrated PostgreSQL for structured data storage and deployed on AWS using Docker. The platform helps users build consistent habits through interactive and engaging experiences.",
    image: portfolio4,
    demo_link: "https://habitica.com/",
  },
  {
    name: "Booking System",
    description:
      "Developed a booking and scheduling system with calendar-based availability and appointment management. Built REST APIs using Django/Node.js for handling bookings, user schedules, and notifications, and created a responsive frontend with React. Integrated PostgreSQL for managing time slots and optimized scheduling logic. The platform streamlines appointment management for service-based businesses.",
    image: portfolio5,
    demo_link: "https://easyappointments.org/",
  },
  {
    name: "Issue Tracker",
    description:
      "Built an issue tracking system with task management and workflow automation for development teams. Designed scalable APIs using Django/Node.js for issue creation, status tracking, and collaboration, and developed a modern Kanban-based UI using React. Implemented role-based access control and optimized database performance. The platform improves team productivity and project visibility.",
    image: portfolio6,
    demo_link: "https://plane.so/",
  },
  {
    name: "Kryptomon",
    description:
      "Developed a Web3-based NFT platform for creating and managing unique digital creatures with dynamic attributes and traits. Built scalable backend services for asset management and ownership tracking, and developed an interactive frontend using React for a seamless user experience. Integrated blockchain technology for secure NFT minting and transactions. The platform is designed to enable users to collect, trade, and interact with digital assets in a gamified ecosystem.",
    image: portfolio7,
    demo_link: "https://www.kryptomon.co/",
  },
  {
    name: "Casino Game Alphapuesta",
    description:
      "Developed a full-stack online casino platform with interactive slot and roulette games, user authentication, and reward systems. Built scalable backend services using Node.js/Django and developed a dynamic frontend with React. The platform is designed to deliver engaging gaming experiences with real-time interactions and secure transactions.",
    image: portfolio8,
    demo_link: "https://alphapuesta.net/",
  },
  {
    name: "Fjällräven",
    description:
      "Developed a modern eCommerce platform for fashion products with product listings, filtering, and cart functionality. Built scalable APIs for product and order management using Django/Node.js, and created a responsive frontend with React. The platform provides a seamless shopping experience with optimized performance.",
    image: portfolio11,
    demo_link: "https://www.fjallraven.com/",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "java",
    title: "Java",
    icon: javaIcon,
    description:
      "I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.",
  },
  {
    id: "aws",
    title: "Amazon Web Services",
    icon: awsIcon,
    description:
      "I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.",
  },
  {
    id: "figma",
    title: "Figma",
    icon: figmaIcon,
    description:
      "In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
  {
    id: "psql",
    title: "Postgresql",
    icon: psqlIcon,
    description:
      "I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
  },
  {
    id: "vite",
    title: "Vite",
    icon: viteIcon,
    description:
      "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
  },
  {
    id: "py",
    title: "Python",
    icon: pyIcon,
    description:
      "With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.",
  },
  {
    id: "node",
    title: "Node",
    icon: nodeIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },
  {
    id: "neo",
    title: "Neo4j",
    icon: neoIcon,
    description:
      "I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.",
  },
  {
    id: "raspi",
    title: "Raspberry Pi",
    icon: raspIcon,
    description:
      "I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.",
  },
  {
    id: "eslint",
    title: "Eslint",
    icon: eslintIcon,
    description:
      "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, introduction, projects, memoji, skills, markerSvg, icons };
