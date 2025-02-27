// == igual a 
// === valor igual e igual (comparando tipos)
// != não é igual 
// !== não é igual (comparando tipos)
// > maior que 
// < menor que
// >= maior ou igual (compara se é maior mas também se há igualdade) 
// <= menor ou igual (compara se é maior mas também se há igualdade)

var a = 3;
var b = 4;
var c = 3;
var d ="3"

console.log(a == c); //Retorna true pois 3 é igual a 3
console.log(a==b); //Retorna false pois são diferentes
console.log(a==d); // retorna true pois não considera a tipagem diferente
console.log(a===d); //Aqui retorna o false esperado pois um é do tipo number e o outro do tipo string
console.log(a!=c); //Retorna false pois ele sãos iguais e não diferentes
console.log(a!=d); //Mesmo contexto da tipagem, ele vai retornar false pois são iguais sem considerar o tipo
console.log(a!==d); //aqui o tipo ja é considerado portanto irá retornar true pois são de fato coisas diferentes
console.log(a>b); //compara se 3 é maior que 4 retornando false
console.log(a<b); //compara se 3 é menor que 4 retornando true
console.log(a>=c);// compara se 3 é maior ou igual a 3 e retorna true pois são iguais
console.log(a<=c); // compara se 3 é menor ou igual a 3 e retorna true pois são iguais