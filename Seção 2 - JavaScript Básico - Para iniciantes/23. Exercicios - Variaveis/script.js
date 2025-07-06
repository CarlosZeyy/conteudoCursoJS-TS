let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// let temp = varA;

// varA = varB;
// varB = VarC;
// VarC = temp;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);