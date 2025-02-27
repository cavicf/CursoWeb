// Os operadores logicos seguem a tabela verdade:
// && operador E - retornará verdadeiro apenas se ambas as condições forem verdadeiras
// || operador OU - retornará verdadeiro se ambas ou apenas um delas for verdadeira
// ! operador NÃO - estabelece uma negação sobre uma condição, ou seja, se negar algo que é verdadeiro ele passa a ser falso e vice e versa


// Para exemplificar o operador E vamos usar uma situação hipotética onde queremos conferir se uma pessoa possui uma idade entre 20 e 30 anos:
var idade = 25; //nossa pessoa possui 25 anos portanto o resultado esperado é true
var maior20 = idade >= 20; //aqui pegamos e conferimos se a idade da pessoa (25) é maior ou igual a 20, o que é TRUE
var menor30 = idade <= 30; //aqui pegamos e conferimos se a idade da pessoa(25) é menor ou igual a 30, o que também é TRUE
//Agora vamos usar uma variavel pra comparar se essa idade esta entre 20 E 30:
var entre = maior20 && menor30; // o que resulta em TRUE pois V e V = V
console.log("A idade está entre 20 e 30?", entre); //Imprime true


//Agora para exemplificar o operador OU vamos usar uma situação hipotética onde pessoas tem direito a gratuidade em um evento se forem menores de 10 anos ou maiores que 60 anos:
var pessoaUm = 8; //primeira pessoa tem 8 anos
var pessoaDois = 63; //segunda pessoa tem 63 anos
var menor10 = pessoaUm <= 10; //compara se a pessoa um tem menos que 10 anos, o que é TRUE
var maior60 = pessoaDois >= 60; //compara se a pessoa dois tem mais que 60 anos, o que também é TRUE
//Agora vamos usar uma variavel pra comparar se essas pessoas tem idade menor que 10 ou maior que 60
var gratuidade = menor10 || maior60; //resulta em TRUE pois amabas tem direito, e mesmo que existisse somente a pessoaUm por exemplo, o resultado seria true pois ela tem direito
console.log("tem direito a gratuidade?", gratuidade); //Resulta em TRUE pois V ou V = V 


//Agora para exemplificar o operador NÃO, vamos apenas negar coisas que eram falsas e se tornarão verdadeiras:
var idade = 15; //temos uma pessoa com 15 anos
var maior20 = idade >= 20; //aqui seria falso, pois 15 não é maior que vinte
var menor20 = !maior20; //para verificar se ela é menor que 20 basta negar o maior20, ja que ela NÃO é maior que 20, portanto algo falso fica verdadeiro dependendo do contexto
console.log("é menor que 20?", menor20); // Resulta em TRUE pois NÃO F = V

