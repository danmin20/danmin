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
        .pc-only {
            ${media.mobile} {
                display: none;
            }
        }
        .mobile-only{
            display: none;
            ${media.mobile} {
                display: block;
            }
        }
    }
`;
