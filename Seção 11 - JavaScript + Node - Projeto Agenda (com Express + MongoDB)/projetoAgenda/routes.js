import express from "express";
import { homePage } from "./src/controllers/homeController.js";
import { login, logged } from "./src/controllers/loginController.js";
import { signup, register } from "./src/controllers/signupController.js";
import { logout } from "./src/controllers/logoutController.js";
import { contact, editContact, registerContact, updateContact } from "./src/controllers/contactController.js";

//* middleware
import { loginRequired } from "./src/middlewares/middleware.js";

export const route = express.Router();

// Home
route.get("/", homePage);

// login
route.get('/login', login);
route.post('/login', logged);

//register
route.get('/signup', signup);
route.post('/signup', register);

//logout
route.get('/logout', logout);

//contact 
route.get('/contact', loginRequired, contact);
route.get('/contact/:id', loginRequired, editContact);
route.post('/contact', loginRequired, registerContact);
route.post('/contact/edit/:id', loginRequired, updateContact);
