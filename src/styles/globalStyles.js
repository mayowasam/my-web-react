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
    body: '#D9ECF0',
    text: '#10016D',
    linker: '#9900FA'
} 

export const darkTheme = {
    body: '#2F2F2F',
    text: '#FFB700',
    main: '#D2EEF4',
    linker: '#D5174E'
    
} 