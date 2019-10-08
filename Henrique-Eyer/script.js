
var celulas=pegaMatriz();
var btnclear=document.getElementById("btnclear");
var tamanho=document.getElementById('tamanho');
var table=document.querySelector('table');
var selectcor="black";
var cores=document.getElementById('cor1');
var reset=document.getElementById('reset');
var avatar=document.getElementById("avatar");

window.addEventListener('load', function (){
    selectcor=document.getElementById('cor1').style.background;
    disablemargem(document.getElementById('cor1'));  
    GeraMatriz(5);
})

avatar.addEventListener('click', function (){
    github();
});

function github(){
    let tamanho_matriz=document.getElementsByTagName('tr');
    if(tamanho_matriz.length!=0){
        var meio;
        clearALL();
        if(tamanho.value%2==0){
            meio=tamanho.value/2;
        }else{
            meio=tamanho.value/2+0.5;
        }
        let i;
        let j;
        let j2=tamanho.value-1;
        for(i=0;i<tamanho.value; i++){
            for(j=0;j<meio;j++,j2--){
                let pos=document.getElementById(i+","+j)
                let pos2=document.getElementById(i+","+j2)
                let aleatório=Math.floor(Math.random() * 2);
                if(aleatório==1){
                    pos.style.background=selectcor;
                    pos2.style.background=selectcor;
                }
            }
            j2=tamanho.value-1;
        }
    }
}

tamanho.addEventListener('change',function(){
    delete_matriz();
    GeraMatriz(tamanho.value);
})

function GeraMatriz(tamanho){
    var i;
    var j;
    for(i=0;i<tamanho;i++){
        let linha=document.createElement("tr")
        table.appendChild(linha);
        for(j=0;j<tamanho;j++){
            let cel=document.createElement('td')
            cel.id=i+","+j;
            linha.appendChild(cel)  
        }
    } 
    funcparamatriz(pegaMatriz());
    
}

reset.addEventListener('click', function(){
    
    delete_matriz();
})

function delete_matriz(){
    let i;
    let element=document.getElementsByTagName('tr');
    let tam=element.length
    for(i=0;i<tam;i++){
        let childtable=table.firstElementChild
        table.removeChild(childtable);
    }
}

function pegaMatriz(){
    let celulas=document.getElementsByTagName('td');
    return celulas;
}

cores.style.background='black';
cores.addEventListener('click', function(){
    selectcor=this.style.background;
    disablemargem(this);
})

function disablemargem(item){
    let i=0;
    for(i=1;i<5;i++){
        let allcores=document.getElementById('cor'+i);
        allcores.style.boxShadow="";
    }
    
    item.style.boxShadow=" 4px 4px "+item.style.background
    
}

function gera_cor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';

    for (var i = 0; i < 6; i++ ) {

        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}

for(i=2;i<5;i++){
    var cores=document.getElementById('cor'+i);
    cores.style.background=gera_cor();
    cores.addEventListener('click', function(){
        selectcor=this.style.background;
        disablemargem(this);
    })
}

function funcparamatriz(celulas){
    for(i=0;i<celulas.length;i++){
        celulas[i].addEventListener('click', function (){
            this.style.background=selectcor;
        })
    }
}

function clearALL(){
    let i;
    for(i=0;i<celulas.length;i++){
        celulas[i].style.background="#ffffff"; 
    }
}

btnclear.addEventListener('click', function(){
    clearALL();
})

