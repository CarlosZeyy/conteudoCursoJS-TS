import { Router } from 'express';
import FotoController from '../controllers/FotoController.js';

const router = new Router();

router.post('/', FotoController.store);

export default router;
