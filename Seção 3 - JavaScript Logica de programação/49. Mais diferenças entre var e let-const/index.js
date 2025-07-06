const verdadeira = true;
//* Let tem escopo de bloco {... bloco}
//* var so tem espoco de function

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz'; // criando

// if (verdadeira) {
//     let nome = 'Carlos'; // criando
//     var nome2 = 'Joao'; // redeclarando

//     if (verdadeira) {
//         var nome2 = 'Marreco'; // redeclarando
//         let nome = 'Pato'; // criando
//     }
// }
// console.log(nome, nome2);

// function falaOi() {
//   if (verdadeira) {
//     let nome = "Carlos";
//     var sobrenome = "Ferreira";
//   }

//   console.log(nome); // vai dar erro pois let nao é vista como definida fora do bloco.
//   console.log(sobrenome); // var tem essa flexibilidade de ser lida fora de um bloco de instrução.
// }
// falaOi();

// hoisting de variavel
// sobrenome = 'Moises';

let sobrenome = 'Ferreira';
console.log(sobrenome); 

// var sobrenome = 'Ferreira'; // <- o console.log entendeu que existe a variavel dentro do escopo, porem não consegue imprimir o valor por que foi declarada depois de ser chamada resultando em "undefined".

// let sobrenome = 'Ferreira'; // < o JS ja avisa que a variavel precisa ser definida antes de ser chamada.