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
    font-family: "Poppins", sans-serif;

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
`;

export const Separator = styled.div`
  width: 0.1rem;
  height: 3rem;
  background: #ffffff;

  margin: 0 2rem;

  cursor: pointer;
`;
