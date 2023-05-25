/* Routes contendra los metodos get, post, put, delete, update */
const express = require('express');
const app = express.Router();//router* 

app.use(require('./test')); 
app.use(require('./ProductoNuevo/routeNuevoProducto'));
app.use(require('./personalNuevo/routePersonal'));
app.use(require('./proveedoresNuevo/routeProveedor'));
app.use(require('./sucursalesNuevo/routeSucursal'));

module.exports = app;