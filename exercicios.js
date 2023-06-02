// -------------------------------------

/**
 * Função que calcula a soma de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois numeros
 */
function soma(a, b) {
   return a + b;
}
let valorsoma = soma(1337, 3301);
console.log(`A soma dos dois números é => ${valorsoma}.`);
// -------------------------------------

/**
 * Função que calcula a multiplicação de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A multiplicação dos dois numeros
 */
function multiplicacao(a, b) {
    return a * b;
  }
  let valormultiplicacao = multiplicacao(3, 11);
  console.log(`A multiplicação dos dois números é => ${valormultiplicacao}.`);
// -------------------------------------

/**
 * Função que calcula a divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A divisão dos dois numeros
 */
function divisao(a, b) {
   return a / b;
}
let valordivisao = divisao(10, 2);
console.log(`A divisão dos dois números é => ${valordivisao}.`);
// -------------------------------------

/**
 * Função que calcula a subtração de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A subtração dos dois numeros
 */
function subtracao(a, b) {
    return a - b;
}
let valorsubtracao = subtracao(3301, 1337);
console.log(`A subtração dos dois números é => ${valorsubtracao}.`);
// -------------------------------------

/**
 * Função que resto da divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resto da divisão dos dois numeros
 */
function modulo(a, b) {
    return a % b;
}

let valormodulo = modulo(15,4);
console.log(`O resto da divisão dos dois números é => ${valormodulo}.`);
// -------------------------------------

/**
 * Função que calcula o maior número entre 2
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O maior número
 */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
let numMax = max(13, 33);
console.log(`O maior número é => ${numMax}.`);i
// -------------------------------------

/**
 * Função que concatena 2 strings utilizando template strings
 * @param {string} a - A primeira string
 * @param {string} b - A segunda string
 * @returns {string} As 2 strings concatenadas
 */
function strConcat(a, b) {
  return `Retorna as Strings ${a} e ${b}.`;
}
console.log(strConcat("Hello", "World"));
// --------------------------------------

/**
 * Função que implementa controle de fluxo
 * 
 * @param {number} numero - O número em questão
 * @returns {string} 
 *  - "Maior que 10" quando o número é maior que 10
 *  - "Igual a 10" quando o número é igual a 10
 *  - "Menor que 10" quando o número é menor que 10
 */
  function retornaNumero(numero) {
  if (numero > 10) {
    console.log(`O número ${numero} é maior do que 10.`);
  } else if (numero < 10) {
    console.log(`O número ${numero} é menor do que 10.`);
  } else {
    console.log(`O número ${numero} é igual 10.`);
  }
}
let valorNumero = retornaNumero(15);
let valorNumero1 = retornaNumero(10);
let valorNumero2 = retornaNumero(5);
// --------------------------------------

/**
 * Função que valida se o número em questão é positivo
 * @param {number} num - Número em questão
 * @returns {boolean} Retorna true para números positivos
 */
function ehPositivo(num) {
    if (numero > 0) {
    return true;
  } else {
    return false;
  }
}

let valorNumero = ehPositivo(5);
console.log(valorNumero);

let valorNumero1 = ehPositivo(0);
console.log(valorNumero1);

let valorNumero2 = ehPositivo(-5);
console.log(valorNumero2);
// --------------------------------------

module.exports = 
{ 
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
};
