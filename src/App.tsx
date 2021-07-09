import React from 'react';
//Componenent Imports
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Passions from "./components/Passions"
import Projects from "./components/Projects"
import Intro from "./components/Intro"
import SocialContacts from './components/SocialContacts';



function App(

) {
  return (
    <>
      <Navbar />
      <Intro />
      <SocialContacts />
      <About />
      <Passions />
      <Projects />
      <Contact />
      <Footer />
    </> 
  );
}

export default App;
