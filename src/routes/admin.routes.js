const { Router} = require ('express');
const {autenticacionRequeridaAdmin} = require("../middlewares/validateToken.js");
const {
    leertaxonomias,leertaxonomia,agregartaxonomia,editartaxonomia,eliminartaxonomia,
    leerusuarios,leerusuario,agregarusuario,editarusuario,eliminarusuario

} = require('../controllers/admin.controller.js');
const esquemadeValidacion = require('../middlewares/validatormiddleware.js');
const { taxonomiaEsquema, usuarioEsquema } = require('../schemas/validation.schema.js');
const router = Router();


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

module.exports = router;
