var nota1 = 8.0;
var nota2 = 7.0;

var media = (nota1 + nota2) / 2;
var conceito = '';

if (media >= 8){
    conceito = 'Ótimo';
}
else if (media >= 6.5){
    conceito = "Bom";
}
else{
    conceito = 'Regular';
}

console.log(media);
console.log(conceito);

//O switch é utilizado para fazer comparações de igualdade quando se há muitas instâncias e elas são simples, como nesse caso que estamos comparando se oq está na variavel conceito é otimo, bom ou regular e acionamos comandos simples caso a igualdade seja satisfeita. Ja o default é o comando padrão, se a igualdade não foi encontrada, o comando default é acionado.
switch(conceito){
    case 'Ótimo':
        console.log("Parabéns, vc é uma ótimo aluno");
        break;
    case 'Bom':
        console.log("voce esta quase perfeito");
        break;
    case 'Regular':
        console.log("estude mais um pouco");
        break;
    default:
        console.log("houve algum erro");
}