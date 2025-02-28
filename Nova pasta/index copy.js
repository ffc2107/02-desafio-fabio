
const vit = 500;
const der = 40;

function quantidades(vitorias = 500, derrotas = 40) {
    const cal = vitorias - derrotas;
    return cal;
}

const resultado = quantidades(vitorias = 500, derrotas = 40);
//console.log(resultado);

// console.log(quantidades());

// const res = quantidades(vitorias, derrotas);
//console.log(res);

if (resultado < 10) {
    console.log('Ferro');  

} else if (resultado >= 11 && resultado <= 20) {
    console.log('Bronze');

} else if (resultado >= 21 && resultado <= 50) {
    nivel = 'Prata';

} else if (resultado >= 51 && resultado <= 80) {
    console.log('Ouro');

} else if (resultado >= 81 && resultado <= 90) {
    console.log('Diamante');;

} else if (resultado >= 91 && resultado <= 100) {
    console.log('Lendário');

} else {
    console.log('Imortal');
}


