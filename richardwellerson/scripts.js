window.onload = function(){
    let arrayColors = ["black","red","blue","yellowgreen","white"]
    let tblBlack = document.getElementById("tblblack")
    let tblRed = document.getElementById("tblred")
    let tblBlue = document.getElementById("tblblue")
    let tblYellowGreen = document.getElementById("tblyellowgreen")
    let firstColor = arrayColors[0]

    tblBlack.addEventListener("click",function(){
        firstColor = arrayColors[0]
    })

    tblRed.addEventListener("click",function(){
        firstColor = arrayColors[1]
    })

    tblBlue.addEventListener("click",function(){
        firstColor = arrayColors[2]
    })

    tblYellowGreen.addEventListener("click",function(){
        firstColor = arrayColors[3]
    })

    function backgroundColorCell(){
        for (let i = 0; i < 25; i++) {
        let celulaTab = document.getElementsByClassName("celula")[i]
            celulaTab.addEventListener("click", function(){
            celulaTab.style.backgroundColor = firstColor})
        }
    }
    backgroundColorCell()

    function cleanTable() {
        
    }

}
// valorRecebido = document.getElementsByTagName("input");

// function blurBolado () {
//     document.getElementsByTagName("input").addEventListener("keyup",rodarTabela());
// }

// function rodarTabela () {
//     if(valorRecebido < 5 && valorRecebido > 50){
//     alert("Valor Incorreto")

//     } else if (valorRecebido > 4 && valorRecebido < 51) {
//         for (let line = 0; line < valorRecebido; line++) {
//             let linha = document.createElement("tr");
//             let tabelaChamar = document.getElementsByClassName("tbljs")[0];
//             tabelaChamar.appendChild(linha);
//                 for (let cell = 0; cell < valorRecebido; cell++) {
//                     let celula = document.createElement("td");
                    
//             }
        
//     }
    
// }

// }

