// var mensagem:string = "Olá Mundo!!";
// var pontuacao:number = 1000;
// var pontuacao2:number = 9.9;
// var soma = pontuacao + pontuacao2;
// console.log(mensagem);
// console.log("Primeira Pontuação: " + pontuacao);
// console.log("Segunda Pontuação: " + pontuacao2);
// console.log("soma: " + soma);
// var umNumero = "oi";
//  //inferindo o tipo de dado da variável
// console.log("valor é :" + umNumero);
// var num:number = "Impacta!";
// const idParticipantes = {
//     participanteA: 1,
//     participanteB: 2,
//     participanteC: 3,
//     participanteD: 4
// };
// console.log(idParticipantes)
// idParticipantes.participanteB = 5;
// console.log(idParticipantes.participanteB)
// var y:any;
// var z: any = 'a b c';
// for(y in z){
//     console.log(z[y])
// }
// var y:any
// let umArray: Array<number> = [150,200,10,5,999];
// for(y of umArray){
//     console.log(y);
// }
// var numero:number = 10;
// var fatorial:number = 1;
// while(numero >= 1){
//     fatorial = fatorial * numero
//     numero--
// }
// console.log("O valor do fatorial de 10 até 1 é: " + fatorial);
// var novoNum:number = 13;
// console.log("Valores encontrados durante a iteração do loop do ..While");
// //declaraar o loop
// do{
//     console.log(novoNum)
//     novoNum--
// }while(novoNum >= 0);
var nomes = ["Ana", "Joana", "Carlos", "amanda", "Ariana"];
var newNomes = [];
for (var _i = 0, nomes_1 = nomes; _i < nomes_1.length; _i++) {
    var nome = nomes_1[_i];
    if (nome[0] === "A" || nome[0] === "a") {
        newNomes.push(nome);
    }
}
console.log(newNomes);
