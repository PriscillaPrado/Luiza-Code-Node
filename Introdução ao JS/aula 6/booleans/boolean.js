//true or false

//Boolean é diferente de boolean, com letra maiuscula é uma classe, não é primitivo ao JS

//É possível converter outras variáveis Boolean com a sintaxe new Boolean

let varVerdadeira = new Boolean(true);
let varFalsa = new Boolean (false);

console.log("")
console.log(varVerdadeira.valueOf());
console.log(varFalsa.valueOf());

let varString = "Olá";
let varStringVazia = "";

let varBooleanString = new Boolean(varString);
let varBooleanStringVazia = new Boolean(varStringVazia);

console.log("")
console.log(varBooleanString.valueOf());
console.log(varBooleanStringVazia.valueOf());

let varNumerico = 20;
let varNumericoZero = 0;

let varBooleanNumerico = new Boolean(varNumerico);
let varBooleanNumericoZero = new Boolean(varNumericoZero);

console.log("")
console.log(varBooleanNumerico.valueOf())
console.log(varBooleanNumericoZero.valueOf())

