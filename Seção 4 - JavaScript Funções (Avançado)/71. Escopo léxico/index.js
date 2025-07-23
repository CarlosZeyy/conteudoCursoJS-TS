//* Basicamente a função olha o escopo em que está e tenta executar o que foi pedido no caso aqui a variavel 'nome' e nisso ela tenta procurar essa variavel dentro do proprio escopo, se não encontrar no escopo da propria função ela vai procurar no escopo global. (Se não encontrar no escopo da function e nem no global vai dar erro).

const nome = 'Carlos';

function falaNome() {
    // const nome = 'Moises';
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Moises';
    falaNome();
}

usaFalaNome();