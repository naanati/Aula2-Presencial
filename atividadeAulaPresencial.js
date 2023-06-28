 //1.Criando 3 variáveis com tipos Objeto Number para guardar os valores e exibir no console.

var numero1 = new Number (300);
var numero2 = new Number (999);
var numero3 = new Number (21);
console.log(numero1,numero2, numero3);

// 2. Exibir no console os valores de 4 propriedades do tipo objeto Number.

var numero = new Number (500);
console.log(numero);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);

//3. Criar 1 variável para receber o valor 150, em seguida exibe no console o valor da variável, converte para string o valor e exibe no console, o valor convertido.

var num = new Number (150);
console.log(num);
num = num.toString();
console.log(num);