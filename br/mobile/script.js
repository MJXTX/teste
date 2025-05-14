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

const imagensSobrepostas5 = [
    `${path}/A.png`,
    `${path}/S.png`,
    `${path}/V.png`,
    `${path}/D.png`,
    `${path}/C.png`
];
let indiceAtual5 = 0;

const imagensSobrepostas8 = [
    `${path}/f30.png`,
    `${path}/f31.png`,
    `${path}/f32.png`
];
let indiceAtual8 = 0;

const imagensSobrepostas9 = [
    `${path}/fundo41.png`,
    `${path}/fundo42.png`
];
let indiceAtual9 = 0;

const imagensSobrepostas10 = [
    `${path}/fundo50.png`,
    `${path}/fundo55.png`
];
let indiceAtual10 = 0;

const imagensSobrepostas11 = [
    `${path}/sobrepo4.png`,
    `${path}/sobrepo5.png`,
    `${path}/sobrepo6.png`
];
let indiceAtual11 = 0;

const imagensSobrepostas12 = [
    `${path}/fundo61.png`,
    `${path}/fundo62.png`,
    `${path}/fundo63.png`
];
let indiceAtual12 = 0;

const alimagensSobrepostas = [
    `${path}/fundo5.png`,
    `${path}/fundo6.png`,
    `${path}/fundo7.png`
];
let alindiceAtual = 0;

// Funções de troca de imagem com fade
function trocarImagem() {
    const imagem = document.getElementById("imagemSobreposta");
    imagem.style.opacity = 0;
    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % imagensSobrepostas.length;
        imagem.src = imagensSobrepostas[indiceAtual];
        imagem.style.opacity = 1;
    }, 1000);
}

function trocarImagem5() {
    const imagem = document.getElementById("imagemSobreposta5");
    imagem.style.opacity = 0;
    setTimeout(() => {
        indiceAtual5 = (indiceAtual5 + 1) % imagensSobrepostas5.length;
        imagem.src = imagensSobrepostas5[indiceAtual5];
        imagem.style.opacity = 1;
    }, 1000);
}

function trocarImagem8() {
    const imagem = document.getElementById("imagemSobreposta8");
    imagem.style.opacity = 0;
    setTimeout(() => {
        indiceAtual8 = (indiceAtual8 + 1) % imagensSobrepostas8.length;
        imagem.src = imagensSobrepostas8[indiceAtual8];
        imagem.style.opacity = 1;
    }, 1000);
}

function trocarImagem9() {
    const imagem = document.getElementById("imagemSobreposta9");
    imagem.style.opacity = 0;
    setTimeout(() => {
        indiceAtual9 = (indiceAtual9 + 1) % imagensSobrepostas9.length;
        imagem.src = imagensSobrepostas9[indiceAtual9];
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

function trocarImagem11() {
    const imagem = document.getElementById("imagemSobreposta11");
    imagem.style.opacity = 0;
    setTimeout(() => {
        indiceAtual11 = (indiceAtual11 + 1) % imagensSobrepostas11.length;
        imagem.src = imagensSobrepostas11[indiceAtual11];
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

function ltrocarImagemm() {
    const imagem = document.getElementById("limagemSobrepo");
    imagem.style.opacity = 0;
    setTimeout(() => {
        alindiceAtual = (alindiceAtual + 1) % alimagensSobrepostas.length;
        imagem.src = alimagensSobrepostas[alindiceAtual];
        imagem.style.opacity = 1;
    }, 1000);
}
