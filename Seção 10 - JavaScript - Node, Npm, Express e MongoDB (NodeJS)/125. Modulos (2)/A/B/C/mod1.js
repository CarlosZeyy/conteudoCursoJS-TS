module.exports = class Person {
  constructor(nome) {
    this.nome = nome;
  }

  saudacao() {
    console.log(`${this.nome} está dizendo olá`);
  }
};
