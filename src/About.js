import React from 'react'
import { Link } from 'react-router-dom'
import styled,{keyframes} from 'styled-components'
import fineman from './image/image3.jpg'
import mayowa from './image/mayowa.gif'
import { Links } from './Header'


const AboutContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 20vh;

    @media only screen and (min-width: 764px) {
        margin-top: 17vh;

    }

     @media only screen and (max-width: 600px) {
      margin-top: 15vh;
    }

    @media only screen and (max-width: 360px) {
        margin-top: 15vh;
    }
    
`
const AboutTop = styled.div`
    display: flex;
    flex-direction: column;

`

const AboutRow = styled.div`
    display: flex;
    height: 60vh;
    margin-bottom: 15vh;

    @media only screen and (min-width: 764px) {
        height: auto;

    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        height: auto;
        margin-bottom: 5vh;

    }

    @media only screen and (max-width: 360px) {
        flex-direction: column;
        height: auto;
        margin-bottom: 5vh;

    }

`


const AboutImage = styled.div`
    flex: .5;
    display: flex;
    align-items: center;    
    padding: 10px;
    justify-content: center;


    @media only screen and (max-width: 600px) {
        margin: 20px 0; 
        padding: 0;

    }

    @media only screen and (max-width: 360px) {
        margin: 20px 0; 
        padding: 0;

    }
`
const AboutDescription = styled.div`
    flex: .5;
    display: flex;
    flex-direction: column;
    text-align: justify;
    padding: 10px;
    justify-content: center;


    @media only screen and (max-width: 600px) {
        margin: 20px 0; 
        justify-content: flex-start;

    }

    @media only screen and (max-width: 360px) {
        margin: 20px 0; 
        justify-content: flex-start;

    }
`

const LogoStart = styled.div`
font-size: 20px;
font-weight: 300;
opacity: .3;



`

const LogoEnd = styled.div`
font-size: 20px;
opacity: .3;
font-weight: 300;
display: flex;
justify-content: flex-end;

`
const tilt = keyframes`
0% {
    -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
            transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
            transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }


`
const  AboutStory =styled.p`
font-family: Montserrat;
font-size: 20px;
font-weight: 300;
text-align: justify;
color:   ${({ theme }) => theme.main};
animation: ${tilt} 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

`

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;

`


const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    padding: 10px;
    margin-bottom: 10vh

`

const textshadow = keyframes`
0% {
    textshadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    textshadow: 1px -1px #555555, 2px -2px #555555, 3px -3px #555555, 4px -4px #555555, 5px -5px #555555, 6px -6px #555555, 7px -7px #555555, 8px -8px #555555;
    -webkit-transform: translateX(-8px) translateY(8px);
            transform: translateX(-8px) translateY(8px);
  }
`

const Title = styled.h1`
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 600;
    text-align: left;
    animation:  ${textshadow} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  

`


const AboutLinks = styled(Links)`
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    color:  ${({theme}) => theme.text};

   
`
const AboutLink = styled(Link)`
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    color:  ${({theme}) => theme.text};
`

function About() {
    return (
        <AboutContainer>
            <AboutTop>

                <AboutRow>
                    <AboutImage>
                        <Image src={mayowa} alt="" />
                    </AboutImage>

                    <AboutDescription>
                        <LogoStart>&lt;start/&gt;</LogoStart>
                        <AboutStory>
                            I am a full-stack web developer. I write in JavaScript.
                            React is my frontend library of choice, and I write my REST APIs in NodeJS.
                            I love MongoDB and MySQL. I love to share what I'm learning and talk about problems i encounter,
                            or helpful things i learnt while working on a project on <AboutLinks href="http://medium.com/mayowaawoyomi">my blog</AboutLinks>.
                            When I am not bashing my head against a keyboard because something won't act the way I expect it to,
                            I am listening to a crap-load of music, reading a crap-load of blog posts, playing fifa or hanging out with my awesome friends.
                            I want to make a difference. I want to help make the Web better for everyone. And I want to help make a change in the world,
                            to the better of everyone living in it. If your company is working on a product that makes people's lives better in any aspect and in any way and you need someone to help you make it inclusive and accessible to more people, I would love to help you.
                        </AboutStory>
                        <LogoEnd>&lt;start/&gt;</LogoEnd>

                    </AboutDescription>
                </AboutRow>

                <AboutRow>
                    <AboutDescription>
                        <LogoStart>&lt;start/&gt;</LogoStart>

                        <AboutStory>
                            I build resilient UI foundations for users online experiences. <AboutLinks href="mailto:'mayowaawoyomi@gmail.com">Learn more about the work I do or hire me </AboutLinks>.
                            I’ve worked on projects of different scales of Web applications. Some of my favorite projects are covered under NDAs, but a few select projects that I have worked on are <AboutLink to="/project">here</AboutLink>.
                            I have a Bachelor’s Degree in Civil Engineering.
                        </AboutStory>
                        <LogoEnd>&lt;start/&gt;</LogoEnd>

                    </AboutDescription>

                    <AboutImage>
                        <Image src={fineman} />

                    </AboutImage>
                </AboutRow> 


            </AboutTop>


            <AboutContent>

                <Title>Hire Me</Title>
                <AboutStory>
                    I’m a design-minded developer.  I work to bring designs of unique designers and Imaginations of creative people to life.

                    I write clean HTML, CSS, SVG, and presentational JavaScript that powers Web user interfaces. With a focus on responsive design, semantic markup, accessibility, and performance and  Cross-browser compatibility, I build resilient, inclusive foundations for user interfaces, marrying cutting-edge techniques with foundational Web standards.

                    I collaborate with designers — preferrably in the design phase — to translate designs into live prototypes, resilient Web user interafces, and design systems. As a design engineer, I provide feedback to designers to ensure that the design translates well to the browser, ensuring usability of the product by as many people as possible, regardless of their context and how they use it (screen readers, mobile phones, various browsers, etc.)

                    I hold myself to high standards, and provide high value for the investment you make in me.
                    I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

                    Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

                    Here are a few technologies I've been working with recently:

                    JavaScript (ES6+)
                    React
                    Eleventy
                    Vue
                    Node.js
                    WordPress
                </AboutStory>

            </AboutContent>
        </AboutContainer>
    )
}

export default About
