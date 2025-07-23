console.log("Exemplo 1:");
function* geradora1() {
  // Random code...
  yield "Valor 1";
  // Random code...
  yield "Valor 2";
  // Random code...
  yield "Valor 3";
}

const g1 = geradora1();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

console.log("\nExemplo 2:");
//* Loop infinito, porem ele pausa a cada vez que a função é chamada.

function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
//* Posso colocar infintos "console.log(g2.next());" que ele sempre vai esta acresentando um valor e nunca vai terminar.

console.log("\nExemplo 3:");

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();

console.log(g4.next());
console.log(g4.next());
console.log(g4.next());
console.log(g4.next());
console.log(g4.next());
console.log(g4.next());
console.log(g4.next());

console.log("\nExemplo 4:");

function* geradora5() {
  yield function () {
    console.log("Vim do y1");
  };

  // random code...
  return function () {
    console.log("Vim do return");
  };
  //* Qualquer yield que vim depois do return não é lido, basicamente o JS não vai executar esse bloco de código.

  yield function () {
    console.log("Vim do y2");
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
// const func3 = g5.next().value;

func1();
func2();
// func3();
