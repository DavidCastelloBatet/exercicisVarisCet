// Definición de la clase

class bebida
{
	constructor(nombreBebida, unidades)
	{
		this.listadoBebidasInterno = [];
		this.nombreBebida = nombreBebida;
		this.unidades = unidades;
		
		// Ya tenemos disponibles las variables "nombreBebida" y "unidades" con su valor.
	}
	
	afegirBeguda()
	{
		// Añade el valor a la matriz.
		this.listadoBebidasInterno.push(this.nombreBebida);
		
		// Demuestra en consola que se han añadido a la matriz
		// los datos obtenidos con el constructor.
		console.log("Matriz después de afegirBeguda : " + this.listadoBebidasInterno); 
	}
	
	afegirUnaAltraBeguda(nombreBebidaAdd)
	{
		// Añade el valor a la matriz.
		this.listadoBebidasInterno.push(nombreBebidaAdd);
		
		// Demuestra en consola aque se han añadido los datos a la matriz.
		console.log("Matriz después de afegirUnaAltraBeguda : " + this.listadoBebidasInterno); 
	}
	
	mostrarBeguda()
	{
		// Muestra en pantalla los datos de la matriz.
		document.write("<br/>Datos consultados y mostrados internamente des del método: " + this.listadoBebidasInterno);
		
		// Muestra en consola los datos a la matriz.
		console.log("Matriz después de mostrarBeguda : " + this.listadoBebidasInterno);
	}
	
	actualitzarBeguda(modificarPosicion, nuevaBebida)
	{
		// Opción 1
		//this.listadoBebidasInterno[modificarPosicion] = nuevaBebida;
		
		// Opción 2
		this.listadoBebidasInterno.splice(modificarPosicion,1,nuevaBebida);
		
		// Demuestra en consola que se han modificado los datos a la matriz.
		console.log("Matriz después de actualitzarBeguda : " + this.listadoBebidasInterno);
	}
	
	eliminarBeguda(eliminarPosicion)
	{
		// Elimina la posición solicitada
		// No hay validación de datos
		this.listadoBebidasInterno.splice(eliminarPosicion,1);
		
		// Demuestra en consola que se han eliminado datos de la matriz.
		console.log("Matriz después de eliminarBeguda : " + this.listadoBebidasInterno);
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
	var bebidaDelPrompt = prompt('Introduce el nombre de la bebida').toLowerCase(); 
	var unidadesDelPrompt = prompt('Introduce el número de unidades');
	
	
	// Demostración en consola de que se han recibido los valores
	console.log(bebidaDelPrompt);
	console.log(unidadesDelPrompt);
	
	
	// Creción de la instancia del objeto con el nombre "inventario".
	// A partir de la clase bebida.
	// Pasándole los valores "bebidaDelPrompt" y "unidadesDelPrompt".
	let inventario = new bebida(bebidaDelPrompt, unidadesDelPrompt);
	console.log("Instancia del objeto creada con el nombre 'inventario' y con datos iniciales pasados.");	
	
	
	
/*
	Desde ahora ya existe una instancia del objeto "inventario"
	generado a partir de la clase "bebida"
	a la que le hemos pasado la información recibida.
*/




/********* Create / Crear *********/
	
	// Llamada al método para que añada una bebida.
	inventario.afegirBeguda();
	
	// Llamada al método para que añada una nueva bebida.
	inventario.afegirUnaAltraBeguda(prompt('Añade una nueva bebida').toLowerCase());


/********* Read / Leer (y mostrar) *********/
	
	// Llamada al método para que muestre las bebidas almacenadas.
	inventario.mostrarBeguda();

	
/********* Update / Actualizar *********/

	// Llama al método que actualiza 
	inventario.actualitzarBeguda(prompt('Posición del elemento a modificar'),prompt('Nueva bebida'));

	
/********* Delete / Eliminar *********/

	// Llama al método que elimina una bebida 
	inventario.eliminarBeguda(prompt('Posición a eliminar'));
	
	
	
	
	document.write("<br/>Datos internos consultados y mostrados externamente : " + inventario.listadoBebidasInterno);
	