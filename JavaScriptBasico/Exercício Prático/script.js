//Criando um sistema para calcular a media e aprovação de 3 alunos, abaixo estão os dados que precisamos considerar:
//Nome do aluno - nota 1 - nota 2 - media - aprovado/reprovado

//Lista com nomes, lista com notas 1 e lista com notas 2. Nesse momento vamos assumir que os indices coincidem com o dono e sua nota
var nomes = ['Igor', 'José', 'Maria'];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

//Função para calcular a média
function media(n1, n2){
    return(n1+n2)/2;
}

//Função para avaliar se o aluno foi aprovado ou reprovado
function passou(media){
    if(media > 7){
        return'Aprovado';
    }
    else{
        return 'Reprovado';
    }
}

//Aqui percorremos a lista de nomes e as de notas ao mesmo tempo sem problemas, pois elas possuem a mesma quantidade de elementos, ou seja, quando estiver passando pelo indice 0 será calculada as notas de Igor. Somente quando o primeiro ciclo terminar executando todas as funções que passaremos pro próximo indice.
for (var index in nomes){
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2)
    console.log(nomes[index] + '-' + nota1 + '-' + nota2 + '-' + m + '-' + passou(m))
}

