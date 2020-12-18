import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import Form from "../../components/SessionForms";
import Input from "../../components/Input";
import { signInRequest } from "../../store/modules/auth/action";
import { signInSchema } from "../../validations";
import { Container } from "./styles";

export interface SignInPropsForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm<SignInPropsForm>({
    resolver: yupResolver(signInSchema),
  });

  const handleLogin = useCallback(
    (data: SignInPropsForm) => {
      dispatch(signInRequest(data));
    },
    [dispatch]
  );

  return (
    <Container>
      <Form
        title="Faça seu login"
        buttonSubmitText="Entrar"
        handleSubmitForm={handleSubmit(handleLogin)}
      >
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
          required
          error={errors.password?.message}
          label="Sua senha"
          register={register}
        />
      </Form>
    </Container>
  );
};

export default SignIn;
