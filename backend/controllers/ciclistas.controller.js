import Ciclista from "../model/Ciclistas.js";
import bcryptjs from "bcryptjs";
import { validationResult } from "express-validator";

const getCiclista = async (req, res) => {
    try {
        const ciclistas = await Ciclista.find();
        res.json(ciclistas);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

const getOneCiclista = async (req, res) => {
    try {
        const ciclistas = await Ciclista.findOne({ _id: req.params.id });
        res.json(ciclistas);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

const deleteCiclista = async (req, res) => {
    try {
        await Ciclista.deleteOne({ _id: req.params.id });
        res.status(200).send();
        res.json({
            "message": "Eliminado satisfactoriamente"
        });

    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

const insertCiclista = async (req, res) => {
    const ciclista = new Ciclista(req.body);
    const { nombre } = ciclista;
    try {
        /* Verificar si el el cilista ya existe */
        const existeCiclista = await Ciclista.findOne({ nombre });
        if (existeCiclista) {
            return res.status(400).json({ message: "Ciclista is registered already" });
        }
        const nuevoCiclista = await ciclista.save();
        res.json(nuevoCiclista);
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

const actualizarCiclista = async (req, res) => {
    try {
        const ciclistaActualizado = await Ciclista.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        });
        res.json(ciclistaActualizado);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

export {
    getCiclista,
    getOneCiclista,
    deleteCiclista,
    actualizarCiclista,
    insertCiclista
}