var altura = 0
var largura = 0 

function ajustaTamanhoPalcoJogo(){

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)

}

ajustaTamanhoPalcoJogo()


function posicaoRandomica() {
    var  posicaox = Math.floor(Math.random() * largura) - 90
    var  posicaoy = Math.floor(Math.random() * altura) - 90

    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy
    
    console.log(posicaox, posicaoy)
    
    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaox + 'px'
    mosquito.style.top = posicaoy + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    //criar randomicamente o tamanho dos mosquitos
    var classe = Math.floor(Math.random() * 3)

    switch(classe){

        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
     //criar randomicamente a direção para onde o mosquito olha
     var classe = Math.floor(Math.random() * 2)

     switch(classe){
 
         case 0:
             return 'ladoA'
         case 1:
             return 'ladoB'
     }

}