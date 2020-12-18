import * as yup from "yup";

const registerNewCategory = yup.object().shape({
  description: yup.string().required("Campo obrigatório!"),
});

export default registerNewCategory;
