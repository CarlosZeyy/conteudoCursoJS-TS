import { Router } from 'express';
import userController from '../controllers/UserController.js';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
* Index ⮕ lista todos os usuários ⮕ GET
* create/store ⮕ criar um novo user ⮕ POST
* delete ⮕ deleta um user ⮕ DELETE
* update ⮕ atualiza um user ⮕ PUT/PATCH
* show ⮕ mostra um user ⮕ GET
*/
