const color = document.getElementsByClassName("cores");
const printando = document.getElementsByTagName("td");
const colorUsed = document.getElementById("selected-color");
const buttonClear = document.getElementsByClassName("button-clear")[0];
const buttonCreatSquare = document.getElementsByClassName("button-create-square-pixel")[0];
const table = document.getElementById('tabela2');
const tbody = document.getElementsByTagName('tbody')[0];
const input = document.getElementById('input');

let selectColor = "black";
pintarTodasCores();

for (let index = 1; index < color.length; index++) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${red}, ${green}, ${blue})`;
  color[index].style.background = randomColor;
}

buttonCreatSquare.addEventListener('click', () => {
  if (input.value < 5) {
    alert('Selecione valores a partir de 5');
  }
  else {
    while (table.hasChildNodes()) {
      table.removeChild(table.firstChild);
    }
    let tbodyNew = document.createElement('tbody');
    table.appendChild(tbodyNew);
    for (let index = 0; index < input.value; index++) {
      const tags = document.createElement('tr');
      tbodyNew.appendChild(tags);
      for (let index = 0; index < input.value; index++) {
        const tag = document.createElement('td');
        tags.appendChild(tag);
      }
    }
  }
  pintarTodasCores()
})

for (let paint of color) {
  paint.addEventListener('click', () => {
    let computedStyle = getComputedStyle(paint);
    selectColor = computedStyle.backgroundColor;
    colorUsed.style.background = selectColor;
  })
}

function pintarTodasCores() {
  for (let recebendo of printando) {
    recebendo.addEventListener("click", () => {
      recebendo.style.background = selectColor;
    });
  }
}

buttonClear.addEventListener('click', () => {
  for (let index = 0; index < printando.length; index++) {
    printando[index].style.background = 'white';
  }
})
