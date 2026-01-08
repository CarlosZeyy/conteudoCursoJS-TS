import User from "../models/User.js";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll(req.body);
      return res.json(users);
    } catch (error) {
      return res.status(400).json({
        erorrs: ["Erro ao buscar usuários."],
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          erorrs: ["Erro: Id do usuário não encontrado ou não existe."],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          erorrs: ["Erro: Usuário não encontrado ou não existe."],
        });
      }
      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        erorrs: ["Erro ao buscar usuário."],
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          erorrs: ["Erro: Id do usuário não encontrado."],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          erorrs: ["Erro: Usuário não encontrado."],
        });
      }

      const updatedData = await user.update(req.body);
      return res.json(updatedData);
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
          erorrs: ["Erro: Id do usuário não encontrado."],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          erorrs: ["Erro: Usuário não encontrado."],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
