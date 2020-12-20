import React, { useCallback } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Header from "../../../components/Header";
import Fields, { EventCategoryProps } from "../FormEventCategory";

import api from "../../../services/api";

const RegisterCategory: React.FC = () => {
  const history = useHistory();

  const handleRegisterCategory = useCallback(
    async ({ description }: EventCategoryProps) => {
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
    <>
      <Header />

      <Fields
        titleButton="Cadastrar"
        titleForm="Nova categoria"
        handleSubmitFormEventCategory={handleRegisterCategory}
      />
    </>
  );
};

export default RegisterCategory;
