var cells = cellIdentifier();
var colors = colorIdentifier();
function colorIdentifier(){
    
}
function check() {
    document.getElementById("color1").checked = true;
}

function cellIdentifier() {
    let cells = document.getElementsByTagName('td');
    return cells;
}

function colorCellOnClick() {
    let i = 0;
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function () {
            this.style.background = color;
        })
    }
}