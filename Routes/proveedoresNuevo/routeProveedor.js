const express = require('express');
const modelProveedorNuevo = require('../../Models/proveedores/proveedor');

let app = express();
app.post('/proveedor/nuevo', (req,res)=>{
    let body = req.body;
    console.log(body);

    let newSchemaProveedor = new modelProveedorNuevo({
        nombreProveedor: body.nombreProveedor,
        vendedorProveedor: body.vendedorProveedor,
        cobradorProveedor: body.cobradorProveedor,
        productoProveedor: body.productoProveedor,
        costoProveedor: body.costoProveedor,
    });

    newSchemaProveedor
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