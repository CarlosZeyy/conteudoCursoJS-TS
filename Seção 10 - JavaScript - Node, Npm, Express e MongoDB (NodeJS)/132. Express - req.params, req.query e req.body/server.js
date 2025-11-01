import express from "express";

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

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

//? Versão 5.1 do express só vai funcionar os parametros desse jeito
app.get("/teste{/:idUser}{/:parametro}", (req, res) => {
  // /user/123
  console.log(req.params);
  
  // /user/?chave1=valor1&chave2=valor&... 
  console.log(req.query);
  res.send(req.query.nome);
});

//? Versão 4.21 do express funcionaria desse jeito
// app.get("/teste/idUser?", (req, res) => {
//   console.log("req.params =", req.params);
//   res.send(req.params.idUser);
// });

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`Voce enviou: ${req.body.nome}`); //* esse ".nome" é vinculado com o name do meu form, se o name do meu form fosse "qualquerCoisa" eu teria que passar req.body.qualquerCoisa para pegar o valor do input 
});
