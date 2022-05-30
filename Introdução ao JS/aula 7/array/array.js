//Permite mesclar informações, como numero, string e boolean. �? possível criar um array de arrays

let exemplo = [1,2,3];
let exemploNomes = new Array ("Joao","Jose","Maria");

console.log(exemplo);
console.log(exemploNomes);
//Para exibir Jose, a posicao comeca no 0
console.log(exemploNomes[1]);

//Tamanho do array
console.log(exemplo.length);
console.log(exemploNomes.length)

//Adicionar elementos

exemploNomes.push("Marta")
console.log(exemploNomes) //na ultima linha

exemploNomes = new Array ("Joao","Jose","Maria");
exemploNomes.unshift("Marta","marcos")
console.log(exemploNomes) //antes de todos

exemploNomes = new Array ("Joao","Jose","Maria");
exemploNomes.splice(2,0,"Marta")
console.log(exemploNomes) //posicoes especificas, o zero mostra quantos elementos vc tiraria para inserir o novo valor

exemploNomes = new Array ("Joao","Jose","Maria");
exemploNomes.splice(0,1,"Marta")
console.log(exemploNomes)

//Para remover: pop, shift ou splice

exemploNomes = new Array ("Joao","Jose","Maria");
exemploNomes.pop() //remove o ultimo elemento
console.log(exemploNomes)

exemploNomes = new Array ("Joao","Jose","Maria");
exemploNomes.shift() //remove primeiro elemento
console.log(exemploNomes)

exemploNomes = new Array ("Joao","Jose","Maria");
exemploNomes.splice(1,1) //remove o elemento em posicao 1
console.log(exemploNomes)