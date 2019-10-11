let color1 = document.getElementById("paleta1");
let color2 = document.getElementById("paleta2");
let color3 = document.getElementById("paleta3");
let color4 = document.getElementById("paleta4");

let selectColor = "black";
pintartodasascores();

color1.addEventListener('click', function() {
  let computedStyle = getComputedStyle(color1);
  selectColor = computedStyle.backgroundColor;
})

color2.addEventListener('click', function() {
  let computedStyle = getComputedStyle(color2);
  selectColor = computedStyle.backgroundColor;
})

color3.addEventListener('click', function() {
  let computedStyle = getComputedStyle(color3);
  selectColor = computedStyle.backgroundColor;
})

color4.addEventListener('click', function() {
  let computedStyle = getComputedStyle(color4);
  selectColor = computedStyle.backgroundColor; 
})

function pintartodasascores() {
  let printando = document.getElementsByTagName("td");
  for (let recebendo of printando) {
    recebendo.addEventListener('click', function(){
      recebendo.style.background = selectColor;
    })  
  }
}


