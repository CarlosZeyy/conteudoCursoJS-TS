import express from "express";
import { homePage } from "./src/controllers/homeController.js";
import { login, logged } from "./src/controllers/loginController.js";
import { signup, register } from "./src/controllers/signupController.js";
import { logout } from "./src/controllers/logoutController.js";

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
