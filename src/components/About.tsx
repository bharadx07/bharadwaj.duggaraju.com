import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20vh;
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
`

const LeftSide = styled.div``

const RightImage = styled.img`margin: 0 2rem;`

const AboutName = styled.h3`
    border-bottom: 1px solid white;
    color: white;
    display: flex;
    font-size: 1.5rem;
    & sup {
        color: orange;
        font-weight: normal;
        margin: 0 .5rem;
        font-size: 1rem;
    }

    padding-bottom: .7rem;
    padding-right: 4rem;
    width: 70%;
`

const ContentWrapper = styled.p`
    color: white;
    margin: 1rem 0;
    font-weight: 100;
    
`

const ToolBoxText = styled.h5`
    color: white; 
    margin: .5rem 0;
    font-weight: normal;
    font-size: 1rem;
`

const ToolBox = styled.div`
    display: flex;

    ul {
        margin: 0 .5rem;
        color: white
    }

    ul li {
        list-style: none;
    }

    ul li::before {
        content: ">";
        color: orange;
        margin: 0 .5rem;

    }
`



const About: React.FC = () => {
    return (
        <AboutWrapper>
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
                    My Developer ToolBox :
                </ToolBoxText>
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
