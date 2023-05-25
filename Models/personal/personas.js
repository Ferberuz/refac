const mongoose = require('mongoose');
let schema = mongoose.Schema;
let nuevoPersonal = new mongoose.Schema({
    nombrePersona: {type:String},
    apellidoPaterno: {type:String},
    apellidoMaterno: {type:String},
    edadPersona: {type:String},
    salarioPersona: {type:Number},
    fechaInicioPersona: {type:String},
});

module.exports = mongoose.model('nuevoPersona', nuevoPersonal);