import Navigation from '../components/layout/Navigation';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Work from '../components/sections/Work';
import Contact from '../components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
};

export default Index;