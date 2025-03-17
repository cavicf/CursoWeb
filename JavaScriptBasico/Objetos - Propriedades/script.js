// Em Js temos um tipo de dado chamado objeto, que consiste numa estrutura onde podemos guardar varias propriedades dentro de uma variavel.
//A declaração dela ocorre da seguinte forma:
var aluno = { // primeiro damos um nome ao objeto, no caso aluno
    nome: 'João', //suas propriedades funcionam com pares de chave e valor separados por virgula
    notas: [7.5, 5.0], //suas propriedades podem ser dados de todos os tipos, até mesmo outros objetos
    chamada: 22
}

//Para acessar as propriedades de um objeto podemos fazer das seguintes maneiras:
console.log(aluno.nome); //acessar pela chave que retornará o valor correspondente
console.log(aluno.notas[0]); //podemos acessar propriedades que são arrays da seguinte maneira
console.log(aluno['chamada']); //podemos acessar como se fosse um array, mas no lugar do index colocamos o nome da chave entre aspas
console.log(aluno['notas'][1]); //podemos acessar da mesma maneira os arrays com o nome da chave

var NovaPropriedade = 'lastname'; //podemos criar uma variável com um nome
aluno[NovaPropriedade] = Alison //e passá-la como uma nova chave ao objeto, ou seja, agora aluno possui uma nova propriedade chamada lastname que recebe como valor alison
aluno.matricula = 12345; //podemos também adicionar uma nova propriedade com um . e o nome da nova chave, atribuindo seu valor
aluno['sobrenome'] = 'Oliveira'; //assim como podemos adicionar na forma de nome da chave 
console.log(aluno); //podemos imprimir todos os pares de chave e valor dessa forma, ou seja, acessamos o objeto por completo

var pessoa = new Object(); //uma outra forma de criar um objeto é utilizando a função new Object()
pessoa.nome = 'Laura'; //e em seguida fazemos a criação e atribuição de suas propriedades
console.log(pessoa) 



