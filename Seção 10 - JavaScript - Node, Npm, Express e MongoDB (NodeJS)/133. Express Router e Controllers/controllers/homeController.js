export function homePage(req, res) {
  res.send(`
    <form action= "/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar form</button>
    </form>
    `);
}

export function postForm(req, res) {
  res.send(`Voce enviou: ${req.body.nome}`);
};
