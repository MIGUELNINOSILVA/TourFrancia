import { Router } from "express";
import { getCiclista, getOneCiclista, deleteCiclista, actualizarCiclista, insertCiclista } from "../controllers/ciclistas.controller.js";

const router = Router();

router.get('/', getCiclista);
router.get('/:id', getOneCiclista);
router.delete('/delete/:id', deleteCiclista);
router.patch('/upd/:id', actualizarCiclista);
router.post('/add', insertCiclista);

export default router;