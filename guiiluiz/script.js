// Mudar cor selecionada
var color = "black";
var selected;

function changeColor(selectedcolor) {
    color = selectedcolor;
    clearSelected()
    selected = document.getElementById(selectedcolor)
    selectColor()
}

// Destaca a cor selecionada
function selectColor(){
    selected.style.borderColor = "white"
    selected.style.borderStyle = "dashed"
    selected.style.borderWidth = "3px"
}

// Limpa a selecao de cor
function clearSelected(){
    let color1 = document.getElementsByClassName("paleta")[0]
    let color2 = document.getElementsByClassName("paleta")[1]
    let color3 = document.getElementsByClassName("paleta")[2]
    let color4 = document.getElementsByClassName("paleta")[3]

    color1.style.borderColor = "black"
    color1.style.borderStyle = "solid"
    color1.style.borderWidth = "1px"

    color2.style.borderColor = "black"
    color2.style.borderStyle = "solid"
    color2.style.borderWidth = "1px"

    color3.style.borderColor = "black"
    color3.style.borderStyle = "solid"
    color3.style.borderWidth = "1px"

    color4.style.borderColor = "black"
    color4.style.borderStyle = "solid"
    color4.style.borderWidth = "1px"
}



// Retorna celulas da matriz
var cell = cellIdentifier();

function cellIdentifier(){
    let cell=document.getElementsByTagName('td');
    return cell;
}



// Colore as celulas ao clicar
let i = 0;
for (i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click',function(){
        this.style.background = color;
    })
}



// Limpar todas as celulas
function clearAll(){
    let i;
    for(i=0; i < cell.length; i++){
        cell[i].style.background="#ffffff"; 
    }
}
