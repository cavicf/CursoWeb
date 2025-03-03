//Alguns problemas podem ocorrer na manipulação de strings, pois o sinal de adição sempre fará a concatenação no tipo strings, mas se quisermos que isso não ocorra, podemos converter strings para o tipo numerico da seguinte maneira:

var nmrUm = "3"; //Caractere 3
var nmrDois = "5"// Caractere 5
var nmrTres = "4.5"// Caractere 4.5 

//Se quisermos fazer a operação de soma desses numeros e não a concatenação devemos utilizar o conversor de tipo parseint(inteiros) e parsefloat(reais) que convertem do tipo string para numérico
var resultado = parseInt(nmrUm) + parseInt(nmrDois);
console.log(resultado); //Imprime o numero inteiro do resultado que é 8

var resultadoFloat = parseFloat(nmrDois) + parseFloat(nmrTres);
console.log(resultadoFloat); //Imprime em numero real a soma que resulta em 9,5
