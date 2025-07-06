const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//* Continue > Continua para a proxima iteração
//* Break sai do laço

//* For of

console.log("\x1b[32m" + "For of: \x1b[0m");
for (numero of numeros) {
  if (numero === 2) {
    console.log("Pulei o 2");
    continue;
  }

  if (numero === 7) {
    console.log("Parei no 7");
    break;
  }
  console.log(numero);
}
//* For in

console.log("\n\x1b[34m" + "For in: \x1b[0m");
for (i in numeros) {
  let numero = numeros[i];

  if (numero === 2) {
    console.log("Pulei o 2");
    continue;
  }

  if (numero === 7) {
    console.log("Parei no 7");
    break;
  }
  console.log(numero);
}

//* For classico

console.log("\n\x1b[31m" + "For classico: \x1b[0m");
for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];

  if (numero === 2) {
    console.log("Pulei o 2");
    continue;
  }

  if (numero === 7) {
    console.log("Parei no 7");
    break;
  }
  console.log(numero);
}

//* While

console.log("\n\x1b[36m" + "While: \x1b[0m");
let index = 0;
while (index < numeros.length) {
  let numero = numeros[index];

  if (numero === 2) {
    console.log("Pulei o 2");
    index++;
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("Parei no 7");
    index++;
    break;
  }

  index++;
}

//* Do While

console.log("\n\x1b[35m" + "DO WHILE: \x1b[0m");
let index2 = 0;
do {
  let numero = numeros[index2];

  if (numero === 2) {
    console.log("Pulei o 2");
    index2++;
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("Parei no 7");
    index2++;
    break;
  }

  index2++;
} while (index < numeros.length);
