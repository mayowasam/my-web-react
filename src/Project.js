import React from 'react'
import styled from 'styled-components'
import { HomeContainer } from './Home'



const ProjectContainer = styled(HomeContainer)`
    width: 60%;
    padding: 0;
    display: grid;
    grid-template-columns: 400px 400px; 
    grid-gap: 50px 50px;
    margin-bottom: 10vh;

    @media only screen and (min-width: 764px) {
        width: 80%;
        grid-template-columns: auto auto;  
        margin-top: 17vh;
 
    }

    @media only screen and (max-width: 600px) {
        width: 80%;
        display: flex;
        flex-direction: column; 
        margin-top: 20vh;


    }

    @media only screen and (max-width: 360px) {
        width: 80%;
        display: flex;
        flex-direction: column; 
        margin-top: 20vh;


    }
  
`
const Projects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: justify;
    padding: 10px;

    @media only screen and (max-width: 360px) {
        width: 100%;
        padding=right: 0 ;

    }
   
`

const ProjectTitle = styled.a`
    text-decoration: none;
    font-size: 32px;
    font-weight: bold;
    color: inherit;
    &:hover{
        color: white;
    }
`
const ProjectDetail = styled.p`
    color: ${({ theme }) => theme.main};
    font-size: 16px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    

`

const Build = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;

    @media only screen and (max-width: 280px) {
        font-size: 12px;
    } 
`

const BuildTitle = styled.p`
    color: ${({ theme }) => theme.main};
    white-space: nowrap;
    padding-right: 5px;

`
const BuildDetail = styled.p`
    color: ${({ theme }) => theme.linker};
    font-weight: bold;
    white-space: nowrap;
`




function Project() {
    return (

        <ProjectContainer>

            <Projects>
                <ProjectTitle href="https://mayowasam.github.io/Spotify-clone/">Spotify Clone</ProjectTitle>
                <ProjectDetail>
                    A spotify app that shows you the current biilboard chart when you login
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more
                </ProjectDetail>
                <Build>
                    <BuildTitle>Built with: </BuildTitle>
                    <BuildDetail>React</BuildDetail>
                </Build>
            </Projects>

            <Projects>
                <ProjectTitle href="https://amzon-clone-7e423.web.app/">Amazon Clone</ProjectTitle>
                <ProjectDetail>
                    An mimicry of amazon. A spotify app that shows you the current biilboard chart when you login
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more
                </ProjectDetail>
                <Build>
                    <BuildTitle>Built with: </BuildTitle>
                    <BuildDetail>React, Firebase</BuildDetail>  
                </Build>
            </Projects>

            <Projects>
                <ProjectTitle href="https://github.com/mayowasam/spotify-with-react-and-node">Spotify Search Clone</ProjectTitle>
                <ProjectDetail>
                    A Spotify search app that shows you a list of songs regardless of you search input that you can play. A spotify app that shows you the current biilboard chart when you login
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more
                </ProjectDetail>
                <Build>
                    <BuildTitle>Built with: </BuildTitle>
                    <BuildDetail>React, Express, Node.js</BuildDetail>      
                </Build>
            </Projects>

            <Projects>
                <ProjectTitle href="https://spotify-clone-8c5ff.web.app">Twitter Clone</ProjectTitle>
                <ProjectDetail>
                    A clone of Twitter , that you van send tweets and it shows on your timeline.
                    A spotify app that shows you the current biilboard chart when you login
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more
                </ProjectDetail>
                <Build>
                    <BuildTitle>Built with:</BuildTitle>
                    <BuildDetail>React, Firebase</BuildDetail>

                </Build>
            </Projects>

            <Projects>
                <ProjectTitle href="https://github.com/mayowasam/account-balance-react-assignment">Account Balance</ProjectTitle>
                <ProjectDetail>
                    A simple app.  A spotify app that shows you the current biilboard chart when you login
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more
                </ProjectDetail>
                <Build>
                    <BuildTitle>Built with: </BuildTitle>
                    <BuildDetail> React, Redux</BuildDetail>
                </Build>
            </Projects>


            <Projects>
                <ProjectTitle href="https://github.com/mayowasam/account-balance-react-assignment">My Website</ProjectTitle>
                <ProjectDetail>
                    A simple app.
                    A spotify app that shows you the current biilboard chart when you login
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more
                </ProjectDetail>
                <Build>
                    <BuildTitle>Built with:</BuildTitle>
                    <BuildDetail> React, Styled-Components</BuildDetail>        
                </Build>
            </Projects>

        </ProjectContainer>


    )
}

export default Project
