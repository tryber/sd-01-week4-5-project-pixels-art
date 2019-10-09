
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
    create_Matriz(5);
})

avatar.addEventListener('click', function (){
    github();
});

function github(){
    let size_matriz = document.getElementsByTagName('tr');
    if(size_matriz.length != 0){
        var mid_of_matriz;
        clearAll();
        if(size.value % 2 == 0){
            mid_of_matriz = size.value/2;
        }else{
            mid_of_matriz = size.value/2+0.5;
        }
        let line_number;
        let cell_left;
        let cell_right = size.value-1;
        for(line_number = 0; line_number < size.value; line_number++ ){
            for(cell_left = 0; cell_left < mid_of_matriz; cell_left++, cell_right-- ){
                let position_cell_left = document.getElementById(line_number+ "," +cell_left)
                let position_cell_right = document.getElementById(line_number+ "," +cell_right)
                dye_cell_or_not(position_cell_left, position_cell_right);
                
            }
            cell_right = size.value - 1 ;
        }
    }
    
}


function dye_cell_or_not(element_left, element_right){
    let random = Math.floor(Math.random() * 2);
    if(random == 1 ){
        element_left.style.background = corSelect;
        element_right.style.background = corSelect;
    }
}

size.addEventListener('blur', function(){
    delete_matriz();
    create_Matriz(size.value);
})

function create_Matriz(size){
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
    Add_event_click_cells(getMatriz());
    
}

reset.addEventListener('click', function(){
    
    delete_matriz();
})

function delete_matriz(){
    let i;
    let element = document.getElementsByTagName('tr');
    let size_matriz = element.length
    for( i = 0; i < size_matriz; i++ ){
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

function gera_color(){
    var hexadecimais = '0123456789ABCDEF';
    var color = '#';
    
    for (var i = 0; i < 6; i++ ) {
        
        color += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return color;
}

for(i = 2; i < 5; i++){
    var colors = document.getElementById('color'+ i);
    colors.style.background = gera_color();
    colors.addEventListener('click', function(){
        corSelect = this.style.background;
        disableMarge(this);
    })
}

function Add_event_click_cells(cell){
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

