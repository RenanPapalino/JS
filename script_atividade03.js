
/*
1-A previsão do tempo para hoje é de 293 Kelvin. Para começar, crie uma variável
chamada "kelvin" e atribua a ela o valor 293. O valor armazenado na variável
"kelvin" permanecerá constante. Escolha o tipo de variável que é mais adequado
para manter esse valor constante.
*/

let kevin = 293;
console.log(kevin);

/*
2-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.
*/

// Foi declarado uma variavel do tipo constante para nao sofrer alteracao e atribuido o valor de 293.

/*
3-Celsius é similar a Kelvin — a única diferença é que Celsius é 273 graus menor
que Kelvin. Vamos converter Kelvin para Celsius subtraindo 273 da variável
"kelvin". Armazene o resultado em outra variável, chamada "celsius".
*/

const celsius = kevin - 273;
console.log(celsius);

/*
4-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.
*/

// Foi declarado uma variavel do tipo constante para nao sofrer alteracoes com nome de celsius e feito a operacao de subtracao da variavel kevin. 

/*
5-Use a seguinte fórmula para calcular Fahrenheit, e então armazene o resultado
em uma variável chamada "fahrenheit". A fórmula é: Fahrenheit = Celsius * (9/5)
+ 32. No próximo passo, iremos arredondar o número salvo na variável
"fahrenheit". Escolha o tipo de variável que permite que você altere seu valor.
*/

var Fahrenheit = celsius * (9/5)+ 32;
console.log(Fahrenheit);

Fahrenheit = Math.ceil(69);
console.log(Fahrenheit);


/*6-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.*/

//Feito o calculo utilizando a formula + a variavel celsius e apos feito o arredondamento com a funcao Math.ceil.

/*
7-Quando você converte de Celsius para Fahrenheit, geralmente obtém um
número decimal. Use o método .floor() do objeto Math para arredondar para
baixo a temperatura em Fahrenheit. Salve o resultado na variável "fahrenheit".
*/

let temperaturaCelsius = 28; 

fahrenheit = Math.floor((temperaturaCelsius * 9/5) + 32);

console.log(fahrenheit);

/*8-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.

Realizado a conversao utilizando o math.flor aproveitando as variaveis fahrenheit.

/*
9-Use console.log e interpolação de string para registrar no console a
temperatura em Fahrenheit da seguinte forma: "A temperatura é TEMPERATURA
graus Fahrenheit". Use a interpolação de string para substituir "TEMPERATURA"
pelo valor armazenado na variável "fahrenheit".
*/

let minhaTemperatura = `A temperatura e ${fahrenheit}`;
console.log(minhaTemperatura);

/*
11-Ao usar variáveis, seu programa deve funcionar para qualquer temperatura
em Kelvin — basta alterar o valor de "kelvin" e executar o programa novamente.
Qual seria a temperatura correspondente a 0 Kelvin em Fahrenheit?
*/

fahrenheit = 0;
kelvin = 0; 
fahrenheit = (kelvin - 273.15) * (9/5) + 32;

console.log(fahrenheit);

/*
12-Ótimo trabalho! Agora Kelvin pode publicar suas previsões tanto em Celsius
quanto em Fahrenheit. Se você quiser praticar um pouco mais, tente fazer o
seguinte: Converta Celsius para a escala Newton usando a equação abaixo:
Newton = Celsius * (33/100). Arredonde a temperatura em Newton para baixo
usando o método .floor(). Use console.log e interpolação de string para registrar
no console a temperatura em Newton.

*/

temperaturaCelsius = 28; 

let newton = Math.floor(temperaturaCelsius * (33/100));

console.log(newton);