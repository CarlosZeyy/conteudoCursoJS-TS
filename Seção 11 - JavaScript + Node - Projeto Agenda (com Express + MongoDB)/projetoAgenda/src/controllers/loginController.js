import { Login } from "../models/LoginModel.js";

export const login = (req, res) => {
    if (req.session.user) {
        return res.render('logged');
    }
    return res.render("login");
};

export const logged = async (req, res) => {
  const redirectBack = () => res.redirect(req.get("Referer") || "login");

  try {
    const login = new Login(req.body);
    await login.loggedIn();

    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(redirectBack);
      return;
    }

    req.flash("success", "Logado com sucesso.");
    req.session.user = login.user;
    req.session.save('redirectBack');
  } catch (error) {
    console.log(error);
    return res.render("404");
  }
};
