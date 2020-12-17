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

export const Image = styled.div`
  width: 28rem;
  height: 29rem;
  background-image: url("https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
`;

export const ContainerCards = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, 28rem);

  justify-content: center;
  gap: 4rem;
`;
export const CardEvent = styled.div`
  width: 28rem;
  height: auto;
  background: #ffffff;

  border-radius: 1rem;

  cursor: pointer;
  box-shadow: rgb(255, 250, 255) 0px 4px 18px -6px;

  transition: 0.2s;

  :hover {
    transform: scale(1.02);
  }
`;

export const InformationsCard = styled.div`
  padding: 1rem 1rem;
  position: relative;

  h3 {
    text-align: center;
    font-size: 2rem;
  }

  p {
    position: relative;
    font-size: 1.3rem;
    font-family: "Poppins", sans-serif;
    width: 27rem;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }

  p + p {
    margin-top: 0.5rem;
  }
`;
