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

let i = 0;
for (i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click',function(){
        this.style.background = color;
    })
}
