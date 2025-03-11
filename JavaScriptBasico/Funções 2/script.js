//No JavaScript podemos associar uma função a uma variavel, ou seja, essa varivael se tornará tbm um apelido para a função:

function saudacao(){ //nesse caso a função não recebe argumento nenhum pois só retorna uma frase
    return 'Ola pessoal';
}

//Os simbolos de parenteses estão associados a execução da função
//Nesse caso estamos apenas atribuindo a própria função a uma variável e não o resultado dela
var s = saudacao;
//Agora s tbm pode fazer uma chamada da função como abaixo
console.log(s()); //será executada a função

//Essa capacidade de atribuição direta da função na variavel, levou a outros dois jeitos de se declarar funções:
//Funções anonimas: quando declaramos a função dentro de uma variavel 
var cumprimento = function(){ //perceba q n precisamos dar um apelido a função pois ela está sendo declarada dentro de uma variavel, por tanto a variavel passa a ser o nome da função
    return 'Ola';
}
console.log(cumprimento()); // a função é executada

//Funções Arrow: quando não utilizamos o comando function e sim uma seta
var media = (n1, n2) => { // aqui estamos declarando a função e passando os argumentos que ela receberá
    return (n1+n2)/2;
}
console.log(media(7, 8));

