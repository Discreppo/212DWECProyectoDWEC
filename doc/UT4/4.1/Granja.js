class Granja {
    #codigoGranja;

    constructor(codigoGranja) {
        if (/^[AEIOU]\d{10}[A-Z]$/.test(codigoGranja)) {
            this.codigoGranja = codigoGranja;
            this.vacas = [];
            this.gallinas = [];
        } else {
            console.log(`El código de la granja no es válido.`);
        }

    }

    darComerVacas(kilos) {
        if (this.vacas.length === 0) {
            console.log(`No hay vacas que alimentar.`);
        }

        var kilosPorVaca = Math.floor(kilos / this.vacas.length);
        var kilosSobrantes = kilos % this.vacas.length;

        this.vacas.forEach(vaca => { vaca.comer(kilosPorVaca) });

        if (kilosSobrantes > 0) {
            console.log(`Sobraron ${kilosSobrantes} kg de comida.`)
        }

    }

    ordeñarVacas() {
        if (this.vacas.length === 0) {
            console.log('No hay vacas en la granja para ordeñar.');
            return;
        }

        this.vacas.forEach(vaca => {
            vaca.ordeñar();
        });
    }

    darComerGallinas(kilos) {
        if (this.gallinas.length === 0) {
            console.log('No hay gallinas en la granja para alimentar.');
            return;
        }

        const kilosPorGallina = Math.floor(kilos / this.gallinas.length);
        const kilosSobrantes = kilos % this.gallinas.length;

        this.gallinas.forEach(gallina => {
            gallina.comer(kilosPorGallina);
        });

        if (kilosSobrantes > 0) {
            console.log(`Sobraron ${kilosSobrantes} kg de comida.`);
        }
    }


    comprarVacas(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            var vacaNueva = new Vaca(prompt("Introduce nombre de la vaca: "));

            do {
                var idRepetido = false;
                for (const vaca of this.vacas) {
                    if (vaca.id == vacaNueva.id) {
                        idRepetido = true;
                    }
                }
                if (idRepetido) {
                    vacaNueva.cambiarID();
                }
            } while (idRepetido)

            this.vacas.push(vacaNueva);

        }
    }

    comprarGallinas(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            var gallinaNueva = new Gallina(prompt("Introduce nombre de la gallina: "));

            do {
                var idRepetido = false;
                for (const gallina of this.gallinas) {
                    if (gallina.id == gallinaNueva.id) {
                        idRepetido = true;
                    }
                }
                if (idRepetido) {
                    gallinaNueva.cambiarID();
                }
            } while (idRepetido)

            this.gallinas.push(gallinaNueva);
        }
    }

    venderVacas(cantidad) {
        if (this.vacas.length === 0) {
            console.log(`No hay vacas en la granja.`);
        }
        this.vacas.splice(0, cantidad);
    }

    venderGallinas(cantidad) {
        if (this.gallinas.length === 0) {
            console.log(`No hay gallinas en la granja.`);
        }
        this.gallinas.splice(0, cantidad);
    }

    verAnimalesEnfermos() {
        console.log("Vacas enfermas:");
        for (const iterator of this.vacas) {
            if (iterator.enfermo) {
                iterator.toString();
            }
        }
        console.log("Gallinas enfermas:")
        for (const iterator of this.gallinas) {
            if (iterator.enfermo) {
                iterator.toString();
            }
        }
    }

    curarAnimales() {
        let noEncontrado = true;
        let tipo = prompt("¿Qué animales vamos a curar?");
        if (tipo == "vaca") {
            let queVaca = prompt("¿Cual es el ID de la vaca que quieres curar?");

            for (const iterator of this.vacas) {
                
                if (iterator.id == queVaca) {
                    iterator.curar();
                    noEncontrado = false;
                }
            }
            if (noEncontrado) {
                alert("ID no encontrado en la granja.")
            }

        } else if (tipo == "gallina") {
            let queGallina = prompt("¿Cual es el ID de la gallina que quieres curar?");
            for (const iterator of this.gallinas) {
                
                if (iterator.id == queGallina) {
                    iterator.curar();
                    noEncontrado = false;
                }
            }
            if (noEncontrado) {
                alert("ID no encontrado en la granja.")
            }
        } else {
            alert("No sé de que animal me hablas.");
        }
    }

    toString() {
        console.log(`Código de la granja: ${this.codigoGranja}`);
        console.log(`Número de vacas: ${this.vacas.length}`);
        console.log(`Número de gallinas: ${this.gallinas.length}`);
    }
}