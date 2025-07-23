//* Factory function (Função fábrica)
//* Constructor function (Função construtura)

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    //* Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //* Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto = "falando sobre JS") {
      return `${this.nome} está ${assunto}`;
    },

    altura: a,
    peso: p,

    //* Getter
    get imc() {
      const index = this.peso / this.altura ** 2; //* ou poderia colocar (this.altura * this.altura).
      return index.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Carlos Moises", "Ferreira", 1.76, 80);
const p2 = criaPessoa("Joao", "Silva", 1.96, 115);
const p3 = criaPessoa("Maria", "Mariano", 1.64, 60);

// p1.nomeCompleto = "Carlos Moises Mariano Lopes Ferreira";

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

console.log(p1.nome);
console.log(p1.sobrenome);

console.log(p1.fala());
console.log(p1.fala("Alguma coisa"));

console.log(p1)