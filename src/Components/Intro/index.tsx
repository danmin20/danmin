import styled from "styled-components";
import { Container, flexCenter } from "../../styles/theme";

const Intro = () => {
  return (
    <Wrapper>
      <div>{`Hello, my name is Lee Jeongmin.
I’m a junior developer who wants to deeply strengthen the front-end.

I’m actively expanding my interest in development regardless of field.`}</div>

      <div>{`“ Do not be a frong in a well. ”
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
  gap: 15.9rem;
  & > div {
    width: 97.1rem;
    &:nth-child(2) {
      text-align: center;
    }
  }
`;

export default Intro;
