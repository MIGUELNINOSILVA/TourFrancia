import Equipos from "../model/Equipos.js";

const getEquipos = async(req, res)=>{
    try {
        const equipos = await Equipos.find();
        res.json(equipos);
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

const getOneEquipos = async(req, res)=>{
    try {
        const equipos = await Equipos.findOne({_id: req.params.id}); 
        res.json(equipos);
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

const borrarEquipos = async(req, res)=>{
    try {
        await Equipos.deleteOne({_id: req.params.id});
        res.json({
            "message": "Eliminado satisfactoriamente"
        })
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

export {
    getEquipos,
    getOneEquipos,
    borrarEquipos
}