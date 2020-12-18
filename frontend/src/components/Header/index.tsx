import React, { useCallback } from "react";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import logoEventSystem from "../../assets/images/logo-event-system.png";
import { signOut } from "../../store/modules/auth/action";
import { Container, RightHeader, Separator } from "./styles";

const Header: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNavigateEventTypes = useCallback(() => {
    history.push("/event-category");
  }, [history]);

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  const handleNavigateToMainPage = useCallback(() => {
    history.push("/mainpage");
  }, [history]);

  return (
    <Container>
      <button type="button" onClick={handleNavigateToMainPage}>
        <img src={logoEventSystem} alt="Logo EventSystem" />
      </button>

      <RightHeader>
        <button type="button">Cadastrar eventos</button>
        <button type="button" onClick={handleNavigateEventTypes}>
          Categoria dos eventos
        </button>
        <Separator />
        <BiLogOut
          size={30}
          title="Sair da aplicação"
          color="#f64c75"
          onClick={handleSignOut}
        />
      </RightHeader>
    </Container>
  );
};

export default Header;
