// Array com as imagens sobrepostas
const imagensSobrepostas = [
    "sobreposta1.png",
    "sobreposta2.png",
    "sobreposta3.png",
    "sobreposta4.png",
    "sobreposta5.png"
    ];

let indiceAtual = 0;


const imagensSobrepostas5 = [
    "A.png",
    "S.png",
    "V.png",
    "D.png",
    "C.png"
    ];

let indiceAtual5 = 0;


const imagensSobrepostas8 = [
    "f30.png",
    "f31.png",
    "f32.png"
    
    
    ];

let indiceAtual8 = 0;


const imagensSobrepostas9 = [
    "fundo41.png",
    "fundo42.png"
    
    
    ];

let indiceAtual9 = 0;


const imagensSobrepostas10 = [
    "fundo50.png",
    "fundo55.png"
    
    
    
    
    ];

let indiceAtual10 = 0;




const imagensSobrepostas11 = [
    "sobrepo4.png",
    "sobrepo5.png",
    "sobrepo6.png"
    
    
    
    ];

let indiceAtual11 = 0;






const imagensSobrepostas12 = [
    "fundo61.png",
    "fundo62.png",
    "fundo63.png"
    
    
    
    ];

let indiceAtual12 = 0;




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


function trocarImagem5() {
    const imagemSobreposta5 = document.getElementById("imagemSobreposta5");

    // Aplica efeito de fade out
    imagemSobreposta5.style.opacity = 0;

    // Troca a imagem após o fade out
    setTimeout(() => {
        indiceAtual5 = (indiceAtual5 + 1) % imagensSobrepostas5.length;
        imagemSobreposta5.src = imagensSobrepostas5[indiceAtual5];
        imagemSobreposta5.style.opacity = 1; // Fade in
    }, 1000); // Tempo correspondente à duração da transição (0.5s)
}




function trocarImagem8() {
    const imagemSobreposta8 = document.getElementById("imagemSobreposta8");

    // Aplica efeito de fade out
    imagemSobreposta8.style.opacity = 0;

    // Troca a imagem após o fade out
    setTimeout(() => {
        indiceAtual8 = (indiceAtual8 + 1) % imagensSobrepostas8.length;
        imagemSobreposta8.src = imagensSobrepostas8[indiceAtual8];
        imagemSobreposta8.style.opacity = 1; // Fade in
    }, 1000); // Tempo correspondente à duração da transição (0.5s)
}


function trocarImagem9() {
    const imagemSobreposta9 = document.getElementById("imagemSobreposta9");

    // Aplica efeito de fade out
    imagemSobreposta9.style.opacity = 0;

    // Troca a imagem após o fade out
    setTimeout(() => {
        indiceAtual9 = (indiceAtual9 + 1) % imagensSobrepostas9.length;
        imagemSobreposta9.src = imagensSobrepostas9[indiceAtual9];
        imagemSobreposta9.style.opacity = 1; // Fade in
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




// Aplica efeito de fade out

function trocarImagem11() {
    const imagemSobreposta11 = document.getElementById("imagemSobreposta11");

    // Aplica efeito de fade out
    imagemSobreposta11.style.opacity = 0;

    // Troca a imagem após o fade out
    setTimeout(() => {
        indiceAtual11 = (indiceAtual11 + 1) % imagensSobrepostas11.length;
        imagemSobreposta11.src = imagensSobrepostas11[indiceAtual11];
        imagemSobreposta11.style.opacity = 1; // Fade in
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