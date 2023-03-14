/* é bom se definir bons nomes para as pastas,
arquivos, etc */

let preco = 19.90;
let desconto = 0.4; //40% de desconto

console.log(preco);
console.log (19.9 * 0.6); // 0.6 pq é o restante do valor de desconto (40%)

console.log( preco * ( 1- desconto));
/* 1 = 100% - desconto = 40%  
 sobrando os 60% */

 let precoComDesconto = preco * (1 - desconto);


 console.log(precoComDesconto);

 //alguns testes com variaveis eu fiz nos arquivos primeiro e segundo

 
 let nome = "refrigerante"; // STRING (texto) -> sequencia de simbolos
 let categoria1 = "Antartica";
 let categoria2 = "Coca Cola"




// DESAFIO PESSOAL:
// primeiro blobo : refrigerante antartica sem desconto
// segundo blobo: refrigerante antartica com desconto
// terceiro blobo:  3 refrigerante coca cola sem desconto
// quarto blobo: 3 refrigerante coca cola com desconto

console.log ("desafio #1");

 console.log ("Produto:" + nome + " "
 + categoria1 
 + " " + preco) 

 console.log("desafio #2");
 console.log("Produto:" + nome
 + " " + categoria1
 + " " + preco * (1- desconto));
 
 // ou:
 console.log("Produto:" + nome
 + " " + categoria1
 + " " + precoComDesconto);

 console.log("desafio #3");
 console.log("Produto = 3" +  " " + nome 
 + " " + categoria2 + " " 
 + preco)

 console.log("desafio #4");
 console.log("Na compra de 3 " + nome 
 + " " + categoria2 + " " 
 + "desconto de 40% no valor total " 
 + 3 * precoComDesconto);

 //DESAFIO PESSOAL CONCLUIDO


 let a = "ga"
 let b = "bri"
 let c = "ela"

 console.log (a + b + c);




