function criarTabelaPeloOnLoad() {
    var tabelaMae = document.getElementsByClassName("tabelaQueSeraPreenchida")[0];
    for (let cont = 0; cont < 5; cont++) {
        let linhas = document.createElement('tr');
        linhas.setAttribute("class", "elemento");
        tabelaMae.appendChild(linhas);

        for (let cont1 = 0; cont1 < 5; cont1++) {
            let elementos = document.createElement('td');
            elementos.setAttribute("class", "elemento");
            linhas.appendChild(elementos);
        }

    }
    geradorDeCoresParaPaleta()
    adicionarCor();
}

function gerandoTamanhoQuadrado() {
    let contador = document.getElementById("tamanhoquadrado").value;
    if (contador >= 5 && contador < 51) {
        var tamanhoDaTabela = document.getElementsByTagName("tr");
        var segundoContador = tamanhoDaTabela.length - 1;
        var tabelaApagar = document.getElementsByClassName("tabelaQueSeraPreenchida")[0];
        //apagando a tabela anterior
        for (let i = 0; i < segundoContador; i++) {
            let apagar = tabelaApagar.firstElementChild;
            tabelaApagar.removeChild(apagar);
        }
    }
    else {
        alert("O valor passado não está de acordo com o padrão!");
    }
    criarTabela(contador, tabelaApagar);

    //chamando a função que muda as cores de acordo com o clique
    adicionarCor();
}

function criarTabela(contador, tabelaApagar) {
    //gerando nova table
    for (let cont = 0; cont < contador; cont++) {
        let linhas = document.createElement('tr');
        linhas.setAttribute("class", "elemento");
        tabelaApagar.appendChild(linhas);

        for (let cont1 = 0; cont1 < contador; cont1++) {
            let elementos = document.createElement('td');
            elementos.setAttribute("class", "elemento");
            linhas.appendChild(elementos);
        }

    }
}

//gerando cores aleatorias
function geradorDeCoresParaPaleta() {
    for (let i = 0; i < 3; i++) {
        var ElementoDaPaletaDeCores = [];
        ElementoDaPaletaDeCores[i] = document.getElementsByClassName("coresfixas")[i];
        var simbolos, color;
        simbolos = "0123456789ABCDEF";
        corAleatoriaGerada = "#";
        for (let n = 0; n < 6; n++) {
            corAleatoriaGerada = corAleatoriaGerada + simbolos[Math.floor(Math.random() * 16)];
        }
        ElementoDaPaletaDeCores[i].style.backgroundColor = corAleatoriaGerada;
    }
    gerandoCorPreta();
}

function gerandoCorPreta() {
    let corPreta = document.getElementsByClassName("coresfixas")[3]
    corPreta.style.backgroundColor = "black";
    corPreta.style.borderWidth = "1px";
    corPreta.style.borderStyle = "solid";
    corPreta.style.borderColor = "white";
}

//armazenando a cor ao clique, colocando numa variavel e alterando a cor do mostrador
var corFinal = "black";
let corSelecionada = document.getElementsByClassName("corselecionada")[0];
for (let i = 0; i < 4; i++) {
    let corClicada = document.getElementsByClassName("coresfixas")[i];
    corClicada.addEventListener('click', function () {
        corFinal = corClicada.style.backgroundColor;
        corSelecionada.style.backgroundColor = corFinal;
    })
}

//função criada para ser chamada novamente após mudar a tabela
function adicionarCor() {
    let elementoDaTabela2 = document.getElementsByTagName('td');
    for (i = 0; i < elementoDaTabela2.length; i++) {
        elementoDaTabela2[i].addEventListener('click', function () {
            this.style.background = corFinal;
        })
    }
}


//limpando a tela
function limparTela() {
    let elementoDaTabela3 = document.getElementsByTagName('td');
    for (i = 0; i < elementoDaTabela3.length; i++) {
        elementoDaTabela3[i].style.background = "white";
    }
}


//gerando table padrão github
function github() {
    limparTela()
    let tabelaGit = [];
    let tabelaGitTds = [];

    let elementosTr = document.getElementsByTagName('tr');
    let elementosTr2 = elementosTr.length - 1;

    let contador4 = elementosTr2;

    if (elementosTr2 % 2 == 0) {
        contador4 = elementosTr2;
    } else {
        contador4 = elementosTr2 + 1;
    }

    for (let n = 1; n < elementosTr2 + 1; n++) {
        tabelaGit[n] = document.getElementsByTagName('tr')[n];

        if (elementosTr2 > 5) {
            for (let j = 0; j < contador4 / 2; j++) {

                let posicao = elementosTr2 - j - 1;

                tabelaGitTds[j] = tabelaGit[n].childNodes[j];
                tabelaGitTds[posicao] = tabelaGit[n].childNodes[posicao];
                tabelaGitTds[j].value = Math.floor(Math.random() * 2);

                if (tabelaGitTds[j].value == 1) {
                    tabelaGitTds[j].style.backgroundColor = corFinal;
                    tabelaGitTds[posicao].style.backgroundColor = corFinal;
                } else {
                    tabelaGitTds[j].style.backgroundColor = "white";
                    tabelaGitTds[posicao].style.backgroundColor = "white";
                }
            }
            //else necessario pois a table gerada no html inicial apresenta 'texts' entre as posições
        } else {
            for (let i = 1; i < contador4; i = i + 2) {

                posicao = elementosTr2 * 2 - i;
                tabelaGitTds[i] = tabelaGit[n].childNodes[i];
                tabelaGitTds[posicao] = tabelaGit[n].childNodes[posicao];
                tabelaGitTds[i].value = Math.floor(Math.random() * 2);

                if (tabelaGitTds[i].value == 1) {
                    tabelaGitTds[i].style.backgroundColor = corFinal;
                    tabelaGitTds[posicao].style.backgroundColor = corFinal;
                } else {
                    tabelaGitTds[i].style.backgroundColor = "white";
                    tabelaGitTds[posicao].style.backgroundColor = "white";
                }
            }
        }
    }
}



