const mongoose = require('mongoose');
let schema = mongoose.Schema;
let nuevoSucursal = new mongoose.Schema({
    nombreSucursal: {type:String},
    direccionSucursal: {type:String},
    telefonoSucursal: {type:Number},
    municipioSucursal: {type:String},
    encargadoSucursal: {type:String},
});

module.exports = mongoose.model('nuevoSucu', nuevoSucursal);