import express from 'express';
import { homePage, postForm } from './controllers/homeController.js';
import { contactPage } from './controllers/contactController.js';

export const route = express.Router();

route.get('/', homePage);
route.get('/contact', contactPage);

route.post('/', postForm);