import { Router } from 'express';
import {autenticacionRequeridaTaxonomo} from "../middlewares/validateToken.js";
import { leerRegistros,leerRegistro,crearRegistro,editarRegistro,eliminarRegistro} from '../controllers/taxonomo.controller.js';
import esquemadeValidacion  from "../middlewares/validatormiddleware.js";
import { taxonomiaEsquema } from '../schemas/validation.schema.js';

const router = Router();

router.get('/registrotaxonomico', autenticacionRequeridaTaxonomo,leerRegistros );
router.get('/registrotaxonomico/:id', autenticacionRequeridaTaxonomo, leerRegistro);
router.post('/registrotaxonomico',autenticacionRequeridaTaxonomo, esquemadeValidacion(taxonomiaEsquema),  crearRegistro );
router.put('/registrotaxonomico/:id', autenticacionRequeridaTaxonomo,esquemadeValidacion(taxonomiaEsquema),  editarRegistro);
router.delete('/registrotaxonomico/:id', autenticacionRequeridaTaxonomo, eliminarRegistro);


export default router ;