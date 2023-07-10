const validacionUsuario = (usuario) => {

    usuario = usuario.trim().replace(/\s+/g, '');

    const prefijotax = "tax";
    const prefijoadm = "adm";
    const prefijodig = "dig";

    const regex = new RegExp(`^${prefijotax}_\\w+$`);
    const regex2 = new RegExp(`^${prefijoadm}_\\w+$`);
    const regex3 = new RegExp(`^${prefijodig}_\\w+$`);

    if (regex.test(usuario)) {
        return "taxonomo"
    }
    else if (regex2.test(usuario)) {
        return "admin"
    }
    else if (regex3.test(usuario)) {
        return "dig"
    }
    else {
        return "usuario"
    }

}

const eliminacionespacios_noalfanumericos_digitos = (parametro) => {
    parametro = parametro.replace(/[^a-zA-Z]/g, '');
    return parametro;
};  

// const validacionCorreo = (correo) => {
//     const regexCorreo = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
//     return regexCorreo.test(correo);
// }
// const validacionContrasena = (contrasena) => {
//     const regexContrasena = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return regexContrasena.test(contrasena);
 
// }

module.exports = {validacionUsuario , eliminacionespacios_noalfanumericos_digitos}