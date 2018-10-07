//concatenate path without the in and out step "../"
const path = require('path');
//express is used in middleware , listen a port 
const express = require ('express');

//__dirname is the recent directory
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();


app.listen(3000, ()=>{
    console.log(`server is up on port ${port}`);
});