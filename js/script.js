
let tituloQuizz = "";
let urlQuizz = "";
let quantidadePerguntas = 0;
let quantidadeNiveis = 2;
let res

const Main = document.querySelector(".main");

let numeroPergunta = 0
let ErroNivelQuizz
let ErroPerguntasQuizz
let novoQuizz = {title: "",
                 image: "",
                 questions: [],
                 levels: []  }
            
let parateste = {
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
}
let numeroNivel = 0
let CondicaoNivel


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

// Inputs NiveisQuizz
let tituloNivel
let porcenNivel
let urlNivel
let descricaoNivel


criarQuizz();
function criarQuizz () {
   // infoBasicas();
    telaCriarExibirQuizz();
    // criarTelaResponderQuizz(); 
}

function infoBasicas () {

    Main.innerHTML = `
    <h3 class= "margin140">Comece pelo começo</h3>
    <div class="PerguntasBasicas">
        <input class="Title" type="text" placeholder="Título do seu quizz">
        <input class="URL" type="text" placeholder="URL da imagem do seu quizz">
        <input class="QuantPerg" type="text" placeholder="Quantidade de perguntas do quizz">
        <input class="QuantNiv" type="text" placeholder="Quantidade de níveis do quizz">
    </div>
    <button class="irParaPerguntas" onclick="processarInfoBasicas()">Prosseguir pra criar perguntas</button>`

   
}

function processarInfoBasicas() {

    tituloQuizz = document.querySelector("input.Title").value;
    urlQuizz = document.querySelector("input.URL").value;
    quantidadePerguntas = document.querySelector("input.QuantPerg").value;
    quantidadeNiveis = document.querySelector("input.QuantNiv").value;

    if (infoBasicasValidas()) {

        novoQuizz = {title: tituloQuizz,
                 image: urlQuizz,
                 questions: [],
                 levels: []   }
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

function telaCriarExibirQuizz(){

    console.log("telaCriarExibirQuizz")

    Main.innerHTML = `<div class="containerQuizz">
                
        ${quizzUsuario()}

        ${todosQuizz()}
                

    </div>`
    console.log(quizzUsuario())
}

function quizzUsuario(){

    console.log("quizzUsuario")
    if (!localStorage.getItem("meusQuizzes")) {

        return`
        <section class="Quizz bottom48 margin140">
            <div class="Flex none">
            <h4>Seus Quizzes</h4>
            <ion-icon class="red" name="add-circle"></ion-icon>
            </div>
    
            <div class=".exibirQuizz">
    
            ${meusQuizzes()}
                
            </div>
    
        </section>
        `

    }
    else{
        return`
        <div class="criarQuizz">

            <div>
                <p class="prgCriarQuiz">você não criou nenhum quizz ainda :(</p>

                <button class="btnCriarQuiz" onclick="infoBasicas()">Criar Quizz</button>
            </div>
                    
        </div> `
    }


}

function todosQuizz(){

    console.log("todosQuizz")

    return  `
    <section class="Quizz">
        <h4>Todos os Quizzes</h4>

        <div class=".exibirQuizz">

             ${exibeTodosQuizzes()}
            
        </div>

    </section>
    `
}



function cardQuizz(objeto){

    console.log("cardQuizz(objeto)")

        return `
        <aside id="${objeto.id}" class="box-quizz" onClick ="criarTelaResponderQuizz(this.id)">
        
            <img src="${objeto.image}">
            <p>${objeto.title}</p>
            <div class="gradiente"></div>
   
        </aside>
        `
}


let injetarQuizz = document.querySelector("section div");

function exibeTodosQuizzes(){
    
    console.log("exibeTodosQuizzes()")
    let promise = axios.get('https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes');

    let quizzes = [];

    promise.then((response)=>{
        quizzes = response.data;
        injetarQuizz.innerHTML = "";
        for(let i = 0; i< quizzes.length; i++){
            injetarQuizz.innerHTML += cardQuizz(quizzes[i]);
            
        }

    })

    promise.catch((err)=>{
        console.log(err);
    })
    
    

}

function meusQuizzes() {



    const meusquizzesSerializados = localStorage.getItem("meusQuizzes"); 

    console.log(meusquizzesSerializados)

    const meusquizzes = JSON.parse(meusquizzesSerializados); 

    const processa = (meusquizzes) => {

        console.log("arrow()")

        injetarQuizz.innerHTML = "";
        for(let i = 0; i< meusquizzes.length; i++){
            injetarQuizz.innerHTML += cardQuizz(quizzes[i]);
            
        }

    }


}





function criarPerguntasQuizz() {

    

    Main.innerHTML = `            
    <h3 class="perguntasH3 margin132">Crie suas perguntas</h3>
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
        Main.innerHTML += `<button class="irParaPerguntas" onclick="processarInfoBasicas()">Prosseguir pra criar perguntas</button>` 
    }

}

function criarPerguntasFechadas () {

    
    for (let i = 2; i <= quantidadePerguntas; i++){

        Main.innerHTML += `            
        <div class="Pergunta${i} PerguntasFechado">
            <h3>Pergunta ${i}</h3>
            <ion-icon onclick="abrirCardPergunta (this)" name="reader-outline"></ion-icon>
        </div> `
    }

    Main.innerHTML += `<button class="irParaPerguntas" onclick="processarPerguntasQuizz()">Prosseguir pra criar níveis</button>`
}
// inicio das funções de exibição da tela dois dentro de um quizz

function criarTelaResponderQuizz(id){
 
    bannerQuizz(id);
    pergutnaQuizz(id);

}

function bannerQuizz(id){

    let promise = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${id}`)
    let urlImg;

    promise.then((response)=>{
        const objeto = response.data;
        urlImg = objeto.image;
        
        const banner = `
        <div class="bannerQuizz">
    
            <div class="imgBanner">
                <img class="imgBanner"
                    src="${urlImg}" alt="">
            </div>
    
        </div>
        `
        Main.innerHTML = banner;
    })
    promise.catch((err)=>{
        console.log(err);
    })

}

function pergutnaQuizz(id){

    let promise = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${id}`);

    console.log("entoru aqui")
    promise.then((response)=>{
        const objeto = response.data;
        console.log(objeto);

        for(let i = 0; i < objeto.questions.length; i++){
            const containPergunta = `
            <div class="containerPergunta">
                <section class="sessaoPerguntaResposta">
            
                    <div class="perguntaQuizz">
                        <p>${objeto.questions[i].title}</p>
                    </div>
                    <div class="containerAlternativas">
                        ${alternativaQuizz(objeto.questions[i])}
                    </div>
                    
                </section>
            </div>
            `
            Main.innerHTML += containPergunta;
        }
        
    })

}
function alternativaQuizz(array){

    const sessaopergunta = document.querySelector(".sessaoPerguntaResposta")
    const resposta = array.answers;
    let alternativa = "";

    for(let i = 0; i < resposta.length; i++){
        alternativa += `
        <aside class="alternativasPergutnas">
    
            <img src="${resposta[i].image}"
                alt="">
    
            <p>${resposta[i].text}</p>
    
        </aside>
        `
    }
    return alternativa;
}

// fim das funções de exibição da tela dois dentro de um quizz

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

function criarNiveisQuizz() {
    
    let Main = document.querySelector("main");
    
    Main.innerHTML = `
    <h3 class="perguntasH3 margin132">Agora, decida os níveis</h3>        
    <div class="Nivel1 NiveisAberto">
        <h3>Nível 1</h3>
        <input class="tituloNivel" type="text" placeholder="Título do nível">
        <input class="porcenNivel" type="text" placeholder="% de acerto mínima">
        <input class="urlNivel" type="text" placeholder="URL da imagem do nível">
        <input class="descricaoNivel" type="text" placeholder="Descrição do nível">
    </div>
    `
    if (quantidadeNiveis > 1) {
        criarNiveisFechados ();
    }
     else{
            Main.innerHTML += `<button class="irParaPerguntas" onclick="finalizaQuizz()">
                                Finalizar Quizz</button>` 
     }
    
    
}

function criarNiveisFechados () {
    
    let Main = document.querySelector("main");

    for (let i = 2; i <= quantidadeNiveis; i++){

        Main.innerHTML += `            
        <div class="Nivel${i} PerguntasFechado">
            <h3>Nível ${i}</h3>
            <ion-icon onclick="abrirCardNivel (this)" name="reader-outline"></ion-icon>
        </div> `
    }

    Main.innerHTML += `<button class="irParaPerguntas" onclick="finalizaQuizz()">
                        Finalizar Quizz</button>`



}

function abrirCardNivel (Selecionado) {

    Selecionado.classList.add("Invisivel")
    Selecionado = Selecionado.parentElement

    Selecionado.classList.remove("PerguntasFechado")

    let classe =  Selecionado.classList.value
    console.log(classe);
    numeroNivel= Number(classe.replace('Nivel', ''));
    console.log(numeroNivel);

    Selecionado.classList.add("NiveisAberto")

    Selecionado.innerHTML = `                      
            <h3>Nível ${numeroNivel}</h3>
            <input class="tituloNivel" type="text" placeholder="Título do nível">
            <input class="porcenNivel" type="text" placeholder="% de acerto mínima">
            <input class="urlNivel" type="text" placeholder="URL da imagem do nível">
            <input class="descricaoNivel" type="text" placeholder="Descrição do nível">
    `
}

function finalizaQuizz(){

    CondicaoNivel = false
    ErroNivelQuizz = false

    for (let i = 1; i <= quantidadeNiveis; i++) {


        let Nivel = document.querySelector(`.Nivel${i}`);


        tituloNivel = Nivel.querySelector(".tituloNivel").value;
        porcenNivel = Number(Nivel.querySelector(".porcenNivel").value); 
        urlNivel = Nivel.querySelector(".urlNivel").value;
        descricaoNivel = Nivel.querySelector(".descricaoNivel").value;
        
        validarInputsNiveis ()


        novoQuizz.levels.push(	{
            title: tituloNivel,
            image: urlNivel,
            text: descricaoNivel,
            minValue: porcenNivel
        })

        let estaFechado = document.querySelector(".PerguntasFechado")

        if (estaFechado){
            novoQuizz.levels = []
            alert("Existem Niveis não preenchidos")
        }


    }
    if (ErroNivelQuizz || !CondicaoNivel) {
    
        novoQuizz.levels = []
        alert("Algo errado, tente novamente");
    
    }
    else{
        postarQuizz ();
    }
}

function validarInputsNiveis () {

    console.log("0")

    if (tituloNivel.length < 10) {

        console.log("1")
        ErroNivelQuizz = true
    }

    if ( 100 < porcenNivel < 0 ) {

        console.log("2")
        ErroNivelQuizz = true
        
    }

    if ( !(isImgLink(urlNivel))) {

        console.log("3")
        ErroNivelQuizz = true
    }

    if (descricaoNivel < 30) {

        console.log("4")
        ErroNivelQuizz = true
    }

    if(Number(porcenNivel) === 0){

        console.log("5")
        CondicaoNivel = true
    }

}

function postarQuizz () {

    console.log("entrou")
    console.log(parateste)
    console.log(novoQuizz)
    const requisicao = axios.post('https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes', parateste);

    requisicao.then(tratarSucesso);
    requisicao.catch(tratarError);  

}

function tratarSucesso (meuquizz) {

    console.log("deu")
    let meusQuizzes

    if (!(localStorage.getItem("meusQuizzes"))) {

        meusQuizzes = [meuquizz.data];

    }
    else{
        let quizzesSerializados = localStorage.getItem("meusQuizzes");
        
        meusQuizzes = JSON.parse(quizzesSerializados);

        meusQuizzes.push(meuquizz.data)

        
        console.log(meusQuizzes)
    }
    

    meusQuizzes = JSON.stringify(meusQuizzes);

    localStorage.setItem("meusQuizzes", meusQuizzes); // Armazenando a string na chave "lista" do Local Storage

    seuQuizzPronto ()
}

function tratarError (erro) {

    console.log("n deu, que pena")
    console.log(erro)
}

function seuQuizzPronto (){

    const meusquizzesSerializados = localStorage.getItem("meusQuizzes"); // Pegando de volta a string armazenada na chave "lista"

    console.log(meusquizzesSerializados)

    const meusquizzes = JSON.parse(meusquizzesSerializados); // Transformando a string de volta na array original

    console.log(meusquizzes)


    let Main = document.querySelector("main");
    
    Main.innerHTML = `
    <h3 class="perguntasH3 margin140">Seu quizz está pronto!</h3>        
    
    <section class="Quizz">

        <div class="exibirQuizz Flex">

             ${cardQuizzUnico(meusquizzes[meusquizzes.length-1])}
            
        </div>

    </section>
    <button class="ButtomSeuquizzPronto" onClick ="criarTelaResponderQuizz(this.id)">Acessar Quizz</button>
    <button class="ButtomSeuquizzProntoBranco" onClick ="telaCriarExibirQuizz()">Voltar pra home</button>
    `
}

function cardQuizzUnico(objeto){

    return `
    <div id="${objeto.id}" class="box-quizzUnico" onClick ="">
    
        <img  class="SeuquizzPronto" src="${objeto.image}">
        <p>${objeto.title}</p>
        <div class="gradiente"></div>

    </div>
    `
}
