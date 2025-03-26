import styled from "styled-components";
import { colors, SubTitle } from "../../styles";

export const ListContacts = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
  }

  li {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
      display: flex;
      align-items: flex-start;
      align-items: center;
      gap: 10px;
      font-size: 14px;

      img {
        width: 50px;
      }
    }
  }

  ${SubTitle} {
    color: ${colors.neon};
  }
`;
