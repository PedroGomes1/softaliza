import * as yup from "yup";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório!"),
  email: yup
    .string()
    .email("Digite seu e-mail no formato correto")
    .required("Campo obrigatório!"),
  password: yup
    .string()
    .min(5, "Mínimo de 5 caracteres")
    .required("Campo obrigatório!"),
});

export default signUpSchema;
