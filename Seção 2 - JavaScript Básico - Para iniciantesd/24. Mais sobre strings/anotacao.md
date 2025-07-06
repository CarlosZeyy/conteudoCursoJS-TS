# formas de usar aspas dentro de uma string

let umaString = 'Um "texto"';

let umaString = "Um 'texto'";

let umaString = "Um \\"texto\\"";


# Strings tem um indice
Strings começam a contar a partir de 0(zero) 

0 1 2 3 4 5 6 7...

Exemplo: 

#### let umaString = "Um texto";

#### console.log(umaString[4]);

#### vai aparecer no console a letra: e

======================================================================

e se tentar selecionar alguma letra fora desse range ex:

#### console.log(umaString[8]);

#### resultado vai ser: undefined

o mesmo vale para valor negativo

#### console.log(umaString[-1]);

#### resultado vai ser: undefined


# Funções do JavaScript

### Função CharAt

a função charAt do JavaScript tambem pode ser usada para idenficar a letra do indice 

Ex:

#### let umaString = "Um texto";

#### console.log(umaString.charAt(6));

#### Resultado: t ( o segunto t em texto)

======================================================================

## Função concat 

a função concat é usada para concatenar textos similar a fazer :

Texto1 + Texto2

Exemplo do concat: 

#### let umaString = "Um texto";

#### console.log(umaString.concat(' em um livro'));

#### resultado: Um texto em um livro

Apesar de ter essa função no JS o template string é mais usado.

======================================================================

## Funções indexOf e lastIndexOf

indexOf of percorre a string toda procurando pela letra selecionada e a partir do indice escolhido ex: 

#### let umaString = "Um texto";

#### console.log(umaString.indexOf('o', 3));

#### resultado: 7

ele percorreu a partir do indice 3(t) e foi até o 7(o);

valores acima do index e letras que não tem na string resultam em -1

#### let umaString = "Um texto";

#### console.log(umaString.indexOf('t', 10));

#### resulta em -1

#### let umaString = "Um texto";

#### console.log(umaString.indexOf('c', 3));

#### resulta em -1

======================================================================

lastIndexOf faz a mesma coisa só que ao contrario, ele começa a percorrer do ultimo para o primero (de trás pra frente)

Ex: 

#### let umaString = "Um texto";

#### console.log(umaString.lastIndexOf('m', 3));

#### resultado: 1