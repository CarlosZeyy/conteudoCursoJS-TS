//* Minha resolução
// const h1 = document.querySelector(".container h1");
// const date = new Date();
// //* dia semana
// const dateWeek = date.getDay();
// const dayWeekText = getDayWeek(dateWeek);
// //* data do mês (numero do dia)
// const dateNumber = date.getDate();
// //* mês
// const dateMonth = date.getMonth();
// const dateMonthText = getMonth(dateMonth);
// //* ano
// const dateYear = date.getFullYear();
// //* horas e minutos formatados
// const dateHours = formatDate(date.getHours());
// const dateMinutes = formatDate(date.getMinutes());

// function getDayWeek(dateWeek) {
//   let dayWeekText;

//   switch (dateWeek) {
//     case 0:
//       dayWeekText = "Domingo";
//       return dayWeekText;
//     case 1:
//       dayWeekText = "Segunda-feira";
//       return dayWeekText;
//     case 2:
//       dayWeekText = "Terça-feira";
//       return dayWeekText;
//     case 3:
//       dayWeekText = "Quarta-feira";
//       return dayWeekText;
//     case 4:
//       dayWeekText = "Quinta-feira";
//       return dayWeekText;
//     case 5:
//       dayWeekText = "Sexta-feira";
//       return dayWeekText;
//     case 6:
//       dayWeekText = "Sábado";
//       return dayWeekText;
//   }
// }

// function getMonth(dateMonth) {
//   let dateMonthText;

//   switch (dateMonth) {
//     case 0:
//       dateMonthText = "Janeiro";
//       return dateMonthText;
//     case 1:
//       dateMonthText = "Fevereiro";
//       return dateMonthText;
//     case 2:
//       dateMonthText = "Março";
//       return dateMonthText;
//     case 3:
//       dateMonthText = "Abril";
//       return dateMonthText;
//     case 4:
//       dateMonthText = "Maio";
//       return dateMonthText;
//     case 5:
//       dateMonthText = "Junho";
//       return dateMonthText;
//     case 6:
//       dateMonthText = "Agosto";
//       return dateMonthText;
//     case 6:
//       dateMonthText = "Setembro";
//       return dateMonthText;
//     case 6:
//       dateMonthText = "Outubro";
//       return dateMonthText;
//     case 6:
//       dateMonthText = "Novembro";
//       return dateMonthText;
//     case 6:
//       dateMonthText = "Dezembro";
//       return dateMonthText;
//   }
// }

// function formatDate(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// h1.innerHTML = `${dayWeekText}, ${dateNumber} de ${dateMonthText} de ${dateYear} ${dateHours}:${dateMinutes}`;

//* Correção 1:
// const h1 = document.querySelector(".container h1");
// const data = new Date();

// //* toLocaleDateString nao funciona com o timeStyle mais...
// h1.innerHTML = data.toLocaleString("pt-BR", {
//   dateStyle: "full",
//   timeStyle: "short",
// });

//* Correção 2:
const h1 = document.querySelector(".container h1");
const date = new Date();
// //* dia semana
const dateWeek = date.getDay();
const dayWeekText = getDayWeek(dateWeek);
//* data do mês (numero do dia)
const dateNumber = date.getDate();
//* mês
const dateMonth = date.getMonth();
const dateMonthText = getMonth(dateMonth);
//* ano
const dateYear = date.getFullYear();
//* horas e minutos formatados
const dateHours = formatDate(date.getHours());
const dateMinutes = formatDate(date.getMinutes());

function getDayWeek(dateWeek) {
  const dayWeekText = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return dayWeekText[dateWeek];
}

function getMonth(numberMonth) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return meses[numberMonth];
}

function formatDate(num) {
  return num >= 10 ? num : `0${num}`;
}

h1.innerHTML = `${dayWeekText}, ${dateNumber} de ${dateMonthText} de ${dateYear} ${dateHours}:${dateMinutes}`;
