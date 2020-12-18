import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { signUpSchema } from "../../validations";
import api from "../../services/api";
import { Container } from "./styles";

interface SignUpPropsForm {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm<SignUpPropsForm>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = useCallback(
    async ({ name, email, password }: SignUpPropsForm) => {
      try {
        await api.post("user", {
          name,
          email,
          password,
        });

        history.push("/signin");
        toast.success("Cadastro realizado com sucesso, faça seu login");
      } catch (error) {
        toast.error("Ocorreu um erro ao tentar fazer seu cadastro!");
      }
    },
    [history]
  );

  return (
    <Container>
      <Form
        title="Crie sua conta"
        buttonSubmitText="Criar conta"
        handleSubmitForm={handleSubmit(handleSignUp)}
        routeBack="/"
      >
        <Input
          name="name"
          type="text"
          label="Seu nome"
          error={errors.name?.message}
          required
          register={register}
        />

        <Input
          name="email"
          type="email"
          label="Seu e-mail"
          error={errors.email?.message}
          required
          register={register}
        />

        <Input
          name="password"
          type="password"
          label="Sua senha"
          error={errors.password?.message}
          required
          register={register}
        />
      </Form>
    </Container>
  );
};

export default SignUp;
