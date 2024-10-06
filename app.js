alert('Boas vindo ao jogo do Número Secreto!');

let numeroMaximo = 20;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let resultado;
let tentativas = 1;

while (resultado != numeroSecreto) {
    let fraseTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    resultado = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);

    // if (resultado == numeroSecreto) {
    //     break;
    // } else if (resultado > numeroSecreto) {
    //     alert(`O número secreto é menor q #${resultado}.`);
    // } else {
    //     alert(`O número secreto é maior q #${resultado}.`);
    // };

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

    //tentativas = tentativas + 1;
    tentativas++;
};

//alert(`Vc descobriu o número secreto q é o #${numeroSecreto} depois de ${tentativas} ${fraseTentativas}!`);

// if(tentativas > 1){
//     alert(`Vc descobriu o número secreto q é o #${numeroSecreto} depois de ${tentativas} tentativas!`);
// } else {
//     alert(`Vc descobriu o número secreto q é o #${numeroSecreto} depois de ${tentativas} tentativa!`);
// };