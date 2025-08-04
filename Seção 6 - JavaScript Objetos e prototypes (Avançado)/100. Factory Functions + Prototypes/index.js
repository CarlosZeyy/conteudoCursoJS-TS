const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const pessoaPrototype = {...falar, ...beber, ...comer };
// const pessoaPrototype = Object.assign({}, falar, beber, comer); //* =>  Faz a mesma coisa que os spread

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Carlos", "Moises");
const p2 = criaPessoa("João", "Pedro");
console.log(p1);
console.log(p2);
