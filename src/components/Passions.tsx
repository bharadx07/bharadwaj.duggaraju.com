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
`



const PassionsName = styled.h3`
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
    width: 50%;
`

const ButtonsWrapper = styled.div`
    display: flex;
    margin-top: 1rem;

    & button:first-child {
        margin: 0;
        margin-right: .5rem;
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
    cursor: pointer;
    font-size: .9rem;
`

const ContentWrapper = styled.p`
    color: white;
    margin: .4rem 0;
    font-weight: 100;
    width: 53%;

    &::before {
        content: ">";
        color: orange;
        margin-right: .5rem;

    }
    
`

const PassionsList: PassionT[] = ["Programming", "Volunteering", "Cubing", "Writing", "Badminton"]

type PassionT = "Programming" | "Volunteering" | 
"Cubing" | "Writing" | "Badminton"

const Passions: React.FC = () => {
    const [tab, setTab] = useState<PassionT>("Programming")

    const tabContent = PassionsContent[tab]
    return (
        <PassionsWrapper>
            <div>
            <PassionsName><sup>02.</sup>Passions</PassionsName>
            <ButtonsWrapper>
                {PassionsList.map((passion, ind) => {
                    return <TopicButton key={ind} filled={tab === passion} onClick={() => {setTab(passion)}}>{passion}</TopicButton>
                })}
            </ButtonsWrapper>
            </div>
            <br />
            {tabContent.map((tabContentItem: string, ind: number) => {
                return (
                    <ContentWrapper>
                        {tabContentItem}
                    </ContentWrapper>
                )
            } )}
        </PassionsWrapper>
    )
}

export default Passions
