import { Router } from "express";
import { getEquipos, getOneEquipos } from "../controllers/equipos.controller.js";


const router = Router();

router.get('/', getEquipos);
router.get('/:id', getOneEquipos);

export default router;