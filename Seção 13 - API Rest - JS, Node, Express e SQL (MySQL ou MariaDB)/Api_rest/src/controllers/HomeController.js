import Aluno from '../models/Aluno.js';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Nina',
      sobrenome: 'Passarinha',
      email: 'naninha@gmail.com',
      idade: 18,
      peso: 50,
      altura: 1.60
    })
    res.json(novoAluno);
  };
}

export default new HomeController();
