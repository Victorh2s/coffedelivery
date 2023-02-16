import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
    background: ${(props) => props.theme.Base.background};
    color: ${(props) => props.theme.Base['base-text']};
    }

  
    body, input, textarea, button {
     
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing:  antialiased;
    }

`;
