// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + 1000); // new Date(0) = 01/01/1970 - Timestamp unix/epoca unix
// ? meses em JS comeca do 0... ex: 0 = Janeiro, 1 - fevereiro, 2 - Março...
// const data  = new Date(2019, 3, 20, 15, 14, 27, 500); //* a, m, d, h, m(minutos), s, ms

//* Ambas versões com ou sem o T entregam a mesma coisa
// const data = new Date("2019-04-20 20:20:59");
// const data = new Date("2019-04-20T20:20:59");

// const data = new Date("2019-04-20 20:15:59.200");
const data = new Date(1750724946384);
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1); //* Mês começa do zero
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("Dia semana", data.getDay()); //* dia da semana começa do zero: 0 - Domingo, 6 - Sábado 
console.log(data.toString());
