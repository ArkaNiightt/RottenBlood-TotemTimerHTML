// Elementos e variáveis iniciais
let timerElement = document.getElementById("timer");
let interval;
let currentDirectionIndex = 0;
const directions = ["norte", "direita", "sul", "esquerda"];

// Função para destacar a direção atual e definir a cor com base no tempo
function highlightDirection(direction, time) {
    // Redefinir a cor de fundo de todas as caixas de direção
    directions.forEach((dir) => {
        document.getElementById(dir).style.backgroundColor = "";
    });
    // Obter a cor com base no tempo restante
    const color = getColorForTime(time);
    // Definir a cor de fundo da caixa da direção atual e do temporizador
    document.getElementById(direction).style.backgroundColor = color;
    timerElement.style.backgroundColor = color;
}

// Função para determinar a cor com base no tempo restante
function getColorForTime(time) {
    // Calcular os componentes vermelho e verde com base no tempo (para criar uma transição de verde para vermelho)
    const red = Math.min(255, Math.max(0, Math.floor((5 - time) * 51)));
    const green = Math.min(255, Math.max(0, Math.floor(time * 51)));
    return `rgb(${red}, ${green}, 0)`;
}

// Iniciar o temporizador com contagem regressiva e troca de direção
function startTimer() {
    // Limpar qualquer intervalo existente para evitar múltiplos temporizadores rodando simultaneamente
    clearInterval(interval);
    let count = 5;
    timerElement.textContent = count;
    // Destacar a direção atual no início
    highlightDirection(directions[currentDirectionIndex], count);

    // Configurar o intervalo para atualizar o temporizador a cada segundo
    interval = setInterval(() => {
        count--;
        // Atualizar o temporizador e destacar a direção atual
        if (count >= 0) {
            timerElement.textContent = count;
            highlightDirection(directions[currentDirectionIndex], count);
        }

        // Quando a contagem regressiva chegar a zero, mudar para a próxima direção
        if (count === 0) {
            currentDirectionIndex =
                (currentDirectionIndex + 1) % directions.length;
            count = 5; // Reiniciar a contagem regressiva para a próxima direção
            highlightDirection(directions[currentDirectionIndex], count);
        }
    }, 1000); // Intervalo de 1000ms para contagem regressiva de 1 segundo
}

// Parar o temporizador e redefinir a interface
function stopTimer() {
    // Limpar o intervalo para parar o temporizador
    clearInterval(interval);
    timerElement.textContent = "5";
    currentDirectionIndex = 0; // Redefinir para a direção norte
    // Destacar a direção norte e redefinir todas as cores
    highlightDirection(directions[currentDirectionIndex], 5);
    directions.forEach((dir) => {
        document.getElementById(dir).style.backgroundColor = "";
    });
    timerElement.style.backgroundColor = "#fff"; // Redefinir a cor do temporizador para branco
}

// Event listeners para os botões de iniciar e parar
document.getElementById("start-button").addEventListener("click", startTimer);
document.getElementById("stop-button").addEventListener("click", stopTimer);

// Melhorar a legibilidade e adicionar animações para uma melhor experiência do usuário
directions.forEach((dir) => {
    const element = document.getElementById(dir);
    // Adicionar efeitos de transição para mudanças mais suaves de cor de fundo e transformação
    element.style.transition =
        "background-color 0.5s ease, transform 0.5s ease";
});

// Adicionar efeito de transição ao elemento do temporizador para uma experiência mais suave
timerElement.style.transition =
    "background-color 0.5s ease, transform 0.5s ease";

// Adicionar uma leve animação de escala quando o botão de iniciar for clicado
document.getElementById("start-button").addEventListener("click", () => {
    timerElement.style.transform = "scale(1.1)";
    setTimeout(() => {
        timerElement.style.transform = "scale(1)";
    }, 200); // Redefinir a escala após 200ms
});

// Adicionar uma leve animação de escala quando o botão de parar for clicado
document.getElementById("stop-button").addEventListener("click", () => {
    timerElement.style.transform = "scale(0.9)";
    setTimeout(() => {
        timerElement.style.transform = "scale(1)";
    }, 200); // Redefinir a escala após 200ms
});
