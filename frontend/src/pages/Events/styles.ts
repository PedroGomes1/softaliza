import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  padding: 3rem;

  h1 {
    font-size: 4rem;
    color: #ffffff;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5rem;
    cursor: pointer;
  }

  @media (max-width: 855px) {
    svg {
      margin: 0;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
