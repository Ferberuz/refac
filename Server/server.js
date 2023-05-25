/* Server mantendra la configuracion del servidor */
'use strict'
//llamar las librerias de bodyparser y express
const bodyParser = require('body-parser');
const express = require('express');
//iniciamos express
const app =  express();
//Activar los cors
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Weaders", "Origin, x-Requuest-Width, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    next();
});
//activar los middlewares de express
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require('../Routes/routes'));
module.exports = app;