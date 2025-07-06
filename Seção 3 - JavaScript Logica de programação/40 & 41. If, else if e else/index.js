// entre 0 e 11 retorna bom dia
// entre 12 e 17 retorna boa tarde
// entre 18 e 23 retorna boa noite
// outro valor vai retornar ola

//* If pode ser usado sozinho
//* sempre que utilizado a palavra else, precisa ter um if antes
//* eu posso ter varios if else na checagem
//* so posso ter UM else na checagem
//* pode usar condicoes sem else if, ultilizando apenas if e else

const hora = 10;

if (hora >= 0 && hora <= 11) {
    console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Ola');
}