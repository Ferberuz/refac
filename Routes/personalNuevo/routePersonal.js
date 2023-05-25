const express = require('express');
const modelPersonalNuevo = require('../../Models/personal/personas');

let app = express();
app.post('/personal/nuevo', (req,res)=>{
    let body = req.body;
    console.log(body);

    let newSchemaPersonal= new modelPersonalNuevo({
        nombrePersona: body.nombrePersona,
        apellidoPaterno: body.apellidoPaterno,
        apellidoMaterno: body.apellidoMaterno,
        edadPersona: body.edadPersona,
        salarioPersona: body.salarioPersona,
        fechaInicioPersona: body.fechaInicioPersona,
    });

    newSchemaPersonal
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