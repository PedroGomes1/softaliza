import React, { useCallback, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../../components/Header";
import Fields, { EventCategoryProps } from "../FormEventCategory";

import api from "../../../services/api";

interface EditCategoryProps {
  id: number;
  description: string;
}

const EditCategory: React.FC = () => {
  const history = useHistory();

  const { state } = useLocation<EditCategoryProps>();

  const [categoryEvent] = useState(state);

  const handleEditCategory = useCallback(
    async ({ description }: EventCategoryProps) => {
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
    <>
      <Header />

      <Fields
        titleButton="Salvar"
        titleForm="Editar categoria"
        handleSubmitFormEventCategory={handleEditCategory}
      />
    </>
  );
};

export default EditCategory;
