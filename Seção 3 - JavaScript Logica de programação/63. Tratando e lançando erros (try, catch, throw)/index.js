function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser numbers");
  }

  return x + y;
}

try {
    console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (error) {
    // console.log(error); //* Não é uma boa pratica deixar console.logs dos erros no codigo onde o usuario final pode ver, além de expor um erro, pode expor alguma funcionalidade/dado importante do codigo. (melhor lançar um alert, caixa de dialogo, mensagem na tela. quando houver algum erro!);
    console.error('Houve algum problema, tente novamente.');
}
