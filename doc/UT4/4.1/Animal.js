class Animal {
    constructor(nombre, patas, enfermo = false) {
        this.nombre = nombre; // Nombre del animal
        this.patas = patas; // Número de patas
        this.id = this.generarID(); // Número de identificación aleatorio
        this.enfermo = enfermo; // Por defecto, el animal no está enfermo
    }

    // Método para cambiar el número de identificación por otro generado aleatoriamente
    cambiarID() {
        this.id = this.generarID();
    }

    // Método para mostrar el nombre del animal y su número de identificación
    toString() {
        console.log(`Nombre: ${this.nombre}, ID: ${this.id}`);
    }

    // Método para curar al animal (pone enfermo a false)
    curar() {
        if (this.enfermo) {
            this.enfermo = false;
            console.log(`${this.nombre} ha sido curado.`);
            return true;
        } else {
            console.log(`${this.nombre} no está enfermo.`);
            return false;
        }
    }

    // Método para generar un número de identificación aleatorio de 5 cifras
    generarID() {
        return Math.floor(10000 + Math.random() * 90000);
    }
}