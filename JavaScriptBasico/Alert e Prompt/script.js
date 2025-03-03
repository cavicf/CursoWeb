//Outra maneira de exibir textos na tela são através dos comandos alert e prompt, funcionam da seguinte maneira:

//O prompt serve como um comando de entrada para o usuário, onde podemos coletar como forma de string tudo o que o usuário digitar e guardar em uma variável como dado a ser utilizado depois. IMPORTANTE: o dado que o usuário digitar será entendido como string pelo javascript então se pretende coletar um número do usuário deve converter antes para o tipo numerico pretendido
var dado = parseInt(prompt("Digite um número de 1 a 10:")); //será exibida esta mensagem juntamente de um campo de texto para o usuário digitar, essa string será convertida em um número e guardada na variavel dado.

//Agora que coletamos esse numero, podemos fazer operações com ele da forma que pretendermos:
var dobro = dado * 2; //Aqui estamos guardando o dobro do dado colhido pelo usuário e guardando na variável dobro

//Agora vamos imprimir com o novo comando alert o resultado da operação
alert("O dobro de "+ dado + " é " + dobro); //Aqui estamos emitindo uma mensagem e concatenando com o dado do usuário e seu dobro
