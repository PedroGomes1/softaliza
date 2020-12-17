import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 192rem;
  min-height: 100vh;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.5rem 3rem;

  img {
    width: 15rem;
    height: 5rem;
  }
`;
export const Navigation = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 15rem;
    height: 5rem;

    background: transparent;

    border: 0.3rem solid #3282b8;
    color: #ffffff;
    border-radius: 3rem;
    margin-left: 2rem;

    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;

    transition: 0.5s;
  }

  button:hover {
    background-color: #3282b8;
  }
`;

export const Separator = styled.div`
  width: 0.1rem;
  height: 3rem;
  background: #ffffff;

  margin-left: 2rem;
`;
export const Content = styled.main`
  display: flex;
  align-items: center;

  padding: 3rem;
  max-height: 100%;

  > div {
    flex-direction: column;

    max-width: 40%;

    h1,
    h3 {
      color: #ffffff;
      letter-spacing: 0.1rem;
    }

    h1 {
      font-size: 4.6rem;
    }

    h3 {
      margin-top: 3rem;
      color: #b5b5b5;
      font-size: 1.4rem;
      line-height: 2.5rem;
      letter-spacing: 0.15rem;
    }
  }

  img {
    width: 65rem;
    height: 49rem;

    flex: 1;
  }
`;
