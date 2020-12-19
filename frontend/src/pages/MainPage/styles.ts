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

export const WrapperActionsCard = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin: 1rem 0.5rem;
    transition: 0.2s;
    :hover {
      background: #dedee4;
      padding: 0.1rem;
    }
  }
`;
