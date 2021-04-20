const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    nombre: {type: String, require: true},
    apellido: {type: String, require: true},
    email: { type: String, required: true, unique: true},
    mensaje: { type: String, required: true}
})

module.exports = mongoose.model('User', userSchema)