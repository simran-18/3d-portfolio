import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import AnimatedSection from '../3d/AnimatedSection';

export default function About() {
  return (
    <AnimatedSection variant="about" className="py-20 px-6" id="about">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-cosmic pulse-cosmic">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional, and user-friendly applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass p-8 hover-glow hover-3d glow-cosmic float">
              <h3 className="text-2xl font-bold mb-4 text-gradient-cosmic pulse-glow">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As a Senior Software Engineer with professional experience since 2022, I specialize in 
                building high-performance web applications using React.js, TypeScript, and modern development 
                practices. My expertise spans from developing admin dashboards with real-time analytics to 
                creating AI-driven solutions that enhance user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I focus on delivering high-quality results with attention to detail, maintaining reliable 
                communication, and ensuring on-time delivery. My passion lies in building scalable solutions 
                that support thousands of users while optimizing performance and user engagement.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="glass p-6 hover-glow hover-3d float-delayed">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-primary rounded-full glow-primary pulse-glow mr-4 cosmic-spin"></div>
                <h4 className="text-lg font-semibold">Frontend Development</h4>
              </div>
              <p className="text-muted-foreground">
                React.js, TypeScript, Next.js, Redux, Styled Components, TailwindCSS
              </p>
            </Card>

            <Card className="glass p-6 hover-glow hover-3d float">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-secondary rounded-full glow-secondary pulse-glow mr-4 cosmic-spin"></div>
                <h4 className="text-lg font-semibold">Backend & APIs</h4>
              </div>
              <p className="text-muted-foreground">
                Node.js, Socket.io, OpenAI API, Google OAuth, RESTful APIs
              </p>
            </Card>

            <Card className="glass p-6 hover-glow hover-3d float-delayed">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-accent rounded-full glow-accent pulse-glow mr-4 cosmic-spin"></div>
                <h4 className="text-lg font-semibold">Tools & Testing</h4>
              </div>
              <p className="text-muted-foreground">
                Git, GitHub, Jest, React Testing Library, Webpack, Jira
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}