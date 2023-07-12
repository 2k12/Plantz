export class Taxonomia {
    constructor(ID, Reino, Filo, Clase, Orden, Familia, Genero, Especie) {
        this.ID = ID;
        this.Reino = Reino;
        this.Filo = Filo;
        this.Clase = Clase;
        this.Orden = Orden;
        this.Familia = Familia;
        this.Genero = Genero;
        this.Especie = Especie;
    }
    // Getter para ID
    getID() {
        return this.ID;
    }

    // Setter para ID
    setID(nuevoID) {
        this.ID = nuevoID;
    }

    // Getter para Reino
    getReino() {
        return this.Reino;
    }

    // Setter para Reino
    setReino(nuevoReino) {
        this.Reino = nuevoReino;
    }

    // Getter para Filo
    getFilo() {
        return this.Filo;
    }

    // Setter para Filo
    setFilo(nuevoFilo) {
        this.Filo = nuevoFilo;
    }

    // Getter para Clase
    getClase() {
        return this.Clase;
    }

    // Setter para Clase
    setClase(nuevaClase) {
        this.Clase = nuevaClase;
    }

    // Getter para Orden
    getOrden() {
        return this.Orden;
    }

    // Setter para Orden
    setOrden(nuevoOrden) {
        this.Orden = nuevoOrden;
    }

    // Getter para Familia
    getFamilia() {
        return this.Familia;
    }

    // Setter para Familia
    setFamilia(nuevaFamilia) {
        this.Familia = nuevaFamilia;
    }

    // Getter para Genero
    getGenero() {
        return this.Genero;
    }

    // Setter para Genero
    setGenero(nuevoGenero) {
        this.Genero = nuevoGenero;
    }

    // Getter para Especie
    getEspecie() {
        return this.Especie;
    }
    // Setter para Especie
    setEspecie(nuevaEspecie) {
        this.Especie = nuevaEspecie;
    }
}

