// Search Elements in the html File
function searchElements() {
    var palette = document.getElementById("collors-Pallete");
    var input = document.getElementById("input-canvas-size");
    var canvas = document.getElementById("table-pixel-canvas");
    var buttonCanvasSize = document.getElementById("canvas-size")
    return [palette, input, canvas, buttonCanvasSize]
}

// Set a random collor 
function setcollor() {
    var one = Math.floor(Math.random() * 256);
    var two = Math.floor(Math.random() * 256);
    var three = Math.floor(Math.random() * 256);
    var collor = 'rgb(' + one + ',' + two + ',' + three + ')'
    return collor
}

// Change Palette's Size // Each time you click the button return 4 colors
clickcountaddColors = -1;
function addColors() {
    clickcountaddColors += 1;
    var element = searchElements();
    if (clickcountaddColors > 15) {
        clickcountaddColors = 0;
        var limit = element[0].childElementCount;
        for(i = 1; i < limit; i++) {
            var color = document.getElementById("color4" + i)
            element[0].removeChild(color)
        }
    }
    else if (clickcountaddColors == 0){
        var colorFour =  document.createElement("div");
        colorFour.id = "color4" + clickcountaddColors;
        colorFour.style.display = "flex";
        colorFour.style.justifyContent = "center";
        element[0].appendChild(colorFour);
        var color4 = document.getElementById("color4" + clickcountaddColors);
        for (i = 0; i < 4; i++) {
            var color = document.createElement("div");
            color4.appendChild(color);
            color.id = "color" + (i + clickcountaddColors*4);
            color.className = "color";
            if (i == 0){
                color.style.backgroundColor = "black";
            }
            else {
                color.style.backgroundColor = setcollor();
            }
        }
    }
    else {
        var colorFour =  document.createElement("div");
        colorFour.id = "color4" + clickcountaddColors;
        colorFour.style.display = "flex";
        colorFour.style.justifyContent = "center";
        element[0].appendChild(colorFour);
        var color4 = document.getElementById("color4" + clickcountaddColors);
        for (i = 0; i < 4; i++) {
            var color = document.createElement("div");
            color4.appendChild(color);
            color.id = "color" + (i + clickcountaddColors*4);
            color.className = "color";
            color.style.backgroundColor = setcollor();
        }
    }
    pickPaletteColor();
}

// Change Palette's Colors
function changeCollor() {
    var element = searchElements();
    for (i = 0; i < element[0].childElementCount; i++){
        for (l = 0; l < element[0].childNodes[i].childElementCount; l++){
            var color = element[0].childNodes[i].childNodes[l];
            color.style.backgroundColor = setcollor();
        }
    }
    element[0].childNodes[0].childNodes[0].style.backgroundColor = "black";
}

// Canvas Size
function canvasSize(init) {
    cleanCanvas();
    var element = searchElements();
    if (init == 5){
        var inputvalue = 5;
    }
    else {
        var inputvalue = parseInt(element[1].value);
    }
    if (inputvalue == NaN){
        alert("Select a valid value, please!");
    }
    else {
        if (inputvalue > 20){
            alert("20 is the maximum size");
        }
        else{
            for (i = 0; i < inputvalue; i++){
                var row = document.createElement("tbody");
                row.id = "row" + i;
                row.className = "row";
                for (l = 0; l < inputvalue; l++){
                    var pixel = document.createElement("td");
                    pixel.id = "pixel" + i + l;
                    pixel.className = "pixel";
                    row.appendChild(pixel);
                }
                element[2].appendChild(row);
            }
        }
    }   
}

// Erase Exist Canvas
function cleanCanvas() {
    var element = searchElements();
    for (i = 0; element[2].childElementCount; i ++){
        element[2].removeChild(element[2].childNodes[i]);
        i = -1;
    }
}    
   
// Pick the palette color
var cor = new String();
var countclick = 0;
function pickPaletteColor() {
    var element = searchElements();
    for (i = 0; i < element[0].childElementCount; i++){
        for (l = 0; l < element[0].childNodes[i].childElementCount; l++){
            element[0].childNodes[i].childNodes[l].addEventListener("click", function() {
                var collor = this.style.backgroundColor
                paintCanvas(collor);
                cor = collor;
                countclick += 1;
                if ((countclick == 1) && (this.id !== "selected-item")){
                    reviewSelect()
                    this.id = "selected-item";
                }
                else if ((countclick == 1) && (this.id == "selected-item")){
                    reviewSelect();
                }   
                else if ((countclick == 2) && (this.id !== "selected-item")){
                    reviewSelect();
                    this.id = "selected-item"
                    countclick = 0;
                }
                else if ((countclick == 2) && (this.id == "selected-item")){
                    reviewSelect();
                    countclick = 0;
                }
            })
        }
    }
}

// Clean the other select color
var countReviw = -1;
function reviewSelect(){
    var element = searchElements();
    for (i = 0; i < element[0].childElementCount; i++){
        countReviw += 1;
        for (l = 0; l < element[0].childNodes[i].childElementCount; l++){
            element[0].childNodes[i].childNodes[l].id = "color" + (l +  countReviw*4);
        }
    }
    countReviw = -1;
}

// Paint Canvas
function paintCanvas(collor) {
    var element = searchElements();
    for (i = 0; i < element[2].childElementCount; i++){
        for (l = 0; l < element[2].childNodes[i].childElementCount; l++){
            element[2].childNodes[i].childNodes[l].addEventListener("click", function() {
                this.style.backgroundColor = collor;
            })
        }
    }
}

// Erase Button 
function cleanCanvasCollors() {
    var element = searchElements();
    for (i = 0; i < element[2].childElementCount; i++){
        for (l = 0; l < element[2].childNodes[i].childElementCount; l++){
            element[2].childNodes[i].childNodes[l].style.backgroundColor = "white";
        }
    }
}

// Random Colors to Canvas
function party() {
    var element = searchElements();
    for (i = 0; i < element[2].childElementCount; i ++){
        for (l = 0; l < element[2].childNodes[i].childElementCount; l++){
            element[2].childNodes[i].childNodes[l].style.backgroundColor = setcollor();
        }
    }
}

// Random Colors to Random Pixels
function fillColors (){
    var element = searchElements();
    var randomNumRow = Math.floor(Math.random()*element[2].childElementCount);
    var randomNumPixel = Math.floor(Math.random()*element[2].childElementCount);
    element[2].childNodes[randomNumRow].childNodes[randomNumPixel].style.backgroundColor = setcollor();
}

// Random Profile max 70% of the canvas min 30% of the canvas
function profile(){
    cleanCanvasCollors()
    var element = searchElements();
    var area = element[2].childElementCount * element[2].childElementCount;
    var randomNum = Math.floor((Math.random()*(area*0.4)) + (area*0.3));
    for (i = 0; i < randomNum; i++){
        var randomNumRow = Math.floor(Math.random()*element[2].childElementCount);
        var randomNumPixel = Math.floor(Math.random()*element[2].childElementCount);
        element[2].childNodes[randomNumRow].childNodes[randomNumPixel].style.backgroundColor = cor;
    }
}

window.onload = function () {
    addColors(); // Set the firs 4 colors
    canvasSize(5); // Display a Canvas 5X5 , 25 pixels;
    pickPaletteColor() // Set click events on Palette
} 
