import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import AnimatedSection from '../3d/AnimatedSection';

const projects = [
  // {
  //   title: 'EVA Dashboard',
  //   description: 'High-performance dashboard with role-based access control, dynamic forms, and reusable data grids supporting 15+ concurrent operators.',
  //   image: 'https://simrandeep.netlify.app/images/evapa.png',
  //   liveUrl: '',
  //   githubUrl: '#'
  // },
  {
    title: 'Nexiva Website',
    description: 'Complete website revamp using React.js and Framer Motion delivering fully responsive, cross-browser compatible experience.',
    image: 'https://simrandeep.netlify.app/images/nexiva.png',
    liveUrl: 'https://nexiva.ai/',
    githubUrl: '#'
  },
  {
    title: 'Blackngreen Website',
    description: 'Modern web application with smooth transitions and contemporary UI/UX standards for enhanced user experience.',
    image: 'https://simrandeep.netlify.app/images/website.png',
    liveUrl: 'https://revamp.blackngreen.com/',
    githubUrl: '#'
  },
  {
    title: 'Education Portal',
    description: 'Comprehensive educational platform with multimedia content management system handling 1M+ digital assets.',
    image: 'https://simrandeep.netlify.app/images/edu.png',
    liveUrl: 'https://dev.educarportal.com/',
    githubUrl: '#'
  },
  {
    title: "Swipe4win",
    description:"Tinder app like quiz web application ",
    image:"https://simrandeep.netlify.app/images/swipe4win.png",
    liveUrl: "https://livedemo-sp.swipe4win.com/",
  },
  {
    title: 'Mobibattle Dashboard',
    description: 'Gaming platform dashboard with tournament creation modules, user management, and real-time analytics.',
    image: 'https://simrandeep.netlify.app/images/mobibattle.png',
    liveUrl: '',
    githubUrl: '#'
  },
  {
    title: 'To-Do Tasks App',
    description: 'Task management application with intuitive interface and efficient workflow management capabilities.',
    image: 'https://simrandeep.netlify.app/images/todo-list.png',
    liveUrl: 'https://simran-18.github.io/to-do/',
    githubUrl: '#'
  }
];

export default function Work() {
  return (
    <AnimatedSection variant="work" className="py-20 px-6 bg-surface" id="work">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-cosmic pulse-cosmic">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass overflow-hidden hover-glow hover-3d glow-cosmic h-full flex flex-col float">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-30 transition-opacity duration-300 aurora-wave"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-gradient-cosmic pulse-glow">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Optional: Show tech stack here */}
                  {/* <div className="flex flex-wrap gap-2 mb-6">
                    {project?.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-surface text-xs font-medium rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button 
                          variant="default" 
                          size="sm"
                          className="w-full bg-primary hover:bg-primary-glow text-primary-foreground hover-3d glow-primary"
                        >
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {/* Optional: GitHub Code Button
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-3d"
                        >
                          Code
                        </Button>
                      </a>
                    )} */}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* And Many More Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Card className="glass p-8 hover-glow hover-3d glow-cosmic inline-block">
            <h3 className="text-2xl font-bold text-gradient-cosmic pulse-glow mb-4">
              And Many More...
            </h3>
            {/* <p className="text-muted-foreground">
              Explore more projects and contributions in my portfolio
            </p> */}
          </Card>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
