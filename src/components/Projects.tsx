import React from 'react'
import styled, {css} from 'styled-components'
import { TopProjects } from '../content/projects';

const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${props => props.theme.spacing.between};;
    flex-direction: column;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
`

const ProjectsName = styled.h3`
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

const ProjectItemsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 1.1rem;
  margin-top: 2rem;

  @media (max-width: 300px) {
      place-items: center;
  }
  
 
`

const ProjectItem = styled.div<{sided: boolean}>`
    background-color: #4D6885;
    border-radius: 4px;
    box-shadow: 1px 2px 2px 1px rgba(0,0,0,0.1);
    color: white;
    min-height: 160px;
    min-width: 240px;

    @media (max-width: 720px) {
        ${props => props.sided ? css`margin-left: 1rem;` : css`margin-right: 1rem;`}
    }

    @media (max-width: 592px) {
        margin: 0 2rem;
        
    }




    div {
        padding: .6rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        i {
            color: orange;
            font-size: 1.7rem;
            padding-left: 0.2rem;
        }

        div {
            display: flex;
            i {
                padding: 0 .2rem;
                font-size: 1.4rem;
                cursor: pointer;
                color: white;
            }
        }

    }

    
    h1 {
            padding: 0 1rem;
            font-size: 1.5rem;
        }

    p {
        padding: .6rem 1rem;
        padding-bottom:1rem ;
        font-size: 1rem;
    }

    cursor: pointer;

    
  
`

const AllPButton = styled.a`
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

const Projects: React.FC = () => {
    return (
        <ProjectsWrapper id="projects">
            <ProjectsName><sup>03.</sup>Notable Projects</ProjectsName>
            <ProjectItemsWrapper>
                {TopProjects.map((project, ind) => {
                    return (
                        <ProjectItem key={ind} {...project.webLink && {onClick: () => window.location.href = project.webLink as string}} sided={ind%2 === 0}>
                            <div>
                            <i className="fas fa-project-diagram"></i>
                                <div>
                                    {project.githubLink && <i className="fab fa-github" onClick={() => {window.location.href = project.githubLink as string}}/>}
                                    {project.webLink && <i className="fab fa-chrome"  onClick={() => {window.location.href = project.webLink as string}}/>}
                                </div>
                            </div>
                            <h1>{project.title}.</h1>
                                <p>{project.desc}</p>
                             {/* <section>{project.tech.map(p => <div>{p}</div>)}</section> */}
                        </ProjectItem>
                    )
                })}
            </ProjectItemsWrapper>
            <AllPButton onClick={() => window.location.href = "https://github.com/bharadwajduggaraju"}>All Projects</AllPButton>
        </ProjectsWrapper>
    )
}

export default Projects
