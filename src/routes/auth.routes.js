import { Router } from "express";
import { register ,login, logout, profile, verifyToken} from  "../controllers/auth.controller.js";
import { autenticacionRequerida} from "../middlewares/validateToken.js";
import esquemadeValidacion  from "../middlewares/validatormiddleware.js";
import {usuarioEsquema ,loginEsquema} from '../schemas/validation.schema.js';
const router = Router();

router.post('/registro',esquemadeValidacion(usuarioEsquema),register);
router.post('/logout',logout);
router.post('/login',esquemadeValidacion(loginEsquema),login);
router.get('/verify', verifyToken);
router.get('/profile', autenticacionRequerida, profile);

export default router;