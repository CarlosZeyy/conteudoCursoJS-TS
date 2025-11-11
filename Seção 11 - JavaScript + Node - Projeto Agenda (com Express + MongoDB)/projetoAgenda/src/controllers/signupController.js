import { SignUp } from "../models/SignupModel.js";

export const signup = (req, res) => {
  res.render("signup");
};

export const register = async (req, res) => {
  try {
    const signup = new SignUp(req.body);
    await signup.register();

    if (signup.errors.length > 0) {
      req.flash("errors", signup.errors);
      req.session.save(() => {
        return res.redirect(req.get("Referer") || "signup");
      });
      return;
    }

    req.flash("success", "Seu usuário foi criado com sucesso");
    req.session.save(() => {
      return res.redirect(req.get("Referer") || "signup");
    });
  } catch (error) {
    console.log(error);
    return res.render("404");
  }
};
