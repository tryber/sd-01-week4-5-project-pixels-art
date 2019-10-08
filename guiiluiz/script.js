var color = "black";
var selected;

function generateRandomColors() {
    let rcolor = '#' + (0x1000000 + Math.random() * 0xFFFFFF).toString(16).substr(1, 6);
    return rcolor
}

function generateColors() {
    document.getElementById("pallet0").style.backgroundColor = "black";
    let colorIndex, targets = document.querySelectorAll('.pallet');
    for (colorIndex = 1; colorIndex < 5; colorIndex++) {
        targets[colorIndex].style.backgroundColor = generateRandomColors()
    }
}

function changeColor(palletId) {
    color = document.querySelector(palletId).style.backgroundColor;
    clearSelected()
    selected = document.querySelector(palletId)
    selectColor()
}

function selectColor() {
    selected.style.borderColor = "white"
    selected.style.borderStyle = "dashed"
    selected.style.borderWidth = "3px"
}

function clearSelected() {
    let palletColor = document.querySelectorAll(".pallet")

    for (let index = 0; index < palletColor.length; index++) {
        palletColor[index].style.borderColor = "black";
        palletColor[index].style.borderStyle = "solid";
        palletColor[index].style.borderWidth = "1px";
    }
}

const cells = cellIdentifier();

function cellIdentifier() {
    return document.getElementsByTagName('td');
}

function handleCellColoringOnClick() {
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

function pixelHeightWidth(userNumber) {
    if (userNumber < 5) {
        userNumber = 5;
    } else if (userNumber > 50) {
        userNumber = 50;
    }
    // Verifica se existe uma tabela antes de criar uma nova
        resetTable();
        createTable(userNumber);
}

function createTable(userNumber) {
    let tr, td, row, cell;
    for (row = 0; row < userNumber; row++) {
        tr = document.createElement('tr');
        for (cell = 0; cell < userNumber; cell++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    handleCellColoringOnClick()
    clearSelected()
    color = "black";
    showPallet()
}

function resetTable() {
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild); // Apaga se existir alguma tabela
    }
}

function showPallet() {
    document.getElementById('pallet').style.display = "inline-flex";
    document.getElementById('title-pallet').style.display = "block";
    document.getElementById('title-input').style.display = "none";
}
