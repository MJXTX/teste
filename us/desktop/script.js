// Array com as imagens sobrepostas
const imagensSobrepostas = [
    "sobreposta1.png",
    "sobreposta2.png",
    "sobreposta3.png",
    "sobreposta4.png",
    "sobreposta5.png"
    ];

let indiceAtual = 0;


const imagensSobrepostas10 = [
    "fundo50.png",
    "fundo55.png"
    
    
    
    
    ];

let indiceAtual10 = 0;

const imagensSobrepostas12 = [
    "fundo61.png",
    "fundo62.png",
    "fundo63.png"
    
    
    
    ];

let indiceAtual12 = 0;



const limagensSobrepostas = [
    "sobrepo4.png",
    "sobrepo6.png",
    "sobrepo5.png"
    
    ];

let lindiceAtual = 0;



const alimagensSobrepostas = [
    "fundo5.png",
    "fundo6.png",
    "fundo7.png"
    
    ];

let alindiceAtual = 0;
// Função para trocar a imagem
function trocarImagem() {
    const imagemSobreposta = document.getElementById("imagemSobreposta");

    // Aplica efeito de fade out
    imagemSobreposta.style.opacity = 0;

    // Troca a imagem após o fade out
    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % imagensSobrepostas.length;
        imagemSobreposta.src = imagensSobrepostas[indiceAtual];
        imagemSobreposta.style.opacity = 1; // Fade in
    }, 1000); // Tempo correspondente à duração da transição (0.5s)
}

function trocarImagem10() {
    const imagemSobreposta10 = document.getElementById("imagemSobreposta10");

    // Aplica efeito de fade out
    imagemSobreposta10.style.opacity = 0;

    // Troca a imagem após o fade out
    setTimeout(() => {
        indiceAtual10 = (indiceAtual10 + 1) % imagensSobrepostas10.length;
        imagemSobreposta10.src = imagensSobrepostas10[indiceAtual10];
        imagemSobreposta10.style.opacity = 1; // Fade in
    }, 1000); // Tempo correspondente à duração da transição (0.5s)
}


function trocarImagem12() {
    const imagemSobreposta12 = document.getElementById("imagemSobreposta12");

    // Aplica efeito de fade out
    imagemSobreposta12.style.opacity = 0;

    // Troca a imagem após o fade out
    setTimeout(() => {
        indiceAtual12 = (indiceAtual12 + 1) % imagensSobrepostas12.length;
        imagemSobreposta12.src = imagensSobrepostas12[indiceAtual12];
        imagemSobreposta12.style.opacity = 1; // Fade in
    }, 1000); // Tempo correspondente à duração da transição (0.5s)
}


// Função para trocar a imagem
function trocarImagemm() {
    const imagemSobrepo = document.getElementById("imagemSobrepo");

    // Aplica efeito de fade out
    imagemSobrepo.style.opacity = 0;

    // Troca a imagem após o fade out
    setTimeout(() => {
        lindiceAtual = (lindiceAtual + 1) % limagensSobrepostas.length;
        imagemSobrepo.src = limagensSobrepostas[lindiceAtual];
        imagemSobrepo.style.opacity = 1; // Fade in
    }, 1000); // Tempo correspondente à duração da transição (0.5s)
}



// Função para trocar a imagem
function ltrocarImagemm() {
    const imagemSobrepo = document.getElementById("limagemSobrepo");

    // Aplica efeito de fade out
    limagemSobrepo.style.opacity = 0;

    // Troca a imagem após o fade out
    setTimeout(() => {
        alindiceAtual = (alindiceAtual + 1) % alimagensSobrepostas.length;
        limagemSobrepo.src = alimagensSobrepostas[alindiceAtual];
        limagemSobrepo.style.opacity = 1; // Fade in
    }, 1000); // Tempo correspondente à duração da transição (0.5s)
}