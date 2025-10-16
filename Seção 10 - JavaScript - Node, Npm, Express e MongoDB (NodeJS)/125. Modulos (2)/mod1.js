class Person {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Carlos';
const sobrenome = 'Ferreira';

//* O meu module.exports exportando um objeto com as variaveis e classe sobrescreve todos esses exports individuais.
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.Pessoa = Person;

module.exports = {
    nome, sobrenome, Person
}