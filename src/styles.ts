import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  darkBlue: "#061722",
  lightBlue: "#182c34",
  neon: "#0a988b",
  white: "#fff",
};

type Props = {
  bg: "claro" | "escuro";
};

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: ${colors.white};
        text-decoration: none;    
        list-style: none;
        font-family: 'Cabin', sans-serif;
    }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-family: "Unbounded", sans-serif;
  font-weight: 400;
  margin-bottom: 40px;
`;
export const SubTitle = styled.h2`
  font-size: 24xpx;
  font-family: "Unbounded", sans-serif;
  font-weight: 400;
`;
export const Desc = styled.p`
  font-size: 20px;

  span {
    color: ${colors.neon};
    cursor: pointer;
  }
`;

export const Section = styled.section<Props>`
  padding: 80px 200px;
  background-color: ${(props) =>
    props.bg === "claro" ? colors.lightBlue : colors.darkBlue};
`;

export const Container = styled.section<Props>`
  padding: 40px 40px 60px 40px;
  background-color: ${(props) =>
    props.bg === "claro" ? colors.lightBlue : colors.darkBlue};
`;

export const List = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 40px;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }

  li {
    border-radius: 8px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }
`;
