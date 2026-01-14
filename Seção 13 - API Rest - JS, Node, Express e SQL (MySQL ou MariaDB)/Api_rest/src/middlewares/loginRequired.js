/** exporta uma function que vai pegar o campo de auth do header, checar se ela existe, seperar o berear e o token, e vefirificar se existe o token, id, email do user*/

import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ["Necessário estar logado."],
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ["Token expirado ou inválido."],
    });
  }
};
