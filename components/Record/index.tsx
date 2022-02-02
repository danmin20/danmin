import styled from "styled-components";
import { Container, flexCenter } from "../../styles/theme";
import { nanoid } from "nanoid";

const records = [
  {
    id: "Careers",
    contents: [
      {
        id: "1",
        title: "Woowa Brothers Corp.",
        kr: "우아한형제들",
        info: "Front-end development group",
        date: "2022.01.04-now",
      },
    ],
  },
  {
    id: "Internship",
    contents: [
      {
        id: "1",
        title: "Daangn",
        kr: "당근마켓",
        info: "MVP Intership",
        date: "2021.09.27-2021.12.26",
      },
      {
        id: "2",
        title: "Woowa Brothers Corp.",
        kr: "우아한형제들",
        info: "Tech camp 4rd",
        date: "2021.07.05-2021.08.31",
      },
      {
        id: "3",
        title: "Naver",
        kr: "네이버",
        info: "Glace CIC / smart place service",
        date: "2021.03.02-2021.04.09",
      },
      {
        id: "4",
        title: "Megazon Cloud",
        kr: "메가존클라우드",
        info: "Cloud Tech Center / CloudOne",
        date: "2020.11.02-2021.02.28",
      },
      {
        id: "5",
        title: "TwentyOZ",
        kr: "트웬티온스",
        info: "Field training",
        date: "2020.06.29-2020.10.16",
      },
    ],
  },
  {
    id: "Activities",
    contents: [
      {
        id: "1",
        title: "AUSG",
        kr: "아우쓱",
        info: "AWS university student club",
        date: "2020.09-current",
      },
      {
        id: "2",
        title: "Depromeet",
        kr: "디프만",
        info: "Club with designers and programmers",
        date: "2020.07-2021.12",
      },
      {
        id: "3",
        title: "SOPT",
        kr: "솝트",
        info: "College student start-up IT club",
        date: "2020.03-2020.08",
      },
      {
        id: "4",
        title: "Like Lion",
        kr: "멋쟁이사자처럼",
        info: "College student start-up IT club",
        date: "2020.08-2020.06",
      },
    ],
  },
];

const Record = () => {
  return (
    <Wrapper>
      {records.map((record) => (
        <div key={nanoid()} className="container">
          <div>
            <Title title={record.id}>{record.id}</Title>
            {record.contents.map((content) => (
              <div className="box" key={nanoid()}>
                <div className="title">
                  <div>{content.title}</div>
                  <div className="kr">{content.kr}</div>
                </div>
                <div className="info">{content.info}</div>
                <div className="date">{content.date}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  .container {
    width: 100%;
    height: 70rem;
    position: sticky;
    top: 10rem;
    .box {
      width: 35rem;
      margin-top: 5rem;
      .title {
        ${flexCenter};
        justify-content: space-between;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.9rem;
        .kr {
          font-weight: 300;
          font-size: 1.2rem;
          line-height: 1.7rem;
        }
      }
      .info {
        margin-top: 0.4rem;
        font-size: 1.8rem;
        line-height: 2.2rem;
      }
      .date {
        margin-top: 0.4rem;
        text-align: end;
        font-size: 1.2rem;
        line-height: 1.5rem;
      }
    }
    &:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &:nth-child(3) {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
  }
`;

const Title = styled.div<{ title: string }>`
  text-align: start;
  font-weight: bold;
  font-size: 6.4rem;
  line-height: 7.8rem;
  color: transparent;
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.white};
  position: relative;
  ::after {
    content: "${({ title }) => `${title}`}";
    position: absolute;
    left: -0.4rem;
    top: -0.4rem;
    -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.red};
    opacity: 0.7;
  }
  ::before {
    content: "${({ title }) => `${title}`}";
    position: absolute;
    left: 0.4rem;
    top: 0.4rem;
    -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.blue};
    opacity: 0.7;
  }
`;

export default Record;
