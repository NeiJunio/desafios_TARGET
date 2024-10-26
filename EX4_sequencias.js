// a) 1, 3, 5, 7, ___
const sequenceA = [1, 3, 5, 7];
const ProximoA = sequenceA[sequenceA.length - 1] + 2; // Próximo: 9
console.log(`Próximo elemento da sequência A: ${ProximoA}`);


// b) 2, 4, 8, 16, 32, 64, ____
const sequenceB = [2, 4, 8, 16, 32, 64];
const ProximoB = sequenceB[sequenceB.length - 1] * 2; // Próximo: 128
console.log(`Próximo elemento da sequência B: ${ProximoB}`);


// c) 0, 1, 4, 9, 16, 25, 36, ____
const sequenceC = [0, 1, 4, 9, 16, 25, 36];
const ProximoC = Math.pow(sequenceC.length, 2); // Próximo: 49 (7^2)
console.log(`Próximo elemento da sequência C: ${ProximoC}`);


// d) 4, 16, 36, 64, ____
const sequenceD = [4, 16, 36, 64];
const ProximoD = Math.pow((sequenceD.length + 1) * 2, 2); // Próximo: 100 (10^2)
console.log(`Próximo elemento da sequência D: ${ProximoD}`);


// e) 1, 1, 2, 3, 5, 8, ____
const sequenceE = [1, 1, 2, 3, 5, 8];
const ProximoE = sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2]; // Próximo: 13
console.log(`Próximo elemento da sequência E: ${ProximoE}`);


// f) 2, 10, 12, 16, 17, 18, 19, ____
const sequenceF = [2, 10, 12, 16, 17, 18, 19];
const ProximoF = sequenceF[sequenceF.length - 1] + 1; // Próximo: 20
console.log(`Próximo elemento da sequência F: ${ProximoF}`);



// RESPOSTAS NO CONSOLE
// Próximo elemento da sequência A: 9
// Próximo elemento da sequência B: 128
// Próximo elemento da sequência C: 49
// Próximo elemento da sequência D: 100
// Próximo elemento da sequência E: 13
// Próximo elemento da sequência F: 20