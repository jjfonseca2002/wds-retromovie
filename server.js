//dotenv para variables de entorno - Solo usamos Dotenv en entorno development
//cross-env nos permite definir en que entorno desarrollo/produccion estamos
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express()
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index.js');
const path = require("path"); //modulo de Express que previene errores de enrutamiento con /,\ o //

//Conexion con la BD
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Conectado a la Base de Datos'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);

//Static Files - Archivos NO dinámicos
//Cualquier usuario puede acceder a esta carpeta
app.use(express.static(path.join(__dirname, "public")));
//app.use(express.static('public'));

//Rutas
app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);