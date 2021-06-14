import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    transistion: all 0.5s linear;
  }
`

export const lightTheme = {
    body: '#fff',
    text: '#000'
} 

export const darkTheme = {
    body: '#000',
    text: '#fff'
} 