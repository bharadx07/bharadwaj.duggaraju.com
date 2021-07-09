import React from 'react'
import styled from 'styled-components'

const CenterWrapper = styled.div`
    margin: 0px auto;
    width: 100%;
    max-width: 900px;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeyWrapper = styled.h5`
    font-size: 27px;
    color: #EF9D10;
    font-weight: normal;

    @media (max-width: 375px) {
        font-size: 20px;
    }
`

const Name = styled.h1`
    font-size: 70px;
    font-weight: bold;
    color: white;

    & span {
        color: orange;
    }

    @media (max-width: 768px) {
        font-size: 50px;
    }

    @media (max-width: 375px) {
        font-size: 40px;
        margin: .5rem 0;
    }

    @media (max-width: 320px) {
        font-size: 34px;
    }

    
`

const AboutDesc = styled.p`
    color: #6B7B8C;
    font-size: 1.5rem;
    font-weight: bold;
    width: 50%;
    padding: 0 0 2.8rem 0;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media (max-width: 375px) {
        font-size: 1.1rem;
        width: 80%;
    }
`

const ContactButton = styled.a`
    padding: 10px 13px;
    border: 1px solid #EF9D10;
    border-radius: 5px;
    color: orange;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.3rem;

    &:hover {
        background-color: #EF9D10;
        color: white;
    }

    @media (max-width: 375px) {
        font-size: 1rem;
    }


`

const Intro: React.FC = () => {
    return (
        <CenterWrapper>
            <div style={{marginLeft: "2rem"}}>
            <HeyWrapper>Hey!</HeyWrapper>
            <Name>I'm <span>Bharadwaj Duggaraju.</span></Name>
            <AboutDesc>Being a passionate student developer, I enjoy making impactful projects on the web, mobile and real-life.</AboutDesc>
            <ContactButton href="#contact">Contact Me</ContactButton>
            </div>
        </CenterWrapper>
    )
}

export default Intro
