var tempo = parseFloat(prompt('Digite o tempo gasto na viagem: '))
var velocidade = parseFloat(prompt('Digite a velocida média gasta: '))
var distancia = tempo * velocidade
var litrosUsados = distancia / 12
alert('A velocidade média é de: ' + velocidade + '\n' + 'Tempo gasto: ' + tempo + '\n' + 'Distancia percorrida: ' + distancia + '\n' + 'Quantidade de litros usados: ' + litrosUsados)
