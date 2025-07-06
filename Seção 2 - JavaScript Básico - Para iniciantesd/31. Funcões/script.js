function soma(x = 0, y = 0) {
  return x + y;
}

console.log(soma(5, 3));

const functionSoma = function (x = 0, y = 0) {
  return x + y;
};

console.log(functionSoma(5, 6));

const arrowSoma = (x, y) => x + y;
console.log(arrowSoma(3, 1));
