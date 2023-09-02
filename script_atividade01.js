/*1) Registro de idade no console: Sua tarefa é usar a função console.log()
para imprimir a sua idade no console do navegador. console.log() é
uma função do JavaScript usada para imprimir a saída em um
console, geralmente útil para depuração. Consulte a documentação

oficial para mais detalhes:*/


var idade = 22;
console.log("Minha idade e", idade);

/* 2) Registrar o número de semanas de programação: Agora, registre o
número de semanas que você programou usando a mesma função
console.log(). */

var numeroDeSemanas = 1;
console.log("Gastei a quantidade de", numeroDeSemanas);

/*3) Usando comentários: Comentários são anotações que você pode
adicionar ao seu código que não são executadas. Use um comentário
de várias linhas ( Comentário ) em seu código. Eles são úteis para
explicar o que seu código faz. Consulte a documentação oficial sobre

comentários:*/

//Aqui eu fiz um comentario

/* Criando variáveis de diferentes tipos: JavaScript suporta vários tipos
de dados, incluindo números (number), texto (string), objetos
(object), etc. Sua tarefa é criar 5 variáveis de diferentes tipos de
dados. Consulte a documentação oficial para mais informações sobre

tipos de dados e variáveis: */

var idade = 28;
var simbolo = Symbol();
var nome = 'Renan';
var sobrenome = 'Lima';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

/*
5) Adicionando 3.5 à sua idade: O JavaScript permite operações
aritméticas como adição, subtração, etc. Adicione 3.5 à sua idade
usando um operador de adição (+) e registre o resultado com
console.log(). Veja mais sobre operadores aritméticos:
*/

var novaIdade = idade + 35;
console.log(novaIdade);

/*
Quantos anos se passaram desde o pouso na lua em 1969: O objeto
Date em JavaScript é usado para trabalhar com datas. Sua tarefa é
obter o ano atual, subtrair 1969 dele e registrar o resultado. Consulte
a documentação oficial para mais detalhes sobre o objeto Date:
*/

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const anoPousoLua = 1969;
const anosPassados = anoAtual - anoPousoLua;
console.log(`Passou ${anosPassados} anos desde o pouso na lua`);


/*
Divisão de números: Sua tarefa é dividir 65 por 240 e registrar o
resultado usando console.log().
*/


var soma1 =  65 / 240;
console.log(soma1);

/*
8) Multiplicação de números: Multiplique 0.2708 por 100 e registre o
resultado. Esta é uma operação aritmética simples usando o
operador de multiplicação (*).
*/

var soma2 =  0.2708 * 100 ;
console.log(soma2);

/*
9) Concatenação de strings: Em JavaScript, você pode concatenar (unir)
strings usando o operador de concatenação (+). Sua tarefa é
concatenar as strings 'Hello' e 'World' e registrar o resultado. Veja

mais sobre operações de string:
*/

var helloWord = `Hello`  + `World`;
console.log(helloWord);

/*
10) Concatenação de strings com espaço: Agora, concatene
'Hello' e 'World', mas certifique-se de incluir um espaço entre as duas
palavras.
*/

var helloWord1 = `Hello` + ' ' + `World`;
console.log(helloWord1);

/*
11) Usando a propriedade length: Em JavaScript, a propriedade
.length é usada para obter o número de caracteres em uma string.
Sua tarefa é registrar o número de caracteres na string 'Teaching the
world how to code' usando a propriedade .length. Veja mais sobre a

propriedade .length:
*/

var quantidade = 'Contar a quantidade de caracter';
var numeroDeCaracteres = quantidade.length;

console.log('O número de caracteres: ' + numeroDeCaracteres);

/*
12) Usando o método toUpperCase(): Este método é usado para
converter todas as letras de uma string para maiúsculas. Use o
método .toUpperCase() para converter a string 'Kaian Novais' em
maiúsculas e registre o resultado. Veja mais sobre o método

.toUpperCase():
*/

var nomeProfessor = `Kaian Novais`;
console.log(nomeProfessor.toUpperCase());

/*
13) Removendo espaços em branco: O método .trim() é usado
para remover espaços em branco do início e do final de uma string.
Sua tarefa é remover os espaços em branco no início e no final da
string “ Professor Kaian Novais ” usando o método .trim(). Consulte a
documentação
*/

var nomeProfesso1 = " Professor Kaian Novais ";
let nomeCorreto = nomeProfesso1.trim();
console.log(nomeCorreto);

/*
14) Gerando um número aleatório: A função z é
usada para gerar um número aleatório entre 0 (inclusive) e 1
(exclusive). Sua tarefa é gerar um número aleatório, multiplicá-lo por
100 e registrar o resultado. Veja mais sobre Math.random():
*/

var random =  Math.random() * 100
console.log(random);

/*
15) Encontrando o próximo inteiro maior: O método Math.ceil() é
usado para arredondar um número para cima até o próximo número
inteiro maior. Sua tarefa é usar Math.ceil() com o número 43.8 e
registrar o resultado. Veja mais sobre Math.ceil():
*/

var ceil = Math.ceil(43.8);
console.log(ceil);

/*
16) Verificando se um número é um número inteiro: O método
Number.isInteger() é usado para determinar se um valor é um
número inteiro. Sua tarefa é verificar se o número 2017 é um número
inteiro e registrar o resultado. Veja mais sobre Number.isInteger():
*/

var inteiro =  Number.isInteger(2017);
console.log(inteiro);
