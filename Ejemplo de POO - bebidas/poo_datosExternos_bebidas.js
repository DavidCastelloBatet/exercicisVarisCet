// Definición de la clase

class bebida
{
	constructor()
	{
		this.listadoBebidasInterno = [];
		
		// Ya tenemos disponibles las variables "nombreBebida" y "unidades" con su valor.
	}
	
	
	actualitzarBeguda(modificarPosicion, nuevaBebida)
	{
		
	}
	
	eliminarBeguda(eliminarPosicion)
	{

	}
	
}


/* 
	El código que viene a continuación está fuera de la clase.
	Aquí el objeto aún no existe.
*/



	// Opción 1: Valor recogido del formulario.
	// var bebidaDelFormulario = document.getElementById("bebida").value;
	// var bebidaDelFormulario = document.getElementById("unidades").value;

	// Opción 2: Valores recogidos con un prompt.
	var bebidaDelPrompt = prompt('Introduce el nombre de una bebida').toLowerCase(); 
	var unidadesDelPrompt = prompt('Introduce el número de unidades');
	
	
	
	// Demostración en consola de que se han recibido los valores
	console.log(bebidaDelPrompt);
	console.log(unidadesDelPrompt);
	
	
	
	// Creción de la instancia del objeto con el nombre "inventario".
	// A partir de la clase bebida.
	// Pasándole los valores "bebidaDelPrompt" y "unidadesDelPrompt".
	let inventario = new bebida();
	console.log("Instancia del objeto creada con el nombre 'inventario'");
	
	
	
/*
	Desde ahora ya existe una instancia del objeto "inventario"
	generado a partir de la clase "bebida"
	a la que le hemos pasado la información recibida.
*/


	
	alert("(!!!) La forma de proceder a partir de este punto no se corresponde con las prácticas recomendadas en POO.");



/********* Create / Crear *********/
	
	// Añade externamente un valor a la matriz.
	inventario.listadoBebidasInterno.push(bebidaDelPrompt);
	
	// Demuestra en consola que se han añadido a la matriz
	// los datos obtenidos con el constructor.
	console.log("Matriz después de añadir externamente la bebida :" + inventario.listadoBebidasInterno);



	// Añade externamente un nuevo valor a la matriz.
	inventario.listadoBebidasInterno.push(prompt('Añade una nueva bebida').toLowerCase());
	
	// Demuestra en consola aque se han añadido los datos a la matriz.
	console.log("Matriz después de añadir externamente una nueva bebida  :" + inventario.listadoBebidasInterno); 


/********* Read / Leer (y mostrar) *********/
	
	// Muestra en pantalla los datos de la matriz des de una forma externa.
	document.write("<br/>Datos consultados y mostrados externamente al objeto: " + inventario.listadoBebidasInterno);
	
	// Muestra en consola los datos a la matriz.
	console.log("Matriz después de mostrar la matriz :" + inventario.listadoBebidasInterno);

	
/********* Update / Actualizar *********/

	// Actualizar una bebida
	
	// Opción 1
	//inventario.listadoBebidasInterno[modificarPosicion] = nuevaBebida;
		
	// Opción 2
	inventario.listadoBebidasInterno.splice(prompt('Posición del elemento a modificar'),1,prompt('Nueva bebida'));
	
	// Demuestra en consola que se han modificado los datos a la matriz.
	console.log("Matriz después de actualizar una bebida :" + inventario.listadoBebidasInterno);

	
/********* Delete / Eliminar *********/

	// Elimina la posición solicitada
	// (!!!) No hay validación de datos
	inventario.listadoBebidasInterno.splice(prompt('Posición a eliminar'),1);
	
	// Demuestra en consola que se han eliminado datos de la matriz.
	console.log("Matriz después de eliminar la posición solicitada :" + inventario.listadoBebidasInterno);
