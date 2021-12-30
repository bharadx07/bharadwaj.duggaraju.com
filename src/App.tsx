import React from 'react';
//Component Imports
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Passions from "./components/Passions"
import Projects from "./components/Projects"
import Intro from "./components/Intro"
import SocialContacts from './components/SocialContacts';
//Global Styles
import AppWrapper from './components/AppWrapper';
//Theme
import {ThemeProvider} from "styled-components"
import theme from "./content/theme"



function App(

) {
  return (
      <AppWrapper>
      <ThemeProvider theme={theme}>
      <Navbar />
      <Intro />
      <SocialContacts />
      <About />
      <Passions />
      <Projects />
      <Contact />
      <Footer />
      </ThemeProvider> 
    </AppWrapper>
  );
}

export default App;
