import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { ContainerCards, CardEvent, Image, InformationsCard } from "./styles";

interface CardsEventProps {
  titleSearch?: string;
}

interface EventProps {
  id: string;
  title: string;
  description: string;
  date: string;
  hour: string;
  email: string;
  image_url: string;
  telephone: string;
  address: string;
}

const CardsEvent: React.FC<CardsEventProps> = ({ children, titleSearch }) => {
  const [events, setEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get("event");

      setEvents(
        response.data.map((event: EventProps) => ({
          ...event,
          date: new Intl.DateTimeFormat("pt-br").format(new Date(event.date)),
        }))
      );
    }
    loadEvents();
  }, []);

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get("event/search", {
        params: {
          name: titleSearch,
        },
      });

      setEvents(response.data);
    }
    loadEvents();
  }, [titleSearch]);

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
              {event.date} às {event.hour}
            </p>
            <p>
              <strong>Localização: </strong>
              {event.address}
            </p>
          </InformationsCard>
          {children}
        </CardEvent>
      ))}
    </ContainerCards>
  );
};

export default CardsEvent;
