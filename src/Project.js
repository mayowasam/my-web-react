import React from 'react'
import styled from 'styled-components'
import { HomeContainer } from './Home'
import Fade from 'react-reveal/Fade'



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
    text-align: justify;


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
    text-align: justify;

`




function Project() {
    return (

        <ProjectContainer>

            <Projects>
                <Fade top cascade>
                <ProjectTitle href="https://mayowasam.github.io/Spotify-clone/">Spotify Clone</ProjectTitle>
                <ProjectDetail>
                    A web app with spotify UI. it runs through spotify data and shows you the current billboard chart for your playing, with a spotify web player 
                </ProjectDetail>
                <Build>
                    <BuildTitle>Built with: </BuildTitle>
                    <BuildDetail>React</BuildDetail>
                </Build>
                </Fade>
            </Projects>

            <Projects>
                <Fade top cascade>
                <ProjectTitle href="https://amzon-clone-7e423.web.app/">Amazon Clone</ProjectTitle>
                <ProjectDetail>
                     A clone of amazon, with firebase authentication for the signup. It has products being displayed where buyers can select product and on the checkout page and get a total of the amount of all products.also on the checjkout page , buyers acan remove product from its basket
                </ProjectDetail>
                <Build>
                    <BuildTitle>Built with: </BuildTitle>
                    <BuildDetail>React, Firebase</BuildDetail>  
                </Build>
                </Fade>
            </Projects>

            <Projects>
            <Fade top cascade>
                <ProjectTitle href="https://github.com/mayowasam/spotify-with-react-and-node">Spotify Search</ProjectTitle>
                <ProjectDetail>
                    A Spotify search app that runs through spotify database and shows you a list of songs whenever you input a word in the search input.
                    View your top artists, top tracks, recently tracks, and many more and play with the spotify media player.
                </ProjectDetail>
                <Build>
                    <BuildTitle>Built with: </BuildTitle>
                    <BuildDetail>React, Express, Node.js</BuildDetail>      
                </Build>
                </Fade>
            </Projects>

            <Projects>
            <Fade top cascade>
                <ProjectTitle href="https://spotify-clone-8c5ff.web.app">Twitter Clone</ProjectTitle>
                <ProjectDetail>
                    A clone of Twitter with twitter UI, that you van send tweets and it shows in realtime your timeline.
                    Also has a widget which displays netflix naija contents built using a third party module
                   
                </ProjectDetail>
                <Build>
                    <BuildTitle>Built with:</BuildTitle>
                    <BuildDetail>React, Firebase</BuildDetail>

                </Build>
                </Fade>
            </Projects>

            <Projects>
            <Fade top cascade>
                <ProjectTitle href="https://github.com/mayowasam/account-balance-react-assignment">Account Balance</ProjectTitle>
                <ProjectDetail>
                    A simple app with two buttons which adds or subtracts a specific amount from and existing amount like a bank. 
                </ProjectDetail>
                <Build>
                    <BuildTitle>Built with: </BuildTitle>
                    <BuildDetail> React, Redux</BuildDetail>
                </Build>
                </Fade>
            </Projects>


            <Projects>
            <Fade top cascade>
                <ProjectTitle href=" https://mayowasam.github.io/web/">My Website</ProjectTitle>
                <ProjectDetail>
                   This website with cool features like, darkmode, two landing pages which changes when the moon or star button at the top is toggled , a responsive header and footer depending on the device size
                </ProjectDetail>
                <Build>
                    <BuildTitle>Built with:</BuildTitle>
                    <BuildDetail> React, Styled-Components</BuildDetail>        
                </Build>
                </Fade>
            </Projects>

        </ProjectContainer>


    )
}

export default Project
