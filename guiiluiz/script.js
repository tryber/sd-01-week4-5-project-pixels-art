var color = "black";
var selected;

// Gera uma cor aleatória
function randomColor() {
    rcolor = '#' + (0x1000000 + Math.random() * 0xFFFFFF).toString(16).substr(1, 6);
    return rcolor
}

// Coloca cores na paleta
function colorGenerator() {
    let c, targets = document.querySelectorAll('.paleta');
    for (c = 0; c < 4; c++) {
        targets[c].style.backgroundColor = randomColor()
    }
}

// Mudar cor selecionada
function changeColor(cor) {
    color = document.querySelector(cor).style.backgroundColor;
    clearSelected()
    selected = document.querySelector(cor)
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

    let cores = document.querySelectorAll(".paleta")

    for (i = 0; i < cores.length; i++) {
        cores[i].style.borderColor = "black";
        cores[i].style.borderStyle = "solid";
        cores[i].style.borderWidth = "1px";
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
    colorGenerator()
    clearSelected()
    color = "black";
    exibePaleta()
}

// Apaga se existir alguma tabela
function resetTable() {
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild); // Apaga se existir alguma table
    }
}



// Faz a paleta aparecer na tela
function exibePaleta() {
    document.getElementById('paleta').style.display = "inline-flex";
    document.getElementById('titlepaleta').style.display = "block";
    document.getElementById('titleinput').style.display = "none";
}
