import * as yup from "yup";

const eventCategorySchema = yup.object().shape({
  description: yup.string().required("Campo obrigatório!"),
});

export default eventCategorySchema;
