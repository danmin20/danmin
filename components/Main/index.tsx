import { useEffect } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { Container } from "../../styles/theme";

const links = [
  { id: "github", link: "https://github.com/danmin20" },
  { id: "blog", link: "https://danminblog.tistory.com/" },
  {
    id: "resume",
    link: "https://www.figma.com/file/dtkCl6G7G5DVe18DN2LWny/%EC%9D%B4%EC%A0%95%EB%AF%BC-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0%3A1",
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/%EC%A0%95%EB%AF%BC-%EC%9D%B4-1927881a8/",
  },
];

const infos = [
  { id: "Email", value: "ljm991108@gmail.com" },
  { id: "Birth", value: "1999.11.08" },
  { id: "Residence", value: "Seoul, South Korea" },
  {
    id: "Bachelor Degree",
    value: "Kyeonghee Univ. Computer Science (2018.03-2022.02)",
  },
];

const Main = () => {
  useEffect(() => {
    const handleScroll = () => {
      const Title1 = document.querySelector("#title-1")!;
      const Title2 = document.querySelector("#title-2")!;

      window.scrollY > 100
        ? Title1.classList.add("title-animation")
        : Title1.classList.remove("title-animation");

      window.scrollY > 200
        ? Title2.classList.add("title-animation")
        : Title2.classList.remove("title-animation");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper id="main">
      <div className="img">
        <Image
          className="img"
          alt="danmin"
          src="/images/danmin.svg"
          width="252"
          height="523"
        />
      </div>
      <div id="title-1" className="title">
        DANMIN
      </div>
      <div id="title-2" className="title">{`LEE
JEONGMIN`}</div>

      <div className="links">
        {links.map((link, i) => (
          <Link key={link.id} idx={i} onClick={() => window.open(link.link)}>
            {link.id}
          </Link>
        ))}
      </div>

      <div className="info">
        <div>Front-end Developer</div>
        {infos.map((info, i) => (
          <Info key={info.id} idx={i}>
            {info.id}.<span>{info.value}</span>
          </Info>
        ))}
      </div>
    </Wrapper>
  );
};

const titleAnimation = keyframes`
  0% {
    margin-left: 100%;
  }
  100% {
    margin-left: 0;
  }
`;
const titleAnimation2 = keyframes`
  0% {
    margin-left: -100%;
  }
  100% {
    margin-right: 0;
  }
`;
const fadeIn = keyframes`
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Link = styled.div<{ idx: number }>`
  color: ${({ theme }) => theme.color.blue};
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 2.2rem;
  border-bottom: 0.1rem solid transparent;
  animation: ${fadeIn} 1s;
  animation-delay: ${({ idx }) => `0.${idx}s`};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.red};
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.red};
    transition: 0.3s;
  }
`;

const Info = styled.div<{ idx: number }>`
  animation: ${fadeIn} 1s;
  animation-delay: ${({ idx }) => `0.${idx}s`};

  span {
    font-weight: 300;
    margin-left: 1rem;
  }
`;

const Wrapper = styled(Container)`
  padding-top: 9rem;
  position: relative;
  svg {
    position: absolute;
    right: 5rem;
  }
  .img {
    position: absolute;
    z-index: 100;
  }
  .title {
    position: sticky;
    top: 0;
    font-size: 14.4rem;
    font-weight: 900;
    width: 100%;
    line-height: 17.6rem;
    letter-spacing: 0.12em;
    white-space: pre-line;
    animation: ${titleAnimation} 0.5s;
    &:nth-child(3) {
      text-align: end;
      -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.white};
      color: transparent;
      animation: ${titleAnimation2} 0.5s;
    }
  }
  .links {
    margin-top: 12rem;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 1.4rem;
    cursor: pointer;
    position: relative;
  }
  .info {
    margin-top: 6rem;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.2rem;
    div {
      margin-top: 1.4rem;
    }
  }

  .title-animation {
    opacity: 0;
    top: 10rem;
    transition: 1s;
  }
`;

export default Main;
