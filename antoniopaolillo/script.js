//gerando cores aleatorias
function geradordecores() {
    function gerador1() {
        var cor1 = document.getElementsByClassName("coresfixas")[0];
        var simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
        for (i = 0; i < 6; i++) {
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
        cor1.style.backgroundColor = color;
    }
    function gerador2() {
        var cor2 = document.getElementsByClassName("coresfixas")[1];
        var simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
        for (i = 0; i < 6; i++) {
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
        cor2.style.backgroundColor = color;
    }
    function gerador3() {
        var cor3 = document.getElementsByClassName("coresfixas")[2];
        var simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
        for (i = 0; i < 6; i++) {
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
        cor3.style.backgroundColor = color;
    }
    function gerador4() {
        var cor4 = document.getElementsByClassName("coresfixas")[3];
        var simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
        for (i = 0; i < 6; i++) {
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
        cor4.style.backgroundColor = color;
    }
    gerador1();
    gerador2();
    gerador3();
    gerador4();
}

//alterando tamanho de pixels
function gerartamanho() {
    var tamanho = document.getElementById("tamanhotabela").value;
    var tamanhoreal = parseInt(tamanho, 10);
    var teste = [];
    if (tamanhoreal > 4 && tamanhoreal < 51) {
        for (var i = 0; i < 25; i++) {
            teste[i] = document.getElementsByClassName("elemento")[i];
            teste[i].style.width = tamanhoreal + "px";
            teste[i].style.height = tamanhoreal + "px";
        }
        var teste2 = [];
        for (var i = 0; i < 5; i++) {
            teste2[i] = document.getElementsByClassName("coresfixas")[i];
            teste2[i].style.width = tamanhoreal + "px";
            teste2[i].style.height = tamanhoreal + "px";
        }
    } else {
        alert("O valor passado não está de acordo com o padrão!");
    }
}

//armazenando a cor ao clique
var corfinal="black";
var primeiracor = document.getElementsByClassName("coresfixas")[0];
var segundacor = document.getElementsByClassName("coresfixas")[1];
var terceiracor = document.getElementsByClassName("coresfixas")[2];
var quartacor = document.getElementsByClassName("coresfixas")[3];
var quintacor = document.getElementsByClassName("coresfixas")[4];
var corselecionada = document.getElementsByClassName("corselecionada")[0];

primeiracor.addEventListener('click', function(){
    corfinal = primeiracor.style.backgroundColor;
    corselecionada.style.backgroundColor = corfinal;
})
segundacor.addEventListener('click', function(){
    corfinal = segundacor.style.backgroundColor;
    corselecionada.style.backgroundColor = corfinal;
})
terceiracor.addEventListener('click', function(){
    corfinal = terceiracor.style.backgroundColor;
    corselecionada.style.backgroundColor = corfinal;
})
quartacor.addEventListener('click', function(){
    corfinal = quartacor.style.backgroundColor;
    corselecionada.style.backgroundColor = corfinal;
})
quintacor.addEventListener('click', function(){
    corfinal = "black";
    corselecionada.style.backgroundColor = corfinal;
})

//adicionando a cor ao elemento clicado
var elementodatabela = document.getElementsByTagName('td');
for(i=0;i<elementodatabela.length;i++){
    elementodatabela[i].addEventListener('click', function (){
        this.style.background=corfinal;
    })
}


