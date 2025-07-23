function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(() => {
    console.log("f1");
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(() => {
    console.log("f2");
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(() => {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

//* Ele chama a function f1, depois que executa f1 chama a function f2, depois que executa a f2 chama a f3, e executa a f3 e imprime o console.log

//* Exemplo usando arrow function
// f1(() => {
//   f2(() => {
//     f3(() => {
//       console.log("Hello World");
//     });
//   });
// });

//* Exemplo usando function anonima comum
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("Hello World");
//     });
//   });
// });

//* Exemplo mais legivel e usando boas praticas de quebrar uma função longa e varias pequenas

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log("Hello World");
}
