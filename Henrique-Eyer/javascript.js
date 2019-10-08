//Variaveis para pegar os elementos HTML
var celulas=pegaMatriz();
var btnclear=document.getElementById("btnclear");
var tamanho=document.getElementById('tamanho');
var table=document.querySelector('table');
var selectcor="black";
var cores=document.getElementById('cor1');
var reset=document.getElementById('reset');
var avatar=document.getElementById("avatar");




//function que roda quando a tela for carregada
//Ela começa selecionando a cor para preto
//E já gera uma matriz 5x5
window.addEventListener('load', function (){
    selectcor=document.getElementById('cor1').style.background;
    disablemargem(document.getElementById('cor1'));  
    GeraMatriz(5);
})

//Adicionando o evento de click no botao de avatar, ele chama a funçao git hub quando for clicado.
avatar.addEventListener('click', function (){
    github();
});

//Criando função para criar o avatar do git hub
function github(){
    let tamanho_matriz=document.getElementsByTagName('tr');
    if(tamanho_matriz.length!=0){
        var meio;
        
        clearALL();
        
        //if para pegar se é par ou impar e pegar a metade do tamanho
        if(tamanho.value%2==0){
            meio=tamanho.value/2;
        }else{
            meio=tamanho.value/2+0.5;
        }
        
        //variaveis de controle
        let i;
        let j;
        let j2=tamanho.value-1;//J2 para começar no final da linha
        
        //for para percorrer a Fmatriz 
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
//Adicionando ao input o evento change e quando ele mudar ele gera a matriz.
tamanho.addEventListener('change',function(){
    delete_matriz();
    GeraMatriz(tamanho.value);
})


//funçao que gera a Matriz o num é o tamanho a ser recebido.
function GeraMatriz(tamanho){
    var i;
    var j;
    
    //for para percorrer criar o primeiro serve para criar o numero de tr
    for(i=0;i<tamanho;i++){
        let linha=document.createElement("tr")
        table.appendChild(linha);
        
        //for para percorrer e criar os elementos dentro da tr
        for(j=0;j<tamanho;j++){
            let cel=document.createElement('td')
            cel.id=i+","+j;
            
            linha.appendChild(cel)
            
        }
    }
    
    
    funcparamatriz(pegaMatriz());
    
}

//adicionando um evento de clica ao botao.
//funcao serve para deletar a Matriz
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


//funcao pega a matriz e retorna todos os elementos td
function pegaMatriz(){
    let celulas=document.getElementsByTagName('td');
    return celulas;
}



//adiciona ao primeira div a cor preta
cores.style.background='black';
//adicionando o evento de click a primeira cor o botao quando clicado, adiciona a cor do background a variavel selctedcor 
cores.addEventListener('click', function(){
    selectcor=this.style.background;
    disablemargem(this);//chama funcao que apaga a boxshadow das outras cores. this passa o proprio elemento para ativar a margem do elemento clicado.
})


//funcao onde apaga a boxshadow as margem e recebe um parametro que é o elemento que foi clicado para ativar a margem dele depois.
function disablemargem(item){
    let i=0;
    //for para passar em cada div
    for(i=1;i<5;i++){
        let allcores=document.getElementById('cor'+i);//pega via id o elemento
        allcores.style.boxShadow="";//deleta a boxshadow
    }
    
    item.style.boxShadow=" 4px 4px "+item.style.background//Adiciona o style box shadow ao elemento
    
}


//funcao geradora de cores
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

//adiciona para cada div de cor uma cor de background 
//e adiciona o evento de click para enviar a cor de background para a variavel que guarda a cor selecionada
for(i=2;i<5;i++){
    var cores=document.getElementById('cor'+i);
    cores.style.background=gera_cor();
    cores.addEventListener('click', function(){
        selectcor=this.style.background;
        disablemargem(this);
    })
}



//FUnção para adicionar o evento de click na celula para ser colorida
function funcparamatriz(celulas){
    for(i=0;i<celulas.length;i++){
        celulas[i].addEventListener('click', function (){
            this.style.background=selectcor;
        })
    }
}

//Funçao para colocar todas as celulas em branco
function clearALL(){
    let i;
    for(i=0;i<celulas.length;i++){
        celulas[i].style.background="#ffffff"; 
    }
}
//Adicionar o evento de click ao botao clear
//Chama a função que limpa tudo.
btnclear.addEventListener('click', function(){
    clearALL();
})

