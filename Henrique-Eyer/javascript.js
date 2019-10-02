
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
})

avatar.addEventListener('click', function (){
    github();
});

function github(){
    var meio;
    
    if(tamanho.value%2==0){
        meio=tamanho.value/2;
    }else{
        meio=(tamanho.value+1)/2
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





tamanho.addEventListener('change',function(){
    var i;
    var j;
    
    for(i=0;i<tamanho.value;i++){
        let linha=document.createElement("tr")
        table.appendChild(linha);
        
        for(j=0;j<tamanho.value;j++){
            let cel=document.createElement('td')
            cel.id=i+","+j;
            linha.appendChild(cel)
        }
    }
    
    
    funcparamatriz(pegaMatriz());
    disable();
})

function disable(){
    document.getElementById("tamanho").disabled = true;
}
function enable(){
    document.getElementById("tamanho").disabled = false;
}

reset.addEventListener('click', function(){
    let i;
    for(i=0;i<tamanho.value;i++){
        let childtable=table.firstElementChild
        table.removeChild(childtable);
    }
    enable();
})



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
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
        //E concatena à variável cor
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
    }}
    
    btnclear.addEventListener('click', function(){
        let i;
        for(i=0;i<celulas.length;i++){
            celulas[i].style.background="#ffffff";   
        }
    })
    
    
    