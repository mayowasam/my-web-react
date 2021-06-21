import React from 'react'
import styled from 'styled-components'
import {HomeContainer,Header,HeaderContainer, Detail, Talk} from './Home'





const Container = styled(HeaderContainer)` 
color: "#D2EEF4"
  
`




function HomepageTwo() {
       
    return (
        <HomeContainer>
            <Container >
                <Header >
                    Hi! 
                </Header>

                <Detail >
                    A problem-solvin' language-learnin' sunuvabish 🙊. Has the mind 🧠 of an artist 🎨 and the keen eye 👀 of a growth engineer 📈.
                </Detail>

                <Talk href="mailto:'awoyomimayowa@gmail.com">Hit me! 🏌️.</Talk> 

            </Container>

        </HomeContainer>
    )
}

export default HomepageTwo
