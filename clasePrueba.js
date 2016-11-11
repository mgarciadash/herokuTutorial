var request = require('request');
var moment = require('moment-timezone');

var me = null;

function nombreClase(data){
	me = this;
	me.data = data;
};

nombreClase.prototype = {
	saludar: function(callback){
		var respuesta={
			error:null,
			success:null,
			mensaje:null
		};
		var fecha = moment();
		var fechaIni = fecha.format('YYYY-MM-DD');
		var fechaFin = fecha.subtract(1,'months').format('YYYY-MM-DD');
		console.log( fechaIni );
		console.log( fechaFin );
		respuesta.error=null;
		respuesta.success=true;
		respuesta.mensaje="Hola mundo!";
		callback( respuesta );
	},
	despedirse: function(callback){
		var respuesta={
			error:null,
			success:null,
			mensaje:null
		};
		respuesta.error=null;
		respuesta.success=true;
		respuesta.mensaje="Adiós mundo cruel!";
		callback( respuesta );
	}
};

module.exports = nombreClase;
