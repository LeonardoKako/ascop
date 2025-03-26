import styled from "styled-components";

export const ListImages = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 40px;
  margin-top: 40px;

  img {
    width: 100%;
    max-width: 350px;
  }
`;
