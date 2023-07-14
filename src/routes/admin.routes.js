import { Router} from  'express';
import {autenticacionRequeridaAdmin} from "../middlewares/validateToken.js";
import {
    leerRegistros2,leerRegistro,crearRegistro,editarRegistro,eliminarRegistro,
    leertaxonomias,leertaxonomia,agregartaxonomia,editartaxonomia,eliminartaxonomia,
    leerusuarios,leerusuario,agregarusuario,editarusuario,eliminarusuario

} from '../controllers/admin.controller.js';
import esquemadeValidacion from '../middlewares/validatormiddleware.js';
import { taxonomiaEsquema, usuarioEsquema } from '../schemas/validation.schema.js';
const router = Router();


// especies
router.get('/registrotaxonomico', autenticacionRequeridaAdmin,leerRegistros2 );
router.get('/registrotaxonomico/:id', autenticacionRequeridaAdmin, leerRegistro);
router.post('/registrotaxonomico',autenticacionRequeridaAdmin,  crearRegistro );
router.put('/registrotaxonomico/:id', autenticacionRequeridaAdmin,  editarRegistro);
router.delete('/registrotaxonomico/:id', autenticacionRequeridaAdmin, eliminarRegistro);


// taxonomia
router.get('/taxonomia',autenticacionRequeridaAdmin,leertaxonomias);
router.get('/taxonomia/:id',autenticacionRequeridaAdmin, leertaxonomia);
router.post('/taxonomia',autenticacionRequeridaAdmin,  esquemadeValidacion(taxonomiaEsquema),agregartaxonomia);
router.put('/taxonomia/:id',autenticacionRequeridaAdmin, esquemadeValidacion(taxonomiaEsquema),editartaxonomia);
router.delete('/taxonomia/:id',autenticacionRequeridaAdmin,eliminartaxonomia);


// usuarios
router.get('/usuarios',autenticacionRequeridaAdmin,leerusuarios);
router.get('/usuarios/:id',autenticacionRequeridaAdmin, leerusuario);
router.post('/usuarios',autenticacionRequeridaAdmin,  esquemadeValidacion(usuarioEsquema), agregarusuario);
router.put('/usuarios/:id',autenticacionRequeridaAdmin,esquemadeValidacion(usuarioEsquema), editarusuario);
router.delete('/usuarios/:id',autenticacionRequeridaAdmin, eliminarusuario);

//  

export default router;
