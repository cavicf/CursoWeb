// Existem outras formas de se criar um objeto, que são com os construtores. São uma forma menos elaborada do que uma classe, mas tem o mesmo objetivo de possibilitar a criação e vários objtos que tem mesmas características
//Uma delas é da seguinte forma:

function criarAluno(nome, n1, n2){ //é criada uma função que recebe como argumentos os valores das características de um aluno
    return{ //a função irá retornar diretamente a criação do objeto, com suas chaves e métodos
        nome:nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return(this.nota1 + this.nota2) / 2
        }
    }
}
var turma = [
    criarAluno('Joao', 7, 9), //assim ao chamarmos a função, ela fará com que o objeto seja criado
    criarAluno('Maria', 6, 8) //podendo ser criados varios objetos(instâncias) desse tipo
]
console.log(turma[1])
console.log(turma[1].media())

//Outra maneira de realizar essa criação é a seguinte:
function aluno(nome, n1,n2){ //a base é a mesma do outro modo, é criada uma função que recebe os valores como argumentos
    this.nome = nome // a diferença é que a função não retorna diretamente o objeto criado 
    this.nota1 = n1 //ela fará a criação do objeto, que nesse caso, é o objeto de próprio nome da função (nesse caso o aluno)
    this.nota2 = n2 // e utiliza do this para fazer a criação de suas propriedades , se referindo ao próprio aluno
    this.media = function media(){
        return (this.nota1+this.nota2)/2
    }
}

var a = new aluno('camily', 9, 10) //desse jeito, quando vamos chamar a função para criar o aluno, precismos utilizar o new, pois essa função é um construtor, não retorna o objeto diretamente, ela fará a criação do objeto dentro da variavel. Como ser fosse uma classe mesmo.
console.log(a)