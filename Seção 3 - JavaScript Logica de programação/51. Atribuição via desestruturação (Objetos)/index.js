const person = {
  namePerson: "Carlos",
  surnamePerson: "Ferreira",
  age: 24,
  address: {
    street: "R Guariba",
    number: 123423,
  },
};

//* Atribuição via desestruturação
console.log(person);

const { namePerson, surnamePerson, ...rest} = person;
console.log("Example 1:");
console.log(namePerson, rest);

const { address: { street: r = 123, number}, address} = person;
console.log("\nExample 2:");
console.log(r, number, address);

const {namePerson: name1 = 'name not found', age} = person; //* se comentar/remover o campo name do obj la na variavel "person" o valor namePerson vai ser substituido pelo valor de name1. esse metodo funciona para arrays tbm.
console.log("\nExample 3:");
console.log(name1, age);



