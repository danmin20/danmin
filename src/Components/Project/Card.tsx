import { useEffect } from "react";
import styled from "styled-components";

export const MovingCard = () => {
  useEffect(() => {
    const container = document.querySelector("#container") as HTMLDivElement;
    const card = document.querySelector("#card") as HTMLDivElement;
    const title = document.querySelector("#title") as HTMLDivElement;
    const description = document.querySelector("#info") as HTMLDivElement;

    const handleMouseMove = (e: MouseEvent) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };
    const handleMouseEnter = () => {
      card.style.transition = "none";
      title.style.transform = "translateZ(150px)";
      description.style.transform = "translateZ(125px)";
    };
    const handleMouseLeave = () => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      title.style.transform = "translateZ(0px)";
      description.style.transform = "translateZ(0px)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const containerMouseMove = (e: any) => {};
  const containerMouseEnter = (e: any) => {
    // sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    // description.style.transform = "translateZ(125px)";
    // sizes.style.transform = "translateZ(100px)";
    // purchase.style.transform = "translateZ(75px)";
  };
  //Animate Out
  const containerMouseLeave = (e: any) => {
    // sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    // description.style.transform = "translateZ(0px)";
    // sizes.style.transform = "translateZ(0px)";
    // purchase.style.transform = "translateZ(0px)";
  };

  return (
    <Container id="container">
      <Card id="card">
        <Info id="info">
          <Title id="title">asdf</Title>
        </Info>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
`;

const Card = styled.div`
  transform-style: preserve-3d;
  min-height: 80vh;
  width: 35rem;
  border-radius: 30px;
  padding: 0rem 5rem;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`;

const Info = styled.div`
  font-size: 3rem;
  transition: all 0.75s ease-out;
`;

const Title = styled.div``;
//Moving Animatio

export default MovingCard;
