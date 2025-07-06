const fizzBuzz = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} Buzz`);
    }

    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} FizzBuzz`);
    }

    if (isNaN(i)) {
      return i;
    }
  }
};
fizzBuzz();

console.log('\nSegunda maneira de resolver');

function fizzBuzz2(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a' , fizzBuzz2('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz2(i));
}