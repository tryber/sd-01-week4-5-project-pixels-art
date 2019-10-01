
var celulas=document.getElementsByTagName('td');
var selectcor="black";



function disablemargem(){
    let i;
    for(i=1;i<5;i++){
        let allcores=document.getElementById('cor'+i);
        allcores.style.boxShadow="0";
    }
}

for(i=0;i<5;i++){
    var cores=document.getElementById('cor'+i);
    cores.style.background=gera_cor();
    cores.addEventListener('click', function(){
        selectcor=this.style.background;
    })

}





//box-shadow: 3px 3px red,

function gera_cor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}

var cores=document.getElementById('cor1');
cores.style.background='black';
cores.addEventListener('click', function(){
    selectcor=this.style.background;
})

for(i=2;i<5;i++){
    var cores=document.getElementById('cor'+i);
    cores.style.background=gera_cor();
    cores.addEventListener('click', function(){
        selectcor=this.style.background;
    })

}

let corcelula;
for(i=0;i<celulas.length;i++){
    corcelula=celulas[i];
    celulas[i].addEventListener('click', function (){
        this.style.background=selectcor;
    })
}