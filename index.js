const express = require("express")
require('dotenv').config({path: '.env'})
const app = express()

const port = process.env['port']


app.listen(port, ()=>{console.log("Connect with the port", port)})

/*var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
    }).then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err))
*/