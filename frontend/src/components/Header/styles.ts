import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 192rem;

  display: flex;
  justify-content: space-between;
  padding: 2.5rem 3rem;

  img {
    width: 15rem;
    height: 5rem;
    cursor: pointer;
  }

  button {
    background: transparent;
  }

  @media (max-width: 720px) {
    justify-content: center;
    img {
      display: none;
    }
  }
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 20rem;
    height: 5rem;

    background: transparent;

    border: 0.3rem solid #3282b8;
    color: #ffffff;
    border-radius: 3rem;
    margin-left: 2rem;

    font-size: 1.6rem;

    transition: 0.5s;

    :hover {
      background-color: #3282b8;
    }
  }

  svg {
    cursor: pointer;
    transition: 0.2s;

    :hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 510px) {
    flex-direction: column;

    button {
      margin: 0 0 1.5rem;
    }
  }
`;

export const Separator = styled.div`
  width: 0.1rem;
  height: 3rem;
  background: #ffffff;

  margin: 0 2rem;

  cursor: pointer;

  @media (max-width: 510px) {
    display: none;
  }
`;
