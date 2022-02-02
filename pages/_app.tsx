import { useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");
  const handleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <>
      <Head>
        <title>DANMIN 단민 | 이정민</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <ThemeToggle onClick={handleTheme} isDark={theme === "dark"}>
          {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
        </ThemeToggle>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const ThemeToggle = styled.div<{ isDark: boolean }>`
  cursor: pointer;
  font-size: 1.5rem;
  position: fixed;
  z-index: 100;
  top: 2rem;
  right: 2rem;
  color: ${({ theme }) => theme.color.white};
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.color.blue};
  }
`;

export default MyApp;
