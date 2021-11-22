import styled from "styled-components";
import { Container, flexCenter, theme } from "../../styles/theme";

const projects = [
  {
    id: "Gathering places near you",
    kr: "당장모아",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "ET’s Stationery",
    kr: "ET네 만물상",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "Woowahan account book",
    kr: "우아한 가계부",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "Woowa market",
    kr: "우아마켓",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "Reservation/order history map",
    kr: "예약/주문 방문이력 지도 탐색",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "SpaceONE design system",
    kr: "SpaceONE 디자인시스템 개선",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "SpaceONE project site",
    kr: "SpceONE 프로젝트 사이트",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "SpaceONE console",
    kr: "SpaceONE 콘솔 개선 및 버그픽스",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "Cookie parking",
    kr: "쿠키파킹",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "Avocado",
    kr: "아보카도",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "FMS admin website",
    kr: "fms 어드민 웹사이트",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "FMS web app for workers ",
    kr: "fms 근무자용 웹앱",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "My Book",
    kr: "마이북",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "My Movie",
    kr: "마이무비",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "To Do",
    kr: "투두",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "Whether Wheather",
    kr: "웨더웨더",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "Depromeet website",
    kr: "디프만 공식 웹사이트",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "Gif generator",
    kr: "Gif 생성 서비스",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "Galge",
    kr: "가글: 가까운 글",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
  {
    id: "Tomatto",
    kr: "토맛토",
    content: "A service where you can curate and share places by region.",
    link: "",
  },
];

const Project = () => {
  return (
    <Wrapper>
      <div className="title-opacity">
        {"PROJECTS".split("").map((v) => (
          <div>{v}</div>
        ))}
      </div>
      <div className="container">
        <div className="title">
          {"PROJECTS".split("").map((v) => (
            <div>{v}</div>
          ))}
        </div>

        <div className="projects">
          {projects.map((project) => (
            <div className="box">
              <div className="title">{project.id}</div>
              <div className="title">{project.kr}</div>
              <div className="content">{project.content}</div>
            </div>
          ))}
        </div>
        <div className="copyright">Copyright © 2021 Lee Jeongmin</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  margin-top: 35rem;
  position: relative;
  ${flexCenter};
  .title-opacity {
    width: 100%;
    ${flexCenter};
    justify-content: space-between;
    font-weight: 900;
    font-size: 14.4rem;
    line-height: 17.6rem;
    opacity: 0.15;
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
      .box {
        div {
          width: 100%;
          text-align: start;
        }
        border-radius: 1rem;
        justify-self: center;
        cursor: pointer;
        border: 0.1rem solid transparent;
        padding: 1.3rem;
        box-sizing: border-box;
        &:hover {
          border: 0.1rem solid rgba(255, 94, 94, 0.5);
          .title {
            color: ${theme.color.blue};
          }
        }
        .title {
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          margin-bottom: 0.5rem;
        }
        .content {
        }
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
  }
`;

export default Project;
