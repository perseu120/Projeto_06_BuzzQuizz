
let tituloQuizz = "";
let urlQuizz = "";
let quantidadePerguntas = 0;
let quantidadeNiveis = 0;
let res
let numeroPergunta = 0
let ErroPerguntasQuizz
let novoQuizz = {title: "",
                 imgage: "",
                 questions: []}

// Inputs CriandoQuizz - Perguntas
let textoPergunta 
let corFundoPergunta 
let respostaCorreta 
let urlImagemCorreta 
let respostaIncorreta1 
let urlIncorreta1 
let respostaIncorreta2 
let urlIncorreta2 
let respostaIncorreta3 
let urlIncorreta3 


criarQuizz ();
//criarPerguntasQuizz()

function criarQuizz () {
    infoBasicas();
}

function infoBasicas () {

    let Main = document.querySelector("main");

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

    if (infoBasicasValidas()) {

        novoQuizz = {title: "tituloQuizz",
                 imgage: "urlQuizz",
                 questions: []}
        criarPerguntasQuizz();

    }
    else {
        alert ("Informações invalidas, tente novamente");
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

    if (typeof urlQuizz !== 'string') {
        return false;
    }
    return (urlQuizz.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null);
  }


  function criarPerguntasQuizz() {

    let Main = document.querySelector("main");

    Main.innerHTML = `            
    <h3 class="perguntasH3">Crie suas perguntas</h3>
    <div class="Pergunta1 PerguntasAberto">
        <div>
            <h3>Pergunta 1</h3>
            <input class="textoPergunta" type="text" placeholder="Texto da pergunta">
            <input class="corFundoPergunta" type="text" placeholder="Cor de fundo da pergunta">
        </div>
        <div>
            <h3>Resposta correta </h3>
            <input class="MarginTop24 respostaCorreta" type="text" placeholder="Resposta correta">
            <input class="urlImagemCorreta" type="text" placeholder="URL da imagem">
        </div>
        <div>
            <h3>Respostas incorretas</h3>
            <input class="respostaIncorreta1" type="text" placeholder="Resposta incorreta 1">
            <input class="urlIncorreta1" type="text" placeholder="URL da imagem 1">
        </div>
        <div>
            <input class="MarginTop32 respostaIncorreta2" type="text" placeholder="Resposta incorreta 2">
            <input class="urlIncorreta2" type="text" placeholder="URL da imagem 2">
        </div>
        <div>
            <input class="MarginTop32 respostaIncorreta3" type="text" placeholder="Resposta incorreta 3">
            <input class="urlIncorreta3" type="text" placeholder="URL da imagem 3">
        </div>
    </div>
    `
    if (quantidadePerguntas > 1) {
        criarPerguntasFechadas ()
    }
    else{
        Main.innerHTML += `<button onclick="processarInfoBasicas()">Prosseguir pra criar perguntas</button>` 
    }

}

function criarPerguntasFechadas () {

    let Main = document.querySelector("main");

    
    for (let i = 2; i <= quantidadePerguntas; i++){

        Main.innerHTML += `            
        <div class="Pergunta${i} PerguntasFechado">
            <h3>Pergunta ${i}</h3>
            <ion-icon onclick="abrirCardPergunta (this)" name="reader-outline"></ion-icon>
        </div> `
    }

    Main.innerHTML += `<button onclick="processarPerguntasQuizz()">Prosseguir pra criar níveis</button>`
} 


function abrirCardPergunta (Selecionado) {

    Selecionado.classList.add("Invisivel")
    Selecionado = Selecionado.parentElement

    Selecionado.classList.remove("PerguntasFechado")

    let classe =  Selecionado.classList.value
    numeroPergunta = Number(classe.replace('Pergunta', ''));

    Selecionado.classList.add("PerguntasAberto")

    Selecionado.innerHTML = `            
        <div>
            <h3>Pergunta ${numeroPergunta}</h3>
            <input class="textoPergunta" type="text" placeholder="Texto da pergunta">
            <input class="corFundoPergunta" type="text" placeholder="Cor de fundo da pergunta">
        </div>
        <div>
            <h3>Resposta correta </h3>
            <input class="MarginTop24 respostaCorreta" type="text" placeholder="Resposta correta">
            <input class="urlImagemCorreta" type="text" placeholder="URL da imagem">
        </div>
        <div>
            <h3>Respostas incorretas</h3>
            <input class="respostaIncorreta1" type="text" placeholder="Resposta incorreta 1">
            <input class="urlIncorreta1" type="text" placeholder="URL da imagem 1">
        </div>
        <div>
            <input class="MarginTop32 respostaIncorreta2" type="text" placeholder="Resposta incorreta 2">
            <input class="urlIncorreta2" type="text" placeholder="URL da imagem 2">
        </div>
        <div>
            <input class="MarginTop32 respostaIncorreta3" type="text" placeholder="Resposta incorreta 3">
            <input class="urlIncorreta3" type="text" placeholder="URL da imagem 3">
        </div>
    </div>
    `
}

function processarPerguntasQuizz() {

    ErroPerguntasQuizz = false

    for (let i = 1; i <= quantidadePerguntas; i++) {

        let Pergunta = document.querySelector(`.Pergunta${i}`);


        textoPergunta = Pergunta.querySelector(".textoPergunta").value;
        corFundoPergunta = Pergunta.querySelector(".corFundoPergunta").value;
        respostaCorreta = Pergunta.querySelector(".respostaCorreta").value;
        urlImagemCorreta = Pergunta.querySelector(".urlImagemCorreta").value;
        respostaIncorreta1 = Pergunta.querySelector(".respostaIncorreta1").value;
        urlIncorreta1 = Pergunta.querySelector(".urlIncorreta1").value;
        respostaIncorreta2 = Pergunta.querySelector(".respostaIncorreta2").value;
        urlIncorreta2 = Pergunta.querySelector(".urlIncorreta2").value;
        respostaIncorreta3 = Pergunta.querySelector(".respostaIncorreta3").value;
        urlIncorreta3 = Pergunta.querySelector(".urlIncorreta3").value;


      //  console.log(textoPergunta) 
      //  console.log(corFundoPergunta)  
       // console.log(respostaCorreta)   
      //  console.log(urlImagemCorreta)
       // console.log(respostaIncorreta1)
      //  console.log(urlIncorreta1)
       // console.log(respostaIncorreta2)
      //  console.log(urlIncorreta2)
      //  console.log(respostaIncorreta3)
       // console.log(urlIncorreta3)

        verificarSeInputsValidos ()


        novoQuizz.questions.push({
			title: textoPergunta,
			color: corFundoPergunta,
			answers: [
				{
					text: respostaCorreta,
					image: urlImagemCorreta,
					isCorrectAnswer: true
				},
				{
					text: respostaIncorreta1,
					image: urlIncorreta1,
					isCorrectAnswer: false
				}
			]
		})  


        if (respostaIncorreta2 !== "") {

            novoQuizz.questions[i-1].answers.push(
                {
					text: respostaIncorreta2,
					image: urlIncorreta2,
					isCorrectAnswer: false
				}
            )
            
        }
    
        if (respostaIncorreta3 !== "") {
            
            novoQuizz.questions[i-1].answers.push(
                {
					text: respostaIncorreta3,
					image: urlIncorreta3,
					isCorrectAnswer: false
				}
            )

        }

        let estaFechado = document.querySelector(".PerguntasFechado")

        if (estaFechado){
            novoQuizz.questions = []
            alert("Existem Perguntas não preenchidas")
        }


    }

    
    if (ErroPerguntasQuizz) {

        alert("Algo errado, tente novamente")
        novoQuizz.questions = []
        console.log(novoQuizz)

    }
    else{

        console.log(novoQuizz)
        criarNiveisQuizz()
    }


}

function verificarSeInputsValidos () {

    if (textoPergunta.length < 20){

        ErroPerguntasQuizz = true
        console.log("erro length")
    }

    if (!(/^#[0-9A-F]{6}$/i.test(corFundoPergunta))){

        ErroPerguntasQuizz = true
        
        console.log("erro hex")
    }

    if (respostaCorreta === ""){

        ErroPerguntasQuizz = true

        console.log("erro vazio")
    }

    if (!(isImgLink(urlImagemCorreta))){

        ErroPerguntasQuizz = true

        console.log("erro url")
    }

    if (respostaIncorreta1 === ""){

        ErroPerguntasQuizz = true

        console.log("erro vazio")
    }

    if (!(isImgLink(urlIncorreta1))){

        ErroPerguntasQuizz = true

        console.log("erro url")
    }
    
    if (respostaIncorreta2 !== "") {


        if(!(isImgLink(urlIncorreta2))){
            ErroPerguntasQuizz = true
            console.log("erro url2")
        }
    }

    if (respostaIncorreta3 !== "") {


        if(!(isImgLink(urlIncorreta3))){
            ErroPerguntasQuizz = true
            console.log("erro url3")
        }
    }

}
