//cores e variaveis
var btn = document.querySelector("#btn")
var valorCores = ["black","red","blue","green","white"]
var cor = valorCores[0]
var cor1 = document.querySelector("#cor1")
var cor2 = document.querySelector("#cor2")
var cor3 = document.querySelector("#cor3")
var cor4 = document.querySelector("#cor4")
var corMostrada = document.querySelector("#corSelecionada")
//funçoes btn

cor1.addEventListener("click", function(){
    cor = valorCores[0]
    corMostrada.style.backgroundColor = cor

})
cor2.addEventListener("click", function(){
    cor = valorCores[1]
    corMostrada.style.backgroundColor = cor
})
cor3.addEventListener("click", function(){
    cor = valorCores[2]
    corMostrada.style.backgroundColor = cor
})
cor4.addEventListener("click", function(){
    cor = valorCores[3]
    corMostrada.style.backgroundColor = cor
})

function colorir(){
    for (let i = 0; i < 25; i++) {
    const celula = document.getElementsByClassName("pixel")[i]
        celula.addEventListener("click", function(){
        celula.style.backgroundColor = cor})
}}


colorir()
function resert(){
    for (let i = 0; i < 25; i++) {
    document.getElementsByClassName("pixel")[i].style.backgroundColor = valorCores[4]
}}