'use strict'

/*
var nombre = prompt("Ingresa tu nombre");

var texto = `
<h1>Encabezado</h1>
<h2>Mi nombre es: ${nombre} </h2>
`;

document.write(texto);

var cadena="texto1, texto2, texto3";

var cadena_array = cadena.split(", ")

console.log(cadena_array);




var lenguajes = new Array("PHP","PYTHON","JavaScript");

document.write("<ul>")


for(let lenguaje in lenguajes){

	document.write("<li>"+lenguajes[lenguaje]+"</li>");

}




document.write("</ul>");



var lenguajes = new Array("PHP","PYTHON","JavaScript");

var busqueda= lenguajes.find(function(lenguaje){

	return lenguaje == "PHP";

});
*/


function MostrarNumeros(elementos,texto=""){

	document.write("<h1>Contenido del array"+texto+"</h1>");
 	numeros.forEach(function(elemento,index){
	document.write("<strong>"+elemento+"</strong><br/>");
 	});

}

function OrdenarNumeros(elementos){
	numeros.sort(function (a, b){return a-b});
	document.write("<h1>Contenido del array Ordenado</h1>");
 	numeros.forEach(function(elemento,index){
	document.write("<strong>"+elemento+"</strong><br/>");
 	});

}

var numeros = new Array();

for (var i = 0; i <= 5; i++) {
 	numeros.push(parseInt(prompt("Ingresa el numero"+" "+[i+1])));
 } 

MostrarNumeros(numeros,"adiosi");
OrdenarNumeros(numeros);


 