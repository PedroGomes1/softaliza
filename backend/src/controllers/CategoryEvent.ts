import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import EventCategory from '../models/EventCategory';

class CategoryEvent {
  async index(request: Request, response: Response) {
    const eventRepository = getRepository(EventCategory);

    const events = await eventRepository.find();

    return response.json(events);
  }

  async create(request: Request, response: Response) {
    const { description } = request.body;

    const eventRepository = getRepository(EventCategory);

    const events = eventRepository.create({
      description,
    });

    await eventRepository.save(events);

    return response.json(events);
  }

  async update(request: Request, response: Response) {
    const { idEventCategory } = request.params;

    const { description } = request.body;

    const eventCategoryRepository = getRepository(EventCategory);

    const eventCategory = await eventCategoryRepository.findOne(
      idEventCategory,
    );

    if (!eventCategory) {
      return response.status(400).json('Event category not found');
    }

    const updatedEventCategory = await eventCategoryRepository.save({
      ...eventCategory,
      description,
    });

    return response.json(updatedEventCategory);
  }

  async delete(request: Request, response: Response) {
    const { idEventCategory } = request.params;

    const eventCategoryRepository = getRepository(EventCategory);

    const eventCategory = await eventCategoryRepository.findOne(
      idEventCategory,
    );

    if (!eventCategory) {
      return response.status(400).json('Event category not found');
    }

    await eventCategoryRepository.remove(eventCategory);

    return response.status(204).json();
  }
}
export default new CategoryEvent();
