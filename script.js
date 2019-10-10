function criaLinhas(i,tabela) {
    let linha = document.createElement("tr");
    linha.id=i;
        tabela.appendChild(linha);
}
function criaColunas(i,j,arrayTabela) {
    let coluna = document.createElement("td");
    coluna.id=[i,j];
    let linha = document.getElementById(i);
    linha.appendChild(coluna);
    arrayTabela.push(coluna)
}

function criaTabela(linhasXColunas) {
    let arrayTabela=[];
    let tabelaContainer = document.querySelector(".container-tabela"),
    tabela = document.createElement("table");
    tabela.className="tabela-pixel"
    tabela.style.borderSpacing="0px"
    tabela.style.outline="1px solid black"
    tabelaContainer.appendChild(tabela);   
    for (let i = 0; i<linhasXColunas ; i++) {
        criaLinhas(i,tabela);
        for (let j = 0; j<linhasXColunas ; j++){
            criaColunas(i,j,arrayTabela);
        }
    }
    document.querySelector('.container-tabela').style.minWidth=linhasXColunas*40+"px";
    return arrayTabela
}

let carregaArray = criaTabela(5)

//atribuindo função à paleta, que armazena a cor numa variavel
//Bonus 1 - adicionar class "ativa" para cor ativa

let paletaCor = document.querySelectorAll(".btn-container"),
corAtual="black";
for (let cores of paletaCor) {
    //configurando classe ativa ligar e desligar apenas nos eventos corretos, ou seja, quando tem
    //a classe ativa-hover e não a ativa definitiva, que só é setada através do clique.
    cores.addEventListener("mouseover", function() {
        this.className+=" ativa-hover";
    });
        cores.addEventListener("mouseleave", function() {
                                                            //importante o espaço no final dessa class
            if(this.className.includes("ativa-hover") && !(this.className.includes("ativa ")) ) {
            this.className="btn-container";   
            }         
    }); 

    cores.addEventListener("click", function () {
        let corSelecionada  = document.querySelector("."+this.id);
        corAtual = getComputedStyle(corSelecionada).backgroundColor;
        //atribui class ativa à div pai
        
        for (cor of paletaCor) {
            cor.className="btn-container";
        }
        this.className+=" ativa";
    })
}

//atribuindo função de pintar a tabela de pixel
function pintarTabela(arrayTabela) {
for (pixel of arrayTabela) {
        pixel.addEventListener("click", function() {
            this.style.backgroundColor=corAtual;
        })
    };
}
pintarTabela(carregaArray);

//resetar quadro - Bonus #2
function resetar(arrayTabela) {
    let reset = document.querySelector(".reset");
    reset.addEventListener("click",function() {
        for (pixel of arrayTabela) {
            pixel.style.backgroundColor="white";
        }
    });
}
resetar(carregaArray)

//setar tamanho customizado: Bonus #3
function tamanhoCustomizado(){
    let inputTamanho = document.querySelector(".input-tamanho");
    inputTamanho.addEventListener("change", function() {
        document.querySelector(".tabela-pixel").remove();
        carregaArray = criaTabela(inputTamanho.value);
        console.log(carregaArray)
        pintarTabela(carregaArray);
        coresAleatorias(carregaArray);
        resetar(carregaArray)
    });
}
tamanhoCustomizado();

//Bonus #4: Gerando paletas aleatórias
function coresAleatorias(arrayTabela) {
    let paletaCor = document.querySelectorAll(".btn-container");
    for (pixels of arrayTabela) {
        for (let cor of paletaCor) {
            //Este comando exclui o ultimo digito do cor.id que é um número, e adicionada
            //a string "color" um outronumero aleatoriamente gerado de 0 a 3, 
            //e depois adiciona +1, pois os Id's estão
            //numeros como color1, color2, color3 e color 4;                
        let idRandom = ( cor.id.slice(0,-1)) + (Math.floor(Math.random() * 4)+1) ;
        //captura o valor de backgroundColor das divs de cada botão
        let corSelecionada = document.querySelector("."+idRandom);
        corAtual = getComputedStyle(corSelecionada).backgroundColor;
        //aplica a cada pixel que esteja endo itnerpolado.            
        pixels.style.backgroundColor=corAtual;
        }
    }
}
coresAleatorias(carregaArray);

let btnAlien = document.querySelector(".btn-github");
btnAlien.addEventListener("click", gitHub);
function gitHub() {  
        let tamanhoTabela = Math.sqrt(carregaArray.length);
        let metadeTabela = tamanhoTabela/2;
            //Esta seção é responsável por "espelhar" o quadro.
        for (let x = 0; x<tamanhoTabela ; x++) {
            let alienY = Math.floor(Math.random()*(tamanhoTabela-metadeTabela));
            let alienPixel = document.getElementById(x+","+alienY);
            alienPixel.style.backgroundColor=corAtual;
            let antiY=tamanhoTabela-1-alienY;
            let antiPixel = document.getElementById(x+","+antiY);
            antiPixel.style.backgroundColor=corAtual;
            }
    }
