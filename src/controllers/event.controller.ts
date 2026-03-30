import { Request, Response } from "express";
import { EventService } from "../services/event.service";
import { ValidateEventSchema } from "./event.schema";

const eventService = new EventService();

//  CREATE EVENT
export const createEvent = async (req: Request, res: Response) => {
  try {
    const result = ValidateEventSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues[0].message
      });
    }

    const event = await eventService.createEventService(req.body);

    return res.status(201).json({
      message: "Event created successfully",
      event
    });

  } catch (error: any) {
    return res.status(500).json({
      message: "Error while creating event",
      error: error.message
    });
  }
};

//  GET ALL EVENTS
export const getEvents = async (_req: Request, res: Response) => {
  try {
    const events = await eventService.getEventsService();

    return res.status(200).json(events);

  } catch (error: any) {
    return res.status(500).json({
      message: "Error while fetching events",
      error: error.message
    });
  }
};

// GET EVENT BY ID
export const getEventById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid event ID"
      });
    }

    const event = await eventService.getEventByIdService(id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found"
      });
    }

    return res.status(200).json(event);

  } catch (error: any) {
    return res.status(500).json({
      message: "Error while fetching event",
      error: error.message
    });
  }
};

// DELETE EVENT
export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid event ID"
      });
    }

    const event = await eventService.getEventByIdService(id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found"
      });
    }

    await eventService.deleteEventService(id);

    return res.status(200).json({
      message: "Event deleted successfully"
    });

  } catch (error: any) {
    return res.status(500).json({
      message: "Error while deleting event",
      error: error.message
    });
  }
};