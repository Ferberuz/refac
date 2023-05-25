const express = require('express');
const modelSucursalNuevo = require('../../Models/sucursales/sucursal');

let app = express();
app.post('/sucursal/nuevo', (req,res)=>{
    let body = req.body;
    console.log(body);

    let newSchemaSucursal = new modelSucursalNuevo({
        nombreSucursal: body.nombreSucursal,
        direccionSucursal: body.direccionSucursal,
        telefonoSucursal: body.telefonoSucursal,
        municipioSucursal: body.municipioSucursal,
        encargadoSucursal: body.encargadoSucursal,
    });

    newSchemaSucursal
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