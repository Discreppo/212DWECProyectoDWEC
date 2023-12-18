class Gallina extends Animal {
    constructor(nombre) {
        super(nombre, 2); // Las gallinas tienen 2 patas
        this.estadoHuevo = 0; // Valor inicial del estado del huevo
    }

    // Método para que la gallina coma
    comer(kilosComida) {
        for (let i = 0; i < kilosComida; i++) {
            this.estadoHuevo += 20;

            if (this.estadoHuevo == 100) {
                this.ponerHuevo();
            }
        }
    }

    // Método para que la gallina ponga un huevo
    ponerHuevo() {
        if (this.enfermo) {
            alert(`La gallina ${this.nombre} (ID: ${this.id}) no puede poner huevos porque está enferma.`);
            this.estadoHuevo = 0;
            return;
        }

        alert(`La gallina ${this.nombre} (ID: ${this.id}) ha puesto un huevo.`);
        this.estadoHuevo = 0;
    }

    // Método para curar a la gallina
    curar() {
        if (super.curar()) {
            this.estadoHuevo = 0;
        }
    }
}
