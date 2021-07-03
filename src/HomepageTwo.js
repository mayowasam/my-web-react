import React from 'react'
import styled from 'styled-components'
import { HomeContainer, Header, HeaderContainer, Detail, ContactMe, Talk } from './Home'




const Container = styled(HeaderContainer)` 

  color: ${({theme}) => theme.main}
`




function HomepageTwo() {

    return (
        <HomeContainer>
            <Container>
                <Header >
                    Hi!
                </Header>

                <Detail >
                    I enjoy creating cool things that live on the internet
                
                </Detail>

                <ContactMe>
                    <Talk href="mailto:'awoyomimayowa@gmail.com">Let's talk 🤺.</Talk>
                </ContactMe>

            </Container>

        </HomeContainer>
    )
}

export default HomepageTwo
