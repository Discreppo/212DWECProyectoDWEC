
var opcion = parseInt(prompt("Indica el número del ejercicio a realizar:"));

switch (opcion) {
    case 1:
        /*1. Crea un script que pida por teclado dos números y genera 10 números aleatorios entre esos números.*/

        // Solicitar al usuario dos números y convertirlos a valores enteros
        var numero1 = parseInt(prompt("Ingresa un número válido:"));
        var numero2 = parseInt(prompt("Ingresa otro número válido:"));

        // Comprobar si los datos introducidos no son números válidos
        if (isNaN(numero1) || isNaN(numero2)) {
            alert("Por favor, ingresa dos números válidos.");
        } else {
            // Inicializar un bucle para generar 10 números aleatorios
            for (let index = 0; index < 10; index++) {
                // Generar un número aleatorio entre numero1 y numero2 (incluyendo ambos extremos)
                var numeroAleatorio = Math.floor(Math.random() * (numero2 - numero1 + 1)) + numero1;

                // Mostrar el número aleatorio
                alert("Número aleatorio " + (index + 1) + ": " + numeroAleatorio);
            }
        }


        break;

    case 2:
        /*2. Crea un script, que pida al usuario un número. Indicar al usuario si lo que ha introducido, es un número
        o no, y si es un número, decir si es par o no y si es primo o no.*/

        // Solicitar al usuario un número y convertirlo a un valor entero
        var numero1 = parseInt(prompt("Ingresa un número válido:"));

        // Comprobar si lo que ha introducido el usuario no es un número
        if (isNaN(numero1)) {
            alert("El dato introducido no es un número.");
        } else {
            // Comprobar si el número es par o impar
            if (numero1 % 2 != 0) {
                alert("El número introducido es impar.");
            } else {
                alert("El número introducido es par.");
            }

            // Comprobar si el número es primo
            var esPrimo = true;

            // Si el número es menor o igual a 1, no es primo
            if (numero1 <= 1) {
                esPrimo = false;
            } else {
                // Iterar desde 2 hasta la raíz cuadrada del número para verificar si es divisible por algún número
                for (let i = 2; i <= Math.sqrt(numero1); i++) {
                    if (numero1 % i === 0) {
                        esPrimo = false;
                        break; // Si se encuentra un divisor, no es necesario seguir comprobando
                    }
                }
            }

            // Mostrar si el número es primo o no
            if (esPrimo) {
                alert("El número introducido es primo.");
            } else {
                alert("El número introducido no es primo.");
            }
        }

        break;

    case 3:
        /*3. Crea un script que pida 2 números al usuario y una operación a realizar (suma, resta, multiplicación o
        división). En función de esos datos, se debe mostrar el resultado de la operación. Se debe comprobar
        que los datos introducidos sean números.*/

        // Función para comprobar si una cadena puede convertirse en un número
        function esNumero(cadena) {
            return !isNaN(cadena);
        }

        // Función para realizar la suma
        function suma(a, b) {
            return a + b;
        }

        // Función para realizar la resta
        function resta(a, b) {
            return a - b;
        }

        // Función para realizar la multiplicación
        function multiplicacion(a, b) {
            return a * b;
        }

        // Función para realizar la división
        function division(a, b) {
            if (b === 0) {
                return "No se puede dividir entre cero";
            }
            return a / b;
        }

        // Pedir al usuario los números y la operación
        let num1, num2, operacion;

        while (true) {
            num1 = prompt("Introduce el primer número:");
            if (esNumero(num1)) {
                break;
            } else {
                alert("Eso no parece ser un número válido. Intenta de nuevo.");
            }
        }

        while (true) {
            num2 = prompt("Introduce el segundo número:");
            if (esNumero(num2)) {
                break;
            } else {
                alert("Eso no parece ser un número válido. Intenta de nuevo.");
            }
        }

        operacion = prompt("Introduce la operación a realizar suma (+), resta(-), multiplicación (*) o división(/):");

        // Realizar la operación seleccionada
        switch (operacion.toLowerCase()) {
            case "+":
                alert("El resultado de la suma es: " + suma(parseFloat(num1), parseFloat(num2)));
                break;
            case "-":
                alert("El resultado de la resta es: " + resta(parseFloat(num1), parseFloat(num2)));
                break;
            case "*":
                alert("El resultado de la multiplicación es: " + multiplicacion(parseFloat(num1), parseFloat(num2)));
                break;
            case "/":
                alert("El resultado de la división es: " + division(parseFloat(num1), parseFloat(num2)));
                break;
            default:
                alert("Operación no válida. Por favor, introduce una operación válida.");
        }

        break;

    case 4:
        /*4. Crea un script que pida un número al usuario y muestre todos los números del 1 al 100 que sean
        divisibles por el número introducido. Se debe controlar que se introduzca un número y que el número
        este entre 1 y 100.*/

        // Solicitar al usuario un número
        var numero = parseInt(prompt("Ingresa un número entre 1 y 100:"));

        // Verificar si el número es válido y está en el rango de 1 a 100
        if (!isNaN(numero) && numero >= 1 && numero <= 100) {
            alert("Los números del 1 al 100 que son divisibles por " + numero + " son:<br>");

            // Comprobar si cada número entre 1 y 100 es divisible por el número introducido
            for (let i = 1; i <= 100; i++) {
                if (i % numero === 0) {
                    alert(i + "<br>");
                }
            }
        } else {
            alert("Por favor, ingresa un número válido entre 1 y 100.");
        }

        break;


    case 5:
        /*5. Crea un script que lea números enteros hasta que el usuario introduzca un número 0. Finalmente debe
        mostrar el número máximo, el mínimo y la media de todos ellos. Debes de controlar que introduzca
        números y no cualquier otro carácter.*/

        var numeros = [];
        function esEntero(cadena) {
            var numero = parseInt(cadena);
            return !isNaN(numero) && Number.isInteger(numero);
        }


        while (true) {
            var entrada = prompt("Introduce un número (0 para finalizar):");


            if (esEntero(entrada)) {
                var numero = parseInt(entrada);


                if (numero === 0) {
                    break;
                }


                numeros.push(numero);
            } else {
                alert("Por favor, ingresa un número válido.");
            }
        }


        var maximo = Math.max(...numeros);
        var minimo = Math.min(...numeros);
        suma = 0;

        for (var i = 0; i < numeros.length; i++) {
            suma += numeros[i];
        }

        var media = suma / numeros.length;


        if (numeros.length === 0) {
            alert("No se ingresaron números válidos.");
        } else {
            alert("Número máximo: " + maximo);
            alert("Número mínimo: " + minimo);
            alert("Media de los números: " + media);
        }

        break;

    case 6:
        /*6. Crea un script que pedirá que introduzcas una contraseña 2 veces para evitar errores. A continuación,
        pedirá la contraseña al usuario dándole 3 intentos. Cuando aciertes ya no pedirá más la contraseña y
        mostrará un mensaje diciendo «Enhorabuena». Si no acierta en los 3 intentos, mostrará un mensaje de
        error y terminará.*/

        var intentosMaximos = 3;
        var contraseñaCorrecta = false;

        while (!contraseñaCorrecta) {
            var contraseña1 = prompt("Introduce la contraseña:");
            var contraseña2 = prompt("Confirma la contraseña:");

            if (contraseña1 === contraseña2) {
                contraseñaCorrecta = true;
            } else {
                alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
            }
        }

        for (var intento = 1; intento <= intentosMaximos; intento++) {
            var contraseñaIngresada = prompt("Inicio de sesion, introduce la contraseña:");

            if (contraseñaIngresada === contraseña1) {
                alert("¡Enhorabuena!");
                intento = intentosMaximos + 1;
            } else {
                alert("Contraseña incorrecta. Te quedan " + (intentosMaximos - intento) + " intentos.");
            }

            if (intento === intentosMaximos) {
                alert("Has agotado tus intentos. Contraseña incorrecta. Terminando...");
            }
        }


        break;
    case 7:
        /*7. Pide por teclado un número entero positivo (debemos controlarlo) y muestra el número de cifras que
        tiene. Por ejemplo: si introducimos 1250, nos muestre que tiene 4 cifras.*/

        function esEnteroPositivo(cadena) {
            var numero = parseInt(cadena);
            return !isNaN(numero) && Number.isInteger(numero) && numero > 0;
        }

        var entrada = prompt("Introduce un número entero positivo:");

        if (esEnteroPositivo(entrada)) {
            var numero = parseInt(entrada);
            var numeroCifras = numero.toString().length;

            alert("El número " + numero + " tiene " + numeroCifras + " cifras.");
        } else {
            alert("Por favor, ingresa un número válido.");
        }

        break;
    case 8:
        /*8. Escribe un script que muestre por pantalla los múltiplos de 2 que hay entre dos números que pides al
        usuario. El segundo número tiene que ser mayor o igual que el primer número.*/
        var numero1, numero2;

        while (true) {
            numero1 = parseInt(prompt("Introduce el primer número:"));
            numero2 = parseInt(prompt("Introduce el segundo número (debe ser mayor o igual que el primero):"));

            if (!isNaN(numero1) && !isNaN(numero2) && numero2 >= numero1) {
                break;
            } else {
                alert("Por favor, ingresa números válidos y asegúrate de que el segundo número sea mayor o igual que el primero.");
            }
        }

        document.write("Los múltiplos de 2 entre " + numero1 + " y " + numero2 + " son:<br>");

        for (var i = numero1; i <= numero2; i++) {
            if (i % 2 === 0) {
                document.write(i + "<br>");
            }
        }


        break;
    case 9:
        /*9. Escribe un script que calcule la suma de los números pares y la suma de los números impares
        comprendidos entre dos números que le pides al usuario. Es decir, el usuario introduce por ejemplo el
        45 y el 89 y debes de mostrar la suma de los números pares comprendidos entre el 45 y el 89 y por otro
        lado la suma de los números impares. No contar extremos, es decir, el 45 y el 89 en este caso no se
        tienen en cuenta.*/

        var numero1, numero2;

        while (true) {
            numero1 = parseInt(prompt("Introduce el primer número:"));
            numero2 = parseInt(prompt("Introduce el segundo número:"));

            if (!isNaN(numero1) && !isNaN(numero2) && numero1 < numero2) {
                break;
            } else {
                alert("Por favor, ingresa números válidos y asegúrate de que el segundo número sea mayor que el primero.");
            }
        }


        var sumaPares = 0;
        var sumaImpares = 0;


        for (var i = numero1 + 1; i < numero2; i++) {
            if (i % 2 === 0) {
                sumaPares += i;
            } else {
                sumaImpares += i;
            }
        }


        document.write("La suma de los números pares entre " + numero1 + " y " + numero2 + " (excluyendo extremos) es: " + sumaPares + "<br>");
        document.write("La suma de los números impares entre " + numero1 + " y " + numero2 + " (excluyendo extremos) es: " + sumaImpares + "<br>");


        break;
    case 10:
        /*10. Realiza un script que implemente un juego de encontrar un número aleatorio bajo las siguientes
        condiciones:
        a. La página calculará un numero aleatorio del 1 al 100.
        b. El usuario dispondrá de 5 intentos para adivinar el número.
        c. Si el usuario escribe algo que no es un número mostrará un mensaje de error y volverá a pedir
        un número, pero esto no contará como un intento.
        d. Si el usuario acierta el número se le indica al usuario que ha acertado y mediante un cuadro
        de confirmación se le pregunta si desea volver a jugar o salir.
        e. Si el usuario no acierta con el número, le dirá si el número es mayor o menor que el que ha
        introducido y le volverá a preguntar por un número.
        f. Si ha llegado al último intento y no ha acertado se le indicará al usuario que ha perdido y
        mediante un cuadro de confirmación le preguntará si desea volver a jugar o salir.
        Desarrollo Web en Entorno Cliente
        g. Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego.
        h. Cada vez que el usuario termine un juego, se deberá escribir en la página información sobre
        ese juego:
        1. Juego terminado: SI
        Número de intentos: 4
        Número acertado: SI
        2. Juego terminado: SI
        Número de intentos: 5
        Número acertado: NO
        3. Juego terminado: NO
        Número de intentos: 2
        Número acertado: NO*/

        // Genera un número aleatorio entre 1 y 100 y lo almacena en la variable numeroAleatorio.
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        // Inicializa el contador de intentos, la variable de información y un indicador de juego finalizado.
        let intentos = 0;
        let info = "";
        let finalizado = false;

        // Función principal para jugar el juego.
        function jugar() {
            // Comprueba si el juego ha finalizado.
            if (finalizado) {
                // Pregunta al usuario si desea volver a jugar.
                const reiniciar = confirm("¿Deseas volver a jugar?");
                if (reiniciar) {
                    // Reinicia el juego generando un nuevo número aleatorio, reiniciando intentos y marcando que el juego no ha finalizado.                 
                    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
                    intentos = 0;
                    finalizado = false;
                } else {
                    // Si el usuario decide no jugar de nuevo, muestra un mensaje de despedida y registra que el juego no ha terminado.
                    alert("Gracias por jugar. ¡Hasta luego!");
                    noTerminado();
                    return;
                }
            }

            // Solicita al usuario que introduzca un número entre 1 y 100.
            const numeroUsuario = prompt("Introduce un número del 1 al 100:");

            if (numeroUsuario === null) {
                // Si el usuario cancela el juego, muestra un mensaje de juego cancelado y marca el juego como finalizado.
                alert("Juego cancelado.");
                finalizado = true;
            } else if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
                // Si el usuario ingresa un número inválido, muestra un mensaje de error.
                alert("Por favor, introduce un número válido del 1 al 100.");
            } else {
                // Si el usuario ingresa un número válido, incrementa el contador de intentos.
                intentos++;
                const numero = parseInt(numeroUsuario);
                if (numero === numeroAleatorio) {
                    // Si el número ingresado es igual al número aleatorio, muestra un mensaje de felicitación y pregunta si desea jugar de nuevo.
                    alert(`¡Has adivinado el número en ${intentos} intentos!`);
                    const jugarDeNuevo = confirm("¿Deseas volver a jugar Deseas volver a jugar?");
                    if (jugarDeNuevo) {
                        // Si el usuario decide jugar de nuevo, marca el juego como finalizado y registra que el juego ha terminado con éxito.
                        finalizado = true;
                        siTerminado();
                    } else {
                        // Si el usuario decide no jugar de nuevo, muestra un mensaje de despedida y registra que el juego no ha terminado.
                        alert("Gracias por jugar. ¡Hasta luego!");
                        finalizado = true;
                        siTerminado();
                        return;
                    }
                } else {
                    // Si el número ingresado no es igual al número aleatorio, muestra una pista y verifica si se agotaron los 5 intentos.
                    const mensaje = numero < numeroAleatorio ? "El número es mayor." : "El número es menor.";
                    alert(mensaje);
                    if (intentos >= 5) {
                        // Si se agotan los 5 intentos, muestra un mensaje indicando el número correcto y marca el juego como finalizado.
                        alert(`¡Has agotado tus 5 intentos! El número correcto era ${numeroAleatorio}.`);
                        finalizado = true;
                        siTerminado();
                    }
                }
            }

            // Llama recursivamente a la función jugar para continuar el juego.
            jugar();
        }

        // Inicia el juego llamando a la función jugar.
        jugar();

        // Muestra la información de partida después de que el juego ha finalizado.
        alert(info);
        // Función para registrar que el juego no ha terminado.
        function noTerminado() {
            info += `Juego terminado: NO  Número de intentos: ${intentos} Número acertado: NO \n`;
        }
        // Función para registrar que el juego ha terminado con éxito o no.
        function siTerminado() {
            info += `Juego terminado: SI  Número de intentos: ${intentos} Número acertado: ${numeroAleatorio === numero ? "SI" : "NO"} \n`;
        }



        break;
    case 11:
        /*11. Crea una aplicación web que pida al usuario un número entero positivo y dibuje triángulos
         con tantos asteriscos como haya indicado el usuario con el número introducido. Un ejemplo de
          ejecución sería el siguiente:*/

        function dibujarTriangulo() {
            var numero = parseInt(prompt("Introduce un número entero positivo: "));


            if (isNaN(numero) || numero <= 0) {
                alert("Por favor, introduce un número entero positivo.");
                return;
            }

            var trianguloDiv = "";
            // Triángulo 1: Dibuja un triángulo creciente.
            for (let i = 1; i <= numero; i++) {
                trianguloDiv += '* '.repeat(i) + '<br>';
            }
            document.write("<h3>Triángulo 1</h3>" + "<br>" + trianguloDiv);

            trianguloDiv = "";
            // Triángulo 2: Dibuja un triángulo decreciente.
            for (let i = numero; i >= 1; i--) {
                trianguloDiv += '* '.repeat(i) + '<br>';
            }
            document.write("<h3>Triángulo 2</h3>" + "<br>" + trianguloDiv);

            var trianguloDiv = "";
            // Triángulo 3: Dibuja un triángulo creciente con espacios.
            for (let i = 1; i <= numero; i++) {
                trianguloDiv += '&nbsp'.repeat(numero - i);
                trianguloDiv += '* '.repeat(i) + '<br>';
            }
            document.write("<h3>Triángulo 3</h3>" + "<br>" + trianguloDiv);

            trianguloDiv = "";
            // Triángulo 2: Dibuja un triángulo decreciente.
            for (let i = numero; i >= 1; i--) {
                trianguloDiv += '&nbsp'.repeat(numero - i);
                trianguloDiv += '* '.repeat(i) + '<br>';
            }
            document.write("<h3>Triángulo 4</h3>" + "<br>" + trianguloDiv);
        }


        dibujarTriangulo();

        break;
    case 12:
        /*12. Crea una página web que pida al usuario números hasta que el usuario pulse el 
        botón cancelar. Se debe comprobar si lo que inserta el usuario es un número o no. Al 
        finalizar se debe mostrarla suma de todos los números introducidos y en el caso de 
        que se hayan insertado caracteres no numéricos, mostrar también todos los caracteres 
        que se han introducido. */
        // Define una función llamada calcularSuma
        function calcularSuma() {
            // Crea un array vacío para almacenar caracteres no numéricos
            var caracteresNoNumericos = [];

            // Inicializa la variable 'suma' en 0 para almacenar la suma de números
            var suma = 0;

            // Entra en un bucle que se ejecutará hasta que el usuario haga clic en "Cancelar"
            while (true) {
                // Muestra un cuadro de diálogo para que el usuario introduzca un valor
                var input = prompt("Introduce un número (o pulsa Cancelar para finalizar):");

                // Comprueba si el usuario pulsó "Cancelar" y, en ese caso, sale del bucle
                if (input === null) {
                    break; // El usuario pulsó Cancelar, finalizar el bucle
                }

                // Intenta convertir el valor introducido a un número de punto flotante
                var numero = parseFloat(input); // Convertir a número

                // Comprueba si el valor introducido es un número válido
                if (!isNaN(numero)) {
                    suma += numero; // Agrega el número a la suma total
                } else {
                    caracteresNoNumericos.push(input); // Almacena caracteres no numéricos en el array 'caracteresNoNumericos'
                }
            }

            // Crea un mensaje con la suma de números
            var resultado = "La suma de los números introducidos es: " + suma;

            // Si se introdujeron caracteres no numéricos, se agregan al mensaje
            if (caracteresNoNumericos.length > 0) {
                resultado += "<br>Caracteres no numéricos introducidos: " + caracteresNoNumericos.join(", ");
            }

            // Muestra el resultado en la página utilizando document.write
            document.write(resultado);
        }

        // Llama a la función calcularSuma para comenzar la ejecución
        calcularSuma();

        break;
    case 13:
        /*13. Crea una página que muestre los primeros 10000 símbolos de la tabla Unicode. 
        Se mostrará en una tabla en la que en cada fila se indica el número de código, seguido 
        del carácter de ese código. En cada fila se mostrarán 10 símbolos.*/
        // Abre la etiqueta de inicio de la tabla HTML
        document.write("<table>");
        // Inicia un bucle que recorre los códigos Unicode desde 0 hasta 9999
        for (var codigo = 0; codigo < 10000; codigo++) {
            // Comprueba si el código actual es múltiplo de 10 para determinar si se debe abrir una nueva fila
            if (codigo % 10 === 0) {
                // Abre una nueva fila en la tabla
                document.write("<tr>");
                // Cierra inmediatamente la fila recién abierta (esto crea filas vacías)
                document.write("</tr>");
            }
            // Escribe una celda de datos con el número de código y el carácter Unicode en notación HTML de entidades numéricas
            document.write('<td>' + codigo + '</td><td>&#' + codigo + '</td>');
        }
        // Cierra la etiqueta de fin de la tabla HTML
        document.write("</table>");
        break;
    case 14:
        /*14. Crea una aplicación web que muestre x cuadrados de color aleatorio de 50x50 
        píxeles. El número de cuadrados se lo pediremos al usuario. Su posición en la pantalla 
        será también aleatoria. Ejemplo de resultado: */
        crearCuadrados();
        function crearCuadrados(){
            const numeroCuadrados = prompt("Introduce un número (o pulsa Cancelar para finalizar):");            

            for (let i = 0; i < numeroCuadrados; i++) {
                document.write("<div style='width: 50px; height: 50px; background-color: "+getRandomColor()+"; position: absolute; left: "+getRandomPosition()+"px; top: "+getRandomPosition()+"px;'></div>");
                
            }
        }

        function getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function getRandomPosition() {
            return Math.floor(Math.random() * (window.innerWidth - 50));
        }

        break;
    case 0:
        continuar = false;
        break;
    default:
        alert("Opción no válida");
}
