import { Router } from "express";
import { getEquipos, getOneEquipos, borrarEquipos, insertEquipos, updateEquipos } from "../controllers/equipos.controller.js";


const router = Router();

router.get('/', getEquipos);
router.get('/:id', getOneEquipos);
router.delete('/delete/:id', borrarEquipos);
router.post('/add', insertEquipos);
router.patch('/upd/:id', updateEquipos);

export default router;