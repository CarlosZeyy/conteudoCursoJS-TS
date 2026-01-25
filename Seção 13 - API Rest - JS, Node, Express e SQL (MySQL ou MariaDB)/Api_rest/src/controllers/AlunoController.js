import Aluno from "../models/Aluno.js";
import Foto from "../models/Foto.js";
class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: [
        "id",
        "nome",
        "sobrenome",
        "email",
        "idade",
        "peso",
        "altura",
      ],
      order: [
        ["id", "DESC"],
        [Foto, "id", "DESC"],
      ],
      include: {
        model: Foto,
        attributes: ["url", "filename"],
      },
    });
    return res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id || isNaN(id)) {
        return res.status(400).json({
          errors: ["Erro: ID inválido ou não existe"],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        order: [
          ["id", "DESC"],
          [Foto, "id", "DESC"],
        ],
        include: {
          model: Foto,
          attributes: ["url", "filename"],
        },
      });

      if (!aluno) {
        return res.status(404).json({
          errors: ["Erro: Usuário não encontrado ou não existe"],
        });
      }

      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : [error.message],
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.json({
        message: "Aluno criado com sucesso.",
        aluno: aluno,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : [error.message],
      });
    }
  }

  async update(req, res) {
    try {
      if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
          errors: ["Erro: Nenhum dado enviado."],
        });
      }

      const { id } = req.params;

      if (!id || isNaN(id)) {
        return res.status(400).json({
          errors: ["Erro: ID inválido ou não existe"],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(404).json({
          errors: ["Erro: Aluno não encontrado ou não existe"],
        });
      }

      const alunoUpdated = await aluno.update(req.body);

      return res.json({
        message: "Aluno atualizado com sucesso",
        aluno: alunoUpdated,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : [error.message],
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id || isNaN(id)) {
        return res.status(400).json({
          errors: ["Erro: ID inválido ou não existe"],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(404).json({
          errors: ["Erro: Aluno não encontrado ou não existe"],
        });
      }

      await aluno.destroy();
      return res.json({
        message: "Aluno apagado com sucesso",
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : [error.message],
      });
    }
  }
}

export default new AlunoController();
