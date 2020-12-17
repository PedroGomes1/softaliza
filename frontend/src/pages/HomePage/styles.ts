import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 192rem;
  min-height: 100vh;

  padding: 2.5rem 3rem;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;

  img {
    width: 15rem;
    height: 5rem;
  }

  @media (max-width: 710px) {
    flex-direction: column;
    align-items: center;

    button:nth-child(1) {
      margin-left: 0;
    }

    img {
      margin-bottom: 1.5rem;
    }
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

    @media (max-width: 840px) {
      width: 12rem;
    }

    @media (max-width: 485px) {
      margin: 2rem 0 0;
      width: 18rem;
    }
  }

  button:hover {
    background-color: #3282b8;
  }

  @media (max-width: 485px) {
    flex-direction: column;
  }
`;

export const Separator = styled.div`
  width: 0.1rem;
  height: 3rem;
  background: #ffffff;

  margin-left: 2rem;

  @media (max-width: 485px) {
    display: none;
  }
`;
export const Content = styled.main`
  display: flex;
  align-items: center;
  padding: 2rem 0;

  > div {
    flex-direction: column;

    max-width: 40%;

    h1,
    h3 {
      color: #ffffff;
      letter-spacing: 0.1rem;
    }

    h1 {
      font-size: min(4.4rem, 5vw);
    }

    h3 {
      margin-top: 3rem;
      color: #b5b5b5;
      font-size: min(1.4rem, 7vw);
      line-height: 2.5rem;
      letter-spacing: 0.15rem;
    }
  }

  img {
    width: auto;
    height: 50rem;
    margin: auto;
  }

  @media (max-width: 760px) {
    img {
      display: none;
    }

    justify-content: center;
    align-items: center;
    height: 70vh;

    > div {
      justify-content: center;
      max-width: 80%;
    }
  }
`;
