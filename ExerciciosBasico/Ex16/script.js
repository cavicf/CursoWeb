var sm = parseFloat(prompt('Digite o valor do salário: '))
var pr = parseFloat(prompt('Digite o percentual de reajuste: '))
var ns = sm + (sm * pr/100)
alert('o salario reajustado é: ' + ns)