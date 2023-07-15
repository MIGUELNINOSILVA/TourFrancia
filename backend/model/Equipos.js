import e from "express";
import mongoose from "mongoose";

const equiposSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    pais: {
        type: String,
        required: true,
        trim: true
    },
    director: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamp: true
});

const Equipos = mongoose.model('Equipos',equiposSchema);

export default Equipos;