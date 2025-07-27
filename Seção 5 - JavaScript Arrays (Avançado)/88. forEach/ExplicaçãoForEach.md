# Resumo e Comparação dos Laços de Repetição em JavaScript

Este documento resume os principais laços de repetição (`for`) em JavaScript, explicando suas características, casos de uso e diferenças.

## `forEach`

O `forEach` é um **método de array** que executa uma função para cada um dos seus elementos, em ordem.

  - **O que é?** Uma forma limpa de dizer: "para cada item da lista, faça esta ação".
  - **Principal Característica:** Sua sintaxe é declarativa e focada na ação, não no controle manual da iteração.
  - **Limitação Principal:** **Não é possível parar (`break`) ou pular (`continue`)** o laço. Ele sempre percorre todos os elementos.

### Exemplo

```javascript
const nomes = ['Ana', 'Bia', 'Carlos'];

// Para cada 'nome' no array 'nomes', imprima-o no console.
nomes.forEach(nome => {
  console.log(nome);
});

/*
Saída:
Ana
Bia
Carlos
*/
```

-----

## Diferenças dos Outros Laços `for`

### `for...of` (O Moderno e Preferido para Valores)

Itera sobre os **valores** de qualquer objeto "iterável" (como arrays, strings, Maps, Sets, etc.). É a forma mais moderna e legível de percorrer uma lista de valores.

  - **Diferença:** Permite usar `break` e `continue`, oferecendo mais controle de fluxo que o `forEach`.
  - **Use quando:** Você quer apenas os valores e talvez precise parar ou pular o laço no meio do caminho.

<!-- end list -->

```javascript
for (const nome of nomes) {
  if (nome === 'Bia') {
    continue; // Pula a "Bia" e vai para a próxima iteração
  }
  console.log(nome);
}

/*
Saída:
Ana
Carlos
*/
```

### `for` (O Clássico e mais Poderoso)

É o laço mais "manual", que te dá controle total sobre o **início**, a **condição de parada** e o **incremento**, geralmente através de um **índice numérico** (`i`).

  - **Diferença:** É o mais flexível de todos. Permite percorrer o array de trás para frente, pular itens em qualquer lógica, ou até modificar o array enquanto o percorre (com cuidado\!).
  - **Use quando:** Você precisa de controle total sobre a iteração ou precisa do índice do elemento.

<!-- end list -->

```javascript
for (let i = 0; i < nomes.length; i++) {
  console.log(`Posição ${i}: ${nomes[i]}`);
}

/*
Saída:
Posição 0: Ana
Posição 1: Bia
Posição 2: Carlos
*/
```

### `for...in` (O Específico para Chaves de Objeto)

Itera sobre as **chaves (propriedades)** de um objeto, e não sobre seus valores.

  - **Diferença:** Sua finalidade é inspecionar as propriedades de um objeto.
  - **Use quando:** Você precisa do nome de cada chave de um objeto.

> **Atenção:** **NÃO USE `for...in` PARA PERCORRER ARRAYS\!** Ele é mais lento para essa tarefa e pode trazer resultados inesperados, como propriedades herdadas do protótipo do array, além de não garantir a ordem dos elementos.

```javascript
const pessoa = {
  nome: 'Daniel',
  idade: 30
};

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

/*
Saída:
nome: Daniel
idade: 30
*/
```

-----

## Tabela Resumo

| Característica | `forEach` | `for...of` | `for` (clássico) | `for...in` |
| :--- | :--- | :--- | :--- | :--- |
| **Principal Uso** | Executar uma ação para cada item de um **array** | Percorrer **valores** de iteráveis (arrays, strings) | Controle total da iteração (índice, condição) | Percorrer **chaves** de um **objeto** |
| **Sintaxe** | `array.forEach(item => ...)` | `for (const item of array)` | `for (let i=0; i<lim; i++)` | `for (const key in object)` |
| **Permite `break`?**| **Não** | Sim | Sim | Sim |
| **Tipo** | Método de Array | Estrutura da linguagem | Estrutura da linguagem | Estrutura da linguagem |