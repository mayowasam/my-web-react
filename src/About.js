import React from 'react'
import styled from 'styled-components'
import fineman from './image/image3.jpg'

const AboutContainer = styled.div`
    width: 50%;
    margin: 40px auto 0; 
    border: 2px solid red;
`

const AboutHeader = styled.div`
    width: 300px;
    height: 300px;
   
`
const AboutContent = styled.div`

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

`

// const Header = styled.h1`
//    font-size: 80px;
//    font-weight: bold;
//    whitespace: wrap;


// `

// const Detail = styled.p`
//    font-size: 24px;
//    font-weight: 300;
//    opacity: .7

// `

// const Talk = styled.span`
//    font-size: 24px;
//    font-weight: 300;
//    opacity: .7

// `



function About() {
    return (
        <AboutContainer>
            <AboutHeader>
                <img src={fineman} alt="" />

            </AboutHeader>
            <AboutContent>
                <Title>M</Title>
                <AboutDescription>

                    I am a full-stack web developer. I write in JavaScript primarily, and Python, secondarily. React is my frontend library of choice, and I write my REST APIs in NodeJS. I love GraphQL. I love MongoDB and MySQL. I write tests in Jest and Enzyme. I am an active member of Dev.to, and I love to share what I'm learning there, as well as on my blog, thevunderkind.com.

                    When I am not bashing my head against a keyboard because something won't act the way I expect it to, I am listening to a crap-load of music, reading a crap-load of blog posts, making sketches or animating or...riding a bicycle with a bunch of kids.

                    I do some writing on my Substack blog titled 'Do While Thinking' (geddit...? hah!) where I try to break my mind from the monotone of constant execution without pausing to think. There's no gimmick to the title: it is me doing things while thinking about doing things - keeping the mind sharp while the fingers continue to wear down expensive Macbook keyboards.

                </AboutDescription>
            </AboutContent>
        </AboutContainer>
    )
}

export default About
