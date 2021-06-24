import React from 'react'
import styled from 'styled-components'
import fineman from './image/image3.jpg'
import mayowa from './image/mayowa.gif'

const AboutContainer = styled.div`
    width: 50%;
    margin: 0 auto; 
    border: 2px solid red;
   
`

const AboutHeader = styled.div`
    width: 300px;
    height: 300px;
   
`
const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-family: Montserrat;
    font-size: 36px;
    font-weight: 600;
    text-align: left;

`
const AboutDescription = styled.p`
font-family: Montserrat;
font-size: 25px;
font-weight: 400;
text-align: justified;
color:   ${({theme}) => theme.main}

`

const Image = styled.img`
    width: 360;
    height: 500;

    .pic {
        width: 100%;
    }
`
Image.defaultProps = {
    src: fineman
}



function About() {
    return (
        <AboutContainer>
            <AboutHeader>
            <img src={fineman} className='pic'/>

            </AboutHeader>
            <AboutContent>
                <Title>M</Title>
                <AboutDescription>

                    I am a full-stack web developer. I write in JavaScript primarily, and Python, secondarily. React is my frontend library of choice, and I write my REST APIs in NodeJS. I love GraphQL. I love MongoDB and MySQL. I write tests in Jest and Enzyme. I am an active member of Dev.to, and I love to share what I'm learning there, as well as on my blog, thevunderkind.com.

                    When I am not bashing my head against a keyboard because something won't act the way I expect it to, I am listening to a crap-load of music, reading a crap-load of blog posts, making sketches or animating or...riding a bicycle with a bunch of kids.

                    I do some writing on my Substack blog titled 'Do While Thinking' (geddit...? hah!) where I try to break my mind from the monotone of constant execution without pausing to think. There's no gimmick to the title: it is me doing things while thinking about doing things - keeping the mind sharp while the fingers continue to wear down expensive Macbook keyboards.

                </AboutDescription>

                <AboutHeader>
                <img src={mayowa} />

                </AboutHeader>  
            </AboutContent>
        </AboutContainer>
    )
}

export default About
