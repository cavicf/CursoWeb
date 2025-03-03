//Os condicionais if e else são de extrema importancia pois auxiliam a verificar condições e a tomar decisões:
// Em uma situação hipotética, um mercado não pode vender bebidas para menores de 18 e se for maior com até 35 anos a identidade será requisitada, caso contrário a venda não será permitida:
var idade = 25;

// O if é nosso "se", então se aquela coisa for verdadeira, determinada coisa será feita. O else é nosso "se não", ou seja, se determinada coisa for falsa será cumprido este outro bloco de código:
if (idade >= 35){ //Aqui é feita a verificação se a idade é maior ou igual a 35
    console.log("Pode vender"); //Se for maior, esses comandos serão executados
    console.log("Qual seu pedido?") //Importante lembrar que quando há mais de um comando a ser executado, esses comandos devem ser separados em blocos dentro de {}
}
else if (idade >= 18 && idade < 35){ //Esse é o "Se não, se", ele faz uma nova verificação se a primeira condição não foi cumprida, nesse caso estamos verificando se a idade é maior ou igual a 18 E menor que 35
    console.log("Pode vender");
    console.log("Peça o RG");
}
else{ //Esse é o "Se não", ele não possui nenhuma verificação pois só será executado se nenhuma das verificações anteriores forem verdadeiras, é o "ultimo caso"
    console.log("não pode vender");
}