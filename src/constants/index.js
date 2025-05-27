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
    title: "Software Engineer",
    date: "July 2022 - Present",
    responsibilities:[
      "Partnered with the UI/UX team to build a scalable reusable component library of 30+ UI elements, accelerating development cycles and ensuring brand-consistent user interfaces.",
      "Automated testing pipelines with React Testing Library and Jest, achieving 85%+ test coverage across multiple projects and elevating code reliability.",
      "Diagnosed and resolved 50+ high-priority bugs, enhancing system stability and overall product reliability across large-scale applications.",
      "Engineered and deployed multilingual, AI-powered chatbot platforms using OpenAI API and Socket.io, enabling seamless, real-time communication across user bases.",
      "Architected a centralized file management system for multimedia content, and built an intuitive interactive dashboard to manage S3-hosted assets, drastically improving user experience and data accessibility.",
    ]
  },
  {
    imgPath: "/images/logo.png",
    logoPath: "/images/logo.png",
    title: "Software Engineer Trainee",
    date: "January 2022 - July 2022",
    responsibilities: [
      "Spearheaded the integration of a cutting-edge voice morphing platform with Google OAuth, in collaboration with the IVR team, enhancing secure Gmail contact authentication and empowering 100K+ monthly users.",
      "Engineered a robust Elastic Reporting Dashboard to track user interactivity in real-time, boosting data accuracy by 30% and slashing analysis time by 40%.",
      "Turbocharged application performance by implementing Code Splitting, Lazy Loading, and Advanced Caching, resulting in 50% faster load times and significantly improved user satisfaction.",
      "Elevated security posture from C+ to A by configuring AWS build headers, cutting incident response time by 50% and fortifying the app against critical vulnerabilities.",
      "Designed and launched a feature-rich Admin Dashboard using Material UI, powering 100+ multi- and single-player games for 40+ operators, serving 10,000+ users monthly with capabilities like leaderboard tracking, real-time analytics, access controls, and complaint resolution backed by Elastic Reporting."
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
