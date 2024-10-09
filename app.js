
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let resultado;
let tentativas = 1;

// Função para exibir o prompt
function exibirPrompt() {
    //resultado = prompt(`Escolha um número entre #1 e #${numeroMaximo}.`);
    while (resultado != numeroSecreto) {
        let fraseTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        resultado = prompt(`Escolha um número entre #1 e #${numeroMaximo}.`);
    
        // Verifica se o usuário clicou em "Cancelar" ou deixou o campo vazio
        if (resultado === null || resultado.trim() === '') {
            alert('Você precisa digitar um número!');
            continue; // Volta para o início do loop
        };
    
        if (resultado === null || isNaN(resultado)) {
            alert('Por favor, digite APENAS números.');
            continue;
        } else if (resultado < 1 || resultado > numeroMaximo) {
            // alert(`Digite um número entre #1 e #${numeroMaximo}.`);
            alert('Digite apenas números maior que 1.');
            continue;
        };
        
        // Nova parte para alterar o conteúdo da div ao acertar
        if (resultado == numeroSecreto) {
            const containerConteudo = document.querySelector('.container__conteudo');
    
            // Limpa o conteúdo da div
            containerConteudo.innerHTML = '';
    
            // Adiciona o novo conteúdo
            containerConteudo.innerHTML = `
                <img src="./img/robot.png" alt="robô mergulhador" class="container__imagem-robo" />
                <div class="container__informacoes">
                    <img src="./img/trophy.png" alt="ícone de um troféu" />
                     <div class="container__texto">
                        <h1>Você <span class="container__texto-azul">acertou!</span></h1>
                        <h2>Você descobriu o número secreto que é ${numeroSecreto} depois de ${tentativas} ${fraseTentativas}!</h2>
                    </div>
                </div>
            `;
            break;
        } else if (resultado > numeroSecreto) {
            alert(`O número secreto é menor q #${resultado}.`);
        } else {
            alert(`O número secreto é maior q #${resultado}.`);
        };
        
        tentativas++;
    };
};

// Aguarda 5 segundos (5000 milissegundos) antes de exibir o prompt
setTimeout(exibirPrompt, 5000);
