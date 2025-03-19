var a = parseInt(prompt('Digite a quantidade de votos pro canditato A: '))
var b = parseInt(prompt('Digite a quantidade de votos pro canditato B: '))
var c = parseInt(prompt('Digite a quantidade de votos pro canditato C: '))
var nulos = parseInt(prompt('Digite a quantidade de votos nulos: '))
var branco = parseInt(prompt('Digite a quantidade de votos em branco: '))

var validos = a + b + c
var eleitores = validos + nulos + branco 
var pvalidos = (validos/eleitores)*100
var pa = (a/eleitores)*100
var pb = (b/eleitores)*100
var pc = (c/eleitores)*100
var pn = (nulos/eleitores)*100
var pb = (branco/eleitores)*100

alert('VOTAÇÃO: \nQuantidade de eleitores: ' + eleitores + '\nPercentual válidos: '
    + pvalidos + '%\nPercentual A: ' + pa + '%\nPercentual B: ' + pb + '%\nPercentual C: ' + pc + '%\nPercentual nulos: ' +  pn + '%\nPercentual brancos: '
    + pb + '%')