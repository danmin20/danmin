import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Container, flexCenter } from "../../styles/theme";
import { nanoid } from "nanoid";

const projects = [
  {
    id: "Gathering places near you",
    kr: "당장모아",
    content: "당근마켓 MVP 인턴십에서 진행한 4주간의 프로젝트",
    link: "https://github.com/karrotmvp/mymap",
  },
  {
    id: "ET’s Stationery",
    kr: "ET네 만물상",
    content: "우아한테크캠프 4기에서 진행한 3주간의 프로젝트",
    link: "https://github.com/woowa-techcamp-2021/store-7",
  },
  {
    id: "Woowahan account book",
    kr: "우아한 가계부",
    content: "우아한테크캠프 4기에서 진행한 2주간의 프로젝트",
    link: "https://github.com/woowa-techcamp-2021/cashbook-14",
  },
  {
    id: "Woowa market",
    kr: "우아마켓",
    content: "우아한테크캠프 4기에서 진행한 2주간의 프로젝트",
    link: "https://github.com/woowa-techcamp-2021/deal-12",
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
    id: "FMS admin website",
    kr: "fms 어드민 웹사이트",
    content: "트웬티온스에서 진행한 외주 작업",
    // link: "",
  },
  {
    id: "FMS web app for workers ",
    kr: "fms 근무자용 웹앱",
    content: "트웬티온스에서 진행한 외주 작업",
    // link: "",
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
  {
    id: "Gif generator",
    kr: "Gif 생성 서비스",
    content: "대학생 때 진행한 캡스톤디자인1 프로젝트",
    link: "https://github.com/danmin20/gif-generator",
  },
  {
    id: "My Book",
    kr: "마이북",
    content: "대학생 때 진행한 리액트 네이티브 프로젝트",
    link: "https://github.com/danmin20/MyBook-app",
  },
  {
    id: "My Movie",
    kr: "마이무비",
    content: "대학생 때 진행한 리액트 프로젝트",
    link: "https://github.com/danmin20/MyMovie-web",
  },
  {
    id: "To Do",
    kr: "투두",
    content: "대학생 때 진행한 리액트 프로젝트",
    link: "https://github.com/danmin20/todo_app",
  },
  {
    id: "Whether Wheather",
    kr: "웨더웨더",
    content: "대학생 때 진행한 리액트 네이티브 프로젝트",
    link: "https://github.com/danmin20/weather_app",
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
        <div className="copyright">Copyright © 2021 Lee Jeongmin</div>
      </div>
    </Wrapper>
  );
};

const titleAnimation = keyframes`
  0% {
    margin-top: 100rem;
  }
  100% {
    margin-top: -90rem;
  }
`;

const Wrapper = styled(Container)`
  margin-top: 35rem;
  height: 110rem;
  overflow: hidden;
  position: relative;
  ${flexCenter};
  .project-title-animation {
    animation: ${titleAnimation} 2s forwards;
  }
  .title-opacity {
    margin-top: 20rem;
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
  }
  .container {
    position: absolute;
    top: 8rem;
    width: 98rem;
    .title {
      width: 100%;
      ${flexCenter};
      justify-content: space-between;
      font-weight: 200;
      font-size: 6.4rem;
      line-height: 7.8rem;
      width: 100%;
      text-align: center;
    }

    .projects {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4rem;
      margin-top: 7rem;
      padding-bottom: 20rem;
      align-items: start;
    }
  }
  .copyright {
    width: 100%;
    text-align: center;
    padding-bottom: 5rem;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
`;

const ProjectBox = styled.div<{ link: boolean }>`
  width: 100%;
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
