export class Planta {
    constructor(ID, UsuarioID, TaxonomiaID, NombreComun, NombreCientifico, Estado, Descripcion) {
        this.ID = ID;
        this.UsuarioID = UsuarioID;
        this.TaxonomiaID = TaxonomiaID;
        this.NombreComun = NombreComun;
        this.NombreCientifico = NombreCientifico;
        this.Estado = Estado;
        this.Descripcion = Descripcion;
    }

    getID() {return this.ID;}

    setID(ID) {this.ID = ID;}

    getUsuarioID() {return this.UsuarioID;}

    setUsuarioID(UsuarioID) {this.UsuarioID = UsuarioID;}

    getTaxonomiaID() {return this.TaxonomiaID;}

    setTaxonomiaID(TaxonomiaID) {this.TaxonomiaID = TaxonomiaID;}

    getNombreComun() {return this.NombreComun;}

    setNombreComun(NombreComun) {this.NombreComun = NombreComun;}

    getNombreCientifico() {return this.NombreCientifico;}

    setNombreCientifico(NombreCientifico) {this.NombreCientifico = NombreCientifico;}

    getEstado(){return this.Estado;}

    setEstado(Estado){this.Estado = Estado;}

    getDescripcion(){return this.Descripcion;}

    setDescripcion(Descripcion){this.Descripcion = Descripcion;}
}

