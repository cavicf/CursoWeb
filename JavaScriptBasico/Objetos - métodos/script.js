//Métodos são funções atreladas a um objeto, ou seja, eles são responsáveis por ações executadas por um objeto
// Afim de evitar repetição nos códigos, é mais viavel que as funções sejam declaradas a parte e sejam vinculadas a um objeto como se fosse uma propriedade, desse modo mais de um objeto pode usar da mesma função
//Mas se for um método unico, ele pode ser criado diretamente dentro do proprio objeto

function calcmedia(){
    return (this.notas[0]+this.notas[1])/2; //o this. se refere ao objeto que estará utilizando a função no momento, é como se fosse o self do python, nesse caso se refere ao objeto aluno que será passado pra função e assim ela terá acesso as suas propriedades
}

var aluno = {
    nome: 'Igor', 
    notas: [7,8],

    media: calcmedia //aqui fazemos a declaração do método, atrelando a função à uma chave
}

var aluno1 = {
    nome: 'joao',
    notas: [6,8],
    media: calcmedia
}

console.log(aluno.nome)
console.log(aluno.media()) //aqui quando chamamos o método do objeto, estamos passando ele próprio para a função, ou seja, o objeto aluno está sendo jogado dentro da função para que sejam utilizadas suas propriedades

console.log(aluno1.nome)
console.log(aluno1.media())
