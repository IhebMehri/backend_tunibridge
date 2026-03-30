import { Router } from "express";
import {
  createEvent,
  getEvents,
  getEventById,
  deleteEvent
} from "../controllers/event.controller";

import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.get("/:id", getEventById);
router.delete("/:id", authMiddleware, deleteEvent);

export default router;