import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js' ;
export const autenticacionRequeridaTaxonomo = (req, res, next) => {
    const { token } = req.cookies;


    if (!token) return res.status(401).json({ message: "Autorización Denegada necesitas permisos de Taxónomo." });

    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Token Invalido." })

        req.decoded = decoded;

        if (decoded.rol === "taxonomo"||decoded.rol === "admin"|| decoded.rol === "dig") {
            next();
        }
        else{
            res.status(404).json({ message: 'Página no encontrada' });    
        }

    })

};

export const autenticacionRequeridaAdmin = (req, res, next) => {
    const { token } = req.cookies;


    if (!token) return res.status(401).json({ message: "Autorización Denegada Necesitas permisos de Administrador." });

    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Token Invalido." })

        req.decoded = decoded;

        if (decoded.rol === "admin") {
            next();
        }
        else{
            res.status(404).json({ message: 'Página no encontrada' });    
        }

    })

};

export const autenticacionRequerida = (req, res, next) => {
    const { token } = req.cookies;


    if (!token) return res.status(401).json({ message: "Autorización Denegada." });

    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Token Invalido." })

        req.decoded = decoded;

        if (decoded.rol === "taxonomo" || decoded.rol === "admin" || decoded.rol ==="dig" || decoded.rol ==="usuario") {
            next();
        }
        else{
            res.status(404).json({ message: 'Usuario desconocido' });    
        }

    })

};


// module.exports = {
//     autenticacionRequeridaAdmin,
//     autenticacionRequeridaTaxonomo,
//     autenticacionRequerida
// }