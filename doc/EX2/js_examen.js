// Comenzamos todo el proceso cuando la página se haya cargado completamente
window.addEventListener("load", comienzo);

// Función contenedora de todos los procedimientos
function comienzo() {
	//Selección de algunos de los elementos del DOM que necesitaremos
	var listadoTemas; //variable que podéis utilizar para almacenar el archivo json
	let botonDescargar = document.getElementById("descargar_temas");//boton para descargar los temas
	let botonQueDibujo = document.getElementById("que_dibujo");//botón ¿Qué dibujo?
	let selector = document.getElementById("temas");//Desplegable con los temas
	let dibAle = document.getElementById("dibujo_aleatorio");//Celda donde escribiremos el dibujo aleatorio
	let tamLienzo = document.getElementById("tam_lienzo");//Input donde ponemos el tamaño del lienzo
	let botonCrearLienzo = document.getElementById("crear_lienzo");//Botón Crear Lienzo
	let botonBorrar = document.getElementById("borrar");//Botón borrar
	let zonaDibujo = document.getElementById("dibujo");//Tabla en la que vamos a crear el lienzo
	let pincel = document.getElementById("pincel");//Celda donde pondremos el estado del pincel: ACTIVADO O DESACTIVADO
	let paleta = document.getElementById("paleta");//Fila que tiene la paleta de colores. Un color en cada
	var pincelActivo = false;//Variable booleana que guarda el estado del pincel 

	// Agregar el manejador de eventos al botón "Crear lienzo"
	botonCrearLienzo.addEventListener("click", function () {
		// Desactivar el botón para evitar clics adicionales
		botonCrearLienzo.disabled = true;

		// Obtener el tamaño del lienzo del input
		let tamLienzoValor = parseInt(tamLienzo.value);

		// Si el valor introducido no es un número válido, salir de la función
		if (isNaN(tamLienzoValor)) {
			return;
		}

		// Agregar filas y celdas al lienzo existente
		for (let i = 0; i < tamLienzoValor; i++) {
			let fila = document.createElement("tr"); // Crear una nueva fila
			for (let j = 0; j < tamLienzoValor; j++) {
				let celda = document.createElement("td"); // Crear una nueva celda
				celda.className = "celda"; // Asignar la clase "celda" a la celda
				fila.appendChild(celda); // Agregar la celda como hijo de la fila
			}
			zonaDibujo.appendChild(fila); // Agregar la fila como hijo de la tabla
		}
	});

	// Agregar manejador de eventos a cada celda de la paleta
	let coloresPaleta = paleta.getElementsByTagName("td");
	for (let i = 0; i < coloresPaleta.length; i++) {
		coloresPaleta[i].addEventListener("click", function () {
			// Remover la clase "seleccionado" de todos los colores de la paleta
			for (let j = 0; j < coloresPaleta.length; j++) {
				coloresPaleta[j].classList.remove("seleccionado");
			}
			// Agregar la clase "seleccionado" al color seleccionado
			this.classList.add("seleccionado");
		});
	}


	// Agregar manejador de eventos para detectar cuando se hace clic en el lienzo
	zonaDibujo.addEventListener("click", function () {
		pincelActivo = !pincelActivo; // Alternar el estado
		// Actualizar el texto dentro del elemento "pincel"
		pincel.textContent = pincelActivo ? "PINCEL ACTIVADO" : "PINCEL DESACTIVADO";
	});


	// Agregar manejador de eventos para detectar cuando el ratón se mueve dentro del lienzo
	zonaDibujo.addEventListener("mousemove", function (event) {
		// Verificar si el ratón está presionado
		if (pincelActivo) {
			// Obtener la celda sobre la que se encuentra el cursor del ratón
			let celda = event.target;
			// Verificar si la celda es parte del lienzo y si tiene la clase "celda"
			if (celda && celda.classList.contains("celda")) {
				// Pintar la celda con el color seleccionado
				celda.style.backgroundColor = getComputedStyle(document.querySelector(".seleccionado")).backgroundColor;
			}
		}
	});

	// Agregar manejador de eventos al botón "Borrar" para borrar todo el lienzo
	botonBorrar.addEventListener("click", function () {
		// Restablecer el color de fondo de todas las celdas del lienzo
		let celdas = document.querySelectorAll("#dibujo .celda");
		celdas.forEach(function (celda) {
			celda.style.backgroundColor = "#FFF"; // Cambia "#FFF" por el color deseado (por ejemplo, blanco)
		});
	});

	// Agregar manejador de eventos al botón "Descargar temas" para hacer la solicitud al servidor
	botonDescargar.addEventListener("click", function () {
		// Crear un objeto XMLHttpRequest
		var xhr = new XMLHttpRequest();

		// Configurar la solicitud
		xhr.open("GET", "temasDibujo.json", true);

		// Configurar la función de devolución de llamada cuando se complete la solicitud
		xhr.onload = function () {
			if (xhr.status === 200) {
				// Parsear los datos JSON obtenidos
				listadoTemas = JSON.parse(xhr.responseText);

				// Limpiar los temas existentes en el desplegable
				selector.innerHTML = '<option selected="yes" value="selecciona">Selecciona un tema...</option>';

				// Agregar los nuevos temas al desplegable
				listadoTemas.TEMAS.forEach(function (tema) {
					let option = document.createElement("option");
					option.value = tema[0];
					option.textContent = tema[0];
					selector.appendChild(option);
				});
			} else {
				console.error("Error al obtener los temas:", xhr.statusText);
			}
		};

		// Configurar la función de devolución de llamada en caso de error
		xhr.onerror = function () {
			console.error("Error al obtener los temas:", xhr.statusText);
		};

		// Enviar la solicitud al servidor
		xhr.send();
	});

	// Agregar manejador de eventos al botón "¿Qué dibujo?" para mostrar un elemento aleatorio del tema seleccionado
	botonQueDibujo.addEventListener("click", function () {
		// Verificar si se ha seleccionado un tema
		if (selector.value === "selecciona") {
			alert("Por favor, selecciona un tema antes de mostrar un dibujo aleatorio.");
			return;
		}

		// Obtener el tema seleccionado del listado de temas
		let temaSeleccionado = listadoTemas.TEMAS.find(tema => tema[0] === selector.value);

		// Verificar si se encontró el tema seleccionado
		if (!temaSeleccionado) {
			console.error("No se encontró el tema seleccionado en el listado de temas.");
			return;
		}

		// Obtener un elemento aleatorio del tema seleccionado
		let elementoAleatorio = temaSeleccionado[Math.floor(Math.random() * (temaSeleccionado.length - 1)) + 1];

		// Mostrar el elemento aleatorio en la celda de debajo (dibujo_aleatorio)		
		dibAle.textContent = elementoAleatorio;
	});
}

