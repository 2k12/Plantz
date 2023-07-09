class Usuario {
    constructor(ID, Nombre, Usuario, CorreoElectronico, Contrasena,Rol) {
        this.ID = ID;
        this.Nombre = Nombre;
        this.Usuario = Usuario;
        this.CorreoElectronico = CorreoElectronico;
        this.Contrasena = Contrasena;
        this.Rol = Rol;
    }

    getID() { return this.ID; }
    setID(ID) { this.ID = ID; }
    getNombre() { return this.Nombre; }
    setNombre(Nombre) { this.Nombre = Nombre; }
    getUsuario() { return this.Usuario; }
    setUsuario(Usuario) { this.Usuario = Usuario; }
    getCorreoElectronico() { return this.CorreoElectronico; }
    setCorreoElectronico(CorreoElectronico) { this.CorreoElectronico = CorreoElectronico; }
    getContrasena() { return this.Contrasena; }
    setContrasena(Contrasena) {this.Contrasena = Contrasena; }
    getRol() {return this.Rol; }
    setRol(Rol) {this.Rol = Rol; }

}

module.exports = {
    Usuario
}