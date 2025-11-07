import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import { route } from "./routes.js";
import path from "path";
import { fileURLToPath } from "url";
import { middlewareGlobal } from "./src/middlewares/middleware.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import flash from "connect-flash";

const app = express();
configDotenv();
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    app.emit("pronto");
  })
  .catch(e => console.log(e));

const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
  secret: 'Testando session - posso colocar qualquer coisa',
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB,
    // mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true}
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true 
  }
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views")); //* caminho absoluto
// app.set("views", path.resolve('./src/views')); //* caminho relativo
app.set("view engine", "ejs");

//* Middlewares
app.use(middlewareGlobal);
app.use(route);

app.on("pronto", () => {
  app.listen(PORT, () => {
    console.log(`Escutando o servidor na porta ${PORT}/`);
    console.log(`Servidor on: http://localhost:${PORT}/`);
  });
});
