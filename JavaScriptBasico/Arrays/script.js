//Arrays ou vetores são estruturas de dados que podem armazenar varios dados em sequência

//Para criar arrays, podemos fazer das seguintes formas:
var alunos = new Array('Julia', 'Mariana', 'Jorge', 'Pedro');
var turma = ['Roberto', 'Paulo', 'Laura'];
//Os arrays possuem indices que são a posição de cada elemento dentro do array, ele sempre iniciam em 0
//Como nesse caso o array possui 3 elementos mas seu indice varia de 0 a 2 ['Roberto', 'Paulo', 'Laura'];
//                                                                               0         1        2
//Para acessar determinado elemento podemos ir direto no seu indice como abaixo:
console.log(turma[1]); // Imprime a posição 1 do array que é o Paulo

//Agora se quisermos listar todos os elementos dos arrays podemos fazer da seguinte forma:
for (var i = 0; i<alunos.length; i++){ //o , length pega o tamanho do array, que no caso é 4
    console.log(alunos[i]);
}

//Ou podemos acessar pelo indice com o in
for(var i in alunos){ //irá percorrer o vetor para cada elemento presente nele
    console.log(alunos[i]);
    console.log(i);
}

//Ou podemos acessar diretamente o elemento com o of
for (var aluno of alunos){ //nesse caso a variavel aluno irá assuir o valor de cada elemento do array diretamente e utilizamos ela para fazer a impressão
    console.log(aluno);
}