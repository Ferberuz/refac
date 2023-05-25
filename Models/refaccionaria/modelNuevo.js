const mongoose = require('mongoose');
let schema = mongoose.Schema;
let nuevoProductoRefaccionaria = new schema({
    nombreProducto: {type:String},
    marcaProducto: {type:String},
    presentacionProducto: {type:String},
    contenidoProducto: {type:String},
    costoProducto: {type:Number},
    proveedorProducto: {type:String},
    cantidadIngresa: {type:Number},
    statusProducto: {type:Boolean},
    descripcionProducto: {type:String},
});

module.exports = mongoose.model("nuevoProducto", nuevoProductoRefaccionaria);