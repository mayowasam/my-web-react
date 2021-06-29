import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import styled, { ThemeProvider } from 'styled-components'
import { useDarkMode } from './styles/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles'
import About from './About'
import Home from './Home'
import HomepageTwo from './HomepageTwo'
import Project from './Project'
import Footer from './Footer'
import NotFound from './NotFound'


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


function App() {
  const [theme, toggle] = useDarkMode()
  const themeMode = theme === 'dark' ? lightTheme : darkTheme
  console.log(theme)

  return (

    <Router>
      <Switch>
        <ThemeProvider theme={themeMode}>
          <Container>
            <GlobalStyles />
            <Header theme={theme} toggle={toggle} />


          <Route exact path="/">
          {theme === 'light' ? <HomepageTwo/> : <Home/>} 
          </Route>
          <Route path="/about" component={About} />
          <Route  path="/project" component={Project} />

          <Footer/>
          </Container>
        </ThemeProvider>
          <Route  exact path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
