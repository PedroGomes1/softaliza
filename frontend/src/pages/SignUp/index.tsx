import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Form from "../../components/SessionForms";
import Input from "../../components/Input";

interface SignUpPropsForm {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const handleSignUp = useCallback((data: SignUpPropsForm) => {
    console.log(data);
  }, []);

  return (
    <Form
      title="Crie sua conta"
      buttonSubmitText="Criar conta"
      handleSubmitForm={handleSubmit(handleSignUp)}
    >
      <Input
        name="name"
        required
        type="text"
        label="Seu nome"
        register={register}
      />

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

export default SignUp;
