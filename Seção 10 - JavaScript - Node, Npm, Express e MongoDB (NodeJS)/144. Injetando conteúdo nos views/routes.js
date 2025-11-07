import express from "express";
import { homePage, postForm } from "./src/controllers/homeController.js";
import { contactPage } from "./src/controllers/contactController.js";

export const route = express.Router();

// Home
route.get("/", homePage);
route.post("/", postForm);

// contato
route.get("/contact", contactPage);
