import React, { useCallback, useEffect, useState } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import api from "../../services/api";
import { IState } from "../../store";
import { UserLoggedProps } from "../../store/modules/auth/types";

import {
  ContainerCards,
  CardEvent,
  Image,
  InformationsCard,
  WrapperActionsCard,
  ContainerLoading,
} from "./styles";

interface CardsEventProps {
  titleSearch?: string;
}

interface EventProps {
  id: number;
  title: string;
  description: string;
  date: string;
  dateFormatted: string;
  hour: string;
  email: string;
  image_url: string;
  telephone: string;
  address: string;
  category_id: number;
}

const CardsEvent: React.FC<CardsEventProps> = ({ titleSearch }) => {
  const history = useHistory();
  const [events, setEvents] = useState<EventProps[]>([]);

  const [loading, setLoading] = useState(true);

  const { token } = useSelector<IState, UserLoggedProps>((state) => state.auth);

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get("event", {
        params: {
          name: titleSearch,
        },
      });

      const data = response.data.map((event: EventProps) => ({
        ...event,
        dateFormatted: new Date(event.date).toLocaleDateString("pt-BR", {
          timeZone: "UTC",
        }),
      }));

      setEvents(data);
      setLoading(false);
    }
    loadEvents();
  }, [titleSearch]);

  const handleNavigateToEditEvent = useCallback(
    (event: EventProps) => {
      history.push("/edit/event", {
        id: event.id,
        title: event.title,
        description: event.description,
        date: event.date,
        hour: event.hour,
        email: event.email,
        image_url: event.image_url,
        telephone: event.telephone,
        address: event.address,
        category_id: event.category_id,
      });
    },
    [history]
  );

  const handleDeleteEvent = useCallback(
    async (id: number) => {
      const confirmation = window.confirm("Deseja realmente deletar o evento?");

      if (confirmation) {
        try {
          await api.delete(`event/${id}`);

          toast.success("Evento deletado com sucesso");

          setEvents(events.filter((event) => event.id !== id));
        } catch (error) {
          toast.error("Erro ao deletar evento");
        }
      }
    },
    [events]
  );
  return (
    <ContainerCards>
      {events.map((event) => (
        <CardEvent key={event.id}>
          <Image src={event.image_url} />

          <InformationsCard>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>
              <strong>Data: </strong>
              {event.dateFormatted} às {event.hour}
            </p>
            <p>
              <strong>Localização: </strong>
              {event.address}
            </p>
          </InformationsCard>

          {token && (
            <WrapperActionsCard>
              <MdEdit
                size={25}
                color="#000000"
                onClick={() => handleNavigateToEditEvent(event)}
              />
              <MdDeleteForever
                size={25}
                color="#f64c75"
                onClick={() => handleDeleteEvent(event.id)}
              />
            </WrapperActionsCard>
          )}
        </CardEvent>
      ))}

      {loading && (
        <ContainerLoading>
          <ReactLoading
            type="spinningBubbles"
            color="#ffffff"
            height="20%"
            width="20%"
          />
        </ContainerLoading>
      )}
    </ContainerCards>
  );
};

export default CardsEvent;
