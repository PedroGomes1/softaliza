import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 6rem;

  background: #ffffff;
  border-radius: 0.8rem;

  font-size: 1.6rem;

  input {
    background: transparent;
    border: 0;
    border-radius: 0.8rem;
    height: 100%;
    flex: 1;
    padding: 0 1.5rem;
    font-size: 1.6rem;
  }

  svg {
    margin: 0 0.5rem;
  }
`;

export const Label = styled.label`
  display: block;
  margin: 2rem 0 0.5rem;
  font-size: 1.6rem;
  color: #ffffff;
`;

export const Error = styled.p`
  color: #f64c75;
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;
