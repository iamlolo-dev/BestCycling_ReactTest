const express = require('express');
require('dotenv').config();

let port = process.env.PORT || 4040  // establecemos nuestro puerto

//Crear el servidor de express
const app = express();

//Directorio publico
app.use(express.static('public'));

//Lectura y paseo del body
app.use(express.json());


//Rutas
app.use('/api/auth', require('./routes/auth'));

//Escuchar peticiones
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});