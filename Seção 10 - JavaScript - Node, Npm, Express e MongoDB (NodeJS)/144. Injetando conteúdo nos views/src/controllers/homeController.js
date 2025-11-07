export function homePage(req, res) {
  res.render(`index`, {
    titulo: "Titulo da pagina",
    numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
}

export function postForm(req, res) {
  res.send(req.body);
  return;
}
