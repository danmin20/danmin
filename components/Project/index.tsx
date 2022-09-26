import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Container, flexCenter, media } from "../../styles/theme";
import { nanoid } from "nanoid";

const projects = [
  {
    id: "Gathering places near you",
    kr: "당장모아",
    content: "당근마켓 MVP 인턴십에서 진행한 4주간의 프로젝트",
    link: "https://github.com/karrotmvp/mymap",
  },
  {
    id: "Reservation/order history map",
    kr: "예약/주문 방문이력 지도 탐색",
    content: "네이버 예약팀에서 진행한 6주간의 프로젝트",
    link: "https://www.notion.so/danmin20/NAVER-Glace-PPT-8b11aee3987e4742be61ce92a1769385",
  },
  {
    id: "SpaceONE design system",
    kr: "SpaceONE 디자인시스템 개선",
    content: "메가존클라우드 SpaceONE의 디자인시스템",
    link: "https://github.com/spaceone-dev/spaceone-design-system",
  },
  {
    id: "SpaceONE project site",
    kr: "SpceONE 프로젝트 사이트",
    content: "메가존클라우드 SpaceONE을 소개하는 사이트 제작",
    link: "https://github.com/spaceone-dev/project-site",
  },
  {
    id: "SpaceONE console",
    kr: "SpaceONE 콘솔 개선 및 버그픽스",
    content: "메가존클라우드 SpaceONE 서비스",
    link: "https://github.com/spaceone-dev/console",
  },
  {
    id: "Cookie parking",
    kr: "쿠키파킹",
    content: "솝트에서 진행한 북마크 웹 익스텐션 프로젝트",
    link: "https://www.cookieparking.com/landing",
  },
  {
    id: "Avocado",
    kr: "아보카도",
    content: "디프만에서 진행한 채소 가격비교 웹사이트 프로젝트",
    link: "https://github.com/depromeet/8th-final-front-6team",
  },
  {
    id: "Depromeet website",
    kr: "디프만 공식 웹사이트",
    content: "디프만 9기 때 만든 공식 웹사이트",
    link: "https://github.com/depromeet/www.depromeet.com",
  },
  {
    id: "Galge",
    kr: "가글: 가까운 글",
    content: "디프만 8기에서 진행한 위치 기반 SNS 프로젝트",
    link: "https://github.com/depromeet/88mingup",
  },
  {
    id: "Tomatto",
    kr: "토맛토",
    content: "디프만 9기에서 진행한 밸런스 게임 프로젝트",
    link: "https://github.com/depromeet/9th_1team_FE",
  },
];

const Project = () => {
  useEffect(() => {
    const handleScroll = () => {
      const title1 = document.querySelector(".title-opacity")!;

      if (window.scrollY > 3500) {
        title1.classList.add("project-title-animation");
      } else {
        title1.classList.remove("project-title-animation");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <div className="title-opacity">
        {"PROJECTS".split("").map((v) => (
          <div key={nanoid()}>{v}</div>
        ))}
      </div>
      <div className="container">
        <div className="title">
          {"PROJECTS".split("").map((v) => (
            <div key={nanoid()}>{v}</div>
          ))}
        </div>

        <div className="projects">
          {projects.map((project) => (
            <ProjectBox
              key={nanoid()}
              link={project.link ? true : false}
              onClick={() => project.link && window.open(project.link)}
            >
              <div className="project-title">{project.id}</div>
              <div className="project-title kr">{project.kr}</div>
              <div className="content">{project.content}</div>
            </ProjectBox>
          ))}
        </div>

        <div className="projects-shadow" />
        <div className="projects-shadow-2" />

        <div className="projects-mobile">
          {projects.map((project) => (
            <ProjectBox
              key={nanoid()}
              link={project.link ? true : false}
              onClick={() => project.link && window.open(project.link)}
            >
              <div className="project-title">{project.id}</div>
              <div className="project-title kr">{project.kr}</div>
              <div className="content">{project.content}</div>
            </ProjectBox>
          ))}
        </div>
      </div>
      <div className="copyright">Copyright © 2021 Lee Jeongmin</div>
    </Wrapper>
  );
};

const titleAnimation = keyframes`
  0% {
    margin-top: 100vh;
  }
  100% {
    margin-top: -65rem;
  }
`;

const Wrapper = styled(Container)`
  margin-top: 35rem;
  height: 85rem;
  overflow: hidden;
  position: relative;
  ${flexCenter};

  ${media.mobile} {
    margin-top: 10rem;
  }

  .project-title-animation {
    animation: ${titleAnimation} 2s forwards;
  }
  .title-opacity {
    margin-top: 100vh;
    width: 100%;
    ${flexCenter};
    justify-content: space-between;
    font-weight: 900;
    font-size: 14.4rem;
    line-height: 17.6rem;
    opacity: 0.2;
    background: ${({ theme }) =>
      `linear-gradient(to right, ${theme.color.blue}, ${theme.color.red})`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${media.mobile} {
      font-size: 5rem;
    }
  }
  .container {
    position: absolute;
    top: 8rem;
    width: 98rem;

    ${media.mobile} {
      top: 3rem;
      width: 100%;
    }

    .title {
      width: 100%;
      ${flexCenter};
      justify-content: space-between;
      font-weight: 200;
      font-size: 6.4rem;
      line-height: 7.8rem;
      width: 100%;
      text-align: center;

      ${media.mobile} {
        font-size: 3rem;
        justify-content: space-around;
        margin-top: 3rem;
      }
    }

    .projects {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4rem;
      margin-top: 7rem;
      align-items: start;

      ${media.mobile} {
        display: none;
      }
    }

    .projects-shadow {
      width: 100%;
      height: 5rem;
      top: 10rem;
      z-index: 100;
      left: 0;
      position: absolute;
      background: linear-gradient(#000, #00000000);
    }
    .projects-shadow-2 {
      width: 100%;
      height: 5rem;
      bottom: -1rem;
      z-index: 100;
      left: 0;
      position: absolute;
      background: linear-gradient(#00000000, #000);
    }

    .projects-mobile {
      display: none;
      ${media.mobile} {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 5rem;
        padding-top: 3rem;
        padding-bottom: 2rem;
        box-sizing: border-box;
        overflow-y: scroll;
        height: 70vh;
        gap: 2rem;
        position: relative;
      }
    }
  }
  .copyright {
    width: 100%;
    text-align: center;
    padding-bottom: 5rem;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.7rem;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

const ProjectBox = styled.div<{ link: boolean }>`
  width: 100%;
  ${media.mobile} {
    width: auto;
  }
  cursor: ${({ link }) => (link ? "pointer" : "default")};
  div {
    width: 100%;
    text-align: start;
  }
  justify-self: center;
  padding: 1.3rem 0;
  box-sizing: border-box;
  border-bottom: 0.1rem solid transparent;
  .project-title {
    transition: 0.3s;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 0.5rem;
  }
  .kr {
    font-size: 12px;
  }
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    border-bottom: 0.1rem solid
      ${({ link, theme }) => (link ? theme.color.red : "transparent")};
    .project-title {
      transition: 0.3s;
      color: ${({ link, theme }) =>
        link ? theme.color.blue : theme.color.white};
    }
  }
`;

export default Project;
