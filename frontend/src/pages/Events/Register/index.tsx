import React, { useCallback } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Header from "../../../components/Header";
import Fields from "../FormEvent";
import { EventFormData } from "../FormEvent";
import api from "../../../services/api";

const RegisterEvent: React.FC = () => {
  const history = useHistory();

  const handleRegisterEvent = useCallback(
    async (dataForm: EventFormData) => {
      const data = new FormData();

      data.append("title", dataForm.title);
      data.append("description", dataForm.description);
      data.append("date", dataForm.date);
      data.append("hour", dataForm.hour);
      data.append("email", dataForm.email);
      data.append("telephone", dataForm.telephone);
      data.append("address", dataForm.address);
      data.append("category_id", String(dataForm.category_id));
      data.append("image", dataForm.image_url[0]);

      try {
        await api.post("event", data);

        history.push("/mainpage");
        toast.success("Evento cadastrado com sucesso");
      } catch (error) {
        toast.error("Erro ao cadastrar evento");
      }
    },
    [history]
  );

  return (
    <div>
      <Header />

      <Fields
        titleForm="Registrar novo evento"
        titleButton="Cadastrar"
        handleSubmitFormEvent={handleRegisterEvent}
      />
    </div>
  );
};

export default RegisterEvent;
