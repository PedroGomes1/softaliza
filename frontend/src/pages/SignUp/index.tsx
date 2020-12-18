import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../components/SessionForms";
import Input from "../../components/Input";
import { signUpSchema } from "../../validations";

interface SignUpPropsForm {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<SignUpPropsForm>({
    resolver: yupResolver(signUpSchema),
  });

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
  );
};

export default SignUp;
