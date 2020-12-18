import React, { useCallback, useEffect, useState } from "react";
import { MdAddBox, MdEdit, MdDeleteForever } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import api from "../../services/api";
import { Container, Table } from "./styles";

interface EventsCategoryProps {
  id: number;
  description: string;
}

const EventCategory: React.FC = () => {
  const history = useHistory();

  const [eventsCategory, setEventsCategory] = useState<EventsCategoryProps[]>(
    []
  );

  useEffect(() => {
    async function loadEventsCategory() {
      const response = await api.get("event-category");

      setEventsCategory(response.data);
    }
    loadEventsCategory();
  }, []);

  const handleNavigateRegisterNewCategory = useCallback(() => {
    history.push("/register/event-category");
  }, [history]);

  const handleNavigateEditEventCategory = useCallback(
    ({ id, description }: EventsCategoryProps) => {
      history.push("/edit/event-category", {
        id,
        description,
      });
    },
    [history]
  );

  const handleDeleteEventCategory = useCallback(
    async (id: number) => {
      const confirmation = window.confirm(
        "Deseja realmente deletar o registro?"
      );

      if (confirmation) {
        try {
          await api.delete(`event-category/${id}`);

          toast.success("Registro deletado com sucesso");

          setEventsCategory(
            eventsCategory.filter((eventCategory) => eventCategory.id !== id)
          );
        } catch (error) {
          toast.error("Erro ao deletar registro");
        }
      }
    },
    [eventsCategory]
  );

  return (
    <Container>
      <Header />

      <div>
        <h1>Categorias cadastrados</h1>
        <MdAddBox
          type="MdAddBox"
          title="Cadastar um novo"
          size={40}
          color="#ffffff"
          onClick={handleNavigateRegisterNewCategory}
        />
      </div>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {eventsCategory.map((eventCategory) => (
            <tr key={eventCategory.id}>
              <td>{eventCategory.id}</td>
              <td>{eventCategory.description}</td>
              <td>
                <MdEdit
                  size={25}
                  title="Editar tipo"
                  color="#ffffff"
                  onClick={() => handleNavigateEditEventCategory(eventCategory)}
                />
                <MdDeleteForever
                  size={25}
                  title="Excluir tipo"
                  color="#ffffff"
                  onClick={() => handleDeleteEventCategory(eventCategory.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default EventCategory;
