import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        overflow: hidden;
        height: 100%;
        width: 100%;     
    }

    body {                
        color: ${(props) => props.fontColor};
        font-size: ${(props) => props.fontSize};  
        font-weight: ${(props) => props.fontWeight};  
        font-family: ${(props) => props.fontFamily};  
    }
`;

export default GlobalStyle;
