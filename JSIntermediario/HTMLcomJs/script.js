//Anteriormente vimos como acessar uma seção do documento e inserir elementos(tags) nele, utilizando da concatenação. Agora veremos como pegar elementos específicos que já estão no html para fazer edições no mesmos

//A primeira forma é pegar um elemento pelo seu id
let p1 = document.getElementById('p1') //aqui utilizamos o método do objeto document que pega um elemento pelo seu id, que é passado entre aspas para que o método seja executado.
//Esse método irá retornar o elemento html todo que está contido nesse id, assim podemos guardá-lo em uma variável por exemplo, como na p1

//A outra forma é pegar pela classe do elemento, lembre que as alterações nesse caso ocorrerão para todos os elementos de mesma classe
let paragrafos = document.getElementsByClassName('paragrafo')
//Esse método irá retornar todos os elementos html que são dessa mesma classe, e podemos guardar isso em uma variável também, que gerará um array de elementos html
//Podemos inclusive percorrer esse array com um for 
for(let p of paragrafos){console.log(p)}//imprimindo cada elemento html que está no array

//Agora se quisermos pegar todos os elementos de um mesmo tipo de tag html, independente se estão em um id ou uma classe, fazemos da seguinte forma:
//Independente se tiver apenas 1 elemento dessa tag, se colocarmos isso em uma variável, essa variável será um array e deve ser acessada como um
let tp = document.getElementsByTagName('p') //esse método retorna todos os elementos de mesma tag, nesse caso, será criado um array com todos os paragrafos
let th = document.getElementsByTagName('h1') //Existe só um titulo em nosso html, mas ainda sim essa variavel é um array de um elemento só com o h1
//Podemos acessar igual acessamos arrays
console.log(th[0]) //imprimindo o único titulo 
for(let p of tp){console.log(p)}// imprimindo todas as tags p 