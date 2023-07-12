import {Usuario} from "../models/User.model.js";
import { validacionUsuario} from"../validators/user.validator.js";
import {pool} from '../db.js';
import bcrypt from 'bcryptjs';
import { TOKEN_SECRET} from '../config.js';

import jwt from 'jsonwebtoken';

import { crearTokendeAcceso } from '../libs/jwt.js';
export const register = async (req, res) => {
    try {


        const { nombre, usuario, email, contrasena } = req.body;

        const usuarioyaRegistrado = await pool.query('SELECT * FROM usuarios WHERE correoelectronico = $1', [email])
        if (usuarioyaRegistrado.rows.length > 0) {
            return res.status(400).json(['Email ya Registrado.'] );
        }
        else {
            let usuarion = new Usuario();
            const rol = validacionUsuario(usuario);

            // encriptacion de contraseña
            const contrasenaHash = await bcrypt.hash(contrasena, 10)   // string aleatorio

            usuarion.setNombre(nombre);
            usuarion.setUsuario(usuario);
            usuarion.setCorreoElectronico(email);
            usuarion.setContrasena(contrasenaHash);
            usuarion.setRol(eliminacionespacios(rol));



            const result = await pool.query("INSERT INTO usuarios (nombre,usuario,correoelectronico,contrasena,rol) VALUES ($1,$2,$3,$4,$5) RETURNING *", [usuarion.getNombre(), usuarion.getUsuario(), usuarion.getCorreoElectronico(), usuarion.getContrasena(), usuarion.getRol()]);

            const token = await crearTokendeAcceso({ id: result.id })
            res.cookie('token', token)
            // res.json({
            //     message: "Usuario Creado Satisfactoriamente"
            // })


            res.json({
                id: result.rows[0].id,
                username: result.rows[0].usuario,
                email: result.rows[0].correoelectronico,
                rol: result.rows[0].rol
            });

        }



    } catch (error) {
        if (error instanceof Error) {
            // console.log(error.message);
            res.status(500).json(error.message);
        }
    }
};
export const login = async (req, res) => {
    try {
        const { email, contrasena } = req.body;

        const usuarioEncontrado = await pool.query('SELECT * FROM usuarios WHERE correoelectronico = $1 ', [email]);

        if (!usuarioEncontrado) return res.status(400).json({ message: 'Usuario no Encontrado.' });

        // comparar la contraseña
        const coinciden = await bcrypt.compare(contrasena, usuarioEncontrado.rows[0].contrasena)   // string aleatorio


        if (!coinciden) return res.status(400).json({ message: 'Contraseña Incorrecta.' })


        const token = await crearTokendeAcceso({ id: usuarioEncontrado.rows[0].id, rol: usuarioEncontrado.rows[0].rol })
        res.cookie('token', token)

        res.json({
            id: usuarioEncontrado.rows[0].id,
            username: usuarioEncontrado.rows[0].usuario,
            email: usuarioEncontrado.rows[0].correoelectronico,
            rol: usuarioEncontrado.rows[0].rol
        });

    } catch (error) {
        if (error instanceof Error) {
            // console.log(error.message);
            res.status(500).json(error.message);
        }
    }

};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0),
    });

    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const usuarioEncontrado = await pool.query('SELECT * FROM usuarios WHERE id = $1', [req.decoded.id])
    if (!usuarioEncontrado) return res.status(400).json({ message: "Usuario no encontrado." });

    return res.json({
        id: usuarioEncontrado.rows[0].id,
        username: usuarioEncontrado.rows[0].usuario,
        email: usuarioEncontrado.rows[0].correoelectronico,
        rol: usuarioEncontrado.rows[0].rol
    });
};

export const verifyToken = async (req,res) =>{
    const { token } = req.cookies;
    if(!token) return res.status(401).json({message: "No Autorizado"})

    jwt.verify(token,  TOKEN_SECRET , async (err, user) => {
        if(err) return res.status(401).json({mesage: "No Autorizado"});

        const usuarioEncontrado = await  pool.query('SELECT * FROM usuarios WHERE id=$1',[user.id])
        if(!usuarioEncontrado) return res.status(401).json({message: "No Autorizado"});

        return res.json({
            id: usuarioEncontrado.rows[0].id,
            username: usuarioEncontrado.rows[0].usuario,
            email: usuarioEncontrado.rows[0].correoelectronico,
            rol: usuarioEncontrado.rows[0].rol
        });

    })

};

// module.exports = {
//     register,
//     login,
//     logout,
//     profile,
//     verifyToken
// }