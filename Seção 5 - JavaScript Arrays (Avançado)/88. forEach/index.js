const a1 = [10, 20, 30, 40, 50];
let total = 0;

a1.forEach((value, index, array) => console.log(value, index, array));

a1.forEach(value => total += value);
console.log(total);


/** forEach (Para cada)
O que é? É um método de array que executa uma função para cada elemento do array, na ordem.

Resumo: Pense nele como "para cada item da lista, faça isso".

Principal Característica: Sua sintaxe é limpa e focada na ação a ser feita, não no controle da iteração.

Limitação Principal: Não é possível parar (break) ou pular (continue) o laço no meio do caminho. Ele sempre vai até o fim.

JavaScript

const nomes = ['Ana', 'Bia', 'Carlos'];

// Para cada 'nome' no array 'nomes', imprima-o no console.
nomes.forEach(nome => {
  console.log(nome);
});
// Saída:
// Ana
// Bia
// Carlos
Diferenças dos Outros for
A melhor forma de entender é ver para que cada um serve.

for...of (O Moderno e Preferido para Valores)
Diferença: Itera sobre os valores de qualquer objeto "iterável" (arrays, strings, etc.). É a forma mais moderna e legível de percorrer valores. Permite usar break e continue.

Use quando: Você quer apenas os valores de um array (ou string) e talvez precise parar o laço.

JavaScript

for (const nome of nomes) {
  if (nome === 'Bia') {
    continue; // Pula a Bia
  }
  console.log(nome);
}
// Saída:
// Ana
// Carlos
for (O Clássico e mais Poderoso)
Diferença: É o laço mais "manual". Te dá controle total sobre o início, a condição de parada e o incremento, geralmente usando um índice (i). Também permite break e continue.

Use quando: Você precisa de controle total, como percorrer o array de trás para frente, pular itens ou modificar o array enquanto o percorre.

JavaScript

for (let i = 0; i < nomes.length; i++) {
  console.log(`Posição ${i}: ${nomes[i]}`);
}
// Saída:
// Posição 0: Ana
// Posição 1: Bia
// Posição 2: Carlos
for...in (O Específico para Chaves de Objeto)
Diferença: Itera sobre as chaves (propriedades) de um objeto, não sobre seus valores.

Use quando: Você quer inspecionar as propriedades de um objeto. Cuidado: Não use for...in para percorrer arrays! Ele pode trazer resultados inesperados e é mais lento.

JavaScript

const pessoa = {
  nome: 'Daniel',
  idade: 30
};

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
// Saída:
// nome: Daniel
// idade: 30
Tabela Resumo
Característica	forEach	for...of	for (clássico)	for...in
Principal Uso	Executar uma ação para cada item de um array	Percorrer valores de iteráveis (arrays, strings)	Controle total da iteração (índice, condição)	Percorrer chaves de um objeto
Sintaxe	array.forEach(item => ...)	for (const item of array)	for (let i=0; i<lim; i++)	for (const key in object)
Permite break?	Não	Sim	Sim	Sim
Tipo	Método de Array	Estrutura da linguagem	Estrutura da linguagem	Estrutura da linguagem  
*/