import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20vh;
    width: 60%;
    max-width: 900px;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    min-width: 700px;

    @media (max-width: 700px) {
        flex-direction: column;
        min-width: 100%;
        margin-top: 13rem;


    
    }

  
`

const LeftSide = styled.div`
    width: 60%;

    @media (max-width: 750px) {
        width: 100%;
        padding: 0 1rem;
    }
`

const RightImage = styled.img`
    margin: 0 2rem;
    @media (max-width: 800px) {
        width: 30%;
        margin-top: 3rem;
    }

    @media (max-width: 500px) {
        width: 44%;
        margin-top: 3rem;
    }



 
`

const AboutName = styled.h3`
    color: white;
    display: flex;
    font-size: 2.3rem;
    & sup {
        color: orange;
        font-weight: normal;
        margin: 0 .5rem;
        font-size: 1.2rem;
    }

    @media (max-width: 500px) {
        font-size: 1.6rem;
    }

`

const ContentWrapper = styled.p`
    color: white;
    margin: 1rem 0;
    font-weight: 100;
    font-size: 1.1rem;

    @media (max-width: 500px) {
        font-size: 1rem;
    }
    
`

const ToolBoxText = styled.h5`
    color: #6B7B8C; 
    margin: .5rem 0;
    font-weight: bolder;
    font-size: 1.3rem;

    @media (max-width: 500px) {
        font-size: 1.2rem;
    }
`

const ToolBox = styled.div`
    display: flex;
    font-size: 1rem;

    @media (max-width: 364px) {
        font-size: .9rem;
        flex-direction: column;
    }

    ul {
        margin: 0 .5rem;
        color: #6B7B8C
    }

    ul li {
        list-style: none;
    }

    ul li::before {
        content: "▹";
        color: orange;
        margin: 0 .5rem;

    }
`



const About: React.FC = () => {
    return (
        <AboutWrapper id="about">
            <LeftSide>
                <AboutName>
                    <sup>01.</sup> About Me
                </AboutName>

                <ContentWrapper>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                </ContentWrapper>
                <ContentWrapper>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul.
                </ContentWrapper>
                <ToolBoxText>
                    Daily Tech:             </ToolBoxText>
                <ToolBox>
                <ul>
                    <li>Javascript (ES6).</li>
                    <li>Node.js.</li>
                    <li>CSS (Tailwind, SCSS).</li>
                </ul>
                <ul>
                    <li>React.</li>
                    <li>Typescript.</li>
                    <li>GraphQL.</li>
                </ul>
                </ToolBox>
            </LeftSide>
            <RightImage src="me.png" alt="Bharadwaj"/>
        </AboutWrapper>
    )
}

export default About
