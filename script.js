let arrayTabela=[];
let tabelaContainer = document.querySelector(".container-tabela"),
    tabela = document.createElement("table");
    tabela.className="tabela-pixel"
    tabelaContainer.appendChild(tabela);   

function criaLinhas(i) {
    let linha = document.createElement("tr");
    linha.id=i;
    tabela.appendChild(linha);
    return linha;
}

function criaColunas(i,j) {
    let coluna = document.createElement("td");
    coluna.id+=[i,j];
    let linha = document.getElementById(i);
    console.log(linha)
    let novaLinha = linha.appendChild(coluna);
    arrayTabela.push(novaLinha)
}

function criaTabela(linhasXColunas) {
    for (let i = 0; i<linhasXColunas ; i++) {
        criaLinhas(i);
        for (let j = 0; j<linhasXColunas ; j++){
            criaColunas(i,j);
        }
    }
    document.querySelector('.container-tabela').style.width=linhasXColunas*40+"px";
}
criaTabela(5)

//atribuindo função à paleta, que armazena a cor numa variavel
//Bonus 1 - adicionar class "ativa" para cor ativa

    let paletaCor = document.querySelectorAll(".btn-container"),
    corAtual="black";
    for (let cores of paletaCor) {
        console.log(cores.id);

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

    for (pixel of arrayTabela) {
      //  console.log(pixel)
        pixel.addEventListener("click", function() {
            this.style.backgroundColor=corAtual;
        })
    };

    //resetar quadro - Bonus #2
    let reset = document.querySelector(".reset");
    reset.addEventListener("click",function() {
        for (pixel of arrayTabela) {
            pixel.style.backgroundColor="white";
        }
    });

    function resetar() {
        for (pixel of arrayTabela) {
            pixel.style.backgroundColor="white";
        }
    };
        
    //setar tamanho customizado: Bonus #3
    let inputTamanho = document.querySelector(".input-tamanho");
    inputTamanho.addEventListener("change", function() {
        arrayTabela=[];
        document.querySelector(".tabela-pixel").remove();
        criaTabela(this.value);
    });

    //Bonus #4: Gerando paletas aleatórias

    window.addEventListener("load", function(){
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
    });

    //Bonus #5: Perfil GitHub

    let btnAlien = document.querySelector(".btn-github");
    btnAlien.addEventListener("click", function (){
    let tamanhoTabela = Math.sqrt(arrayTabela.length),
    metadeTabela = tamanhoTabela/2;
        //Esta seção é responsável por "espelhar" o quadro.
        for (let x = 0; x<tamanhoTabela ; x++) {
            let alienY = Math.floor(Math.random()*(tamanhoTabela-metadeTabela));
            let alienPixel = document.getElementById(x+","+alienY);
            alienPixel.style.backgroundColor=corAtual;
            let antiY=tamanhoTabela-1-alienY;
            let antiPixel = document.getElementById(x+","+antiY);
            console.log(antiPixel);
            antiPixel.style.backgroundColor=corAtual;
            }
        });
        