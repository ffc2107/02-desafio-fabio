
const vitorias = 150;
const derrotas = 7;
const calculo = vitorias - derrotas;


function resultado(calculo) {
   return calculo; 
}

const saldo = resultado(calculo);

if (saldo < 10) {
   nivel = 'Ferro';  
} else if (saldo >= 11 && saldo <= 20) {
   nivel = 'Bronze';
} else if (saldo >= 21 && saldo <= 50) {
   nivel = 'Prata';
} else if (saldo >= 51 && saldo <= 80) {
   nivel = 'Ouro';
} else if (saldo >= 81 && saldo <= 90) {
   nivel = 'Diamante';
} else if (saldo >= 91 && saldo <= 100) {
   nivel = 'Lendário';
} else {
   nivel = 'Imortal';
}

console.log(`O Herói tem um saldo de ${saldo}, está no nível ${nivel}.`);