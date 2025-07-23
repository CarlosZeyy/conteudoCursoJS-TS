//* IIFE -> Immediately invoked function expression

(function (idade, peso, altura) {
  const sobrenome = "Ferreira";

  function criaNome(nome) {
    return `${nome} ${sobrenome}`;
  }

  //* Chamando function normalmente
    function falaNome2() {
      console.log(criaNome("Joao"));
    }

    falaNome2();

  //* Invocando function de imediato
  (function falaNome() {
    console.log(criaNome("Carlos Moises"));
  })();

  console.log(idade, peso, altura);
})(30, 80, 1.76);
