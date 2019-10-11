function criarDivQuadrados() {
    let localQuadrados, principal
    
    localQuadrados = document.createElement('section')
    principal = document.querySelector('#teste')
    principal.appendChild(localQuadrados)
    localQuadrados.classList.add('paleta')  
}

function gerarQuadrados() {
    let td, i, j, tr, table, localQuadrados

    table = document.createElement('table')
    tr = document.createElement('tr')
    localQuadrados = document.querySelector('.paleta')
    localQuadrados.appendChild(table)
    table.classList.add('tabela-de-cores')

    for (i = 0; i < 5; i++){
        tr = document.createElement('tr')
        for (j = 0; j < 5; j++){
            td = document.createElement('td')
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}   

function quadradosCriados() {
    let quadradosCriados = document.getElementsByTagName('td')
    return quadradosCriados;
}

let quadradosBrancos = quadradosCriados()

let quadradosColoridos = "black"

function corDefault() {    
    for(let i = 4; i < quadradosBrancos.length; i++){    
        quadradosBrancos[i].addEventListener('click', function(){
            quadradosBrancos[i].style.backgroundColor = quadradosColoridos;
        })
    }    
}

function mudarCor() {
    let blue = document.querySelector('.blue')
    let red = document.querySelector('.red')
    let green = document.querySelector('.green')
    let black = document.querySelector('.black')
    
    blue.addEventListener('click', function(){
        quadradosColoridos = "blue"
    })
    
    red.addEventListener('click', function(){
        quadradosColoridos = "red"
    })
    
    green.addEventListener('click', function(){
        quadradosColoridos = "green"
    })
    
    black.addEventListener('click', function(){
        quadradosColoridos = "black"
    })
}
 
function resetarCores() {
    let button = document.querySelector('.btn')
    button.addEventListener('click', function(){
        for(let i = 4; i < quadradosBrancos.length; i++){
            quadradosBrancos[i].style.backgroundColor = "white"
        }
    })
}


criarDivQuadrados()
gerarQuadrados()
corDefault()
mudarCor()
resetarCores()
