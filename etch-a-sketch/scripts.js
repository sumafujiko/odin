function createGrid() {
    var grid = document.getElementById("grid");

    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            var div = document.createElement("div");
            grid.appendChild(div);
        }
    }
}

createGrid();

document.getElementById("grid").addEventListener("mouseover", hover);

function hover(div) {
    div.target.style.backgroundColor = "black";
}