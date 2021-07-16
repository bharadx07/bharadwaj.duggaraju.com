import React from 'react'
import styled from "styled-components"

const ContactWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 10vh;
    width: 60%;
    max-width: 900px;
    margin-right: auto;
    margin-left: auto;
    align-items: center;

    @media (max-width: 600px) {
        width: 90%;
    }
`

const ContactName = styled.h3`
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

const ContactBTN = styled.a`
margin-top: 2rem;
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

const ContactText = styled.p`
    color: white;
    width: 60%;
    text-align: center;
    margin-top: 1rem;

    @media (max-width: 800px) {
        width: 100%;
    }
`

const Contact: React.FC = () => {
    return (
        <ContactWrapper id="contact">
            <ContactName>
                <sup>04.</sup>Contact
            </ContactName>
            <ContactText>

            Although I'm not currently looking for any new business inquiries, feel free to email me. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </ContactText>
            <ContactBTN onClick={() => window.location.href="mailto:bharadwaj.duggaraju@outlook.com"}>
                Get In Touch
            </ContactBTN>
        </ContactWrapper>
    )
}

export default Contact
