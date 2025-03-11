var numero = 10;
//Os laços de repetição servem para repetir um bloco de código determinadas vezes e os mais utilizados são o for e while:

//No for começamos determinando que a variavael de controle i começa em 0, depois é feita a comparação se ela é menor que 10, se verdadeiro o bloco de comando é executado e a variavel é acrescentada, indo pra proxima repetição q é comparada novamente e assim por diante. Quando o i for somado e se tornar 11 a condição se tornará falsa, quebrando o laço e saindo dele.
for (i=0; i<numero; i++){
    console.log('imprimindo pela ' + i + ' vez');
}
console.log('acabou');

//Já o while começa fazendo a comparação logo de inicio, se ela for verdadeira o bloco é executado e em seguida é acrescentado na variavel de controle. Caso seja falso logo de inicio o bloco nem é executado, mas caso seja falso o bloco é quebrado e a repetição termina.
while (numero < 20){
    console.log('estamos no numero ' + numero);
    numero++;
}
console.log('acabou');