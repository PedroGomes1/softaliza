import * as yup from "yup";

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite seu e-mail no formato correto")
    .required("Campo obrigatório!"),
  password: yup.string().required("Campo obrigatório!"),
});

export default signInSchema;
