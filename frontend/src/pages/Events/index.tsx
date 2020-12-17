import React from "react";

import {
  Container,
  Image,
  InformationsCard,
  ContainerCards,
  CardEvent,
} from "./styles";

const Events: React.FC = () => {
  return (
    <Container>
      <h1>Lista de todos eventos cadastrados</h1>

      <ContainerCards>
        {[0, 1, 2, 3, 4, 5].map((item, index) => (
          <CardEvent key={`card-${index + 1}`}>
            <Image />

            <InformationsCard>
              <h3>Do While</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo magni fugit, commodi expedita error, architecto labore
                officiis ad distinctio, quos aut aperiam. Alias tempore
                molestias corporis incidunt nemo odit repellendus.
              </p>
              <p>
                <strong>Data: </strong>17/12/2020 às 12:30
              </p>
              <p>
                <strong>Localização: </strong>Avenida Infante Dom Henrique, s/n
                - Glória
              </p>
            </InformationsCard>
          </CardEvent>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default Events;
