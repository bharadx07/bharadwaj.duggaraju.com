import React, {useEffect} from "react"
import styled from "styled-components";

const NavWrapper = styled.header`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`
const NavBrand = styled.div`
    color: #4a45b9;
  font-size: 2rem;
  margin: 1.5rem 0;
  margin-left: 1rem;
  height: 51px;
  width: 150px;
  border-radius: 0px;
  display: flex;
  align-items: center;
`

const Nav = styled.nav`
    display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  margin-right: 1rem;

  @media (max-width: 890px) {
    flex-direction: column;
    background-color: #586b81;
    margin: 0 auto;
    position: fixed;
    z-index: 100;
    top: -100vh;
    height: 100vh;
    padding: 5rem;
    text-align: center;

    justify-content: center;
    right: 0;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;


  }

  @media(max-width: 276px) {
      display: none;
  } 
    
`

const CloseIcon = styled.i`
    color: orange;
  font-size: 2.5rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  display: none;

  @media (max-width: 890px) {
      display: block;
  }
`

const MenuIcon = styled.i`
 color: white;
  font-size: 2.5rem;
  display: none;
  margin: 1.5rem 0;
  margin-right: 1rem;
  cursor: pointer;

  @media (max-width: 890px) {
      display: block;
  }

  
  @media(max-width: 276px) {
      display: none;
      
  } 
`

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 300;
  font-size: 17px;
  padding: 0 35px 0 0;
  cursor: pointer;

  & span {
      color: orange;
  }

  
  @media (max-width: 890px) {
      margin: .5rem 0;
      padding: 0;
      
  }

`

const BR = styled.br`
    display: none;

    @media (max-width: 890px) {
      display: block;
  }
`

const Navbar: React.FC = () => {
    useEffect(() => {
        //Menu Opening
        const s = (key: string): any => {
          return document.querySelector(key);
        };
        const menuopen = s(".menuicon");
        const menuclose = s(".closeicon");
        menuopen.addEventListener("click", (e: Event) => {
          s(".nav").style = "animation: diagonal 400ms linear; top: 0;";
        });
        menuclose.addEventListener("click", (e: Event) => {
          s(".nav").style = "animation: backdiagonal 400ms linear; top: -100vh;";
        });
      }, []);
    
      return (
        <NavWrapper>
            <NavBrand>
              <img src="/icon-white.svg" alt="BD"/>
            </NavBrand>
            <MenuIcon className="icon ion-md-menu menuicon"></MenuIcon>
            <Nav className="nav">
              <CloseIcon className="icon ion-md-close closeicon"></CloseIcon>
              <NavLink className="nav-link" href="#about">
                <span>01.</span><BR /> About
              </NavLink>
              <NavLink className="nav-link" href="#passions">
                <span>02.</span><BR /> Passions
              </NavLink>
              <NavLink className="nav-link" href="#projects">
                <span>03.</span><BR /> Projects
              </NavLink>
              <NavLink className="nav-link" href="#contact">
                <span>04.</span><BR /> Contact
              </NavLink>
            </Nav>
        </NavWrapper>
      );
}

export default Navbar