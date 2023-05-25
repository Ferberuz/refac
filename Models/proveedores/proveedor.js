const mongoose = require('mongoose');
let schema = mongoose.Schema;
let nuevoProveedor = new mongoose.Schema({
    nombreProveedor: {type:String},
    vendedorProveedor: {type:String},
    cobradorProveedor: {type:String},
    productoProveedor: {type:String},
    costoProveedor: {type:Number},
});

module.exports = mongoose.model('nuevoProv', nuevoProveedor);