# Cronômetro de Direções

Este projeto é um cronômetro visual que destaca direções (Norte, Sul, Leste e Oeste) enquanto realiza uma contagem regressiva. Ele foi desenvolvido utilizando HTML, CSS e JavaScript, proporcionando uma experiência interativa e atraente para o usuário.

## Funcionalidades

- **Cronômetro de 5 segundos**: Um cronômetro que inicia uma contagem regressiva de 5 segundos para cada direção.
- **Destaque de direções**: As direções são destacadas visualmente enquanto a contagem é realizada, criando um efeito dinâmico e fácil de acompanhar.
- **Transições suaves**: Animações de transição para melhorar a experiência visual ao iniciar, parar e mudar de direção.

## Estrutura do Projeto

- **index.html**: Contém a estrutura HTML da página, incluindo os elementos do cronômetro e botões de controle.
- **styles.css**: Arquivo de estilos que define a aparência dos elementos, como cores, posicionamento e animações.
- **script.js**: Lógica do cronômetro implementada em JavaScript, controlando a contagem regressiva, mudanças de direção e interações do usuário.

## Como Utilizar

1. **Clone o Repositório**
   ```
   git clone https://github.com/ArkaNiightt/RottenBlood-TotemTimerHTML.git
   ```
2. **Abra o arquivo ****`index.html`**
   - Navegue até o diretório do projeto e abra o arquivo `index.html` em seu navegador.
3. **Interaja com o Cronômetro**
   - Clique no botão `Iniciar` para começar a contagem regressiva.
   - Clique no botão `Parar` para interromper o cronômetro e redefinir as direções.

## Estrutura HTML

O arquivo `index.html` contém:

- Um título (`<h1>`) indicando que se trata de um cronômetro.
- Uma estrutura de 4 caixas representando as direções (`N`, `D`, `S`, `E`).
- Um cronômetro central que mostra a contagem regressiva.
- Botões para iniciar e parar o cronômetro.

## Estilo CSS

- As direções e o cronômetro são estilizados com transições suaves de cores e transformações para melhorar a experiência do usuário.
- O layout é responsivo e se adapta bem a diferentes tamanhos de tela, mantendo os elementos centralizados.

## Lógica JavaScript

- A lógica do cronômetro é implementada no `script.js`, controlando a contagem regressiva e a mudança de destaques nas direções.
- A cada 5 segundos, o cronômetro redefine e muda para a próxima direção, criando um loop contínuo.
- Ao pressionar `Parar`, o cronômetro é interrompido e as cores são redefinidas.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização dos elementos e animações.
- **JavaScript**: Lógica de funcionamento do cronômetro e interações do usuário.

## Melhorias Futuras

- Adicionar um som para indicar a mudança de direção.
- Permitir ao usuário ajustar o tempo de contagem regressiva.
- Adicionar uma interface para selecionar diferentes temas de cores.

## Autor

Desenvolvido por Joao Augusto.

## Licença

Este projeto é open-source e está licenciado sob a licença MIT.

