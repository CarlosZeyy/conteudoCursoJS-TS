import express from "express";
import { route } from "./routes.js";
import path from "path";
import { fileURLToPath } from "url";
import { middlewareGlobal } from "./src/middlewares/middleware.js";

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views")); //* caminho absoluto
// app.set("views", path.resolve('./src/views')); //* caminho relativo
app.set("view engine", "ejs");

//* Middlewares
app.use(middlewareGlobal);
app.use(route);

app.listen(PORT, () => {
  console.log(`Escutando o servidor na porta ${PORT}/`);
  console.log(`Servidor on: http://localhost:${PORT}/`);
});
