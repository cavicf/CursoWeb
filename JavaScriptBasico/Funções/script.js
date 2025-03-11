//Funções são uteis pois diminuem a repetição de operações dentro do codigo
// para criar um função que calcula a media por exemplo:
function media(n1, n2){ // aqui declaro que o apelido da função sera media e ela recebe dois argumentos, a nota 1 e a nota 2
    var media = (n1 + n2) / 2; //aqui eu declaro uma variavel que vai receber esse resultado e é ela que retornaremos para a variavel que chamou a função
    return media;
}

var resultado = media(5, 6); //aqui ocorre a chamada da função com os argumentos q a nota 1 é 5 e a 2 é 6
console.log(resultado);//a função vai retornar o valor da media nessa variavel resultado que será imprimida