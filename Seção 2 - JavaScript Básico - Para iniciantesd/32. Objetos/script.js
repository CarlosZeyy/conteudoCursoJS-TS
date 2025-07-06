const pessoa1 = {
  nome: "Carlos",
  sobrenome: "Moises",
  idade: 24,

  fala() {
    // console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
    console.log(`A minha idade atual eh: ${this.idade}.`)
  },

  incrementaIdade() {
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();



// function criarPessoa(nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade,

//     //* Ou (quando precisar fazer referencia a um objeto que leva o mesmo valor pode colocar somente o obj ex: nome: nome > nome)
// nome: nome,
// sobrenome: sobrenome,
// idade: idade
//   };
// }

// const pessoas = [
//   (pessoa1 = criarPessoa("Carlos", "Moises", 24)),
//   (pessoa2 = criarPessoa("Pink", "Silenciosa", 1)),
//   (pessoa3 = criarPessoa("Maria", "Gansinha", 6)),
//   (pessoa4 = criarPessoa("Joao", "Bundao", 6)),
//   (pessoa5 = criarPessoa("Pilico", "Pompom", 3)),
// ];
