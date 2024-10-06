import './App.css';  // Import global CSS file for styling
import Header from './components/header/Header';  // Import the Header component
import Home from './components/home/Home';  // Import the Home component
import About from './components/about/About';  // Import the About component
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
 function App() {
  // Render Header, Home, and About components within the main section
  return (
    <>
      <Header />  {/* Render the Header */}
      <main className='main'>
        <Home />  {/* Render the Home component */}
        <About />  {/* Render the About component */}
        <Skills/>
        <Services/>
        <Qualifications/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;  // Export the App component as default
