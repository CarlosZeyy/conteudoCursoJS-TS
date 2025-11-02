import express from "express";
import { route } from "./routes.js";

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

app.use(route);

app.listen(PORT, () => {
  console.log(`Escutando o servidor na porta ${PORT}/`);
  console.log(`Servidor on: http://localhost:${PORT}/`);
});
