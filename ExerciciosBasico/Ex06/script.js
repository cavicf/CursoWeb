var A = parseFloat(prompt( 'Digite o valor de A: '));
var B = parseFloat(prompt('Digite o valor de B: '));
var aux = A;
A = B;
B = aux;
alert('O valor de A agora é: ' + A + '\n' + 'O valor de B agora é: ' + B);