import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import AnimatedSection from '../3d/AnimatedSection';

const skills = [
  { name: 'React.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'JavaScript', level: 92 },
  { name: 'Next.js', level: 85 },
  { name: 'Redux', level: 88 },
  { name: 'Node.js', level: 80 },
];

export default function Skills() {
  return (
    <AnimatedSection variant="skills" className="py-20 px-6 bg-surface" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-cosmic pulse-cosmic">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass p-6 hover-glow hover-3d glow-cosmic h-full float">
                <h3 className="text-lg font-semibold mb-4 text-gradient-cosmic pulse-glow">
                  {skill.name}
                </h3>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-cosmic rounded-full aurora-wave"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient-cosmic">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js',
              'Redux', 'Node.js', 'Socket.io', 'TailwindCSS', 'Styled Components', 'Framer Motion',
              'Axios', 'Jest', 'React Testing Library', 'Git', 'GitHub', 'NPM', 'Webpack', 'Jira'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="glass px-4 py-2 rounded-full text-sm font-medium hover-glow hover-3d cursor-default pulse-glow"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}