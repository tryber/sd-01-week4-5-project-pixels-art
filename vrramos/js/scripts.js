function gerarQuadrados() {
    let sectionQuadrados = document.createElement('section')
    let bodyPrincipal = document.getElementsByTagName('body')[0].appendChild(sectionQuadrados)
    table = document.createElement('table')
    sectionQuadrados.appendChild(table)
    sectionQuadrados.classList.add('paleta-de-cores')
    
    let tr, td
    
    // Cria a tabela vazia
    for (let i = 0; i < 5; i++){
        tr = document.createElement('tr')
        for (let j = 0; j < 5; j++){
            td = document.createElement('td')
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }    
}

// Pega todas os quadrados gerados e coloca dentro de uma variável 
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