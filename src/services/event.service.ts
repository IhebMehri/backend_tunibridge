import { Repository } from "typeorm";
import { Event } from "../entities/event.entity";
import { AppDataSource } from "../config/data-source";
import { CreateEvent } from "../interfaces/event.interface";

export class EventService {
  private eventRepository: Repository<Event>;

  constructor() {
    this.eventRepository = AppDataSource.getRepository(Event);
  }

  // CREATE EVENT
  async createEventService(data: CreateEvent): Promise<Event> {
    const newEvent = this.eventRepository.create(data);
    const eventSaved = await this.eventRepository.save(newEvent);

    return eventSaved;
  }

  // GET ALL EVENTS
  async getEventsService(): Promise<Event[]> {
    return await this.eventRepository.find();
  }

  // GET EVENT BY ID
  async getEventByIdService(id: number): Promise<Event | null> {
    const event = await this.eventRepository.findOne({
      where: { id }
    });

    return event;
  }

  // DELETE EVENT
  async deleteEventService(id: number): Promise<boolean> {
    const result = await this.eventRepository.delete(id);

    return result.affected ? true : false;
  }
}