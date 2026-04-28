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
  webPerformanceIcon,
  designWorkflowIcon,
  analyticsUxIcon,
  cmsStructuringIcon,
  seoFoundationsIcon,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
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

    "Hello, I'm Sugar Ray, a Web Designer with 7+ years of experience crafting conversion-focused websites, landing pages, and user interfaces for global clients. I blend color theory, typography, composition, and UX strategy to create pages that are visually strong and easy to navigate.",
    "My workflow combines Figma, Adobe Photoshop, Illustrator, and Canva with frontend knowledge in HTML, CSS, and JavaScript, so design ideas stay realistic and implementation-ready. I also use SEO-friendly structure, responsive layout systems, and CMS-oriented content planning to improve discoverability and performance.",
    "I focus on audience-first design: clear sectioning, intuitive user flow, and message clarity for different user groups. I use user behavior insights and page analytics to iterate layouts and strengthen engagement, retention, and conversion outcomes.",
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
    name: "Warm Up America Website Revamp",
    description:
      "Led a redesign focused on Warm Up America's core actions (Donate, Make, Share), improving navigation clarity for volunteers and donors. Refined content hierarchy, typography, and contrast to make sections easier to scan and understand. Delivered responsive Figma flows and implementation-ready HTML/CSS handoff notes.",
    image: portfolio1,
    demo_link: "https://www.warmupamerica.org/",
  },
  {
    name: "charity: water Donation Journey",
    description:
      "Redesigned the donation journey to make contribution steps clearer from landing to completion. Improved hero messaging, trust sections, and giving options with stronger CTA hierarchy and conversion-focused layout decisions. Applied mobile-first spacing and content structure to reduce friction in the donation flow.",
    image: portfolio2,
    demo_link: "https://www.charitywater.org/",
  },
  {
    name: "Ravelry Community Discovery UX",
    description:
      "Improved community discovery UX with clearer entry points for sign-up, exploration, and first-time user onboarding. Organized content flow to help fiber artists find relevant spaces and resources faster. Applied accessibility-aware typography and contrast to keep dense content easy to scan.",
    image: portfolio3,
    demo_link: "https://www.ravelry.com/",
  },
  {
    name: "LoveCrafts Learning & Category IA",
    description:
      "Refined information architecture to improve discoverability of tutorials, beginner guides, and product categories. Reworked category structure and promotional hierarchy to guide users more naturally through learning and shopping paths. Designed modular content blocks and heading patterns that support SEO and CMS publishing workflows.",
    image: portfolio4,
    demo_link: "https://www.lovecrafts.com/",
  },
  {
    name: "Habitat Volunteer Conversion Flow",
    description:
      "Optimized volunteer conversion flow by improving local chapter discovery and clarifying paths between donation and volunteer intent. Increased action visibility on key pages through cleaner hierarchy and stronger CTA placement. Introduced mobile-first form patterns while preserving a mission-driven visual style.",
    image: portfolio5,
    demo_link: "https://www.habitat.org/",
  },
  {
    name: "Knit for Peace Campaign Storytelling",
    description:
      "Strengthened campaign storytelling around impact, sponsorship, and donation actions with a clearer narrative page flow. Improved readability of content-heavy sections using better spacing, hierarchy, and visual rhythm. Optimized imagery and responsive behavior to keep performance and clarity consistent across devices.",
    image: portfolio6,
    demo_link: "https://www.knitforpeace.org.uk/",
  },
  {
    name: "Wool and the Gang Checkout UX",
    description:
      "Redesigned the ecommerce purchase flow from product selection to checkout to reduce decision friction and improve completion intent. Strengthened CTA consistency, product emphasis, and trust cues across key steps. Refined spacing and typographic rhythm for a smoother cross-device checkout experience.",
    image: portfolio7,
    demo_link: "https://www.woolandthegang.com/",
  },
  {
    name: "Mozilla Accessibility & Content Clarity",
    description:
      "Enhanced accessibility and content clarity for multi-topic pages by improving heading structure, focus states, and contrast strategy. Refined visual hierarchy to support faster page scanning without losing brand character. Improved information flow on priority sections to reduce drop-off and strengthen message comprehension.",
    image: portfolio8,
    demo_link: "https://www.mozilla.org/en-US/",
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
      "I build semantic, accessible page structures that support SEO, clean content hierarchy, and developer-friendly handoff.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I design responsive, pixel-accurate layouts with strong control over spacing, typography, and visual consistency across breakpoints.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I use JavaScript for practical UI behavior such as interactive navigation, forms, lightweight animations, and conversion-focused flows.",
  },
  {
    id: "figma",
    title: "Figma",
    icon: figmaIcon,
    description:
      "I create wireframes, high-fidelity mockups, prototypes, and reusable page patterns that speed up feedback and implementation.",
  },
  {
    id: "react",
    title: "Frontend Collaboration (React-Aware)",
    icon: reactIcon,
    description:
      "I collaborate closely with frontend developers and provide implementation-ready specs that translate smoothly into React-based interfaces.",
  },
  {
    id: "vite",
    title: "Web Performance",
    icon: webPerformanceIcon,
    description:
      "I optimize visual assets and layout decisions for faster loading pages without sacrificing design quality.",
  },
  {
    id: "github",
    title: "Design-to-Dev Workflow",
    icon: designWorkflowIcon,
    description:
      "I document design decisions clearly and collaborate asynchronously with distributed teams using structured review and iteration cycles.",
  },
  {
    id: "psql",
    title: "Analytics-Informed UX",
    icon: analyticsUxIcon,
    description:
      "I use traffic and user-flow insights to refine layouts, improve navigation clarity, and support measurable conversion improvements.",
  },
  {
    id: "node",
    title: "CMS & Content Structuring",
    icon: cmsStructuringIcon,
    description:
      "I plan page sections and modular blocks for CMS editing workflows, especially for WordPress-style publishing environments.",
  },
  {
    id: "eslint",
    title: "SEO Foundations",
    icon: seoFoundationsIcon,
    description:
      "I apply on-page SEO basics through semantic headings, readable structure, internal linking strategy, and intent-focused page content.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, introduction, projects, memoji, skills, markerSvg, icons };
