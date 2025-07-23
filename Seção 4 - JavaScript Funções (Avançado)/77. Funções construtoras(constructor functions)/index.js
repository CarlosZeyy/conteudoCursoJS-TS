//* Constructor function (Função construtura) -> Objetos
//* Factory function (Função fábrica) -> Objetos

//* Construtora -> Pessoa (new)

class Person {
  constructor(name, surname) {
    //* Atributos e/ou métodos privados (para deixar atributos/métodos privados *NÃO* se usa o this)
    const id = 123456;

    const internMethod = (a, b) => {
      return a + b;
    };

    //* Atributos e/ou métodos públicos (para deixar atributos/métodos privados *USA* o this)

    this.name = name;
    this.surname = surname;
    this.externMethod = () => {
      console.log(
        `${name} ${surname}: está somando 3 + 2 = ${internMethod(3, 2)}.`
      );
    };
  }
}

function Person1 (name, surname) {
    const id = 123456;

    const internMethod = (a, b) => {
      return a + b;
    };


    this.name = name;
    this.surname = surname;
    this.externMethod = () => {
      console.log(
        `${name} ${surname}: está somando 3 + 2 = ${internMethod(3, 2)}.`
      );
    };
  }

const p1 = new Person("Carlos", "Moises");
const p2 = new Person("Joao", "Ganso");
const p1Teste = new Person1("Carlos", "Moises");

p1.externMethod();
p2.externMethod();
p1Teste.externMethod();
