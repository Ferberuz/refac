/* Guardara las clsases y constantes de Clusters en la nunbe, entre otras cosa. */
'use strict'
const mongoose = require('mongoose');
const app = require('../Server/server');
const port = 3900;

/* generar promesa global */
mongoose.Promise=global.Promise;

/* conexion a la db */
mongoose.connect('mongodb://127.0.0.1:27017/refaccionaria', {
    useNewUrlParser: true})
    .then(()=>{
        console.log("Base de datos corriendo padrino")

        app.listen(port, ()=>{
            console.log(`Server corriendo en puerto: ${port}`);

    });
});

/* console.log('Nodemon ejecutandose correctamente'); */