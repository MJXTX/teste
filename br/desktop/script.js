// Define a base path, ex: 'mobile' ou 'desktop' — vem do HTML principal
const basePath = window.basePath || ''; // fallback para evitar erro

// Função utilitária para gerar o caminho correto da imagem
const path = (arquivo) => `${basePath}/imagens/${arquivo}`;

// Arrays com imagens usando caminho absoluto da pasta correta
const imagensSobrepostas = [
    path("sobreposta1.png"),
    path("sobreposta2.png"),
    path("sobreposta3.png"),
    path("sobreposta4.png"),
    path("sobreposta5.png")
];
let indiceAtual = 0;

const imagensSobrepostas10 = [
    path("fundo50.png"),
    path("fundo55.png")
];
let indiceAtual10 = 0;

const imagensSobrepostas12 = [
    path("fundo61.png"),
    path("fundo62.png"),
    path("fundo63.png")
];
let indiceAtual12 = 0;

const limagensSobrepostas = [
    path("sobrepo4.png"),
    path("sobrepo6.png"),
    path("sobrepo5.png")
];
let lindiceAtual = 0;

const alimagensSobrepostas = [
    path("fundo5.png"),
    path("fundo6.png"),
    path("fundo7.png")
];
let alindiceAtual = 0;

// Funções para trocar imagens com efeito de fade

function trocarImagem() {
    const imagemSobreposta = document.getElementById("imagemSobreposta");
    imagemSobreposta.style.opacity = 0;
    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % imagensSobrepostas.length;
        imagemSobreposta.src = imagensSobrepostas[indiceAtual];
        imagemSobreposta.style.opacity = 1;
    }, 1000);
}

function trocarImagem10() {
    const imagemSobreposta10 = document.getElementById("imagemSobreposta10");
    imagemSobreposta10.style.opacity = 0;
    setTimeout(() => {
        indiceAtual10 = (indiceAtual10 + 1) % imagensSobrepostas10.length;
        imagemSobreposta10.src = imagensSobrepostas10[indiceAtual10];
        imagemSobreposta10.style.opacity = 1;
    }, 1000);
}

function trocarImagem12() {
    const imagemSobreposta12 = document.getElementById("imagemSobreposta12");
    imagemSobreposta12.style.opacity = 0;
    setTimeout(() => {
        indiceAtual12 = (indiceAtual12 + 1) % imagensSobrepostas12.length;
        imagemSobreposta12.src = imagensSobrepostas12[indiceAtual12];
        imagemSobreposta12.style.opacity = 1;
    }, 1000);
}

function trocarImagemm() {
    const imagemSobrepo = document.getElementById("imagemSobrepo");
    imagemSobrepo.style.opacity = 0;
    setTimeout(() => {
        lindiceAtual = (lindiceAtual + 1) % limagensSobrepostas.length;
        imagemSobrepo.src = limagensSobrepostas[lindiceAtual];
        imagemSobrepo.style.opacity = 1;
    }, 1000);
}

function ltrocarImagemm() {
    const limagemSobrepo = document.getElementById("limagemSobrepo");
    limagemSobrepo.style.opacity = 0;
    setTimeout(() => {
        alindiceAtual = (alindiceAtual + 1) % alimagensSobrepostas.length;
        limagemSobrepo.src = alimagensSobrepostas[alindiceAtual];
        limagemSobrepo.style.opacity = 1;
    }, 1000);
}
