import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import { route } from "./routes.js";
import path from "path";
import helmet from 'helmet';
import csurf from "csurf";
import { fileURLToPath } from "url";
import { middlewareGlobal, checkCsrfError, csrfMiddleware } from "./src/middlewares/middleware.js";
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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

app.use(csurf());
//* Middlewares criados
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(route);

app.on("pronto", () => {
  app.listen(process.env.PORT, () => {
    console.log(`Escutando o servidor na porta ${process.env.PORT}/`);
    console.log(`Servidor on: http://localhost:${process.env.PORT}/`);
  });
});
