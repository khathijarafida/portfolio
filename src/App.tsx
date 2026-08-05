import { Background } from '@/components/Background';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { BackToTop } from '@/components/ui/BackToTop';
import { ScrollPercent } from '@/components/ui/ScrollPercent';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Certifications, Achievements, Languages } from '@/components/Extras';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function App() {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <ScrollPercent />
      <BackToTop />
    </div>
  );
}
