import { Planta } from "../models/Planta.model.js";
import { Taxonomia } from "../models/Taxonomia.model.js";
import { Imagen } from "../models/Imagen.model.js";
import { subirArchivo } from '../services/s3.js';
import { AWS_LINK_ARCHIVE } from "../config.js";
import { validaciondearchivo } from "../validators/user.validator.js";

import { pool } from '../db.js';

export const leerRegistros = async (req, res) => {
    try {
        const tdsregistros = await pool.query('SELECT * FROM plantas WHERE usuario_id=$1 ', [req.decoded.id]);
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

export const leerRegistro = async (req, res) => {
    try {
        const { id } = req.params;
        const registroEncotrado = await pool.query("SELECT * FROM plantas WHERE id=$1", [id]);

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
            "estado": registroEncotrado.rows[0].estado,
            "descripcion": registroEncotrado.rows[0].descripcion,
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

export const crearRegistro = async (req, res) => {
    try {

        var fin = 0
        const { reino, filo, clase, orden, familia, genero, especie, nci, nco, descripcion } = req.body;
        const imagenm = req.files.imagenm;

        const nplanta = new Planta();
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

        if (resulttax) {
            fin++
        }

        // planta
        nplanta.setUsuarioID(req.decoded.id);
        nplanta.setNombreComun(nco);
        nplanta.setNombreCientifico(nci);
        nplanta.setTaxonomiaID(resulttax.rows[0].id);
        nplanta.setDescripcion(descripcion);

        if (req.decoded.rol === "dig") {
            nplanta.setEstado("por verificar");
        } else {
            nplanta.setEstado("verificado");
        }

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
            // res.json(element)
            const nombrearchivo = element.name
            const urlimagen = `${AWS_LINK_ARCHIVE}${nombrearchivo}`;
            nimagen.setPlanta_ID(resultplant.rows[0].id);
            nimagen.setNombre(nombrearchivo);
            nimagen.setURLImagen(urlimagen);
            const resultimagen = await pool.query("INSERT INTO imagenes (planta_id,nombre,urlimagen) VALUES ($1,$2,$3)", [
                nimagen.getPlantaID(), nimagen.getNombre(), nimagen.getURLImagen()
            ])
            if (!resultimagen) return res.status(400).json({ error: "No se cargaron las imagenes" })


        });

        // nimagen.setPlanta_ID(resultplant.rows[0].id);
        // nimagen.setNombre(nombrelimpio);
        // nimagen.setURLImagen(urlimagen);


        if (!resultplant) return res.status(500).json({ error: "No se registro la Especie" });

        if (fin === 3) {
            res.sendStatus(200)
        }
        // ! esto no

    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
export const editarRegistro = async (req, res) => {

    try {
        const { id } = req.params;
        const { nco, nci, reino, filo, clase, orden, familia, genero, especie, estado, descripcion } = req.body;

        const plantaencontrada = await pool.query('UPDATE plantas  SET nombrecomun= $1, nombrecientifio= $2 ,estado=$3 ,descripcion=$4 WHERE id = $5 AND usuario_id=$6', [nco, nci, estado, descripcion, id, req.decoded.id]);
        if (plantaencontrada.rowCount === 0) return res.status(404).json({ message: "Especie no encontrada!" });

        const plantaActualizada = await pool.query('SELECT taxonomia_id FROM plantas WHERE id = $1', [id]);

        const idtax = plantaActualizada.rows[0].taxonomia_id;

        const editartax = await pool.query('UPDATE taxonomia SET reino=$1,filo=$2,clase=$3,orden=$4,familia=$5,genero=$6,especie=$7 WHERE id=$8',
            [
                reino, filo, clase, orden, familia, genero, especie, idtax
            ]);
        if (editartax.rowCount === 0) { return res.status(404).json({ message: "La taxonomía no fue encontrada!" }) }

        res.sendStatus(200)


    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
export const eliminarRegistro = async (req, res) => {
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
