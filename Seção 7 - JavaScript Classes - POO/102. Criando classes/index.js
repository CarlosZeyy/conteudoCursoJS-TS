class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  falar() {
    console.log(`${this.nomeCompleto()} esta falando.`);
  }
}

// Constructor Function

function Pessoa2 (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nomeCompleto()} esta falando.`)
}

const p1 = new Pessoa("Carlos", "Moises");
const p2 = new Pessoa("Maria", "Gansa");
console.log(p1);
console.log(p2);
