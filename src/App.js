import './App.css';
import Footer from './components/footer';
import HeroSection from './components/herosection';
import Navbar from './components/navbar';
import ProjectsSection from './components/ProjectsSection/Index';
function App() {
  return (
    <>
    <Navbar/>
    <HeroSection />
    <ProjectsSection />
    <Footer/>
    </>
  );
}

export default App;
