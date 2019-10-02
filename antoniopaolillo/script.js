//gerando cores aleatorias
function geradordecores() {
    for (let i = 0; i < 4; i++) {
        var cor1 = [];
        cor1[i] = document.getElementsByClassName("coresfixas")[i];
        var simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
        for (let n = 0; n < 6; n++) {
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
        cor1[i].style.backgroundColor = color;
        color = "#";
    }
}

//alterando tamanho de pixels
function gerartamanho() {
    var tamanho = document.getElementById("tamanhotabela").value;
    var tamanhoreal = parseInt(tamanho, 10);
    var tamanhofinal = [];
    if (tamanhoreal > 4 && tamanhoreal < 51) {
        for (let i = 0; i < 25; i++) {
            tamanhofinal[i] = document.getElementsByClassName("elemento")[i];
            tamanhofinal[i].style.width = tamanhoreal + "px";
            tamanhofinal[i].style.height = tamanhoreal + "px";
        }
        var tamanhofinal2 = [];
        for (let i = 0; i < 5; i++) {
            tamanhofinal2[i] = document.getElementsByClassName("coresfixas")[i];
            tamanhofinal2[i].style.width = tamanhoreal + "px";
            tamanhofinal2[i].style.height = tamanhoreal + "px";
        }
    } else {
        alert("O valor passado não está de acordo com o padrão!");
    }
}

//armazenando a cor ao clique, colocando numa variavel e alterando a cor do mostrador
var corfinal = "black";
var primeiracor = document.getElementsByClassName("coresfixas")[0];
var segundacor = document.getElementsByClassName("coresfixas")[1];
var terceiracor = document.getElementsByClassName("coresfixas")[2];
var quartacor = document.getElementsByClassName("coresfixas")[3];
var quintacor = document.getElementsByClassName("coresfixas")[4];
var corselecionada = document.getElementsByClassName("corselecionada")[0];

primeiracor.addEventListener('click', function () {
    corfinal = primeiracor.style.backgroundColor;
    corselecionada.style.backgroundColor = corfinal;
})
segundacor.addEventListener('click', function () {
    corfinal = segundacor.style.backgroundColor;
    corselecionada.style.backgroundColor = corfinal;
})
terceiracor.addEventListener('click', function () {
    corfinal = terceiracor.style.backgroundColor;
    corselecionada.style.backgroundColor = corfinal;
})
quartacor.addEventListener('click', function () {
    corfinal = quartacor.style.backgroundColor;
    corselecionada.style.backgroundColor = corfinal;
})
quintacor.addEventListener('click', function () {
    corfinal = "black";
    corselecionada.style.backgroundColor = corfinal;
})

//adicionando a cor ao elemento clicado
var elementodatabela = document.getElementsByTagName('td');
for (i = 0; i < elementodatabela.length; i++) {
    elementodatabela[i].addEventListener('click', function () {
        this.style.background = corfinal;
    })
}

//função criada para ser chamada novamente após mudar a tabela
function adicionarcor() {
    let elementodatabela2 = document.getElementsByTagName('td');
    for (i = 0; i < elementodatabela2.length; i++) {
        elementodatabela2[i].addEventListener('click', function () {
            this.style.background = corfinal;
        })
    }
}

//limpando a tela
function limpartela() {
    let elementodatabela3 = document.getElementsByTagName('td');
    for (i = 0; i < elementodatabela3.length; i++) {
        elementodatabela3[i].style.background = "white";
    }
}

//mudando o tamanho do quadrado mediante clique
function tamanhopixel() {
    var contador = document.getElementById("tamanho2").value;
    if (contador > 4 && contador < 51) {
        var tamanhodatabela = document.getElementsByTagName("tr");
        var segundocontador = tamanhodatabela.length - 1;
        var tabelaapagar = document.getElementsByTagName('tbody')[1];
        //agapando a table
        for (let i = 0; i < segundocontador; i++) {
            let apagar = tabelaapagar.firstElementChild;
            tabelaapagar.removeChild(apagar);
        }
        function criar() {
            //gerando nova table
            for (let cont = 0; cont < contador; cont++) {
                var linhas = document.createElement('tr');
                linhas.setAttribute("class", "elemento");
                tabelaapagar.appendChild(linhas);

                for (let cont1 = 0; cont1 < contador; cont1++) {
                    var elementos = document.createElement('td');
                    elementos.setAttribute("class", "elemento");
                    linhas.appendChild(elementos);
                }
            }
            //chamando a função que muda as cores de acordo com o clique
            adicionarcor();
        }
    } else {
        alert("O valor passado não está de acordo com o padrão!");
    }
    criar();
}

function github() {
    var contador2 = document.getElementsByTagName('td');
    var teste = [];
    var elementostr = document.getElementsByTagName('tr');
    var elementostr2 = elementostr.length - 1;
    console.log(elementostr2);
    var contador4 = 0;

    if (elementostr2 % 2 == 0) {
        contador4 = elementostr2;
    } else {
        contador4 = elementostr2 + 1;
    }
    console.log(contador4 / 2)

    for (let i = 0; i < contador4; i++) {
        for (let n = 0; n < contador4 / 2; n++) {
           teste = document.getElementsByTagName('td')[i]

        }
    }
}


