import { Router } from 'express';
import {autenticacionRequeridaTaxonomo} from "../middlewares/validateToken.js";
import { leerRegistros,leerRegistro,crearRegistro,editarRegistro,eliminarRegistro} from '../controllers/taxonomo.controller.js';
// const esquemadeValidacion = require('../middlewares/validatormiddleware.js');
// const { taxonomiaEsquema } = require('../schemas/validation.schema.js');

const router = Router();

router.get('/registrotaxonomico', autenticacionRequeridaTaxonomo,leerRegistros );
router.get('/registrotaxonomico/:id', autenticacionRequeridaTaxonomo, leerRegistro);
router.post('/registrotaxonomico',autenticacionRequeridaTaxonomo,  crearRegistro );
router.put('/registrotaxonomico/:id', autenticacionRequeridaTaxonomo,  editarRegistro);
router.delete('/registrotaxonomico/:id', autenticacionRequeridaTaxonomo, eliminarRegistro);


export default router ;