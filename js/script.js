
let tituloQuizz = "";
let urlQuizz = "";
let quantidadePerguntas = 0;
let quantidadeNiveis = 0;
let res
const Main = document.querySelector(".main");

criarQuizz ();

function criarQuizz () {
    infoBasicas();
    //telaCriarExibirQuizz();
    
}

function infoBasicas () {

    

    Main.innerHTML = `
    <h3>Comece pelo começo</h3>
    <div class="PerguntasBasicas">
        <input class="Title" type="text" placeholder="Título do seu quizz">
        <input class="URL" type="text" placeholder="URL da imagem do seu quizz">
        <input class="QuantPerg" type="text" placeholder="Quantidade de perguntas do quizz">
        <input class="QuantNiv" type="text" placeholder="Quantidade de níveis do quizz">
    </div>
    <button onclick="processarInfoBasicas()">Prosseguir pra criar perguntas</button>`

   
}

function processarInfoBasicas() {

    tituloQuizz = document.querySelector("input.Title").value;
    urlQuizz = document.querySelector("input.URL").value;
    quantidadePerguntas = document.querySelector("input.QuantPerg").value;
    quantidadeNiveis = document.querySelector("input.QuantNiv").value;

    console.log(tituloQuizz.length)

    if (infoBasicasValidas()) {

        console.log("deu")
        criarPerguntasQuizz();

    }
    else {
        alert ("Informações invalidas, tente novamente");
        infoBasicas();
    }
}

function infoBasicasValidas() {
    
    let titulo = false
    let url = false
    let Perg  = false
    let Nivs = false
 
    if (tituloQuizz.length >= 20 && tituloQuizz.length <= 65) {
        titulo = true
    }
    if (isImgLink(urlQuizz)) {
        url = true
    }
    if (quantidadePerguntas >= 3) {
        Perg = true
    }
    if (quantidadeNiveis >= 2) {
       Nivs = true
    }

    if (titulo === true && url === true && Perg === true && Nivs === true ){
        return true
    }

    return false
}

let isImgLink = (urlQuizz) => {

    console.log("arrow")
    if (typeof urlQuizz !== 'string') {
        return false;
    }
    return (urlQuizz.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null);
  }

function telaCriarExibirQuizz(){

    Main.innerHTML = `<div class="containerQuizz">
                
        ${quizzUsuario()}

        ${todosQuizz()}
                

    </div>`

}

function quizzUsuario(){

    return `
        <div class="criarQuizz">

            <div>
                <p class="prgCriarQuiz">você não criou nenhum quizz ainda :(</p>

                <button class="btnCriarQuiz">Criar Quizz</button>
            </div>
                    
        </div> `
    
}

function todosQuizz(){

    return  `
    <section class="Quizz">
        <h4>Todos os Quizzes</h4>

        <div class="exibiQuizz">

            ${cardQuizz()}
            ${cardQuizz()}
            ${cardQuizz()}
                        
        </div>

    </section>
    `
}

function cardQuizz(){

        return `
        <aside class="box-quizz">

            <img src="http://disneyplusbrasil.com.br/wp-content/uploads/2022/01/Os-Simpsons-Disney-Plus.jpg">
            <p>Acerte os personagens corretos </br>dos Simpsons e prove seu amor!</p>
            <div class="gradiente"></div>

        </aside>
        `

}
