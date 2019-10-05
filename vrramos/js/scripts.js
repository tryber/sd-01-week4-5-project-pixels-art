function gerarQuadrados() {
    let sectionQuadrados = document.createElement('section')
    let bodyPrincipal = document.getElementsByTagName('body')[0].appendChild(sectionQuadrados)
    table = document.createElement('table')
    sectionQuadrados.appendChild(table)
    sectionQuadrados.classList.add('paleta-de-cores')
    
    let tr, td
    
    for (let i = 0; i < 5; i++){
        tr = document.createElement('tr')
        for (let j = 0; j < 5; j++){
            td = document.createElement('td')
            td.classList.add('quadrados-criados')
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }    
}

function quadradosCriados() {
    let quadradosCriados = document.getElementsByTagName('td')
    return quadradosCriados;
}

let celulas = quadradosCriados()

function colorirQuadrados() {    
    for(let i = 0; i < celulas.length; i++){    
        celulas[i].addEventListener('click', function(){
            celulas[i].style.backgroundColor = "black"
        })
    }    
}





window.onload = gerarQuadrados(), colorirQuadrados()