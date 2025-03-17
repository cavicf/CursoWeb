var numero1 = 4 //ja conhecemos 
let numero2 = 5
const numero3 = 6 //constantes uma vez atribuidam, não pode ser reatribuída, mas isso não quer dizer que o valor não possa mudar
numero3 = 7// isso por exemplo não pode ser feito
//Mas se tivermos um array ou um objeto como constante por exemplo, contanto que o seus endereços de memória não mudem, seus valores podem mudar
const array = [7]
numero3.push(4)
//Quando tentamos modificar o valor de uma constante do tipo comum, como numérico, ele tentará apontar aquela constante para um outro endereço com outro valor. o que não pode



console.log(numero1)
console.log(numero2)
console.log(numero3)