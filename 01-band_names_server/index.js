const express = require('express');
const path = require('path');
require('dotenv').config();

// app de express
const app = express();
// node Server

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/sockets');

//path publico

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto!!!', 3000);
})