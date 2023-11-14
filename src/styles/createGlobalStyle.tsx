import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-family: 'Montserrat';
        font-size: 62.5%;
    }

    @media screen and (max-width: 968px) {
    html {
        font-size: 62.5%;
    }
}
`