const express = require('express');
const modelProductoNuevo = require('../../Models/refaccionaria/modelNuevo');

let app = express();
app.post('/producto/nuevo', (req,res)=>{
    let body = req.body;
    console.log(body);

    let newSchemaProducto = new modelProductoNuevo({
        nombreProducto: body.nombreProducto,
        marcaProducto: body.marcaProducto,
        presentacionProducto: body.presentacionProducto,
        contenidoProducto: body.contenidoProducto,
        costoProducto: body.costoProducto,
        proveedorProducto: body.proveedorProducto,
        cantidadIngresa: body.cantidadIngresa,
        statusProducto: body.statusProducto,
        descripcionProducto: body.descripcionProducto,
    });

    newSchemaProducto
        .save()
        .then(
            (data)=>{
                return res.status(200)
                .json({
                    ok:true,
                    message:'datos guardados',
                    data
                });
            }
        )
        .catch(
            (err)=>{
                return res.status(500)
                .json({
                    ok:false,
                    message:'datos NO guardados',
                    err
                });
            }
        );
});
module.exports=app;