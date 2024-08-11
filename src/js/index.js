/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imgagem de fundo correspondente 
    - passo 1 - dar um jeito de pegar o elemente html dos botoes
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anteior
    - passo 4 - marcar o botão clicando como se estivesse selecionado 
    - passo 5 - esconder a imagem antoriormente selecionada
    - passo 6 - fazer apareceer a imagem correspondente ao botão clicado
    - passo 7 - esconder a informação do dragão anteriormente selecionado
    - passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

// - passo 1 - dar um jeito de pegar o elemente html dos botoes
const botoesCarroseel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//- passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarroseel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // - passo 3 - desmarcar o botão selecionado anteior
        DesativarBotaoSelecionado();
        //- passo 4 - marcar o botão clicando como se estivesse selecionado
        marcarBotaoSelecionado(botao);

        //- passo 5 - esconder a imagem antoriormente selecionada
        esconderImagemAtiva();

        //- passo 6 - fazer apareceer a imagem correspondente ao botão clicado
        MostrarImageDeFundo(indice);

        //- passo 7 - esconder a informação do dragão anteriormente selecionado
        esconderInformacoesAtivas();

        //- passo 8 - mostrar a informação do dragão referente ao botão clicado
        mostarInformacoes(indice);


    });

});
function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function MostrarImageDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function DesativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

