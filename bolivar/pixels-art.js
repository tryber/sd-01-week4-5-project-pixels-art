var count = 0;
function tableSize(){
    count += 1;
    var row = document.createElement("tbody");
    var subtittle = document.getElementById("subtittle")
    subtittle.innerHTML = count + "x" + count 
    row.id = "row" + count;
    document.getElementById("table-pixel-canvas").appendChild(row);
    for (i = 1; i <= count; i++){
        var select = document.getElementById("row" + i)
        var limit = select.childElementCount;
        for (l = 0; l < (count - limit); l++){
            collum = document.createElement("th");
            collum.className = "collum";
            collum.id = "collum" + i + (l + limit + 1)
            select.appendChild(collum);
        }
    }
}

function setcollor(){
    var one = Math.floor(Math.random() * 256);
    var two = Math.floor(Math.random() * 256);
    var three = Math.floor(Math.random() * 256);
    var collor = 'rgb(' + one + ',' + two + ',' + three + ')'
    return collor
}

function changeCollor(){
    for (i = 1; i <= 10; i++){
        var div = document.getElementById("div" + i)
        div.style.backgroundColor= setcollor()
        div.style.width = "60px"
        div.style.height = "60px"
    }
    
}

function divClick(){
    for (i = 1; i <= 10; i++){
        var div = document.getElementById("div" + i)
        div.addEventListener("click", function() {
            var collor = this.style.backgroundColor
            divPaint(collor)
        })
    }
    var black = document.getElementById("black")
    black.addEventListener("click", function(){
        divPaint("black")
    })
}
function divPaint(collor){
    for (i = 1; i <= (document.getElementById("table-pixel-canvas").childElementCount - 1); i++ ){
        for (l = 1; l <= (document.getElementById("table-pixel-canvas").childElementCount - 1); l++){
            var element = document.getElementById("collum" + i + l)
            element.addEventListener("click", function(){
                this.style.backgroundColor = collor;
                
            })
        }
    }
}

function tableErase(){
    for (i = 1; i <= (document.getElementById("table-pixel-canvas").childElementCount - 1); i++ ){
        for (l = 1; l <= (document.getElementById("table-pixel-canvas").childElementCount - 1); l++){
            var element = document.getElementById("collum" + i + l)
            element.style.backgroundColor = "white";
        }
    }
}


function party(){
    var queryblock = "collum" + (Math.floor(Math.random() * (document.getElementById("table-pixel-canvas").childElementCount - 1))+1) + (Math.floor(Math.random() * (document.getElementById("table-pixel-canvas").childElementCount - 1))+ 1)
    document.getElementById(queryblock).style.backgroundColor = setcollor();
}

var math = 0;
function perfil(){
    math += 1
    var queryblock = "collum" + (Math.floor(Math.random() * (document.getElementById("table-pixel-canvas").childElementCount - 1))+1) + (Math.floor(Math.random() * (document.getElementById("table-pixel-canvas").childElementCount - 1))+ 1)
    if (math == 1){
        var arm = document.createElement("div")
        arm.id = "fashion"
        arm.style.backgroundColor = setcollor();
        document.body.appendChild(arm);
        document.getElementById(queryblock).style.backgroundColor = document.getElementById("fashion").style.backgroundColor
    }
    else {
        document.getElementById(queryblock).style.backgroundColor = document.getElementById("fashion").style.backgroundColor
    }
}

function background(){
    document.getElementById("main-title").style.backgroundColor = setcollor();
    for(i = 0; i < document.getElementsByClassName("subtitles").length; i++){
        document.getElementsByClassName("subtitles")[i].style.backgroundColor = setcollor();
    }
    for(i = 0; i < document.getElementsByClassName("buttonbottom").length; i++){
        document.getElementsByClassName("buttonbottom")[i].style.backgroundColor = setcollor();
    }
    document.getElementById("subtittle").style.backgroundColor = setcollor();
}

window.onload = function () {
    divClick()
    background()
} 
