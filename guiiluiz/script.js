// Mudar cor selecionada
var color = "black";

function changeColor(selectedcolor) {
    color = selectedcolor;
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