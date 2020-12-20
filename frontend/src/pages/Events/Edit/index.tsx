import React, { useCallback } from "react";
import { toast } from "react-toastify";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../../../components/Header";
import Fields from "../FormEvent";
import { EventFormData } from "../FormEvent";
import api from "../../../services/api";

const EditEvent: React.FC = () => {
  const { state: eventData } = useLocation<EventFormData>();

  const history = useHistory();
  const handleEditEvent = useCallback(
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
      dataForm.image_url.length > 0 &&
        data.append("image", dataForm.image_url[0]);

      try {
        await api.put(`event/${eventData.id}`, data);

        history.push("/mainpage");
        toast.success("Evento editado com sucesso");
      } catch (error) {
        toast.error("Erro ao editar evento");
      }
    },
    [history, eventData.id]
  );

  return (
    <div>
      <Header />
      <Fields
        titleForm="Editar evento"
        titleButton="Salvar"
        eventData={eventData}
        handleSubmitFormEvent={handleEditEvent}
      />
    </div>
  );
};

export default EditEvent;
