import { useEffect } from "react";
import styled from "styled-components";

export const Movingasdf = () => {
  useEffect(() => {
    const asdf = document.querySelector("#asdf") as HTMLDivElement;
    const fdsa = document.querySelector("#fdsa") as HTMLDivElement;
    const description = document.querySelector("#info") as HTMLDivElement;

    const handleMouseMove = (e: MouseEvent) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      asdf.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };
    const handleMouseEnter = () => {
      asdf.style.transition = "none";
      fdsa.style.transform = "translateZ(125px)";
      description.style.transform = "translateZ(125px)";
    };
    const handleMouseLeave = () => {
      asdf.style.transition = "all 0.5s ease";
      asdf.style.transform = `rotateY(0deg) rotateX(0deg)`;
      fdsa.style.transform = "translateZ(0px)";
      description.style.transform = "translateZ(0px)";
    };

    asdf.addEventListener("mousemove", handleMouseMove);
    asdf.addEventListener("mouseenter", handleMouseEnter);
    asdf.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      asdf.removeEventListener("mousemove", handleMouseMove);
      asdf.removeEventListener("mouseenter", handleMouseEnter);
      asdf.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Card id="asdf">
      <Info id="info">
        <Title id="fdsa">asdf</Title>
      </Info>
    </Card>
  );
};

const Card = styled.div`
  transform-style: preserve-3d;
  background-color: #fff;
  color: #000;
  min-height: 80vh;
  width: 35rem;
  border-radius: 30px;
  padding: 0rem 5rem;
  box-shadow: 0 20px 20px rgba(255, 255, 255, 0.2),
    0px 0px 50px rgba(0, 0, 0, 0.2);
`;

const Info = styled.div`
  font-size: 3rem;
  transition: all 0.75s ease-out;
`;

const Title = styled.div``;
//Moving Animatio

export default Movingasdf;
