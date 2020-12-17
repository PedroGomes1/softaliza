import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Form from "../../components/SessionForms";
import Input from "../../components/Input";

interface SignInPropsForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = useCallback((data: SignInPropsForm) => {
    console.log(data);
  }, []);

  return (
    <Form
      title="Faça seu login"
      buttonSubmitText="Entrar"
      handleSubmitForm={handleSubmit(handleLogin)}
    >
      <Input
        name="name"
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
