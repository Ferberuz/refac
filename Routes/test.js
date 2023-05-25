const express = require('express');
const app = express();
const producto = require('../Models/refaccionaria/modelNuevo');
const proveedor = require('../Models/proveedores/proveedor');
/* 
app.get('/prueba',(req,res)=>{
    
     return res.json({
        ok:true,
        message: 'Prueba de server funcionando',
        
    });
}); */


app.get('/proveedor',async(req,res)=>{
    
    const prodc = await proveedor.find().then(function(data){
        if(data){
            res.json({
                data,
                message: 'xxxxxx prov'
            })
        }
    }).catch(function(err){
        if(err){
            return res.json({
                status:404,
                message: 'error',
                err
        })
    }});

});



app.get('/producto',async(req,res)=>{
    
    const prodc = await producto.find().then(function(data){
        if(data){
            res.json({
                data
            })
        }
    }).catch(function(err){
        if(err){
            return res.json({
                status:404,
                message: 'error',
                err
        })
    }});

});


module.exports = app;