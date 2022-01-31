import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;

  height: 100vh;
  width: 3.12rem;
  background-color: ${colors.white};

  padding: 5rem 0;

  a {
      margin-bottom: 30px;
  }
`;
