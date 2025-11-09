import express from "express";
import { homePage } from "./src/controllers/homeController.js";
import { login } from "./src/controllers/loginController.js";
import { signup } from "./src/controllers/signupController.js";

export const route = express.Router();

// Home
route.get("/", homePage);

// login
route.get('/login', login);

//register
route.get('/signup', signup);
