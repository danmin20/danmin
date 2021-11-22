import { createGlobalStyle } from "styled-components";
import "./reset.scss";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html {
        font-size: 10px;
        -webkit-text-size-adjust: none;
        font-family: Montserrat;
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
        color: ${theme.color.white};
        background-color: ${theme.color.black};
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        body {
            margin: 0;
        }
    }
`;
