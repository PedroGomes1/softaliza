import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Header from "../../../components/Header";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import { eventCategorySchema } from "../../../validations";

import { Container } from "./styles";
import api from "../../../services/api";

interface RegisterCategoryProps {
  description: string;
}

const RegisterCategory: React.FC = () => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm<RegisterCategoryProps>({
    resolver: yupResolver(eventCategorySchema),
  });

  const handleRegisterCategory = useCallback(
    async ({ description }: RegisterCategoryProps) => {
      try {
        await api.post("event-category", {
          description,
        });

        history.push("/event-category");
        toast.success("Categoria cadastrada com sucesso");
      } catch (error) {
        toast.error("Erro ao cadastrar categoria");
      }
    },
    [history]
  );

  return (
    <Container>
      <Header />
      <div>
        <Form
          title="Nova categoria"
          handleSubmitForm={handleSubmit(handleRegisterCategory)}
          buttonSubmitText="Cadastrar"
          routeBack="/event-category"
        >
          <Input
            name="description"
            type="text"
            label="Descrição da categoria"
            error={errors.description?.message}
            required
            register={register}
            autoFocus
          />
        </Form>
      </div>
    </Container>
  );
};

export default RegisterCategory;
