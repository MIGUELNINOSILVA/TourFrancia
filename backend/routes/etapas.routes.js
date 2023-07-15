import { Router } from "express";
import { getEtapa, getOneEtapas, deleteEtapas, insertEtapas, actualizarEtapas } from '../controllers/etapas.controller.js';

const router = Router();

router.get('/', getEtapa);
router.get('/:id', getOneEtapas);
router.delete('/delete/:id', deleteEtapas);
router.post('/add', insertEtapas);
router.patch('/upd/:id', actualizarEtapas);

export default router;