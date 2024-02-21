window.addEventListener("load", examen);
function examen() {
    let provincias = new Map();
    provincias.set("GA", ["La Coruña", "Lugo", "Orense", "Pontevedra"]);
    provincias.set("CL", ["Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"]);
    provincias.set("EX", ["Badajoz", "Cáceres"]);
    provincias.set("PV", ["Álava", "Vizcaya", "Guipúzcoa"]);
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const edad = document.getElementById("edad");
    const comunidades = document.getElementById("ccaa");
    const provincia = document.getElementById("provincia");
    const destinoArrastrable = document.querySelector(".resultado");
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const botonEnviar = document.getElementById("enviar");
    const botonLimpiar = document.getElementById("limpiar");
    const captcha = document.getElementById("captcha");
    const formulario = document.getElementById("formulario");
    const botonCrono = document.getElementById("btncrono");
    const pie = document.getElementById("pie");
    const cronometro = document.getElementById("crono");

    validarNombre = /^\w{3}/;
    validarApellidos = /^\w{2,}\s\w{2,}/;
    validarEdad = /^(10\d|110)|^(\d{1,2})$/;

    /*1*/
    document.addEventListener('input', function () {
        if (!validarNombre.test(nombre.value)) {
            nombre.classList.remove('correcto');
            nombre.classList.add('error');
        } else {
            nombre.classList.remove('error');
            nombre.classList.add('correcto');
        }
        if (!validarApellidos.test(apellidos.value)) {
            apellidos.classList.remove('correcto');
            apellidos.classList.add('error');
        } else {
            apellidos.classList.remove('error');
            apellidos.classList.add('correcto');
        }
        if (!validarEdad.test(edad.value)) {
            edad.classList.remove('correcto');
            edad.classList.add('error');
        } else {
            edad.classList.remove('error');
            edad.classList.add('correcto');
        }
    });


    nombre.addEventListener('blur', function (e) {
        nombre.target.style.textTransform = "uppercase";
    });

    apellidos.addEventListener('blur', function (e) {
        apellidos.target.style.textTransform = "uppercase";
    });

    /*2 */

    var ccaa = document.querySelector("#ccaa");

    ccaa.addEventListener('change', function () {
        while (provincia.childElementCount > 1) {
            provincia.removeChild(provincia.lastElementChild);
        }
        if (provincia.childElementCount < 2) {
            for (element of provincias.get(comunidades.value)) {
                let opc = document.createElement("option");
                var x = document.createTextNode(element);
                opc.appendChild(x);
                provincia.appendChild(opc);
            }
        }

    })

    /*3 */
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        verdes = false;
        comypro = false;
        if (nombre.classList.contains('correcto') && apellidos.classList.contains('correcto') && edad.classList.contains('correcto')) {
            verdes = true;
        } else {
            alert("Hay algún dato con el formato incorrecto");
        }
        if (comunidades.value != 0 && provincia.value != 0) {
            comypro = true;
        } else {
            alert("Se debe elegir una Comunidad y una provincia")
        }
        if (verdes && comypro) {
            captcha.style.display = "block";
        }

    });

    botonLimpiar.addEventListener('click', function (e) {
        nombre.classList.remove('correcto');
        nombre.classList.add('error');
        apellidos.classList.remove('correcto');
        apellidos.classList.add('error');
        edad.classList.remove('correcto');
        edad.classList.add('error');
        captcha.style.display = "none";
    });


    /*4 */



    /*5 */





}