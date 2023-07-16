import { Router} from  'express';
import {autenticacionRequeridaAdmin} from "../middlewares/validateToken.js";
import { verificarRegistro,
    leerRegistros2,leerRegistro2,crearRegistro2,editarRegistro2,eliminarRegistro2,
    leertaxonomias,leertaxonomia,agregartaxonomia,editartaxonomia,eliminartaxonomia,
    leerusuarios,leerusuario,agregarusuario,editarusuario,eliminarusuario

} from '../controllers/admin.controller.js';
import esquemadeValidacion from '../middlewares/validatormiddleware.js';
import { taxonomiaEsquema, usuarioEsquema } from '../schemas/validation.schema.js';
const router = Router();


// especies
router.get('/registrotaxonomico', autenticacionRequeridaAdmin,leerRegistros2 );
router.get('/registrotaxonomico/:id', autenticacionRequeridaAdmin, leerRegistro2); 
router.post('/registrotaxonomico',autenticacionRequeridaAdmin,  crearRegistro2 );
router.put('/registrotaxonomico/:id', autenticacionRequeridaAdmin,  editarRegistro2);
router.delete('/registrotaxonomico/:id', autenticacionRequeridaAdmin, eliminarRegistro2);
router.patch('/registrotaxonomico/:id', autenticacionRequeridaAdmin, verificarRegistro);



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
router.put('/usuarios/:id',autenticacionRequeridaAdmin, editarusuario);
router.delete('/usuarios/:id',autenticacionRequeridaAdmin, eliminarusuario);

//  

export default router;
