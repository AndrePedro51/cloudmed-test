import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --black-700: #212121;
        --white-100: #f5f5f5;
        --green-500: #019934;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%
        }

        @media (max-width:720px){
            font-size: 87.5%
        }
    }

    body{
        background-color: var(--white-100);
        -webkit-font-smothing: antialiased;
        .hideMenu{
            left: -301px;
            @media(max-width:320px){
                left: -280px;
            }
            @media(min-width:1151px){
                left: 0px;
            }
        }
        .showMenu{
            left: 0px;
        }
    }

    body, button, input, textarea{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }

    button{
        cursor: pointer;
        font-weight: 500;
        transition: all 0.2s;
        :hover{
            filter: brightness(50%);
        }
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`

