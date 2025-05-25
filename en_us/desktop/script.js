// Detecta a pasta com base na variável global definida no index.html
const path = window.basePath || '';

// Arrays com caminhos ajustados
const imagensSobrepostas = [
    `${path}/sobreposta1.png`,
    `${path}/sobreposta2.png`,
    `${path}/sobreposta3.png`,
    `${path}/sobreposta4.png`,
    `${path}/sobreposta5.png`
];

let indiceAtual = 0;

const imagensSobrepostas10 = [
    `${path}/fundo50.png`,
    `${path}/fundo55.png`
];

let indiceAtual10 = 0;

const imagensSobrepostas12 = [
    `${path}/fundo61.png`,
    `${path}/fundo62.png`,
    `${path}/fundo63.png`
];

let indiceAtual12 = 0;

const limagensSobrepostas = [
    `${path}/sobrepo4.png`,
    `${path}/sobrepo6.png`,
    `${path}/sobrepo5.png`
];

let lindiceAtual = 0;

const alimagensSobrepostas = [
    `${path}/fundo5.png`,
    `${path}/fundo6.png`,
    `${path}/fundo7.png`
];

let alindiceAtual = 0;

// Funções para trocar as imagens com fade

function trocarImagem() {
    const imagem = document.getElementById("imagemSobreposta");
    imagem.style.opacity = 0;
    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % imagensSobrepostas.length;
        imagem.src = imagensSobrepostas[indiceAtual];
        imagem.style.opacity = 1;
    }, 1000);
}

function trocarImagem10() {
    const imagem = document.getElementById("imagemSobreposta10");
    imagem.style.opacity = 0;
    setTimeout(() => {
        indiceAtual10 = (indiceAtual10 + 1) % imagensSobrepostas10.length;
        imagem.src = imagensSobrepostas10[indiceAtual10];
        imagem.style.opacity = 1;
    }, 1000);
}

function trocarImagem12() {
    const imagem = document.getElementById("imagemSobreposta12");
    imagem.style.opacity = 0;
    setTimeout(() => {
        indiceAtual12 = (indiceAtual12 + 1) % imagensSobrepostas12.length;
        imagem.src = imagensSobrepostas12[indiceAtual12];
        imagem.style.opacity = 1;
    }, 1000);
}

function trocarImagemm() {
    const imagem = document.getElementById("imagemSobrepo");
    imagem.style.opacity = 0;
    setTimeout(() => {
        lindiceAtual = (lindiceAtual + 1) % limagensSobrepostas.length;
        imagem.src = limagensSobrepostas[lindiceAtual];
        imagem.style.opacity = 1;
    }, 1000);
}

function ltrocarImagemm() {
    const imagem = document.getElementById("limagemSobrepo");
    imagem.style.opacity = 0;
    setTimeout(() => {
        alindiceAtual = (alindiceAtual + 1) % alimagensSobrepostas.length;
        imagem.src = alimagensSobrepostas[alindiceAtual];
        imagem.style.opacity = 1;
    }, 1000);
}
