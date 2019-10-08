// // let squaretest = document.getElementsByClassName("square")[1]
// // console.log(squaretest);
// function ColorCell(){
//     for (let i = 0; i < 25; i++) {
//     let squareSelector = document.getElementsByClassName("square")[i]
// //         squareSelector.addEventListener("click", function(){
// //         console.log("oi");
// //     })
// //     }
// // }
function backgroundColorCell(){
    for (let i = 0; i < 25; i++) {
    let squareSelector = document.getElementsByTagName("td")[i]
    squareSelector.addEventListener("click", function(){
    squareSelector.style.backgroundColor = selectColor();})
    }
}
backgroundColorCell();

// function testf(i) {
//     return (function(){
//              console.log("you clicked region number " + i);
//            });
//   }
//   // Trigger function cellClicked() when any table cell is clicekd
//   for (let i = 0; i < board.length; i++) {
//     board[i].addEventListener("click", function(){
//         testf(i);

//     });
//   }


function selectColor() {
    for (let i = 1; i <= 4; i++) {
        let colorcheck = document.getElementById("color"+i).checked;
        if (colorcheck){
            let colorfinal = document.getElementById("color" + i).value;
            return colorfinal;
        }

    
        };
}
// let colorcheck = document.getElementById("color1").checked;
// console.log(colorcheck);

// let color = document.getElementById("color1").value;
// console.log(color);

// let square = document.getElementsByClassName("square one")[0];
// square.style.backgroundColor = color;


// function checkColors() {
//     let color1 = document.getElementById("color4").checked;
//     console.log(color1);
//     // if(color1 == true){
//     //     console.log(true);
//     // }else{
//     //     console.log(false);
//     // }
    
// }
// function myFunction() {
//     var x = document.getElementById("myRadio")
//     document.getElementById("demo").innerHTML = x;
//   }