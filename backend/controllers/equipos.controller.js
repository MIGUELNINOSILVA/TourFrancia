import Equipos from "../model/Equipos.js";

const getEquipos = async (req, res) => {
    try {
        const equipos = await Equipos.find();
        res.json(equipos);
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

const getOneEquipos = async (req, res) => {
    try {
        const equipos = await Equipos.findOne({ _id: req.params.id });
        res.json(equipos);
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

const borrarEquipos = async (req, res) => {
    try {
        await Equipos.deleteOne({ _id: req.params.id });
        res.json({
            "message": "Eliminado satisfactoriamente"
        })
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

const insertEquipos = async (req, res) => {
    const equipo = new Equipos(req.body);
    try {
        const nuevoEquipo = await equipo.save();
        res.json(nuevoEquipo);
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

const updateEquipos = async (req, res) => {
    try {
        const updateEquipos = await Equipos.findOneAndUpdate({_id:req.params.id}, req.body,{
            new:true
        });
        res.json(updateEquipos);
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

export {
    getEquipos,
    getOneEquipos,
    borrarEquipos,
    insertEquipos,
    updateEquipos
}