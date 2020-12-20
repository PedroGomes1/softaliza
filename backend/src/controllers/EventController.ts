import { Request, Response } from 'express';
import { getRepository, ILike } from 'typeorm';
import Event from '../models/Event';

class EventController {
  async index(request: Request, response: Response) {
    const { name } = request.query;
    const eventRepository = getRepository(Event);

    const events = await eventRepository.find({
      title: ILike(`%${name}%`)
    });
    const eventsData = events.map((event) => ({
      ...event,
      image_url: `${process.env.APP_URL}/uploads/${event.image_url}`
    }))

    return response.json(eventsData);
  }

  async create(request: Request, response: Response) {
    const {
      title,
      description,
      date,
      hour,
      email,
      telephone,
      address,
      category_id,
    } = request.body;
    const requestImage = request.file;

    const eventRepository = getRepository(Event);

    const events = eventRepository.create({
      title,
      description,
      date,
      hour,
      email,
      telephone,
      address,
      category_id,
      image_url: requestImage.filename,
    });

    await eventRepository.save(events);

    return response.json(events);
  }

  async update(request: Request, response: Response) {
    const { idEvent } = request.params;
    const {
      title,
      description,
      date,
      hour,
      email,
      telephone,
      address,
      category_id,
    } = request.body;
    const requestImage = request.file;

    const eventRepository = getRepository(Event);

    const event = await eventRepository.findOne(idEvent);

    if (!event) {
      return response.status(400).json('Event not found');
    }

    const newEventData = {
      title,
      description,
      date,
      hour,
      email,
      telephone,
      address,
      category_id,
      image_url: requestImage?.filename || event.image_url,
    };

    const updatedEvent = await eventRepository.save({
      ...event,
      ...newEventData,
    });

    return response.json(updatedEvent);
  }

  async delete(request: Request, response: Response) {
    const { idEvent } = request.params;

    const eventRepository = getRepository(Event);

    const event = await eventRepository.findOne(idEvent);

    if (!event) {
      return response.status(400).json('Event not found');
    }

    await eventRepository.remove(event);

    return response.status(204).json();
  }
}
export default new EventController();
