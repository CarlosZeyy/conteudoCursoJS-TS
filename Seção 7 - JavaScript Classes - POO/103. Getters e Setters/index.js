const _velocidade = Symbol("velocidade");
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(valor) {
    console.log("SETTER");
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    console.log("GETTER");
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  desacelerar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("Fusca");
// console.log(c1.velocidade);
// c1.acelerar();
// for (i = 0; i <= 200; i++) {
//   c1.acelerar();
// }

// c1.velocidade = 2000;
// c1.velocidade = 99;

// console.log(c1.velocidade);

//* Exemplo com Pessoa

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(" ");
    this.nome = valor.shift();
    this.sobrenome = valor.join(" ");
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const p1 = new Pessoa("Carlos", "Moises");
console.log(p1);
console.log(p1.nomeCompleto);

console.log();
p1.nomeCompleto = "Carlos Moises Ferreira";
console.log(p1);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);