function criaTabela(n) {
    let tabela = document.querySelector(".pixel-table");
        tableArray=[];
        for (let i = 0; i<n ; i++) {
            let linha = document.createElement("tr");
            tabela.appendChild(linha);
            for (let j = 0; j<n ; j++){
                let celula = document.createElement("td");
                let novaLinha = linha.appendChild(celula);
                novaLinha.id=[i,j];
                tableArray.push(novaLinha)
            }
        }
        document.querySelector('.container-table').style.minWidth=n*40+"px";
        console.log(tableArray)
}
criaTabela(7)

//atribuindo função à paleta, que armazena a cor numa variavel
//Bonus 1 - adicionar class "active" para cor ativa

    let paletaCor = document.querySelectorAll(".btn-container"),
    corAtual="black";
    for (let cores of paletaCor) {
        console.log(cores.id);

        //configurando classe active ligar e desligar apenas nos eventos corretos, ou seja, quando tem
        //a classe active-hover e não a active definitiva, que só é setada através do clique.
        cores.addEventListener("mouseover", function() {
            this.className+=" active-hover";
        });
            cores.addEventListener("mouseleave", function() {
                                                                //importante o espaço no final dessa class
                if(this.className.includes("active-hover") && !(this.className.includes("active ")) ) {
                this.className="btn-container";   
                }         
        }); 
        
        cores.addEventListener("click", function () {
            let selectedColor = document.querySelector("."+this.id);
            console.log(selectedColor)
            corAtual = getComputedStyle(selectedColor).backgroundColor;
            //atribui class active à div pai
            let btnContainers = document.querySelectorAll(".btn-container");
            for (each of btnContainers) {
                each.className="btn-container";
            }
            this.className+=" active";
        })
    }

//atribuindo função de pintar a tabela de pixel

    for (pixel of tableArray) {
        console.log(pixel)
        pixel.addEventListener("click", function() {
            this.style.backgroundColor=corAtual;
        })
    };