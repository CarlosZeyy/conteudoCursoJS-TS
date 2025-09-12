export class Person {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

export function soma(x, y) {
  return x + y;
}

export const texto = "Hello World";
const texto2 = "Ola mundo";
const numero = 24;

export default (x, y) => {
  return x * y;
};

export { texto2, numero as idade };
