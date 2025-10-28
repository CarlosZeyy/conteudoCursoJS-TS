import express from "express";

const app = express();
const PORT = 5000;

//?                CRUD
//* CREATE  | READ   | UPDATE    | DELETE
//* Criar   | Ler    | Atualizar | Deletar/apagar
//* POST    | GET    | PUT       |  DELETE

app.listen(PORT, () => {
  console.log(`Escutando o servidor na porta ${PORT}/`);
  console.log(`Servidor on: http://localhost:${PORT}/`);
});

app.get("/", (req, res) => {
  res.send(`
    <form action= "/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar form</button>
    </form>
    `);
});

app.post("/", (req, res) => {
  res.send(`Formulario Enviado!`);
});

app.get("/contact", (req, res) => {
  res.send(`<h2>Obrigado por entrar em contato</h2>`);
});
