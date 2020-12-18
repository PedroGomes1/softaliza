import styled from "styled-components";

export const Container = styled.div`
  padding: 2.5rem 3rem;

  margin: 0 auto;

  > div {
    display: flex;

    justify-content: space-between;
    align-items: center;

    margin: 3rem auto 2rem;

    width: 50%;

    h1 {
      font-size: 2.4rem;
      text-align: center;
      color: #ffffff;
    }

    svg {
      cursor: pointer;
      transition: 0.2s;

      :hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Table = styled.table`
  width: 50%;
  border-collapse: collapse;
  margin: 0 auto;

  thead,
  tbody,
  tr,
  td,
  th {
    width: 50%;
    font-size: 1.4rem;
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.1rem;
  }
  td,
  th {
    text-align: center;
    padding: 1rem;
    border: 1px solid #ffffff;
  }

  tr:hover {
    transition: 0.2s;

    &:hover {
      background: #1a1a1b;
    }
  }

  tbody tr td:nth-child(3) {
    svg {
      cursor: pointer;
      transition: 0.2s;

      :hover {
        opacity: 0.7;
      }
    }

    svg + svg {
      margin-left: 0.5rem;
    }
  }
`;
