// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma (x, y) {
	return 5 + 5;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var funcao;
funcao = soma() +5;

// Qual o valor atualizado dessa variável?
// 15 

// Declare uma nova variável, sem valor.
var semValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
var semValor;
function adicioneValor() {
	semValor = 35;
	return 'o valor da varialvel semValor é' + semValor
}

// Invoque a função criada acima.
semValor()

// Qual o retorno da função? (Use comentários de bloco).
// 35

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function funcao(n1, n2, n3) {
	if(n1===undefined || n2===undefined || n3===undefined) {
		return 'Preencha todos os valores corretamente!';
	} else {
		return n1*n2*n3 +2;
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
funcao(10, 10)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 20

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
funcao(10, 10, 30)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 50


// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma += 1;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;
// Qual é o valor da variável `soma` até aqui?
// 102

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
soma === myvar;

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
myvar <= soma;

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(x, y) {
	return 'valor da divisao é ' + x / y;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
divisao(10 , 2)
return 'valor da divisao' + divisao;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calcular(a, b ,c) {
	if( a!== undefined && b===undefined && c===undefined) {
		return x;
	}
	else if(a!== undefined && b!==undefined && c===undefined) {
		return a + b;
	}
	else if(a!== undefined && b!==undefined && c!==undefined) {
		return (a + b / c);
	}
	else if(a!== undefined && b!==undefined && c!==undefined) {
		return false;
	}
	else {
		return null;
	}
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
calcular (); //false 
calcular(1); //1
calcular(1, 2); //3
calcular(1, 2, 3); //1

/* Crie uma função que valide se o número informado é par ou ímpar, além disso precisa validar se o 
número informado é do tipo `number`, para satisfazer as condições:
 - Validar se foi inserida um dado
 - Validar se foi inserido um número
 - Validar se o número é ímpar ou par
 - Exiba as mensagens para cada caso informado acima.*/
function verificar(par, impar) {
	if(par===undefined && impar===undefined) {
		return typeof value === "number" && 'valor inserido é numeral'
	}
	else if(par % 2 == 0) {
		return 'o valor inserido é par, pois o resto da divisão é = a 0'
	}
	else if(impar % 2 == 0) {
		return 'o valor inserido é impor, pois o resto da divisão é diferente de 0'
	}
	else {
		return false
	}
}