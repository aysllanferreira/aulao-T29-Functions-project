// Requisito 01

function sameValues(val1, val2) {
  // escreva seu codigo aqui
  return val1 >= 6 && val2 >= 6;
}

// Requisito 02

function convertToCm(meters) {
  // escreva seu codigo aqui
  return (meters * 100);
}

// Requisito 03

function dobroTriploRaiz(numero) {
  // escreva seu codigo aqui
  const dobro = numero * 2;
  const triplo = numero * 3;
  const raiz = numero ** 0.5;
  return `O dobro de ${numero} é ${dobro}, o triplo é ${triplo} e a raiz quadrada é ${raiz}`;
}

// Requisito 04

function createEmail(fullName) {
  // escreva seu codigo aqui
  let email = [];
  email = fullName.toLowerCase().split(' ').join('_');
  return `${email}@aulao.com`;
}

// Requisito 05

function getPoints(wins, ties) {
  // escreva seu codigo aqui
  return (wins * 7 + ties * 3);
}

// Requisito 06

function sumMinMax(numbers) {
  // escreva seu codigo aqui
  let maiorNumero = numbers[0];
    let menorNumero = numbers[0];
    for (let index = 0; index < numbers.length; index += 1){
      if (menorNumero > numbers[index]) {
        menorNumero = numbers[index];
      }
      if (maiorNumero < numbers[index]) {
        maiorNumero = numbers[index];
      }
    }
  return (maiorNumero + menorNumero);
}

// Requisito 07

function polarEncoder(sentence) {
  // escreva seu codigo aqui
}

// Requisito 08

function encodeLetter(letter) {
  // escreva seu codigo aqui
}

function decodeLetter(letter) {
  // escreva seu codigo aqui
}

// Requisito 09

function sumAndMultiplyBy2(numbers) {
  // escreva seu codigo aqui
}

// Requisito 10

function sumEvenNumbers(numbers) {
  // escreva seu codigo aqui
}

function sumOddNumbers(numbers) {
  // escreva seu codigo aqui
}

module.exports = {
  sameValues,
  convertToCm,
  dobroTriploRaiz,
  createEmail,
  getPoints,
  sumMinMax,
  polarEncoder,
  encodeLetter,
  decodeLetter,
  sumAndMultiplyBy2,
  sumEvenNumbers,
  sumOddNumbers,
};
