import { Router } from "express";
import { getPremios, getOnePremio, deletePremio, insertPremio, actualizarPremio } from '../controllers/premios.controller.js';

const router = Router();

router.get('/', getPremios);
router.get('/:id', getOnePremio);
router.delete('/delete/:id', deletePremio);
router.post('/add', insertPremio);
router.patch('/upd/:id',actualizarPremio);

export default router;

