import React from 'react'
import styled from 'styled-components';


const ContactWrapper = styled.div`
    position: fixed;
    bottom: 0;
    padding: 0 3rem;

    @media (max-width: 1022px) {
        display: none;
    }

    @media (max-height: 422px) {
        display: none;
    }
`

const Socials = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;

    & i {
        margin: .9rem 0;
        font-size: 1.4rem;
        cursor: pointer;
    }



`
 


const SocialContacts: React.FC = () => {
    return (
        <ContactWrapper className="animate__animated animate__fadeInLeft">
            <Socials>
            <i className="fab fa-github" onClick={() => window.location.href="https://github.com/bharadwajduggaraju"}></i>
            <i className="fab fa-linkedin" onClick={() => window.location.href="https://www.linkedin.com/in/bharadwajduggaraju/"}></i>
            <i className="fab fa-instagram" style={{marginBottom: "1.9rem"}} onClick={() => window.location.href="https://instagram.com/bharadwaj_duggaraju"}></i>
            <div title="Jump to top." style={{cursor: "pointer"}}>{"⬆"}</div>
            {[0,1,2,3].map((_, ind: number) => (<i className="fas fa-grip-lines-vertical" title="Jump to top." style={{margin: "0"}} key={ind} onClick={() => window.location.href = "#"}></i>))} 
            </Socials>
        </ContactWrapper>
    )
}

export default SocialContacts
