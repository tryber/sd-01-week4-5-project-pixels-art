var count = 0;
function tableSize(){
    count += 1;
    // Create a Row
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
            select.appendChild(collum);
        }
    }
}
function changeCollor(){
    for (i = 1; i <= 10; i++){
        var div = getElementById("div" + i)
        
    }
}
