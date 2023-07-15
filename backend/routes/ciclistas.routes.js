import { Router } from "express";
import { getCiclista } from "../controllers/ciclistas.controller.js";

const router = Router();

router.get('/', getCiclista);


export default router;