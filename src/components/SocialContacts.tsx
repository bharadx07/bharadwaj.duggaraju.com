import React from 'react'
import styled from 'styled-components';


const ContactWrapper = styled.div`
    position: fixed;
    bottom: 0;
    padding: 0 3rem;

    @media (max-width: 890px) {
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



const SocialContacts = () => {
    return (
        <ContactWrapper>
            <Socials>
            <i className="fab fa-github" onClick={() => window.location.href="https://github.com/bharadwajduggaraju"}></i>
            <i className="fab fa-facebook" onClick={() => window.location.href="https://facebook.com/bharadwajduggaraju"}></i>
            <i className="fab fa-instagram" style={{marginBottom: "1.9rem"}} onClick={() => window.location.href="https://instagram.com/bharadwaj_duggaraju"}></i>
            <i className="fas fa-grip-lines-vertical" style={{margin: "0"}}></i>
            <i className="fas fa-grip-lines-vertical" style={{margin: "0"}} ></i>
            <i className="fas fa-grip-lines-vertical" style={{margin: "0"}} ></i>
            <i className="fas fa-grip-lines-vertical" style={{margin: "0"}} ></i>
            </Socials>
        </ContactWrapper>
    )
}

export default SocialContacts
