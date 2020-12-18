import React, { useCallback } from "react";
import { BiLogOut } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import logoEventSystem from "../../assets/images/logo-event-system.png";
import { Container, RightHeader, Separator } from "./styles";

const Header: React.FC = () => {
  const history = useHistory();

  const handleNavigateEventTypes = useCallback(() => {
    history.push("/event-category");
  }, [history]);

  return (
    <Container>
      <img src={logoEventSystem} alt="Logo EventSystem" />

      <RightHeader>
        <button type="button">Cadastrar eventos</button>
        <button type="button" onClick={handleNavigateEventTypes}>
          Categoria dos eventos
        </button>
        <Separator />
        <BiLogOut size={30} title="Sair da aplicação" color="#f64c75" />
      </RightHeader>
    </Container>
  );
};

export default Header;
