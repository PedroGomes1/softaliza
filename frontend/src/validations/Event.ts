import * as yup from "yup";

const eventSchema = yup.object().shape({
  title: yup
    .string()
    .min(5, "Mínimo de 5 caracteres")
    .required("Campo obrigatório!"),
  description: yup.string().required("Campo obrigatório!"),
  date: yup.string().required("Campo obrigatório!"),
  hour: yup.string().required("Campo obrigatório!"),
  category_id: yup.string().required("Campo obrigatório!"),
  email: yup
    .string()
    .email("Digite seu e-mail no formato correto")
    .required("Campo obrigatório!"),
  telephone: yup.string().required("Campo obrigatório!"),
  address: yup.string().required("Campo obrigatório!"),
});

export default eventSchema;
