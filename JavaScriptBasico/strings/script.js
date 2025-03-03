//No uso de strings, em alguns contextos devemos ter cuidados especiais:

//Caso queira que a frase possua aspas no meio dela, ou utilizamos aspas simples para fazer a abertura e fechamento da string para que possa utilizar a aspas duplas como parte da frase, ou vice versa. Nunca deve-se usar os mesmo tipo pois a linguagem irá entender como abertura e fechadura em locais que não eram intecionados
var str = 'Esse é um exemplo de uso de "aspas" como parte da frase';
console.log(str);

//Como ja visto em aulas anteriores, o uso de adição com strings faz a concatenação de textos,entretanto, ela é feita sem espaço, então é imortante lembrar de colocá-lo 
str += ' outro texto';
console.log(str); //Imprime outro texto juntamente da string original: 'Esse é um exemplo de uso de "aspas" como parte da frase outro texto'

//Caso queiramos somar uma string com um numero, o JavaScript irá transformar este numero em uma string automaticamente
str += 8;
console.log(str); //Imprime: 'Esse é um exemplo de uso de "aspas" como parte da frase outro texto8'

//Agora se pegarmos um caractere numerico e tentarmos fazer alguma operação com ele o JavaScript o transformará em tipo númerico automaticamente
var numero = "8" * 2;
console.log(numero); //Será exibido 16 no tipo numérico  