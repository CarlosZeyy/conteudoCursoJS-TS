/*
* Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores Copiados

* Referência (mutavel) - array, object, function - passados por referencia
* dados de referencia não são copiaveis ex:
? const a = [1,2,3];
? const b = a;

? console.log(a, b);

? a.push(4)
? console.log(a, b);

? b.pop()
? console.log(a, b);

*Exemplo com object:

? const a = {
?   nome: "Carlos",
?   sobrenome: "Moises",
? };
? 
? const b = a;
? 
? a.nome = "Joao";
? console.log(a);
? console.log(b);

! =========================================

* uma maneira de fazer uma copia de um tipo referencia sem ficar modificando todas as variaveis é usando o spread
? const a = [1, 2, 3];
? const b = [...a];

? console.log(a, b);

? a.push(4);
? console.log(a, b);

? b.pop();
? console.log(a, b);

* Exemplo usando object:
? const a = {
? nome: "Carlos",
?   sobrenome: "Moises",
? };
? 
? const b = { ...a };
? 
? a.nome = "Joao";
? console.log(a);
? console.log(b);
 */


