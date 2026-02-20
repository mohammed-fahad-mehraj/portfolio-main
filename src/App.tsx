import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import About from './assets/components/About';
import Skills from './assets/components/Skills';
import Projects from './assets/components/Projects';
import Services from './assets/components/Services';
import WhyHireMe from './assets/components/WhyHireMe';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';
import ScrollToTop from './assets/components/ScrollToTop';



function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <WhyHireMe />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
