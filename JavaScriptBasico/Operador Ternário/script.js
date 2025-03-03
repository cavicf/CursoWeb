//O operador ternário é a forma abreviada dos condicionais if e else, ou seja, quando vamos fazer verificações mais simples podemos utilizá-lo para poupar linhas de código. Seguindo o mesmo exemplo da aula passada sobre verficação de idade vamos ver se é maior que 18 ou não:

var idade = 19;

//Agora a verificação é feita da seguinte forma: Condição, ? (nosso if), o que é feito se for verdade, : (nosso else) e o que é feito caso falso
idade >= 18 ? console.log("pode vender") : console.log("não pode vender");
        // IF      COMANDO              ELSE        COMANDO

//podemos guardar o resultado da verificação em uma variável também, como valores booleanos por exemplo:
var resultado = idade >= 18 ? true : false; //Se a idade for maior que 18 a variavel resultado guardará true e se não false
console.log(resultado);