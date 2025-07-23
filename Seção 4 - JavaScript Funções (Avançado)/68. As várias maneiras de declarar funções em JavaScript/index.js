//* Declaração de função (Function hoisting)
//* Criando uma function dessa maneira (usando o metodo padrão que é usando palavra function) o engine do JS vai elevar a função pro topo do arquivo, ou seja, se criar a função depois de chamar/executar ela, é como se o JS tivesse declarado ela antes de chamar. 
falarOi();

function falarOi() {
  console.log("oi");
}

//* first-class objects (objetos de primeira classe)
//* Function expression

//* atribuindo uma function como valor para uma variavel e ela sera executado como uma função normal.
const souUmDado = function () {
  console.log("Sou um dado");
};
souUmDado();
//

//
//* Posso executar uma function dentro de outra passando uma função como parametro, 
const souUmDado2 = function () {
  console.log("Sou um dado2");
};

function executarFuncao(funcao) {
  console.log("Executando funcao abaixo: ");
  funcao();
}
executarFuncao(souUmDado2);

const souUmDado3 = function NomeDaFuncao() {
  console.log("Sou um dado3");
};
//

//* Arrow Function
const arrowFunction = () => {
  console.log("Arrow Function");
};
arrowFunction();

//* Function dentro de objeto
const obj = {
    falar() {
        console.log('Estou falando');
    }
}
obj.falar();



