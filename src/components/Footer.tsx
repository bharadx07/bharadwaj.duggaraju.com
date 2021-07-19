import React from 'react'
import styled from "styled-components"


const FooterWrapper = styled.footer`
    width: 100%;
    text-align: center;
    margin-top: ${props => props.theme.spacing.smbetween};;
    margin-bottom: 1rem;
    color: white;
    padding: 0 1rem;
`

const IconsOnSmall = styled.div`
    display: flex;
    justify-content: center;

     i{
         font-size: 1.5rem;
        margin: 0 1rem;
     }

     display: none;

     @media (max-width: 1022px) {
        display: block;
    }

    @media (max-height: 422px) {
        display: block;
    }
`


const Footer = () => {
    return (
        <FooterWrapper>
            <IconsOnSmall>
            <i className="fab fa-github" onClick={() => window.location.href="https://github.com/bharadwajduggaraju"}></i>
            <i className="fab fa-facebook" onClick={() => window.location.href="https://facebook.com/bharadwajduggaraju"}></i>
            <i className="fab fa-instagram" style={{marginBottom: "1.9rem"}} onClick={() => window.location.href="https://instagram.com/bharadwaj_duggaraju"}></i>
            </IconsOnSmall>
            &copy; Bharadwaj Duggaraju 2021. All Rights Reserved.
        </FooterWrapper>
    )
}

export default Footer
