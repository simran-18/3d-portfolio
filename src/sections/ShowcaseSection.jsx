// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { IoMdOpen } from "react-icons/io";

// gsap.registerPlugin(ScrollTrigger);

// const AppShowcase = () => {
//   const sectionRef = useRef(null);
//   const rydeRef = useRef(null);
//   const libraryRef = useRef(null);
//   const ycDirectoryRef = useRef(null);

//   useGSAP(() => {
//     // Animation for the main section
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1.5 }
//     );

//     // Animations for each app showcase
//     const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

//     cards.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         {
//           y: 50,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           delay: 0.3 * (index + 1),
//           scrollTrigger: {
//             trigger: card,
//             start: "top bottom-=100",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div id="work" ref={sectionRef} className="app-showcase">
//       <div className="w-full">
//         <div className="showcaselayout">
//           <div ref={rydeRef} className="first-project-wrapper">
//             <div className="image-wrapper">
//               <img src="/images/website.png" alt="Ryde App Interface"  />
//             </div>
//             <div className="text-content">
//               <h2 className="flex my-auto">
//                 Blackngreen Website <a
//                   href="https://revamp.blackngreen.com/" // replace with your actual link
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   <IoMdOpen size={20} className="mt-3"/>
//                 </a>
//               </h2>
//             </div>
//           </div>

//           <div className="project-list-wrapper overflow-hidden">
//             <div className="project" ref={libraryRef}>
//               <div className="image-wrapper bg-[#FFEFDB]">
//                 <img
//                   src="/images/nexiva.png"
//                   alt="Nexiva Website"
//                   className="object-cover"
//                 />
//               </div>
//               <div className="text-content">
//               <h2 className="flex my-auto">
//                 Nexiva Website <a
//                   href="https://nexiva.ai/" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   <IoMdOpen size={20} className="mt-3"/>
//                 </a>
//               </h2>
//             </div>
//             </div>

//             <div className="project" ref={ycDirectoryRef}>
//               <div className="image-wrapper bg-[#FFE7EB]">
//                 <img src="/images/edu.png" alt="Education Portal"  className="object-cover"/>
//               </div>
//               <h2 className="flex my-auto">Education Portal
//                <a
//                   href="https://dev.educarportal.com/subscribe" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   <IoMdOpen size={20} className="mt-3"/>
//                 </a>
//               </h2>
//             </div>
//             <div ref={rydeRef} className="first-project-wrapper">
//             <div className="image-wrapper">
//               <img src="/images/mobibattle.png" alt="Ryde App Interface"  />
//             </div>
//             <div className="text-content">
//               <h2 className="flex my-auto">
//                 Dashboard
//               </h2>
//             </div>
//           </div>
//             <div className="project" ref={ycDirectoryRef}>
//               <div className="image-wrapper bg-[#FFE7EB]">
//                 <img src="/images/swipe4win.png" alt="Education Portal"  className="object-cover"/>
//               </div>
//               <h2 className="flex my-auto">Swipe4win
//                <a
//                   href="https://livedemo-sp.swipe4win.com/" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   <IoMdOpen size={20} className="mt-3"/>
//                 </a>
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppShowcase;

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdOpen } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Blackngreen Website",
    img: "/images/website.png",
    url: "https://revamp.blackngreen.com/",
    bg: "bg-black",
  },
  {
    title: "Nexiva Website",
    img: "/images/nexiva.png",
    url: "https://nexiva.ai/",
    bg: "bg-black",
  },
  {
    title: "Education Portal",
    img: "/images/edu.png",
    url: "https://dev.educarportal.com/subscribe",
    bg: "bg-black",
  },
  {
    title: "Dashboard",
    img: "/images/mobibattle.png",
    url: null,
    bg: "",
  },
  {
    title: "Swipe4win",
    img: "/images/swipe4win.png",
    url: "https://livedemo-sp.swipe4win.com/",
    bg: "bg-black",
  },
   {
    title: "Mobibattle",
    img: "/images/mobibattle_portal.png",
    url: "https://demo.mobibattle.com/#/",
    bg: "bg-black",
  },
  {
    title: "Smart cart",
    img: "/images/smart-cart.png",
    url: "https://smart-shopping-cart-project.netlify.app/",
    bg: "bg-black",
  },
  {
    title: "To do Tasks",
    img: "/images/todo-list.png",
    url: "https://simran-18.github.io/to-do/",
    bg: "bg-black",
  },
];

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2 * index,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`rounded-lg shadow-md overflow-hidden ${project.bg}`}
            >
              <div className="image-wrapper">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="flex items-center text-lg font-semibold">
                  {project.title}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 ml-2"
                    >
                      <IoMdOpen size={18} />
                    </a>
                  )}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
