import { Router } from "express";
import { getCiclista, getOneCiclista, deleteCiclista, actualizarCiclista } from "../controllers/ciclistas.controller.js";

const router = Router();

router.get('/', getCiclista);
router.get('/:id', getOneCiclista);
router.delete('/delete/:id', deleteCiclista);
router.patch('/upd/:id', actualizarCiclista);


export default router;