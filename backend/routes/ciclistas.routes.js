import { Router } from "express";
import { getCiclista, getOneCiclista } from "../controllers/ciclistas.controller.js";

const router = Router();

router.get('/', getCiclista);
router.get('/:id', getOneCiclista);


export default router;