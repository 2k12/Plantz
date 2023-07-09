class Planta {
    constructor(ID, UsuarioID, TaxonomiaID, NombreComun, NombreCientifico) {
        this.ID = ID;
        this.UsuarioID = UsuarioID;
        this.TaxonomiaID = TaxonomiaID;
        this.NombreComun = NombreComun;
        this.NombreCientifico = NombreCientifico;
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
}

module.exports = {
    Planta
}