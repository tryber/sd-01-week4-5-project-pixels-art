var color = "black";
var selected;

function randomColor() {
    let rcolor = '#' + (0x1000000 + Math.random() * 0xFFFFFF).toString(16).substr(1, 6);
    return rcolor
}

// Coloca cores na paleta
function colorGenerator() {
    let colorIndex, targets = document.querySelectorAll('.paleta');
    for (colorIndex = 0; colorIndex < 4; colorIndex++) {
        targets[colorIndex].style.backgroundColor = randomColor()
    }
}

function changeColor(cor) {
    color = document.querySelector(cor).style.backgroundColor;
    clearSelected()
    selected = document.querySelector(cor)
    selectColor()
}

function selectColor() {
    selected.style.borderColor = "white"
    selected.style.borderStyle = "dashed"
    selected.style.borderWidth = "3px"
}

function clearSelected() {
    let cores = document.querySelectorAll(".paleta")

    for (let index = 0; index < cores.length; index++) {
        cores[index].style.borderColor = "black";
        cores[index].style.borderStyle = "solid";
        cores[index].style.borderWidth = "1px";
    }
}

const cells = cellIdentifier();

function cellIdentifier() {
    let cells = document.getElementsByTagName('td');
    return cells;
}

function colorCellOnClick() {
    let index;
    for (index = 0; index < cells.length; index++) {
        cells[index].addEventListener('click', function () {
            this.style.background = color;
        })
    }
}

function clearAll() {
    let index;
    for (index = 0; index < cells.length; index++) {
        cells[index].style.background = "#ffffff";
    }
}

var table = document.getElementsByTagName("table")[0];

function pixelHeightWidth(n) {
    if (n < 5) {
        n = 5;
    } else if (n > 50) {
        n = 50;
    }
    // Verifica se existe uma tabela antes de criar uma nova
    if (table.hasChildNodes()) {
        resetTable();
        createTable(n);
    } else {
        createTable(n);
    }
}

function createTable(n) {
    let tr, td, row, cell;
    for (row = 0; row < n; row++) {
        tr = document.createElement('tr');
        for (cell = 0; cell < n; cell++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    colorCellOnClick()
    colorGenerator()
    clearSelected()
    color = "black";
    exibePaleta()
}

function resetTable() {
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild); // Apaga se existir alguma tabela
    }
}

function exibePaleta() {
    document.getElementById('paleta').style.display = "inline-flex";
    document.getElementById('titlepaleta').style.display = "block";
    document.getElementById('titleinput').style.display = "none";
}
