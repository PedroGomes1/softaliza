import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdSearch, MdEdit, MdDeleteForever } from "react-icons/md";
import Header from "../../components/Header";
import CardEvent from "../../components/CardsEvent";

import { Container, Wrapper, WrapperActionsCard } from "./styles";
import Input from "../../components/Input";

const MainPage: React.FC = () => {
  const [titleSearch, setTitleSearch] = useState("");

  const { register } = useForm();

  return (
    <Container>
      <Header />

      <Wrapper>
        <h1>Eventos cadastrados</h1>

        <Input
          icon={MdSearch}
          placeholder="Buscar pelo titulo do evento"
          name="search"
          type="text"
          register={register}
          onChange={(event) => setTitleSearch(event.target.value)}
        />
      </Wrapper>

      <CardEvent titleSearch={titleSearch}>
        <WrapperActionsCard>
          <MdEdit size={25} color="#000000" />
          <MdDeleteForever size={25} color="#f64c75" />
        </WrapperActionsCard>
      </CardEvent>
    </Container>
  );
};

export default MainPage;
