import React, { useCallback } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import CardEvents from "../../components/CardsEvent";
import { Container, Wrapper } from "./styles";

const Events: React.FC = () => {
  const history = useHistory();

  const handleNavigateBack = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <Container>
      <Wrapper>
        <IoMdArrowBack
          onClick={handleNavigateBack}
          title="Voltar para pagina principal"
          color="#ffffff"
          size={30}
        />
        <h1>Lista de todos eventos cadastrados</h1>
      </Wrapper>

      <CardEvents />
    </Container>
  );
};

export default Events;
