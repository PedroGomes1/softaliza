import React, { useCallback } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { Container, Form } from "./styles";

interface SignInPropsForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = useCallback((data: SignInPropsForm) => {}, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <IoMdArrowBack
          title="Voltar para pagina principal"
          color="#ffffff"
          size={25}
        />

        <fieldset>
          <legend>Faça seu login</legend>

          <Input
            name="name"
            type="text"
            label="Seu e-mail"
            register={register}
          />

          <Input
            name="password"
            type="password"
            label="Sua senha"
            register={register}
          />

          <button type="submit">Entrar</button>
        </fieldset>
      </Form>
    </Container>
  );
};

export default Login;
