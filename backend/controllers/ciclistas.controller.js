import Ciclista from "../model/Ciclistas.js";

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

export {
    getCiclista,
    getOneCiclista
}