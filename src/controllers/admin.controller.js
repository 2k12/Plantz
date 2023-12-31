import { Planta } from "../models/Planta.model.js";
import { Taxonomia } from "../models/Taxonomia.model.js";
import { Imagen } from "../models/Imagen.model.js";
import { subirArchivo } from '../services/s3.js';
import { AWS_LINK_ARCHIVE } from "../config.js";
import { Usuario } from "../models/User.model.js";
import bcrypt from 'bcryptjs';
import { validacionUsuario, validaciondearchivo } from "../validators/user.validator.js";

// const { validacionUsuario, eliminacionespacios } = require("../validators/user.validator.js");

import { pool } from '../db.js';


// especies

export const leerRegistros2 = async (req, res) => {
    try {
        const tdsregistros = await pool.query('SELECT * FROM plantas ');
        // const tdsregistrosn = await pool.query('SELECT p.*, i.* FROM plantas AS p INNER JOIN imagenes AS i ON p.id = i.plantaid WHERE p.usuario_id = $1', [req.decoded.id]);

        // console.log({tdsregistrosn})

        if (tdsregistros.rowCount === 0) return res.status(404);
        res.status(200).json(tdsregistros.rows);
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};

export const leerRegistro2 = async (req, res) => {
    try {
        const { id } = req.params;
        const registroEncotrado = await pool.query("SELECT * FROM plantas WHERE id=$1", [id]);
        // const registroEncotrado = await pool.query('SELECT p.*, i.* FROM plantas AS p INNER JOIN imagenes AS i ON p.id = i.planta_id WHERE p.usuario_id = $1', [id]);

        if (!registroEncotrado) {
            return res.status(400).json({ message: 'La Especie no fue encontrada' });
        }
        const idtx = registroEncotrado.rows[0].taxonomia_id;
        const leertaxonomia = await pool.query('SELECT * FROM taxonomia WHERE id=$1', [idtx])

        const idimg = await pool.query("SELECT urlimagen FROM imagenes WHERE planta_id=$1", [id]);

        res.json({
            // especie: {
            "nombre_comun": registroEncotrado.rows[0].nombrecomun,
            "nombre_cientifico": registroEncotrado.rows[0].nombrecientifio,
            "descripcion": registroEncotrado.rows[0].descripcion,
            "estado": registroEncotrado.rows[0].estado,
            "imagen": idimg.rows[0].urlimagen,
            "reino": leertaxonomia.rows[0].reino,
            "filo": leertaxonomia.rows[0].filo,
            "clase": leertaxonomia.rows[0].clase,
            "orden": leertaxonomia.rows[0].orden,
            "familia": leertaxonomia.rows[0].familia,
            "genero": leertaxonomia.rows[0].genero,
            "especie": leertaxonomia.rows[0].especie
            // }

        })
        // }
        // res.json(registroEncotrado.rows[0]);
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};

export const crearRegistro2 = async (req, res) => {
    try {
        var fin = 0
        const { reino, filo, clase, orden, familia, genero, especie, nci, nco, descripcion } = req.body;
        const imagenm = req.files.imagenm;


        const nplanta = new Planta();
        const ntaxonomia = new Taxonomia();

        // // taxonomia
        ntaxonomia.setReino(reino);
        ntaxonomia.setFilo(filo);
        ntaxonomia.setClase(clase);
        ntaxonomia.setOrden(orden);
        ntaxonomia.setFamilia(familia);
        ntaxonomia.setGenero(genero);
        ntaxonomia.setEspecie(especie);

        const resulttax = await pool.query('INSERT INTO taxonomia (reino,filo,clase,orden,familia,genero,especie) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING * ',
            [ntaxonomia.getReino(), ntaxonomia.getFilo(), ntaxonomia.getClase(), ntaxonomia.getOrden(), ntaxonomia.getFamilia(), ntaxonomia.getGenero(), ntaxonomia.getEspecie(),
            ])


        if (resulttax) {
            fin++
        }



        // planta
        nplanta.setUsuarioID(req.decoded.id);
        nplanta.setNombreComun(nco);
        nplanta.setNombreCientifico(nci);
        nplanta.setTaxonomiaID(resulttax.rows[0].id);
        nplanta.setDescripcion(descripcion);
        nplanta.setEstado("verificado");

        const resultplant = await pool.query("INSERT INTO plantas (usuario_id,taxonomia_id,nombrecomun,nombrecientifio,estado,descripcion) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
            [
                nplanta.getUsuarioID(), nplanta.getTaxonomiaID(), nplanta.getNombreComun(), nplanta.getNombreCientifico(), nplanta.getEstado(), nplanta.getDescripcion()
            ])

        if (resultplant) {
            fin++
        }
        const cargaarchivos = await subirArchivo(imagenm);
        if (cargaarchivos) {
            fin++
        }

        // imagen
        imagenm.forEach(async (element) => {
            const nimagen = new Imagen();
            const urlimagen = `${AWS_LINK_ARCHIVE}${nombrearchivo}`;
            nimagen.setPlanta_ID(resultplant.rows[0].id);
            nimagen.setNombre(nombrearchivo);
            nimagen.setURLImagen(urlimagen);
            const resultimagen = await pool.query("INSERT INTO imagenes (planta_id,nombre,urlimagen) VALUES ($1,$2,$3)", [
                nimagen.getPlantaID(), nimagen.getNombre(), nimagen.getURLImagen()
            ])
            if (!resultimagen) return res.status(400).json({ error: "No se cargaron las imagenes" })
        });

        if (!resultplant) return res.status(500).json({ error: "No se registro la Especie" });

        if (fin === 3) {
            res.sendStatus(200)
        }

    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
export const editarRegistro2 = async (req, res) => {

    try {
        const { id } = req.params;
        const { nco, nci, reino, filo, clase, orden, familia, genero, especie, estado, descripcion } = req.body;

        const plantaencontrada = await pool.query('UPDATE plantas  SET nombrecomun= $1, nombrecientifio= $2, estado=$3,descripcion=$4 WHERE id = $5', [nco, nci, estado, descripcion, id]);

        if (plantaencontrada.rowCount === 0) return res.status(404).json({ message: "Especie no encontrada!" });

        const plantaActualizada = await pool.query('SELECT taxonomia_id FROM plantas WHERE id = $1', [id]);

        const idtax = plantaActualizada.rows[0].taxonomia_id;

        const editartax = await pool.query('UPDATE taxonomia SET reino=$1,filo=$2,clase=$3,orden=$4,familia=$5,genero=$6,especie=$7 WHERE id=$8',
            [
                reino, filo, clase, orden, familia, genero, especie, idtax
            ]);
        if (!editartax) { return res.status(400).json({ message: "La taxonomía no fue encontrada!" }) }

        res.sendStatus(200)

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};
export const eliminarRegistro2 = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM plantas WHERE id = $1 ', [id]);
        if (!result) return res.status(400).json({ message: "La Especie no existe" });
        res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};

export const verificarRegistro = async (req, res) => {
    try {
        const { id } = req.params;
        const nuevoEstado = "verificado"
        const result = await pool.query("UPDATE PLANTAS SET estado=$1 WHERE id=$2", [nuevoEstado, id])
        if (!result) {
            return res.status(400).json({ message: "No se pudo actualizar el estado de la especie" })
        }
        res.sendStatus(200)

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};

// taxonomia

export const leertaxonomias = async (req, res) => {
    try {
        const tdsregistros = await pool.query('SELECT * FROM taxonomia');
        if (tdsregistros.rowCount === 0) return res.status(404);
        res.status(200).json(tdsregistros.rows);
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};
export const leertaxonomia = async (req, res) => {
    try {
        const { id } = req.params;
        const leertaxonomia = await pool.query("SELECT * FROM taxonomia WHERE id= $1 ", [id]);
        if (!leertaxonomia) {
            return res.status(400).json({ message: 'La Taxonomia no fue encontrada' });
        }
        else {
            res.json({
                "reino": leertaxonomia.rows[0].reino,
                "filo": leertaxonomia.rows[0].filo,
                "clase": leertaxonomia.rows[0].clase,
                "orden": leertaxonomia.rows[0].orden,
                "familia": leertaxonomia.rows[0].familia,
                "genero": leertaxonomia.rows[0].genero,
                "especie": leertaxonomia.rows[0].especie
            })
        }
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};
export const agregartaxonomia = async (req, res) => {
    try {
        const { reino, filo, clase, orden, familia, genero, especie } = req.body;

        const ntaxonomia = new Taxonomia();

        // taxonomia
        ntaxonomia.setReino(reino);
        ntaxonomia.setFilo(filo);
        ntaxonomia.setClase(clase);
        ntaxonomia.setOrden(orden);
        ntaxonomia.setFamilia(familia);
        ntaxonomia.setGenero(genero);
        ntaxonomia.setEspecie(especie);


        const resulttax = await pool.query('INSERT INTO taxonomia (reino,filo,clase,orden,familia,genero,especie) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING * ',
            [ntaxonomia.getReino(), ntaxonomia.getFilo(), ntaxonomia.getClase(), ntaxonomia.getOrden(), ntaxonomia.getFamilia(), ntaxonomia.getGenero(), ntaxonomia.getEspecie(),
            ])
        if (!resulttax) return res.sendStatus(400)
        res.sendStatus(200)
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
export const editartaxonomia = async (req, res) => {

    try {
        const { id } = req.params;
        const { reino, filo, clase, orden, familia, genero, especie } = req.body;

        const editartax = await pool.query('UPDATE taxonomia SET reino=$1,filo=$2,clase=$3,orden=$4,familia=$5,genero=$6,especie=$7 WHERE id=$8',
            [
                reino, filo, clase, orden, familia, genero, especie, id
            ]);
        if (editartax.rowCount === 0) { return res.status(404).json({ message: "La taxonomía no fue encontrada!" }) }

        res.sendStatus(200)

    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
export const eliminartaxonomia = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM taxonomia WHERE id = $1', [id]);
        if (!result) return res.status(400).json({ message: "La Taxonomia no existe" });
        res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};


// usuarios


export const leerusuarios = async (req, res) => {
    try {
        const tdsregistros = await pool.query('SELECT * FROM usuarios');
        res.json(tdsregistros.rows);
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};
export const leerusuario = async (req, res) => {
    try {
        const { id } = req.params;
        const leerusuario = await pool.query("SELECT * FROM usuarios WHERE id= $1 ", [id]);
        if (!leerusuario) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }
        else {
            res.json({
                "nombre": leerusuario.rows[0].nombre,
                "usuario": leerusuario.rows[0].usuario,
                "email": leerusuario.rows[0].correoelectronico,
                "contrasena": leerusuario.rows[0].contrasena,
                "rol": leerusuario.rows[0].rol,
            })
            // console.log(leerusuario)
        }
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};
export const agregarusuario = async (req, res) => {
    try {


        const { nombre, usuario, email, contrasena } = req.body;

        const usuarioyaRegistrado = await pool.query('SELECT * FROM usuarios WHERE correoelectronico = $1', [email])
        if (usuarioyaRegistrado.rows.length > 0) {
            return res.status(400).json({ message: 'Email ya Registrado.' });
        }
        else {

            const usuarion = new Usuario();
            const rol = validacionUsuario(usuario);

            // encriptacion de contraseña
            const contrasenaHash = await bcrypt.hash(contrasena, 10)   // string aleatorio

            usuarion.setNombre(nombre);
            usuarion.setUsuario(usuario);
            usuarion.setCorreoElectronico(email);
            usuarion.setContrasena(contrasenaHash);
            usuarion.setRol(rol);



            const result = await pool.query("INSERT INTO usuarios (nombre,usuario,correoelectronico,contrasena,rol) VALUES ($1,$2,$3,$4,$5)", [usuarion.getNombre(), usuarion.getUsuario(), usuarion.getCorreoElectronico(), usuarion.getContrasena(), usuarion.getRol()]);


            if (!result) return res.sendStatus(400);
            res.sendStatus(200);


        }


    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
export const editarusuario = async (req, res) => {

    try {
        const { id } = req.params;
        const { nombre, usuario, email } = req.body;

        const editarusuario = await pool.query('UPDATE usuarios SET nombre=$1,usuario=$2,correoelectronico=$3,rol=$4 WHERE id=$5',
            [
                nombre, usuario, email, validacionUsuario(usuario), id
            ]);
        if (editarusuario.rowCount === 0) { return res.status(404).json({ message: "Usuario no encontrado!" }) }

        res.sendStatus(200);

    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
export const eliminarusuario = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
        if (!result) return res.status(400).json({ message: "El Usuario no existe" });
        res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};
