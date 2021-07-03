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
line-height: 1.5;

`

const  AboutDiv =styled.div`
font-family: Montserrat;
font-size: 20px;
font-weight: 300;
text-align: justify;
color:   ${({ theme }) => theme.main};
animation: ${tilt} 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
line-height: 1.5;

`

const  Bold =styled.span`
font-family: Montserrat;
font-size: 20px;
font-weight: bold;
color:   ${({ theme }) => theme.text};

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
                            I do both the front-end and the back-end of web development. Cool people call people who do what i do <Bold>Full-stack web developers</Bold> and others just say software developers. I write in JavaScript.
                            React is my frontend library of choice, and I write my REST APIs in NodeJS.
                            I love MongoDB and MySQL. I love to share what I'm learning and talk about problems i encounter,
                            or helpful things i learnt while working on a project on <AboutLinks href="http://medium.com/mayowaawoyomi">my blog</AboutLinks>.
                            I want to help make the Web better for everyone. And I want to help make a change in the world,
                            to the better of everyone living in it. If your company is working on a product that makes people's lives better in any aspect and in any way and you need someone to help you make it inclusive and accessible to more people, I would love to help you.
                            I want to make a difference.

                        </AboutStory>
                        <AboutStory>
                           I love music, I love football when Arsenal are playing well, I love playing FIFA and I really love hanging out with my friends and family, they make the world around me feel sane.
                       </AboutStory>

                        <LogoEnd>&lt;start/&gt;</LogoEnd>

                    </AboutDescription>
                </AboutRow>

                <AboutRow>
                    <AboutDescription>
                        <LogoStart>&lt;start/&gt;</LogoStart>

                        <AboutStory>
                            As the web get bigger, codes get shorter, cleaner, and more readable, I build apps having those points in mind. <AboutLinks href="mailto:'mayowaawoyomi@gmail.com">Learn more about the work I do or hire me </AboutLinks>.
                            I’ve worked on projects of different scales of Web applications. Some of my favorite projects are covered under NDAs, but a few select personal projects that I have worked on are <AboutLink to="/project">here</AboutLink>.
                            I have a Bachelor’s Degree in Civil Engineering. My interest in web development started back in 2017 when i tried re-creating Arsenal's website with just HTML and CSS.

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
                    I’m a design-minded and security conscious developer. I work to bring designs of unique designers and Imaginations of creative people to life.
                    I write clean codes that powers Web With a focus on responsive design, semantic markup, accessibility, and performance and  Cross-browser compatibility and most importantly data and app security.
                    I collaborate with designers — preferrably in the design phase — to translate designs into live prototypes, resilient Web user interafces, and design systems.
                </AboutStory>

                <AboutStory>
                    I hold myself to high standards, and provide high value for the investment you make in me. I am a very good team player and i have great communication skills and social skills 
                </AboutStory>

                <AboutDiv>
                    Here are a few technologies I've been working with recently:

                    <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>GIT</li>
                        <li>Redux</li>
                        <li>MongoDB</li>
                        <li>mySQL</li>
                        <li>Socket</li>
                        <li>Heroku</li>
                        <li>Firebase</li>
                        
                    </ul>          
                    <AboutLinks href="mailto:'mayowaawoyomi@gmail.com">Hire me </AboutLinks>.
                </AboutDiv>

            </AboutContent>
        </AboutContainer>
    )
}

export default About
