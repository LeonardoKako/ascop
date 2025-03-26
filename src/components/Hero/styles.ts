import styled from "styled-components";

import img from "../../assets/fundoHero.jpeg";

export const HeroContainer = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom -200px right 0px;
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const Image = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 0px 240px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;
