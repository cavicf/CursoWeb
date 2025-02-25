// + Adição - Faz a soma
// - Subtração - Faz a subtração
// * Multiplicação - Faz a multiplicação 
// / Divisão - Faz a divisão
// % Módulo (resto da divisão) - Faz o modulo, ou seja, exibe o resto da divisão
// ++ Incremento - adiciona 1
// -- Decremento - subtrai 1

var a = 20;
var b = 2;
var c = 6;

// Podemos atribuir a uma nova variavel o resultado de uma conta feita entre outras variáveis como:
var d = a + b; //Faz a soma 20+2 portanto d é 22
console.log(d); //Imprime 22

// Ou podemos imprimir diretamente as contas realizadas:
console.log(a - b); //Faz a subtração de 20 - 2 e imprime 18

var d = a * c; // É feita a multiplicação de 20 x 6 
console.log(d); //Imprime 120

var d = a / b; // Faz a divisão de 20 / 2 
console.log(d); // imprime 10

//O operador % devolve o resto da divisão, o modulo de uma divisão.
d = a % c; //Faz o modulo de 20/6
console.log(d); // Imprime 2 

//O incremento e decremento fazem operações somando ou subtraindo 1 de um numero, e a ordem em que eles são colocados importa:
a++; //Nesse caso como temos a variavel isolada, ele pegará o valor 20 da variavel e irá incrementar 1
console.log(a); //Imprime 21
a--; //Assim como nesse caso, ele pegará o valor da variável e decrementará 1
console.log(a)//Imprime 20
//Agora, se colocarmos os sinais depois da variavel, terá um comportamento diferente, ainda mais quando estamos atribuindo esse resultado a uma nova variável
var e = ++a; //Nesse caso fará o que esperávamos, pois pela ordem primeiro ele incrementará no valor e em seguida irá atribuir a variavel e
console.log(e); //Imprime 21
var e = a++; //Aqui obtemos um comportamento diferente, pois pela ordem que foi colocado, primeiro o a será atribuido a variavel e, e somente depois terá seu valor incrementado. Mas atenção, o valor será incrementado na variavel a e não na e.
console.log(a); //Imprime 22
console.log(e); //Imprime 21