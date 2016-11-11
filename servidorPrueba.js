var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var clasePrueba = require('./clasePrueba.js');
var nconf = require('nconf');

nconf.file('./config/config.json');

app.set('port', 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var server=http.createServer(app).listen(app.get('port'), function(){
	console.log('server HTTP listening on port ' + app.get('port'));
});

app.post('/saludar', function(req, res) {
	var prueba = new clasePrueba(req.body);
	prueba.saludar(function(response){
		console.log(response);
		res.json(response);
	});
});

app.post('/despedirse', function(req, res) {
	var prueba = new clasePrueba(req.body);
	prueba.despedirse(function(response){
		console.log(response);
		res.json(response);
	});
});