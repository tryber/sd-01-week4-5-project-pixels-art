var color1 = document.getElementsByClassName("paleta1")[0]
var color2 = document.getElementsByClassName("paleta2")[0]
var color3 = document.getElementsByClassName("paleta3")[0]
var color4 = document.getElementsByClassName("paleta4")[0]

var selectColor = "black"
pintartodasascores();

color1.addEventListener('click', function(){
  let computedStyle = getComputedStyle(color1);
  selectColor = computedStyle.backgroundColor;
})

color2.addEventListener('click', function(){
  let computedStyle = getComputedStyle(color2);
  selectColor = computedStyle.backgroundColor;
})

color3.addEventListener('click', function(){
  let computedStyle = getComputedStyle(color3);
  selectColor = computedStyle.backgroundColor;
})

color4.addEventListener('click', function(){
  let computedStyle = getComputedStyle(color4);
  selectColor = computedStyle.backgroundColor; 
})

function pintartodasascores(){
  let printando = document.getElementsByTagName("td")
  for (let i = 0; i < printando.length ;i++){
    printando[i].addEventListener('click', function(){
    printando[i].style.background = selectColor;
    })  
  }
}
  
  
  