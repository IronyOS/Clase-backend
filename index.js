const express = require('express');
const morgan = require('morgan');
require('dotenv').config()
const app = express()
const path = require('path')

app.use(morgan('dev'))
app.use(express.json())

// Routes

app.use('/api/', require('./routes/contacts'))

app.set('port', process.env.port);
app.listen(app.get('port'), ()=>{
    console.log(`servidor corriendo en el puerto ${app.get('port')}`);
})