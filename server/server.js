//concatenate path without the in and out step "../"
const path = require('path');
//we use the http library by our selves ecause this lead us to make sockets
const http = require('http');
//express is used in middleware , listen a port 
const express = require ('express');
//this library is for socket making , socket library is backend and front end
const socketIO = require('socket.io');


//__dirname is the recent directory
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
//mak something when an event happens
io.on('connection', (socket) => {
    console.log('New user connected');
  
    socket.on('disconnect', () => {
      console.log('User was disconnected');
    });
  });

server.listen(3000, ()=>{
    console.log(`server is up on port ${port}`);
});