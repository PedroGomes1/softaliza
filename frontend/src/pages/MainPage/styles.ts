import styled from "styled-components";

export const Container = styled.div`
  h1 {
    color: #ffffff;
    text-align: center;
    font-size: 4rem;
  }
`;

export const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 530px) {
    width: 85%;
  }
`;
