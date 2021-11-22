import styled from "styled-components";
import { Danmin } from "../../assets";
import { Container, theme } from "../../styles/theme";

const links = [
  { id: "github", link: "https://github.com/danmin20" },
  { id: "blog", link: "https://github.com/danmin20" },
  { id: "resume", link: "https://github.com/danmin20" },
  { id: "linkedin", link: "https://github.com/danmin20" },
];

const infos = [
  { id: "Email", value: "ljm991108@gmail.com" },
  { id: "Birth", value: "1999.11.08" },
  { id: "Residence", value: "Seoul, South Korea" },
  {
    id: "Bachelor Degree",
    value: "Kyeonghee Univ. Computer Science (2018.03-2021.02)",
  },
];

const Main = () => {
  return (
    <Wrapper>
      <Danmin />
      <div className="title">DANMIN</div>
      <div className="title">{`LEE
JEONGMIN`}</div>

      <div className="links">
        {links.map((link) => (
          <div className="link" key={link.id}>
            {link.id}
          </div>
        ))}
      </div>

      <div className="info">
        <div>Front-end Developer</div>
        {infos.map((info) => (
          <div key={info.id}>
            {info.id}.<span>{info.value}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  padding-top: 9rem;
  position: relative;
  svg {
    position: absolute;
    right: 5rem;
  }
  .title {
    font-size: 14.4rem;
    font-weight: 900;
    width: 100%;
    line-height: 17.6rem;
    letter-spacing: 0.12em;
    white-space: pre-line;
    &:nth-child(3) {
      text-align: end;
      -webkit-text-stroke: 0.1rem #fff;
      color: transparent;
    }
  }
  .links {
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 1.4rem;
    cursor: pointer;
    .link {
      color: ${theme.color.blue};
      font-weight: 300;
      font-size: 1.8rem;
      line-height: 2.2rem;
      border-bottom: 0.1rem solid ${theme.color.black};
      &:hover {
        color: ${theme.color.red};
        border-bottom: 0.1rem solid ${theme.color.red};
      }
    }
  }
  .info {
    margin-top: 4rem;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.2rem;
    div {
      margin-top: 1.4rem;
    }
    span {
      font-weight: 300;
      margin-left: 1rem;
    }
  }
`;

export default Main;
