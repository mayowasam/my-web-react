import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProjectDiv = styled.div`
    width: 80%;
    margin: 40px auto 0; 
    border: 2px solid red;
`

const ProjectContainer = styled.div`
   display: grid;
   grid-template-columns: auto auto; 
`


const ProjectTitle = styled.a`
    text-decoration: none;
    font-size: 24px;
    font-weight: 300;
`
const ProjectDetail = styled.p`
  
`

const Build = styled.p`
  
`

const Projects = styled.div`
  
`

const Footer = styled.footer`
    min-height: 30vh;
    display : flex;
    align-items : flex-end;
    border: 2px solid blue;
    justify-content: space-between;
    padding: 20px 0;

`

const FooterA = styled.a`
    text-decoration: none;
    font-size: 25px;
    color: inherit;

`

const FooterLink = styled(Link)`
    text-decoration: none;
    font-size: 25px;
    color: inherit;

`

function Project() {
    return (
        <ProjectDiv>
            <ProjectContainer>

                <Projects>
                    <ProjectTitle href="https://mayowasam.github.io/Spotify-clone/">Spotify Clone</ProjectTitle>
                    <ProjectDetail>
                        A spotify app that shows you the current biilboard chart when you login
                    </ProjectDetail>
                    <Build>
                        Built with: React
                    </Build>
                </Projects>

                <Projects>
                    <ProjectTitle href="https://amzon-clone-7e423.web.app/">Amazon Clone</ProjectTitle>
                    <ProjectDetail>
                        An mimicry of amazon
                    </ProjectDetail>
                    <Build>
                        Built with: React, Firebase
                    </Build>
                </Projects>

                <Projects>
                    <ProjectTitle href=" https://github.com/mayowasam/spotify-with-react-and-node">Realtime Spotify Search Clone</ProjectTitle>
                    <ProjectDetail>
                        A Spotify search app that shows you a list of songs regardless of you search input that you can play
                    </ProjectDetail>
                    <Build>Built with: React, Express, Nodejs</Build>
                </Projects>

                <Projects>
                    <ProjectTitle href="https://spotify-clone-8c5ff.web.app">Twitter Clone</ProjectTitle>
                    <ProjectDetail>
                        A clone of Twitter , that you van send tweets and it shows on your timeline
                    </ProjectDetail>
                    <Build>Built with: React ,firebase, third party modules</Build>
                </Projects>

                <Projects>
                    <ProjectTitle href="https://github.com/mayowasam/account-balance-react-assignment">Account Balance</ProjectTitle>
                    <ProjectDetail>
                        A simple app
                    </ProjectDetail>
                    <Build>Built with: React, Redux</Build>
                </Projects>

            </ProjectContainer>
            <Footer>
                <FooterA href="http://">LinkedIn</FooterA>
                <FooterA href="http://github.com/mayowasam">Github</FooterA>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/project">Project</FooterLink>
            </Footer>
        </ProjectDiv>

    )
}

export default Project
