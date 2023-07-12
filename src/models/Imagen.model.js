export class Imagen {
    constructor(ID, Planta_ID, URLImagen, Nombre) {
        this.ID = ID;
        this.Planta_ID = Planta_ID;
        this.URLImagen = URLImagen;
        this.Nombre = Nombre;
    }

    getID(){ return this.ID;}
    setID(ID) {this.ID = ID;}
    getPlantaID(){ return this.Planta_ID;}
    setPlanta_ID(Planta_ID) {this.Planta_ID = Planta_ID;}
    getURLImagen(){ return this.URLImagen;}
    setURLImagen(URLImagen) {this.URLImagen = URLImagen;}
    getNombre(){ return this.Nombre;}
    setNombre(Nombre) {this.Nombre = Nombre;}
    
    
}
