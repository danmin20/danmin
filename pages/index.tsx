import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Intro from "../components/Intro";
import Main from "../components/Main";
import Project from "../components/Project";
import Record from "../components/Record";
import Slider from "../components/Slider";
import { flexCenter } from "../styles/theme";
import styled from "styled-components";

const Home: NextPage = () => {
  const [slider, setSlider] = useState(true);

  useEffect(() => {
    const setSliderFalse = () => {
      setSlider(false);
    };
    setTimeout(setSliderFalse, 2500);
  }, []);

  return (
    <AppContainer>
      <div>
        {slider ? (
          <Slider />
        ) : (
          <div className="wrapper">
            <Main />
            <Intro />
            <Record />
            <Project />
          </div>
        )}
      </div>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  .wrapper {
    ${flexCenter};
    flex-direction: column;
  }
`;

export default Home;
