import { useEffect } from "react";
import styled from "styled-components";
import { Container, flexCenter } from "../../styles/theme";

const Intro = () => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector("#intro")!;
      const divs = element.querySelectorAll("div");

      window.scrollY > 100
        ? divs.forEach((div, i) => {
            div.classList.add("animation");
            div.style.animationDelay = `${i}s`;
          })
        : divs.forEach((div) => div.classList.remove("animation"));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper id="intro">
      <div>{`Hello, my name is Lee Jeongmin.
I’m a junior developer who wants to deeply strengthen the front-end.

I’m actively expanding my interest in development regardless of field.`}</div>

      <div>{`“ Do not be a frog in a well. ”
“ All I know is not everyting. ”`}</div>

      <div>{`Every time, new plans and challenges have been a great stimulus.
I would like to give myself new tasks and create opportunities to continue to grow.`}</div>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  ${flexCenter};
  flex-direction: column;
  padding-top: 21rem;
  padding-bottom: 21rem;
  white-space: pre-line;
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 2.9rem;
  gap: 30rem;

  & > div {
    width: 97.1rem;
    opacity: 0;
    &:nth-child(2) {
      text-align: center;
      font-weight: 500;
    }
  }
  .animation {
    opacity: 1;
    transition: 2s;
    margin-top: -10rem;
  }
`;

export default Intro;
