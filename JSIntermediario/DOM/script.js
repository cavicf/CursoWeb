//Agora vamos começar a mexer um pouco com o DOM (Document Object Model), que permite que cada tag html seja transformada em um objeto javaScript
//Isso permitirá que façamos alterações no documento html através do JS, acessando tags, modificando, inserindo e até mesmo apagando
//primeiro temos que acessar a estrutura html com o document, mas podemos também particionar esse documento escolhendo seções do arquivo como:
document.body //aqui estamos acessando especificamente o body do html. Aqui é importante lembrar que estamos sempre trabalhando com um objeto dentro do outro, pois aleém do document ser um objeto do objeto window, o body também é transformado em objeto

//Uma vez acessando uma partição do html, temos uma outra propriedade que nos permitirá acessar as tags dentro daquela seção. Essa tag é a innerhtml que mostrará as tags dentro da seção como strings, ou seja, elá permitirá que façamos alterações e atribuições no documento html através do js
document.body.innerHTML = '<h1>Esse titulos foi inserido através do js' + document.body.innerHTML //Ao adicionarmos ou alterarmos algo do html dentro do js, devemos sempre utilizar aspas pois o innerhtml faz o tratamento das tags como uma string
//Fazemos a concatenação do document.body.innerHTML pois não podemos perder o que ja estava no documento antes, estamos apenas acrescentando algo, por isso a concatenação é feita
//Agora se rodarmos nosso html, veremos que o titulo h1 foi inserido no body 
