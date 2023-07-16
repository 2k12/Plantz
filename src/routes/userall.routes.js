import { Router } from 'express';
import {leerRegistros3, leerRegistro3} from '../controllers/userall.controller.js';

const router = Router();


// especies
router.get('/especies', leerRegistros3);
router.get('/especies/:id', leerRegistro3);


//  

export default router;
