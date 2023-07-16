import {pool} from '../db.js';
export const leerRegistros3 = async (req, res) => {
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

export const leerRegistro3 = async (req, res) => {
    try {
        const { id } = req.params;
        const registroEncotrado = await pool.query("SELECT * FROM plantas WHERE id=$1", [id]);
        // const registroEncotrado = await pool.query('SELECT p.*, i.* FROM plantas AS p INNER JOIN imagenes AS i ON p.id = i.planta_id WHERE p.usuario_id = $1', [id]);

        if (!registroEncotrado) {
            return res.status(400).json({ message: 'La Especie no fue encontrada' });
        }
        const idtx = registroEncotrado.rows[0].taxonomia_id;
        const leertaxonomia = await pool.query('SELECT * FROM taxonomia WHERE id=$1', [idtx])
        
        const idimg =  await pool.query("SELECT urlimagen FROM imagenes WHERE planta_id=$1", [id]);
        
        res.json({
            // especie: {
                "nombre_comun": registroEncotrado.rows[0].nombrecomun,
                "nombre_cientifico": registroEncotrado.rows[0].nombrecientifio,
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
