import React, {useEffect} from "react"
import styled, {keyframes} from "styled-components";

const sign = keyframes`
  to {
    stroke-dashoffset: 0;
  } 

`

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
  cursor: pointer;

  & svg path {
    stroke-dasharray: 343.4662780761719;
    stroke-dashoffset: 343.4662780761719;
    animation: ${sign} 3s ease;
    animation-fill-mode: forwards;
  }

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
            <NavBrand onClick={() => window.location.href="#"} className="animate__animated animate__fadeInDown">
            <svg width="98" height="50" viewBox="0 0 98 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 15.6979C8.84724 14.3285 14.2494 9.08805 17.4444 2.6979C19.2241 -0.861345 17.5665 10.3066 17.5 11.1979C17.0246 17.5686 17.2009 24.9161 15.7778 31.1423C14.8985 34.9891 16.5486 26.5365 17 25.2535C18.359 21.3909 20.8968 17.4352 23.5 14.2535C27.3313 9.57074 34.8272 6.60373 40.5556 9.92012C46.1777 13.1751 29.1206 22.0988 27.1667 23.1979C23.7635 25.1122 38.0133 25.6972 39.1667 25.7535C43.3357 25.9568 45.1403 29.4072 45 33.4757C44.8668 37.3396 37.4609 40.0386 34.6667 41.0312C31.6008 42.1204 26.2257 42.662 32.5 44.7535C38.0355 46.5986 49.1132 49.9986 55 47.4757C58.5465 45.9558 60.6587 38.3873 61.9444 35.2535C63.6983 30.9784 64.2395 25.8833 66.5 21.8646C67.376 20.3073 68.9134 19.9112 69 17.9201C69.2567 12.0156 68.8098 29.8237 67.5 35.5868C67.3306 36.3322 66.1111 41.8874 66.1111 38.0312C66.1111 31.7039 70.2988 22.8292 73 17.1423C75.1758 12.5618 79.9244 8.47854 85 7.75346C97.7105 5.93767 98.3757 27.3195 92.5556 34.1979C87.6229 40.0274 84.781 41.6979 77 41.6979C71.3855 41.6979 69.4763 42.3329 66 37.6979" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>

            </NavBrand>
            <MenuIcon className="icon ion-md-menu menuicon"></MenuIcon>
            <Nav className="nav animate__animated animate__fadeInDown">
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