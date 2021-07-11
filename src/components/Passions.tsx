import React, { useState } from 'react'
import styled from 'styled-components'
import PassionsContent from '../content/passions';


const PassionsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15vh;
    flex-direction: column;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    max-width:900px;

    @media (max-width: 800px) {
        width: 100%;
        padding: 0 .5rem;
    }
    
`



const PassionsName = styled.h3`
    color: white;
    display: flex;
    font-size: 2.3rem;
    text-align: center;
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

const ButtonsWrapper = styled.div`
    display: flex;
    margin-top: 1rem;

    & button:first-child {
 
    }

    @media (max-width: 600px) {
        display: none;
    }

`

const TopicButton = styled.button<{filled: boolean}>`
    margin: 0 .5rem;
    border: 1px solid orange;
    outline: none;
    background-color: ${props => props.filled ? 'orange' : '#3b4d61'};
    color: white;
    border-radius: 0%;
    padding: .3rem .5rem;
    font-weight: ${props => props.filled ? 'bold' : 'normal'};
    cursor: pointer;
    font-size: .9rem;
`

const ContentWrapper = styled.p`
    color: white;
    margin: .7rem 0;
    font-weight: 100;
    width: 73%;
    font-size: 1.1rem;

    &::before {
        content: "▹";
        color: orange;
        margin-right: .5rem;

    }

    @media (max-width: 700px) {
        width: 100%;
        padding: 0 1rem;
        font-size: 1rem;
    }
    
`

const TopicSelect = styled.select`
    text-align: center;
    margin: 1rem auto;
    display: flex;
    border: none;
    outline: none;
    background-color: orange;
    color: white;
    padding: 0.3rem 1.3rem;

    @media (min-width: 600px) {
        display: none;
    }
`

const PassionsList: PassionT[] = ["Programming", "Volunteering", "Cubing", "Writing", "Badminton"]

type PassionT = "Programming" | "Volunteering" | 
"Cubing" | "Writing" | "Badminton"

const Passions: React.FC = () => {
    const [tab, setTab] = useState<PassionT>("Programming")

    const tabContent = PassionsContent[tab]
    return (
        <PassionsWrapper id="passions">
            <div>
            <PassionsName><sup>02.</sup>Passions</PassionsName>
            <ButtonsWrapper>
                {PassionsList.map((passion, ind) => {
                    return <TopicButton key={ind} filled={tab === passion} onClick={() => {setTab(passion)}}>{passion}</TopicButton>
                })}
            </ButtonsWrapper>
            <TopicSelect onChange={(e) => setTab(e.target.value as PassionT)}>
            {PassionsList.map((passion, ind) => {
                    return <option value={passion} key={ind}>{passion}</option>
                })}
            </TopicSelect> 

            </div>
            <br />
            {tabContent.map((tabContentItem: string, ind: number) => {
                return (
                    <ContentWrapper key={ind}>
                        {tabContentItem}
                    </ContentWrapper>
                )
            } )}
        </PassionsWrapper>
    )
}

export default Passions
