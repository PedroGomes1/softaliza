import React from "react";
import CardEvents from "../../components/CardsEvent";
import { Container } from "./styles";

const Events: React.FC = () => {
  return (
    <Container>
      <h1>Lista de todos eventos cadastrados</h1>

      <CardEvents />
    </Container>
  );
};

export default Events;
