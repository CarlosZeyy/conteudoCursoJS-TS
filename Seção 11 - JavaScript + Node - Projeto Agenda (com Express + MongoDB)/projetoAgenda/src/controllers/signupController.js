import { SignUp } from "../models/SignupModel.js";

export const signup = (req, res) => {
  return res.render("signup");
};

export const register = async (req, res) => {
  const redirectBack = () => res.redirect(req.get("Referer") || "signup");
  const registerSuccess = () => res.redirect(req.get("login") || "login");
  
  try {
    const signup = new SignUp(req.body);
    await signup.register();

    if (signup.errors.length > 0) {
      req.flash("errors", signup.errors);
      req.session.save(redirectBack);
      return;
    }

    req.flash("success", "Seu usuário foi criado com sucesso");
    req.session.save(registerSuccess);
  } catch (error) {
    console.log(error);
    return res.render("404");
  }
};
