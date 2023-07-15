import { Router } from "express";
import { getEquipos, getOneEquipos, borrarEquipos, insertEquipos } from "../controllers/equipos.controller.js";


const router = Router();

router.get('/', getEquipos);
router.get('/:id', getOneEquipos);
router.delete('/delete/:id', borrarEquipos);
router.post('/add', insertEquipos);

export default router;