//dependencias
var express = require('express');
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());
//creacion de una ruta relativa "public"
app.use(express.static('public'));

//uso de la ruta relativa "public" para utilizar los archivos html de la carpeta "views"
app.set('views', path.join(__dirname, 'public/views'));
app.engine("html",require("ejs").renderFile);
app.set('view engine', 'html');

//Creacion del puerto 
app.listen(3000, function() {  
	console.log("Servidor escuchando en el puerto 3000");
});

//exportacion de la variable "app" para poder utilizarse en otros ficheros
module.exports = app;