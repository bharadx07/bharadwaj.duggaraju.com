import React from 'react'
import styled from 'styled-components'
import { TopProjects } from '../content/projects';

const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15vh;
    flex-direction: column;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
`

const ProjectsName = styled.h3`
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
    width: 40%;
`

const ProjectItemsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3.5rem;
  margin-top: 2rem;
`

const ProjectItem = styled.div`
    background-color: #4D6885;
    color: white;
    padding: 1rem;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem;
        div {
            display: flex;
        }
    }
`

const Projects: React.FC = () => {
    return (
        <ProjectsWrapper>
            <ProjectsName><sup>03.</sup>Projects</ProjectsName>
            <ProjectItemsWrapper>
                {TopProjects.map((project, ind) => {
                    return (
                        <ProjectItem>
                            <div>
                            <i className="fas fa-project-diagram"></i>
                                <div>
                                    <i className="fab fa-github" onClick={() => window.location.href = project.githubLink as string}/>
                                    <i className="fab fa-chrome"  onClick={() => window.location.href = project.webLink as string}/>
                                </div>
                            </div>
                            <h1>{project.title}</h1>
                                <p>{project.desc}</p>
                                {project.tech.map(tag => <div>{tag}</div>)}
                        </ProjectItem>
                    )
                })}
            </ProjectItemsWrapper>
        </ProjectsWrapper>
    )
}

export default Projects
