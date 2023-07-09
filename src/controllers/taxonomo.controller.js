const { Planta } = require("../models/Planta.model.js");
const { Taxonomia } = require("../models/Taxonomia.model.js");
const { Imagen } = require("../models/Imagen.model.js");

// const { validacionUsuario, eliminacionespacios } = require("../validators/user.validator.js");

const pool = require('../db.js');

const leerRegistros = async (req, res) => {
    try {
        const tdsregistros = await pool.query('SELECT * FROM plantas WHERE usuario_id=$1 ',[req.decoded.id]);
        if(tdsregistros.rowCount === 0)return res.status(404).json({message: "No existen registros taxonomicos"});
        res.json(tdsregistros.rows);
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};
const leerRegistro = async (req, res) => {
    try {
        const { id } = req.params;
        const registroEncotrado = await pool.query("SELECT * FROM plantas WHERE id=$1 AND usuario_id=$2", [id,req.decoded.id]);
        if (!registroEncotrado) {
            return res.status(400).json({ message: 'La Especie no fue encontrada' });
        }
        else {
            const leertaxonomia = await pool.query('SELECT * FROM taxonomia WHERE id=$1', [registroEncotrado.rows[0].id])
            res.json({
                "nombre_comun": registroEncotrado.rows[0].nombrecomun,
                "nombre_cientifico": registroEncotrado.rows[0].nombrecientifio,
                "reino": leertaxonomia.rows[0].reino,
                "filo": leertaxonomia.rows[0].filo,
                "clase": leertaxonomia.rows[0].clase,
                "orden": leertaxonomia.rows[0].orden,
                "familia": leertaxonomia.rows[0].familia,
                "genero": leertaxonomia.rows[0].genero,
                "especie": leertaxonomia.rows[0].especie
            })
        }
        // res.json(registroEncotrado.rows[0]);
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};
const crearRegistro = async (req, res) => {
    try {
        const { imagenm, reino, filo, clase, orden, familia, genero, especie, nci, nco } = req.body;

        const nplanta = new Planta();
        const ntaxonomia = new Taxonomia();
        const nimagen = new Imagen();

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



        // planta
        nplanta.setUsuarioID(req.decoded.id);
        nplanta.setNombreComun(nco);
        nplanta.setNombreCientifico(nci);
        nplanta.setTaxonomiaID(resulttax.rows[0].id);

        var resultplant = await pool.query("INSERT INTO plantas (usuario_id,taxonomia_id,nombrecomun,nombrecientifio) VALUES ($1,$2,$3,$4) RETURNING *",
            [
                nplanta.getUsuarioID(), nplanta.getTaxonomiaID(), nplanta.getNombreComun(), nplanta.getNombreCientifico()
            ])

        res.json({
            id: resultplant.rows[0].id,
            userid: resultplant.rows[0].usuario_id,
            taxonomiaid: resultplant.rows[0].taxonomia_id,
            nco: resultplant.rows[0].nombrecomun,
            nci: resultplant.rows[0].nombrecientifio,
            reino: resulttax.rows[0].reino,
            filo: resulttax.rows[0].filo,
            clase: resulttax.rows[0].clase,
            orden: resulttax.rows[0].orden,
            familia: resulttax.rows[0].familia,
            genero: resulttax.rows[0].genero,
            especie: resulttax.rows[0].especie,
        });



    } catch (error) {
        if (error instanceof Error) {
            res.send(error);
        }
    }
};
const editarRegistro = async (req, res) => {

    try {
        const { id } = req.params;
        const { nco, nci, reino, filo, clase, orden, familia, genero, especie } = req.body;

        const plantaencontrada = await pool.query('UPDATE plantas  SET nombrecomun= $1, nombrecientifio= $2 WHERE id = $3 AND usuario_id=$4', [nco, nci, id, req.decoded.id]);
        if (plantaencontrada.rowCount === 0) return res.status(404).json({ message: "Especie no encontrada!" });

        const plantaActualizada = await pool.query('SELECT taxonomia_id FROM plantas WHERE id = $1', [id]);

        const idtax = plantaActualizada.rows[0].taxonomia_id;

        const editartax = await pool.query('UPDATE taxonomia SET reino=$1,filo=$2,clase=$3,orden=$4,familia=$5,genero=$6,especie=$7 WHERE id=$8',
            [
                reino, filo, clase, orden, familia, genero, especie, idtax
            ]);
        if (editartax.rowCount === 0) { return res.status(404).json({ message: "La taxonomía no fue encontrada!" }) }

        res.status(200).json({ message: "OK" });

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};
const eliminarRegistro = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE * FROM plantas WHERE id = $1 AND usuario_id=$2', [id,req.decoded.id]);
        if (result.rowCount === 0) return res.status(400).json({ message: "La Especie no existe" });
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
    }
};

module.exports = {
    leerRegistros,
    leerRegistro,
    crearRegistro,
    editarRegistro,
    eliminarRegistro
}