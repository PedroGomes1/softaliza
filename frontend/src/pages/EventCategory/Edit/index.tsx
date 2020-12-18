import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import { registerNewCategory } from "../../../validations";

import { Container } from "./styles";
import api from "../../../services/api";

interface EditCategoryProps {
  id: number;
  description: string;
}

const EditCategory: React.FC = () => {
  const history = useHistory();

  const { state } = useLocation<EditCategoryProps>();

  const [categoryEvent] = useState(state);

  const { register, handleSubmit, errors } = useForm<EditCategoryProps>({
    resolver: yupResolver(registerNewCategory),
  });

  const handleEditCategory = useCallback(
    async ({ description }: EditCategoryProps) => {
      try {
        await api.put(`event-category/${categoryEvent.id}`, {
          description,
        });

        history.push("/event-category");
        toast.success("Categoria editada com sucesso");
      } catch (error) {
        toast.error("Erro ao editar categoria");
      }
    },
    [history, categoryEvent.id]
  );

  return (
    <Container>
      <Header />
      <div>
        <Form
          title="Editar categoria"
          handleSubmitForm={handleSubmit(handleEditCategory)}
          buttonSubmitText="Salvar"
          routeBack="/event-category"
        >
          <Input
            name="description"
            type="text"
            label="Descrição da categoria"
            error={errors.description?.message}
            required
            defaultValue={categoryEvent.description}
            register={register}
          />
        </Form>
      </div>
    </Container>
  );
};

export default EditCategory;
