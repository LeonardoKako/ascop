import styled from "styled-components";
import { colors } from "../../styles";

export const Header = styled.header`
  background-color: ${colors.lightBlue};
  padding: 10px 240px;
  min-height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  img {
    width: 100%;
    max-width: 40px;
  }

  ul {
    display: flex;
    gap: 20px;
    font-size: 18px;
    li {
      cursor: pointer;
    }
  }
`;
