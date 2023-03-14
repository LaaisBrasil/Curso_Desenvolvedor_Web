//DESAFIO DE TROCA DE VALORES

let a = 9
let b = 94

console.log(a);
console.log(b);


//primeira opção

let temp = a
a = b
b = temp  

console.log(a);
console.log(b);

//segunda opção

[a , b] = [b , a];

console.log(a);
console.log(b);