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
import AppWrapper from './components/AppWrapper';
import {ThemeProvider} from "styled-components"
import theme from "./content/theme"



function App(

) {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
      <Navbar />
      <Intro />
      <SocialContacts />
      <About />
      <Passions />
      <Projects />
      <Contact />
      <Footer />
    </AppWrapper>
    </ThemeProvider> 
  );
}

export default App;
