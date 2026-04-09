import { Router } from "express";
import {
  createDossier,
  getDossiers,
  getDossierById,
  updateDossier,
  deleteDossier
} from "../controllers/dossier.controller";

const router = Router();

router.post("/", createDossier);
router.get("/", getDossiers);
router.get("/:id", getDossierById);
router.put("/:id", updateDossier);
router.delete("/:id", deleteDossier);

export default router;