import React from 'react'
import styled from 'styled-components'
import {HomeContainer} from './Home'



const ProjectContainer = styled(HomeContainer)`
    width: 60%;
    margin-top: 15vh; 
    height: 80vh;
    display: grid;
    grid-template-columns: auto auto; 
    grid-gap: 30px;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        min-height: 150vh;
        justify-content: space-evenly;
      }
`
const Projects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: justify;
    border: 2px solid red

    @media only screen and (max-width: 600px) {
        text-align: justify;
      }
`

const ProjectTitle = styled.a`
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    color: inherit;
    &:hover{
        color: white;
    }
`
const ProjectDetail = styled.p`
    color: ${({theme}) => theme.main};
    opacity: .7;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    

`

const Build = styled.div`
    display: flex;
    color: ${({theme}) => theme.main}

`
const BuildTitle = styled.p`
    display: flex;
    color: ${({theme}) => theme.main};
    padding-right: 10px

`
const BuildDetail = styled.p`
    opacity: .7
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
                        <BuildTitle>Built with:</BuildTitle> 
                        <BuildDetail>React</BuildDetail>
                    </Build>
                </Projects>

                <Projects>
                    <ProjectTitle href="https://amzon-clone-7e423.web.app/">Amazon Clone</ProjectTitle>
                    <ProjectDetail>
                        An mimicry of amazon
                    </ProjectDetail>
                    <Build>
                        <BuildTitle>Built with:</BuildTitle> 
                        <BuildDetail>React, Firebase</BuildDetail>
                    </Build>
                </Projects>

                <Projects>
                    <ProjectTitle href=" https://github.com/mayowasam/spotify-with-react-and-node">Realtime Spotify Search Clone</ProjectTitle>
                    <ProjectDetail>
                        A Spotify search app that shows you a list of songs regardless of you search input that you can play
                    </ProjectDetail>
                    <Build>
                        <BuildTitle>Built with:</BuildTitle> 
                        <BuildDetail>React, Express, Nodejs</BuildDetail>
                    </Build>
                </Projects>

                <Projects>
                    <ProjectTitle href="https://spotify-clone-8c5ff.web.app">Twitter Clone</ProjectTitle>
                    <ProjectDetail>
                        A clone of Twitter , that you van send tweets and it shows on your timeline
                    </ProjectDetail>
                    <Build>
                        <BuildTitle>Built with:</BuildTitle> 
                        <BuildDetail>React ,firebase, third party modules</BuildDetail>
                    </Build>
                </Projects>

                <Projects>
                    <ProjectTitle href="https://github.com/mayowasam/account-balance-react-assignment">Account Balance</ProjectTitle>
                    <ProjectDetail>
                        A simple app
                    </ProjectDetail>
                    <Build>
                        <BuildTitle>Built with:</BuildTitle> 
                        <BuildDetail> React, Redux</BuildDetail>
                    </Build>
                </Projects>

            </ProjectContainer>


    )
}

export default Project
