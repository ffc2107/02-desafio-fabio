
function quantidades(vitorias, derrotas) {
    const calculo = vitorias - derrotas;
    return calculo;
}

const res = quantidades(10, 1);
//console.log(res);

if (res < 10) {
   nivel = 'Ferro';  
} else if (res >= 11 && res <= 20) {
   nivel = 'Bronze';
} else if (res >= 21 && res <= 50) {
    nivel = 'Prata';
} else if (res >= 51 && res <= 80) {
   nivel = 'Ouro';
} else if (res >= 81 && res <= 90) {
   nivel = 'Diamante';
} else if (res >= 91 && res <= 100) {
   nivel = 'Lendário';
} else {
   nivel = 'Imortal';
}

console.log(`O Herói tem um saldo de ${res}, está no nível ${nivel}.`);


/* 

   Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
   depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

   Se vitórias for menor do que 10 = Ferro
   Se vitórias for entre 11 e 20 = Bronze
   Se vitórias for entre 21 e 50 = Prata
   Se vitórias for entre 51 e 80 = Ouro
   Se vitórias for entre 81 e 90 = Diamante
   Se vitórias for entre 91 e 100= Lendário
   Se vitórias for maior ou igual a 101 = Imortal

   ## Saída

   Ao final deve se exibir uma mensagem:
   "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

*/