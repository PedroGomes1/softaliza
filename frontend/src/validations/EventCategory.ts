import * as yup from "yup";

const eventCategorySchema = yup.object().shape({
  description: yup.string().min(5, "Mínimo de 5 caracteres"),
});

export default eventCategorySchema;
