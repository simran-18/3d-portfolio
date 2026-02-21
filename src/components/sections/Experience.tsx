import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import AnimatedSection from '../3d/AnimatedSection';

const expCards = [
  {
    imgPath: "https://simrandeep.netlify.app/images/thoughtworks-logo.svg",
    logoPath: "https://simrandeep.netlify.app/images/thoughtworks-logo.svg",
    title: "Consultant (Frontend Developer)",
    date: "Dec 2025 - Present",
    responsibilities: [
      "Practicing Test-Driven Development (TDD) by writing unit and integration tests before feature implementation using Jest and React Testing Library.",
      "Developing scalable, modular frontend UI components using React.js and TypeScript with strong test coverage.",
      "Contributing to agile delivery, peer code reviews, and CI/CD workflows to maintain production-grade code quality."
    ]
  },
  {
    imgPath: "https://simrandeep.netlify.app/images/logo.png",
    logoPath: "https://simrandeep.netlify.app/images/logo.png",
    title: "Senior Software Engineer",
    date: "May 2025 - Dec 2025",
    responsibilities: [
      "Integrating an Admin Dashboard using MUI (Material UI), Redux, Styled Component , Formik managing 20+ operators and having real-time analytics, complaint resolution, user management ,wallet ,tournament creation modules.",
      "Leading a complete website revamp using React.js and Framer Motion to deliver a fully responsive, cross-browser compatible experience with smooth transitions and modern UI/UX standards."
    ]
  },
  {
    imgPath: "https://simrandeep.netlify.app/images/logo.png",
    logoPath: "https://simrandeep.netlify.app/images/logo.png",
    title: "Software Engineer",
    date: "July 2022 - May 2025",
    responsibilities: [
      "Developing a high-performance EVA Dashboard with role-based access control (RBAC), config-driven dynamic forms (React Hook Form & Zod), and reusable data grids, reducing development time by 40% and supporting 15+ concurrent operators.",
      "Integrated Google OAuth for secure authentication, enabling subscription-based voice morphing and Google Contacts fetching, supporting 100K+ users and enhancing user workflows and data security.",
      "Developed and deployed Elastic Reporting Dashboard, improving data accuracy by 30% and reducing analysis time by 40%.",
      "Enhanced application performance by 50% using Code Splitting, Lazy Loading, and Tree Shaking, improving load times and engagement.",
      "Developed an AI-driven chatbot using OpenAI API and Socket.io, handling 40% of customer inquiries and optimizing support workflows."
    ]
  },
  {
    imgPath: "https://simrandeep.netlify.app/images/logo.png",
    logoPath: "https://simrandeep.netlify.app/images/logo.png",
    title: "Software Engineer Trainee",
    date: "January 2022 - July 2022",
    responsibilities: [
      "Built a reusable component library with 30+ UI elements in collaboration with UI/UX team, boosting development efficiency.",
      "Built high-coverage Jest test suites, reaching 90%+ code coverage and preventing critical bugs before deployment.",
      "Resolved 50+ critical bugs, enhancing system reliability and stability across multiple projects.",
      "Launched a comprehensive multimedia content management system (CMS) with an intuitive dashboard, allowing for the management of 1M+ digital assets reducing the operations team efforts by 50%."
    ]
  }
];

export default function Experience() {
  return (
    <AnimatedSection variant="experience" className="py-20 px-6" id="experience">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-cosmic pulse-cosmic">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-cosmic aurora-wave"></div>

          <div className="space-y-12">
            {expCards.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full glow-primary pulse-cosmic border-4 border-background"></div>

                {/* Content */}
                <div className="ml-16 w-full">
                  <Card className="glass p-6 hover-glow hover-3d glow-cosmic float">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={exp.logoPath}
                          alt="Company Logo"
                          className="w-10 h-10 rounded-full object-contain bg-white border border-border"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gradient-cosmic pulse-glow mb-1">
                            {exp.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mt-4 sm:mt-0">
                        {exp.date}
                      </span>
                    </div>

                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
