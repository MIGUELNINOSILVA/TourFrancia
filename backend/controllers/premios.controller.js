import Premio from "../model/Premios.js";

const getPremios = async (req, res) => {
    try {
        const premios = await Premio.find();
        res.json(premios);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

const getOnePremio = async (req, res) => {
    try {
        const premios = await Premio.findOne({ _id: req.params.id });
        res.json(premios);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

const deletePremio = async (req, res) => {
    try {
        await Premio.deleteOne({ _id: req.params.id });
        res.status(200);
        res.json({
            "message": "Eliminado satisfactoriamente"
        });

    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

const insertPremio = async (req, res) => {
    const premio = new Premio(req.body);
    try {
        const nuevoPremio = await premio.save();
        res.json(nuevoPremio);
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

const actualizarPremio = async (req, res) => {
    try {
        const premioActualizado = await Premio.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        });
        res.json(premioActualizado);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

export {
    getPremios,
    getOnePremio,
    deletePremio,
    insertPremio,
    actualizarPremio
}