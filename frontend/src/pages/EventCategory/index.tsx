import React, { useCallback, useEffect, useState } from "react";
import { MdAddBox, MdEdit, MdDeleteForever } from "react-icons/md";
import { useHistory } from "react-router-dom";
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
          <th>ID</th>
          <th>Descrição</th>
          <th>Ações</th>
        </thead>
        <tbody>
          {eventsCategory.map((eventCategory) => (
            <tr key={eventCategory.id}>
              <td>{eventCategory.id}</td>
              <td>{eventCategory.description}</td>
              <td>
                <MdEdit size={20} title="Editar tipo" color="#ffffff" />
                <MdDeleteForever
                  size={20}
                  title="Excluir tipo"
                  color="#ffffff"
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
