import { Router } from "express";
import { getCiclista, getOneCiclista, deleteCiclista } from "../controllers/ciclistas.controller.js";

const router = Router();

router.get('/', getCiclista);
router.get('/:id', getOneCiclista);
router.delete('/delete/:id',deleteCiclista);


export default router;