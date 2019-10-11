window.onload = function () {
    function backgroundColorCell() {
        for (let i = 0; i < 25; i++) {
            let squareSelector = document.getElementsByTagName("td")[i]
            squareSelector.addEventListener("click", function () {
                squareSelector.style.backgroundColor = selectColor();
            })
        }
    }
    backgroundColorCell();
    function selectColor() {
        for (let i = 1; i <= 4; i++) {
            let colorcheck = document.getElementById("color" + i).checked;
            if (colorcheck) {
                let colorfinal = document.getElementById("color" + i).value;
                return colorfinal;
            }


        };
    }
    var btnRefresh = document.getElementById("button");
    btnRefresh.addEventListener("click", function clickMouseLocation() {
        window.location.reload();
    })

}
