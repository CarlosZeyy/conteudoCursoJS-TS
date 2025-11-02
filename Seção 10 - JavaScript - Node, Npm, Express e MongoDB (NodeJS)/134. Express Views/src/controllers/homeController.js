export function homePage(req, res) {
  res.render(`index`);
}

export function postForm(req, res) {
  res.send(`Voce enviou: ${req.body.nome}`);
};
