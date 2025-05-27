import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
    {
      skill: "HTML",
      icon: FaHtml5,
    },
    {
      skill: "CSS",
      icon: FaCss3Alt,
    },
    {
      skill: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      skill: "TypeScript",
      icon: SiTypescript,
    },
    {
      skill: "ReactJS",
      icon: FaReact,
    },
    {
      skill: "Redux",
      icon: SiRedux,
    },
    {
      skill: "TailwindCSS",
      icon: RiTailwindCssFill,
    },
    {
      skill: "Github",
      icon: IoLogoGithub,
    }
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
   {
    imgPath: "/images/logo.png",
    logoPath: "/images/logo.png",
    title: "Senior Software Engineer",
    date: "May 2025 - Present",
    responsibilities:[
      "Integrating an Admin Dashboard using MUI (Material UI), Redux, Styled Component , Formik managing 20+ operators and having real-time analytics, complaint resolution, user management ,wallet ,tournament creation modules.",
      "Leading a complete website revamp using React.js and Framer Motion to deliver a fully responsive, cross-browser compatible experience with smooth transitions and modern UI/UX standards."
    ]
  },
  {
    imgPath: "/images/logo.png",
    logoPath: "/images/logo.png",
    title: "Software Engineer",
    date: "July 2022 - May 2025",
    responsibilities:[
      "Developing a high-performance EVA Dashboard with role-based access control (RBAC), config-driven dynamic forms (React Hook Form & Zod), and reusable data grids, reducing development time by 40% and supporting 15+ concurrent operators.",
      "Integrated Google OAuth for secure authentication, enabling subscription-based voice morphing and Google Contacts fetching, supporting 100K+ users and enhancing user workflows and data security.",
      "Developed and deployed Elastic Reporting Dashboard, improving data accuracy by 30% and reducing analysis time by 40%.",
      "Enhanced application performance by 50% using Code Splitting, Lazy Loading, and Tree Shaking, improving load times and engagement.",
      " Developed an AI-driven chatbot using OpenAI API and Socket.io, handling 40% of customer inquiries and optimizing support workflows."
    ]
  },
  {
    imgPath: "/images/logo.png",
    logoPath: "/images/logo.png",
    title: "Software Engineer Trainee",
    date: "January 2022 - July 2022",
    responsibilities: [
      "Built a reusable component library with 30+ UI elements in collaboration with UI/UX team, boosting development efficiency.",
      "Built high-coverage Jest test suites, reaching 90%+ code coverage and preventing critical bugs before deployment.",
      "Resolved 50+ critical bugs, enhancing system reliability and stability across multiple projects.",
      "Launched a comprehensive multimedia content management system (CMS) with an intuitive dashboard, allowing for the management of 1M+ digital assets reducing the operations team efforts by 50%."    
    ],
  }
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link:"https://www.linkedin.com/in/simrandeep-kaur-55a9b81b6/"
  },
  
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
