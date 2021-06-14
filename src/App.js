import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import styled, { ThemeProvider } from 'styled-components'
import { useDarkMode } from './styles/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles'
import Content from './Content'
import Home from './Home'


const Container = styled.div`
 
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
          </Container>

          <Route exact path="/content" component={Content} />
          <Route  exact path="/" component={Home} />

        </ThemeProvider>
      </Switch>
    </Router>
  )
}

export default App
