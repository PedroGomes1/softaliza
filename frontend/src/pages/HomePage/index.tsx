import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import eventsImage from "../../assets/images/event-home.svg";
import logoEventSystem from "../../assets/images/logo-event-system.png";
import { Container, Header, Navigation, Separator, Content } from "./styles";

const HomePage: React.FC = () => {
  const history = useHistory();

  const handleNavigateToListEvents = useCallback(() => {
    history.push("/events");
  }, [history]);

  const handleNavigateToSignIn = useCallback(() => {
    history.push("/signin");
  }, [history]);

  const handleNavigateToSignUp = useCallback(() => {
    history.push("/signup");
  }, [history]);

  return (
    <Container>
      <Header>
        <img src={logoEventSystem} alt="" />

        <Navigation>
          <button type="button" onClick={handleNavigateToListEvents}>
            Eventos
          </button>
          <Separator />
          <button type="button" onClick={handleNavigateToSignIn}>
            Login
          </button>
          <button type="button" onClick={handleNavigateToSignUp}>
            Criar conta
          </button>
        </Navigation>
      </Header>

      <Content>
        <div>
          <h1>A plataforma de organizações de eventos presenciais e online.</h1>
          <h3>
            Confira o mais moderno ambiente capaz de suprir suas necessidades
            organizacionais de eventos
          </h3>
        </div>

        <img src={eventsImage} alt="" />
      </Content>
    </Container>
  );
};

export default HomePage;
