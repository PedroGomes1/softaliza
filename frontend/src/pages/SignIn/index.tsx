import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Form from "../../components/SessionForms";
import Input from "../../components/Input";
import { signInRequest } from "../../store/modules/auth/action";

interface SignInPropsForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const handleLogin = useCallback(
    (data: SignInPropsForm) => {
      dispatch(signInRequest(data));
    },
    [dispatch]
  );

  return (
    <Form
      title="Faça seu login"
      buttonSubmitText="Entrar"
      handleSubmitForm={handleSubmit(handleLogin)}
    >
      <Input
        name="email"
        type="email"
        label="Seu e-mail"
        required
        register={register}
      />

      <Input
        name="password"
        type="password"
        required
        label="Sua senha"
        register={register}
      />
    </Form>
  );
};

export default SignIn;
