const mongoose = require('mongoose');
const reservaSchema = new mongoose.Schema({

    nombre: {type: String, require: true},
    numero  : {type: Number, require: true},
    email: { type: String, required: true, unique: true},
    personas: { type: Number, required: true},
    fecha: { type: String, required: true},
    hora: { type: String, required: true},
    celebracion: { type: String, required: true}
})

module.exports = mongoose.model('Reserva', reservaSchema)