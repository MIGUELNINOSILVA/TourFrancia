import Etapa from '../model/Etapa.js';

const getEtapa = async (req, res) => {
    try {
        const etapas = await Etapa.find();
        res.json(etapas);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

const getOneEtapas = async (req, res) => {
    try {
        const etapas = await Etapa.findOne({ _id: req.params.id });
        res.json(etapas);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

const deleteEtapas = async (req, res) => {
    try {
      await Etapa.deleteOne({ _id: req.params.id });
      res.status(200).json({
        message: "Eliminado satisfactoriamente"
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  

const insertEtapas = async (req, res) => {
    const etapas = new Etapa(req.body);
    try {
        const nuevoEtapa = await etapas.save();
        res.json(nuevoEtapa);
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

const actualizarEtapas = async (req, res) => {
    try {
        const etapasActualizado = await Etapa.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        });
        res.json(etapasActualizado);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}




export {
    getEtapa,
    getOneEtapas,
    deleteEtapas,
    insertEtapas,
    actualizarEtapas
}