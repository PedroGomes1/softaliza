import React, { useCallback } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { Container, Form } from "./styles";

interface SessionFormsProps {
  title: string;
  buttonSubmitText: string;
  handleSubmitForm(): void;
}

const SessionForms: React.FC<SessionFormsProps> = ({
  children,
  title,
  buttonSubmitText,
  handleSubmitForm,
}) => {
  const history = useHistory();

  const handleNavigateToHomePage = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <IoMdArrowBack
          onClick={handleNavigateToHomePage}
          title="Voltar para pagina principal"
          color="#ffffff"
          size={25}
        />

        <fieldset>
          <legend>{title}</legend>

          {children}

          <button type="submit">{buttonSubmitText}</button>
        </fieldset>
      </Form>
    </Container>
  );
};

export default SessionForms;
