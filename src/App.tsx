import React from 'react';
//Componenent Imports
import About from "./components/About"
import Contact from "./components/Contact"
import FeaturedProjects from "./components/FeaturedProjects"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Passions from "./components/Passions"
import Projects from "./components/Projects"
import Intro from "./components/Intro"

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Passions />
      <FeaturedProjects />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
