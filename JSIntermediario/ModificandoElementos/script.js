// É legal ressaltar que se jogarmos o documento html inteiro dentro de uma variavel, podemos utilizar todos os métodos através dela
let d = document //colocando o documento html em uma variavel
console.log(d.getElementById('p1')) //acessando elementos com id através da variavel

//Existem 3 formas de fazer modificações nos elementos
let p = document.getElementById('p1') //aqui estamos associando a tag com id à variavel e através dela poderemos fazer as modificações
p.innerText = 'Novo conteúdo' //Está alterando o texto do parágrafo
p.innerHTML = 'conteúdo mais novo' //Também altera o conteúdo da tag com id p1
p.textContent = 'conteudo mais novo ainda' //também altera o conteúdo da tag p com id p1

//A principal diferença entre eles é que o innerHTML recebe um html e permite a modificação da tag html
p.innerHTML = '<h3>Altermos o h1 pra um h3</h3>'//altera de fato a tag h1, substituindo por uma h3
p.innerText //O inner text irá exibir apenas o que está sendo mostrado na tela
p.textContent //Já o textContent irá mostrar tudo, tanto o que está sendo exibido quanto o que não está, como o span que colocamos em display none

//Podemos também alterar um atributo de uma tag, como class e id
p.className = 'outraClasse' //Aqui trocamos o atributo do elemento de id p1, pq usamos o getelementbyID

//Para acessar atributos não convencionais podemos utilizar o método getAttribute
let meuAtt = p.getAttribute('meuAtt') //pegando o atributo que foi criado através de seu titulo
// E para editar esses atributos não convencionais utilizamos o setAttribute
p.setAttribute('meuAtt', 'outro nome') //nos parametros do método passamo o nome do atributo que queremos mudar e em seguida o nome modificado

//Podemos também alterar a estilização de um elemento se o css estiver dentro do documento html
p.style.backgroundColor = 'red'//Estamos alterando a cor de fundo do elemento p1
