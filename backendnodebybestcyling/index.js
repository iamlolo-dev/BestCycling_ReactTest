const express = require('express');
const cors    = require('cors');
require('dotenv').config();

let port = process.env.PORT || 4040  // establecemos nuestro puerto

//Crear el servidor de express
const app = express();

//Cors
app.use(cors());

//Directorio publico
app.use(express.static('public'));

//Lectura y paseo del body
app.use(express.json());

//Rutas
app.use('/subscription', require('./routes/auth'));

//Escuchar peticiones
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});