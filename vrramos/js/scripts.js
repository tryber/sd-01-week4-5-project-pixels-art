function criarDivQuadrados() {
    let localQuadrados, bodyPrincipal
    
    localQuadrados = document.createElement('section')
    bodyPrincipal = document.getElementsByTagName('body')[0].appendChild(localQuadrados)
    localQuadrados.classList.add('paleta-de-cores')  
}

function gerarQuadrados() {
    let td, i, j, tr, table, localQuadrados

    table = document.createElement('table')
    tr = document.createElement('tr')
    criarDivQuadrados(table)
    localQuadrados = document.querySelector('.paleta-de-cores').appendChild(table)

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

function color(){
    return cor = "black"
}

let quadradosColoridos = color()

// Se o usuário não selecionar nenhuma cor, irá colorir na cor preta.
function corDefault() {    
    for(let i = 4; i < quadradosBrancos.length; i++){    
        quadradosBrancos[i].addEventListener('click', function(){
            quadradosBrancos[i].style.backgroundColor = quadradosColoridos;
        })
    }    
}

// Seleciona a cor deseja e muda as cores nas tabelas
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

// Reseta as cores
function resetarCores() {
    let button = document.querySelector('.btn')
    button.addEventListener('click', function(){
        for(let i = 4; i < quadradosBrancos.length; i++){
            quadradosBrancos[i].style.backgroundColor = "white"
        }
    })
}

gerarQuadrados()
corDefault()
mudarCor()
resetarCores()
criarDivQuadrados()