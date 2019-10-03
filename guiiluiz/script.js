var color = "black";
var selected;

// Mudar cor selecionada
function changeColor(selectedcolor) {
    color = selectedcolor;
    clearSelected()
    selected = document.getElementById(selectedcolor)
    selectColor()
}

// Destaca a cor selecionada
function selectColor() {
    selected.style.borderColor = "white"
    selected.style.borderStyle = "dashed"
    selected.style.borderWidth = "3px"
}

// Limpa a seleção de cor
function clearSelected() {
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



var table = document.getElementsByTagName("table")[0];

// Verifica se existe uma tabela antes de criar uma nova
function pixelHeightWidth(n) {
    if (n < 5) {
        n = 5;
    } else if (n > 50) {
        n = 50;
    }
    if (table.hasChildNodes()) {
        resetTable();
        createTable(n);
    } else {
        createTable(n);
    }
}

// Gera uma tabela de acordo com o número digitado pelo usuário
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
}

// Apaga se existir alguma table
function resetTable() {
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild); // Apaga se existir alguma table
    }
}



var cells = cellIdentifier();

// Retorna celulas da matriz
function cellIdentifier() {
    let cells = document.getElementsByTagName('td');
    return cells;
}



// Colore as celulas ao clicar
function colorCellOnClick() {
    let i = 0;
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function () {
            this.style.background = color;
        })
    }
}



// Limpar todas as celulas
function clearAll() {
    let i;
    for (i = 0; i < cells.length; i++) {
        cells[i].style.background = "#ffffff";
    }
}
