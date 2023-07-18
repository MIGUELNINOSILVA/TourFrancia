import { Router } from "express";
import { getCiclista, getOneCiclista, deleteCiclista, actualizarCiclista, insertCiclista } from "../controllers/ciclistas.controller.js";
import { validateDocuments } from "../middlewares/validate.documents.js";
import { check } from "express-validator";
import Equipos from "../model/Equipos.js";
const router = Router();

router.get('/', getCiclista);
router.get('/:id', getOneCiclista);
router.delete('/delete/:id', deleteCiclista);
router.patch('/upd/:id', actualizarCiclista);
router.post('/add', [
    check("nombre", "El nombre es Obligatorio, no válido").not().isEmpty(),
    check("nacionalidad", "Obligatorio ingresar nacionalidad, Nacionalidad no válida").not().isEmpty(),
    check("edad").custom((edad) => {
        if (edad && edad < 18) {
            throw new Error('La edad debe ser mayor a 18');
        }
        return true;
    }),
    check("equipo").custom(async(equipo='')=>{
        const existeEquipo = await Equipos.findOne({equipo});
        if (!existeEquipo) {
            throw new Error(`El equipo ${equipo} no está registrado en la base de datos`);
        }
    }),
    validateDocuments

],insertCiclista);

export default router;