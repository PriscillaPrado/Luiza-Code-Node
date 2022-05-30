/*Substitui concatenação por interpolação, quebra linha sem \n

Devemos usar `` em vez de ""

Interpolação: ${variavel}*/

let nomeEmpresa = "ComSchool";
let anosExperiencia = 10;

//Sem template string

let textoComum = "Oi, nós somos a " + nomeEmpresa + "! Um grupo de pessoas apaixonadas pelo digital" +
                "\n\nCom mais de " + anosExperiencia + "anos de Experiencia em cursos" +
                "\n\nVamos juntos?";

console.log("Sem template string");
console.log(textoComum);

//Com template string

let textoTemplateString = `
Oi, nós somos a ${nomeEmpresa}! Um grupo de pessoas apaixonadas pelo digital.

Com mais de ${anosExperiencia} anos de Experiencia em cursos.

Vamos Juntos?
`;

console.log("");
console.log("Com template string");
console.log(textoTemplateString);