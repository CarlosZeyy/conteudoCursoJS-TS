import Aluno from '../models/Aluno.js';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Joao',
      sobrenome: 'Ganso',
      email: 'jao@gmail.com',
      idade: 20,
      peso: 100,
      altura: 1.75
    })
    res.json(novoAluno);
  };
}

export default new HomeController();
