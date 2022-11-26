import {createGlobalStyle} from "styled-components"
import { ThemeType } from "../@types/styles"

export const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${props=>props.theme["white-900"]};
        color: ${props=>props.theme["brown-600"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`