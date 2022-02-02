import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { flexCenter, media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html {
        ${media.tablet} {
            font-size: 5px;
        }
        font-size: 10px;
        -webkit-text-size-adjust: none;
        font-family: Montserrat;
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        body {
            margin: 0;
        }
        .App {
            ${media.tablet} {
                display: none;
            }
        }
        .none {
            display: none;
            
            ${media.tablet} {
                display: block;
                ${flexCenter};
                width: 100%;
                height: 100vh;
                font-size: 10rem;
                font-weight: 900;
                white-space: pre-wrap;
                padding: 2rem;
                box-sizing: border-box;
            }
        }
    }
`;
