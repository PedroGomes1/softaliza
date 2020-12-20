import styled from "styled-components";

interface PropsImage {
  src: string;
}

export const Container = styled.div`
  form {
    max-width: 60rem;
  }

  > div {
    margin: 2rem 0;
  }

  input[type="file"] {
    display: none;
  }

  p {
    color: #f64c75;
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
`;

export const WrapperInputFile = styled.div`
  width: 100%;
  height: 15rem;
  border: 2px dashed #96d2f0;
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }

  label {
    cursor: pointer;
    width: 100%;

    text-align: center;
  }
`;

export const WrapperImage = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

export const Image = styled.div<PropsImage>`
  width: 100%;
  height: 15rem;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
`;
