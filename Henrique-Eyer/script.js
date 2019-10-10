
var cell = getMatriz();
var btnClear = document.getElementById("btn-clear");
var size = document.getElementById('size');
var table = document.querySelector('table');
var corSelect = "black";
var colors = document.getElementById('color1');
var reset = document.getElementById('reset');
var avatar = document.getElementById("avatar");

window.addEventListener('load', function (){
    corSelect = document.getElementById('color1').style.background;
    disableMarge(document.getElementById('color1')); 
    createMatriz(5);
})

avatar.addEventListener('click', function (){
    github();
});

function github(){
    let sizeMatriz = document.getElementsByTagName('tr');
    if(sizeMatriz.length != 0){
        var midOfMatriz;
        clearAll();
        if(size.value % 2 == 0){
            midOfMatriz = size.value/2;
        }else{
            midOfMatriz = size.value/2+0.5;
        }
        let lineNumber;
        let cellLeft;
        let cellRight = size.value-1;
        for(lineNumber = 0; lineNumber < size.value; lineNumber++ ){
            for(cellLeft = 0; cellLeft < midOfMatriz; cellLeft++, cellRight-- ){
                let positionCellLeft = document.getElementById(lineNumber+ "," +cellLeft)
                let positionCellRight = document.getElementById(lineNumber+ "," +cellRight)
                dyeCellOrNot(positionCellLeft, positionCellRight);
                
            }
            cellRight = size.value - 1 ;
        }
    }
    
}


function dyeCellOrNot(elementLeft, elementRight){
    let random = Math.floor(Math.random() * 2);
    if(random == 1 ){
        elementLeft.style.background = corSelect;
        elementRight.style.background = corSelect;
    }
}

size.addEventListener('blur', function(){
    deleteMatriz();
    createMatriz(size.value);
})

function createMatriz(size){
    let line;
    let cell;
    if(size<5){
        size=5;
        alert("Apenas 5 pra cima")
    }
    for( line = 0; line < size; line++ ){
        let linha = document.createElement("tr")
        table.appendChild(linha);
        for( cell = 0; cell < size; cell++ ){
            let cel = document.createElement('td')
            cel.id = line+ "," +cell;
            linha.appendChild(cel) 
        }
    } 
    AddEventClickCells(getMatriz());
    
}

reset.addEventListener('click', function(){
    
    deleteMatriz();
})

function deleteMatriz(){
    let i;
    let element = document.getElementsByTagName('tr');
    let sizeMatriz = element.length
    for( i = 0; i < sizeMatriz; i++ ){
        let childtable = table.firstElementChild
        table.removeChild(childtable);
    }
}

function getMatriz(){
    let cell = document.getElementsByTagName('td');
    return cell;
}

colors.style.background = 'black';
colors.addEventListener('click', function(){
    corSelect = this.style.background;
    disableMarge(this);
})

function disableMarge(item){
    let i = 0;
    for(i = 1; i < 5; i++){
        let allcolors = document.getElementById('color' + i);
        allcolors.style.boxShadow = "";
    }
    
    item.style.boxShadow = " 4px 4px "+ item.style.background
    
}

function randomColor(){
    var hexadecimais = '0123456789ABCDEF';
    var color = '#';
    
    for (var i = 0; i < 6; i++ ) {
        
        color += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return color;
}

for(i = 2; i < 5; i++){
    var colors = document.getElementById('color'+ i);
    colors.style.background = randomColor();
    colors.addEventListener('click', function(){
        corSelect = this.style.background;
        disableMarge(this);
    })
}

function AddEventClickCells(cell){
    for(i = 0; i < cell.length; i++){
        cell[i].addEventListener('click', function (){
            this.style.background = corSelect;
        })
    }
}

function clearAll(){
    let i;
    for(i = 0; i < cell.length; i++){
        cell[i].style.background = "#ffffff"; 
    }
}

btnClear.addEventListener('click', function(){
    clearAll();
})

