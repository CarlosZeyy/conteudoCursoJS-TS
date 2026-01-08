import User from "../models/User.js";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { password_hash, ...userSemSenha } = novoUser.toJSON();
      return res.json({
        message: "Usuário criado com sucesso.",
        user: userSemSenha,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: { exclude: ["password_hash"] },
      });
      return res.json(users);
    } catch (error) {
      return res.status(400).json({
        errors: ["Erro ao buscar usuários."],
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Erro: Id do usuário não encontrado ou não existe."],
        });
      }

      const user = await User.findByPk(req.params.id, {
        attributes: { exclude: ["password_hash"] },
      });

      if (!user) {
        return res.status(400).json({
          errors: ["Erro: Usuário não encontrado ou não existe."],
        });
      }
      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        errors: ["Erro ao buscar usuário."],
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Erro: Id do usuário não encontrado."],
        });
      }

      if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
          errors: ["Erro: Nenhum dado foi enviado para atualização."],
        });
      }
      const user = await User.findByPk(req.params.id, {
        attributes: { exclude: ["password_hash"] },
      });

      if (!user) {
        return res.status(400).json({
          errors: ["Erro: Usuário não encontrado."],
        });
      }

      const updatedData = await user.update(req.body);
      return res.json({
        message: "Usuário atualizado com sucesso.",
        user: updatedData,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Erro: Id do usuário não encontrado."],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ["Erro: Usuário não encontrado."],
        });
      }

      await user.destroy();
      return res.json({
        message: "Usuário deletado com sucesso.",
        deletedUser: {
          id: user.id,
        },
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
