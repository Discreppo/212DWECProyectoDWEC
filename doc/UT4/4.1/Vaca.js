class Vaca extends Animal {
    constructor(nombre, enfermo) {
        super(nombre, 4, enfermo); // Las vacas tienen 4 patas
        this.litrosLeche = 1; // Valor inicial de litros de leche
    }

    // Método para que la vaca coma
    comer(kilosComida) {
        while (!this.enfermo && kilosComida > 0) {
            this.litrosLeche += 0.5;
            if (this.litrosLeche == 18.5) {
                alert(`La vaca ${this.nombre} (ID: ${this.id}) debe ser ordeñada.`);
            }
            if (this.litrosLeche > 28) {
                alert(`La vaca ${this.nombre} (ID: ${this.id}) ha enfermado.`);
                this.enfermo = true;
            }
            kilosComida--;
        }

    }

    // Método para ordeñar a la vaca
    ordeñar() {
        if (this.enfermo) {
            alert(`La vaca ${this.nombre} (ID: ${this.id}) no puede ser ordeñada porque está enferma.`);
            return;
        }

        alert(`Se han ordeñado ${this.litrosLeche-1} litros de leche de la vaca ${this.nombre} (ID: ${this.id}).`);
        this.litrosLeche = 1;
    }

    // Método para curar a la vaca
    curar() {
        if(super.curar()){
            this.litrosLeche = 1;
        }
    }
}