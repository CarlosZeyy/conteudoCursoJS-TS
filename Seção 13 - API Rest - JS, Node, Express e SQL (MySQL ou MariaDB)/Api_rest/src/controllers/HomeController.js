class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
      teste: true,
    });
  };
}

export default new HomeController();
