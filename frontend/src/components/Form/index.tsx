import React, { useCallback } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IState } from "../../store";
import { UserLoggedProps } from "../../store/modules/auth/types";
import { Container, Form } from "./styles";

interface FormProps {
  title: string;
  buttonSubmitText: string;
  handleSubmitForm(): void;
  routeBack: string;
}

const Forms: React.FC<FormProps> = ({
  children,
  title,
  buttonSubmitText,
  handleSubmitForm,
  routeBack,
}) => {
  const history = useHistory();

  const { loading } = useSelector<IState, UserLoggedProps>(
    (state) => state.auth
  );

  const handleNavigateBack = useCallback(() => {
    history.push(routeBack);
  }, [history, routeBack]);

  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <IoMdArrowBack
          onClick={handleNavigateBack}
          title="Voltar para pagina principal"
          color="#ffffff"
          size={25}
        />

        <fieldset>
          <legend>{title}</legend>

          {children}

          <button type="submit">
            {loading ? "Carregando..." : buttonSubmitText}
          </button>
        </fieldset>
      </Form>
    </Container>
  );
};

export default Forms;
