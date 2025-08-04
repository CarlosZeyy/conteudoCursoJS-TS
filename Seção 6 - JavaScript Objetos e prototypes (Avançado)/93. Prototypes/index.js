function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //   this.nomeCompleto = () => `${nome} ${sobrenome}`;
}

Pessoa.prototype.nomeCompleto = function () { //* lembrete: Arrow function não vai funcionar aqui, por causa do this.
  return `${this.nome} ${this.sobrenome}`;
};

const p1 = new Pessoa("Carlos", "Moises");
const p2 = new Pessoa("João", "Pedro");

console.dir(p1);
console.dir(p2);
