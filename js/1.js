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



var num1= parseInt(prompt("Ingrese primer numero"));
var num2= parseInt(prompt("Ingrese segundo numero"));

if (num1==num2) {
    alert("Son iguales");
}else if (num1>num2) {
	alert("El mayor es"+num1);
	alert("El mayor es"+num2);
}else if (num1<num2) {
	alert("El mayor es"+num2);
	alert("El menor es"+num1);
}


var sum=0;
var contador=0;

do{
	var num=parseInt(prompt("Ingrese numero"));
	if (num>=0) {
		sum=sum+num;
		contador++;
	}else{
		break;
	}
	console.log(sum);
	console.log(contador);
		
	var media=sum/contador;
}while(num>=0);
alert("La suma es"+' '+sum);
alert("La media es"+' '+media);


var num1 = parseInt(prompt("Introduce el primer numero"));
var num2 = parseInt(prompt("Introduce el segundo numero"));

for (var i = num1+1; i< num2; i++){	
	console.log(i);
}


do{
	do{
		var num1 = parseInt(prompt("Introduce el primer numero"));
	}while(num1<=0);

	do{
		var num2 = parseInt(prompt("Introduce el segundo numero"));
	}while(num2<=0);

	if (num1>num2) {
		
		alert("El numero 1 es mayor al numero 2, Ingrese de nuevo");

	}

	
	
}while(num1>num2);


for (var i = num1+1; i< num2; i++){	
	if (i%2!=0) {
		console.log(i+"Es impar");
	}
	
}



var numero = parseInt(prompt("Ingrese el numero"));

for (var i = 1; i <=numero; i++) {
	if (numero%i==0) {
		document.write('<h1>'+i+'</h1>');
	}
}




do{
	var numero = parseInt(prompt("Ingresa numero"));
}while(numero<=0);


if (numero%2==0) {
	document.write("<h1>El numero"+numero+"es par"+"</h1>");
}else{
	document.write("<h1>El numero"+" "+numero+" "+"es impar"+"</h1>");	
}



do{
	var numero = parseInt(prompt("Ingresa numero"));
}while(numero<=0);

for (var j = 1; j <=numero; j++) {
	document.write("<h1>"+"Tabla del"+" "+j+"</h1>");
	for (var i = 1; i <= 10; i++) {
		var resultado=j*i;
		document.write("<h1>"+j+"x"+i+"="+resultado+"</h1>");
	}

}





var nombre =prompt('Dame tu nombre');

var apellidos =prompt('Dame tus apellidos');


var texto =` 
	<h1> Hola que tal </h1>
	<h3>Mi nombre es: ${nombre} </h3>
	<h3>Mis apellidos son: ${apellidos} </h3>
`;

document.write(texto);


//Funcion anonima

var pelicula = function(nombre) {
	return "La pelicula es" + nombre;

}





//Callback

function sumame (numero1,numero2,sumaYmuestra,sumaPordos){

	var sumar = numero1+numero2;
	sumaYmuestra(sumar);
	sumaPordos(sumar);

	return sumar;

}


sumame(5,3,function (dato){
	console.log("La suma es:", dato);
},function (dato){
	console.log("La suma por dos",dato*2);
});



//console.log(sumame(6,3));




var lenguajes = ["PHP","JAVA SCRIPT","JAVA","C++","C#"];


console.log(lenguajes);







var lenguajes = new Array("PHP","JAVA SCRIPT","JAVA","C++","C#");

document.write('<h1>'+'Lenguajes de Programacion'+'</h1>');

document.write('<ul>');


//console.log(lenguajes);

lenguajes.forEach((elemento,indice)=>{
	document.write('<li>'+indice+'-'+elemento+'</li>');
});

document.write('</ul>');




var peliculas = new Array('Batman','La Sirenita','Spider Man','Thor');



 var indice = peliculas.indexOf('La Sirenita');


if(indice>-1){
	peliculas.splice(indice,1);
}

console.log(peliculas);


var cadena = peliculas.join();

console.log(cadena);






var categorias = new Array("Accion","Terror","Suspenso");
var peliculas = new  Array("Batman","Spider Man","La Monja");


var cine = new Array(categorias,peliculas);
console.log(cine[1][2],cine[0][1]);




var numeros = new Array();

for (var i=0;i<=5;i++){
	var contador = i+1;
	numeros.push(parseInt(prompt("Introduce el numero"+[i+1])));

}


document.write("<h1>El arreglo tiene "+numeros.length+" elementos");




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


*/