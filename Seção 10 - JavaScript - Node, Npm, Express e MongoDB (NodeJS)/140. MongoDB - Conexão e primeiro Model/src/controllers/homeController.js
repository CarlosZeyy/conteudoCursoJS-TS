export function homePage(req, res) {
  res.render(`index`);
  return;
}

export function postForm(req, res) {
  res.send(req.body)
  return;
};
