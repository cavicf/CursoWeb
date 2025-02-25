// Boolean - é o true ou false, permite tomadas de decisões em certos contextos definindo algo como verdadeiro ou falso.
// Null - define de fato que não haverá nada na variavel, ela é esvaziada.
// Undefined - quando não inicializa a variavel, onde não está definido exatamente o que está dentro dela, podendo ser lixo de memória.
// Number - é o tipo dos números, podendo ser inteiros ou reais.
// String - cadeia de caracteres podendo ser uma letra, palavra ou frase.

var a = 'Palavra \n segunda linha'; //String (\n pula linha).
console.log(a); //imprime palavra, pula linha, segunda linha.

var numero = 1; //Numero inteiro.
console.log(numero); //imprime 1.

// Importante ressaltar que um caractere 1 e o número 1 são coisas diferentes e se tentarmos somar duas Strings, ocorrerá uma concatenação, ou seja, as strings irão se juntar formando uma nova palavra.
var b = '1'; //caractere 1
var c = '1'; //caractere 1
console.log(b + c); //Imprime 11.
// E ao somar de fato dois numeros, será feita a soma de fato.
console.log(1+1); //Imprime 2.

var nada = null; //Null;
console.log(nada); //imprime null, ou seja, não tem nada

var falso = false; //Valor booleano falso
var verdadeiro = true; //Valor booleano verdadeiro
console.log(falso, verdadeiro); //imprime false e em seguida true


