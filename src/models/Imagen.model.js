class Imagen {
    constructor(ID, Planta_ID, URLImagen, Descripcion) {
        this.ID = ID;
        this.Planta_ID = Planta_ID;
        this.URLImagen = URLImagen;
        this.Descripcion = Descripcion;
    }

    getID(){ return this.ID;}
    setID(ID) {this.ID = ID;}
    getPlantaID(){ return this.Planta_ID;}
    setPlanta_ID(Planta_ID) {this.Planta_ID = Planta_ID;}
    getURLImagen(){ return this.URLImagen;}
    setURLImagen(URLImagen) {this.URLImagen = URLImagen;}
    getDescripcion(){ return this.Descripcion;}
    setDescripcion(Descripcion) {this.Descripcion = Descripcion;}
    
    
}

module.exports = {
    Imagen
} 