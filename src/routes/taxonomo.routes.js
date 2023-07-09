const { Router } = require('express');
const {autenticacionRequeridaTaxonomo} = require("../middlewares/validateToken.js");
const { leerRegistros,leerRegistro,crearRegistro,editarRegistro,eliminarRegistro} = require('../controllers/taxonomo.controller.js');

const router = Router();

router.get('/registrotaxonomico', autenticacionRequeridaTaxonomo,leerRegistros );
router.get('/registrotaxonomico/:id', autenticacionRequeridaTaxonomo, leerRegistro);
router.post('/registrotaxonomico',autenticacionRequeridaTaxonomo, crearRegistro );
router.put('/registrotaxonomico/:id', autenticacionRequeridaTaxonomo, editarRegistro);
router.delete('/registrotaxonomico/:id', autenticacionRequeridaTaxonomo, eliminarRegistro);


module.exports = router ;