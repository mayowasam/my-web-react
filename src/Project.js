import React from 'react'
import styled from 'styled-components'
import {HomeContainer} from './Home'



const ProjectContainer = styled(HomeContainer)`
   display: grid;
   grid-template-columns: auto auto; 
   grid-gap: 20px;
`
const Projects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid green;
    text-align: center;
`

const ProjectTitle = styled.a`
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    color: inherit;
    &:hover{
        background-color: blue;
        color: white;
    }
`
const ProjectDetail = styled.p`
color: ${({theme}) => theme.main}

`

const Build = styled.p`
color: ${({theme}) => theme.main}

`





function Project() {
    return (

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


    )
}

export default Project
