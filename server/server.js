//Carga de libreria de express
const express = require('express');

//Carga de libreria de path
const path = require('path');

//carga de libreria de socket.io
const socketIO = require('socket.io');

//carga de libreria http
const http = require('http');

//Utilizamos express
const app = express();

//definir el servidor para correr la aplicacion
let server = http.createServer(app);

//Compartir y hacer publica la carpeta public
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

//Uso de middleware para hacer uso de la carpeta publica y que todos puedan acceder a ella
app.use(express.static(publicPath));

//IO = Esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});