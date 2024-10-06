

// Aula 1 - Iniciando com JavaScript

// alert('Boas vindas ao nosso site!');

// let nome = 'Lua';
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;

// //alert('Erro! Preencha todos os campos');

// let mensagemDeErro = 'Erro! Vc não digitou a informação correta.';

// let nomeDoUsuario = prompt('Qual o nome do Usuário?');
// if (nomeDoUsuario == nome) {
//     console.log(nome);
// } else {
//     console.log(nome);
//     alert(mensagemDeErro);
// };

// let idade = prompt('Digite sua idade.');
// if (idade >= 18) {
//     console.log('Pode tirar a habilitação!');
//     console.log(idade);
// } else if (digiteSuaIdade < 18) {
//     alert(mensagemDeErro);
// };

// Aula 2 - Condicionais e concatenação

// 1 Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
// Pergunta ao usuário qual o dia da semana e armazena a resposta em uma variável
// let diaDaSemana = prompt("Qual o dia da semana?");

// Converte a resposta para letras maiúsculas para garantir uma comparação exata
//diaDaSemana = diaDaSemana.toUpperCase();

// Verifica se o dia da semana é sábado ou domingo e exibe a mensagem correspondente
// if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
//   alert("Bom fim de semana!");
// } else {
//   alert("Boa semana!");
// };

// Sugestão do professor
// diaDaSemana = prompt('Qual é o dia da semana?');
// if (diaDaSemana == 'Sábado') {
//     alert('Bom fim de semana!');
// } else if (diaDaSemana == 'Domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Boa semana!');
// }

// 2 Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
// Solicita ao usuário que digite um número
// let numero = prompt("Digite um número positivo ou negativo:");

// Converte a entrada do usuário para um número (caso seja necessário)
// numero = Number(numero);

// Verifica se o número é positivo, negativo ou zero
// if (numero > 0) {
//   alert("O número é positivo.");
// } else if (numero < 0) {
//   alert("O número é negativo.");
// } else {
//   alert("O número é zero.");
// };

// Sugestão do professor
// numero = prompt('Digite um positivo ou negativo');
// if (numero > 0) {
//     alert('Número positivo!');
// } else {
//     alert('Número negativo!');
// }

// 3 Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
// let pontuacao = prompt('Qual é a pontuação correta?');

//pontuacao = Number(pontuacao);

// if (pontuacao >= 100) {
//     alert(`Parabéns, vc digitou ${pontuacao} e venceu!`);
// } else if (pontuacao < 100) {
//     alert(`Vc digitou ${pontuacao} e esta incorreto. Tente novamente para ganhar.`);
// };

// Sugestão do professor ***zuada
// pontuacao = 105;
// if (pontuacao >= 100) {
//     console.log('Parabéns, você venceu!');
// } else {
//     console.log('Tente novamente para ganhar.');
// }

// 4 Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
// let saldoDisponivel = 1500;

// alert(`Seu saldo disponível é R$ ${saldoDisponivel}`);

// Sugestão do professor
// let saldoConta = 500; // Exemplo de saldo
// alert(`Seu saldo é de R$${saldoConta}.`);

// 5 Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
// let nomeDigitado = prompt('Digite seu nome.');

//let mostrandoNome = nomeDigitado;

// alert(`Boas-vidas ${nomeDigitado}.`);

// Sugestão do professor ***BOA
// let nome = prompt('Qual o seu nome?');
// alert(`Boas vindas ${nome}`);



// Aula 3 - Loops e tentativas
// 1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let contador = 1;
// let contadorMaximo = 10;

// while(contador <= contadorMaximo){
//     console.log(contador);
//     contador++;
// };


// 2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contador = 10;
// let contadorMinimo = 0;

// while(contador >= contadorMinimo) {
//   console.log(contador);
//   contador--;
// };

// 3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
// let numeroInicial = prompt("Digite o número para iniciar a contagem regressiva:");
// numeroInicial = Number(numeroInicial); // Convertendo a entrada para número

// while (numeroInicial >= 0) {
//   console.log(numeroInicial);
//   numeroInicial--;
// };

// 4 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
// let numeroFinal = prompt("Digite o número final da contagem:");
// numeroFinal = Number(numeroFinal); // Convertendo a entrada para número

// let contador = 0;

// while (contador <= numeroFinal) {
//   console.log(contador);
//   contador++;
// };



// Aula 4 - Boas práticas de programação.

// 1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
//console.log('Boas Vindas!');

// 2 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// let nome = 'Fábio';
// console.log(`Olá, ${nome}`);

// 3 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
// let nome = 'Verdi';
// alert (`Olá, ${nome}`);

// 4 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
// let pergunta = prompt('Qual a linguagem de programação que você mais gosta?');
// console.log(pergunta);

// 5 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1 = 2;
// let valor2 = 5;
// let resultado = valor1 + valor2;
// console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// 6 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1 = 50;
// let valor2 = 22;
// let resultado = valor1 - valor2;
// console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// 7 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, 
//utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
// let idade = prompt('Digite sua idade!');
// if (idade >= 18) {
//   console.log(`Vc tem ${idade} anos e é maior de idade!`);
// } else {
//   console.log(`Vc tem ${idade} anos e é menor de idade!`);
// };

// --Solução do instrutor
// let idade = prompt('Digite a sua idade:');
// if (idade > 17) {
//     console.log('Você é maior de idade.');
// } else {
//     console.log('Você é menor de idade.');
// }

// 8 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a 
// respectiva mensagem.
// let numero = prompt('Digite um numero.');
// if (numero == 0) {
//   console.log(`Vc digitou ${numero} e esse número é negativo.`);
// } else {
//   console.log(`Vc digitou ${numero} e esse número é positivo.`);
// };

// --Solução do instrutor
// var numero = parseFloat(prompt("Digite um número:"));

// if (numero > 0) {
//     console.log("O número é positivo.");
// } else if (numero < 0) {
//     console.log("O número é negativo.");
// } else {
//     console.log("O número é zero.");
// };

// 9 - Use um loop while para imprimir os números de 1 a 10 no console.
// let contador = 1;

// while (contador <= 10) {
//   console.log(contador);
//   contador++;
// };

// 10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba 
// "Aprovado" ou "Reprovado" no console.
// let nota = 3;

// if (nota >= 7) {
//   console.log('Aprovado!');
// } else {
//   console.log('Reprovado!');
// };

// 11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
// console.log(Math.random());

// --Solução do instrutor
// let numeroAleatorio = Math.random();
// console.log(numeroAleatorio);

// 12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
// let numero = Math.random() * 10 + 1;
// console.log(numero);

// --Solução do instrutor ***vacilei
// let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
// console.log(numeroInteiroAleatorio);

// 13 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
// let numeroInteiro = parseInt(Math.random() * 1000) + 1;
// console.log(numeroInteiro);

