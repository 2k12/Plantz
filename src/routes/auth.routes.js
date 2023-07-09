const { Router } = require("express");
const { register ,login, logout, profile, verifyToken} = require ("../controllers/auth.controller.js");
const { autenticacionRequerida} = require("../middlewares/validateToken.js");
const esquemadeValidacion  = require("../middlewares/validatormiddleware.js");
const {usuarioEsquema ,loginEsquema} = require('../schemas/validation.schema.js');
const router = Router();

router.post('/registro',esquemadeValidacion(usuarioEsquema),register);
router.post('/logout',logout);
router.post('/login',esquemadeValidacion(loginEsquema),login);
router.get('/verify', verifyToken);
router.get('/profile', autenticacionRequerida, profile);

module.exports = router;