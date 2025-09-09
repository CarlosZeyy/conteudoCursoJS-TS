const nome = "Carlos";
const obj = { nome };
const newObj = { ...obj };
console.log(newObj);

class Person {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

