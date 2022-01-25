import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  width: calc(
    100% - 3.12rem
  ); /* 50px/16px = 3.12rem , faço isso pra deixar o espaço do menu*/
  margin-left: 3.12rem;
  padding: 0.56rem 1.87rem;

  color: ${colors.purple};

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 0.68rem; /* 11px/16px = 0.68rem */
    }
  }

  p {
    margin: 0;
    font-family: "Roboto Slab", serif;
    font-weight: 600;
    /* semi bold */
    font-size: 1.87rem;
  }
  time {
      text-align: center;
      font-size: 0.75rem;
      font-weight: 700;
  }
`;
