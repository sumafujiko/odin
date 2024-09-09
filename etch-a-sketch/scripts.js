function createGrid(gridSize) {
    var grid = document.getElementById("grid");
    grid.innerHTML = "";

    const divSize = 960 / gridSize;
    for (i = 0; i < gridSize * gridSize; i++) {
            const div = document.createElement("div");
            div.style.width = `${divSize}px`;
            div.style.height = `${divSize}px`;
            div.style.backgroundColor = "red";
            grid.appendChild(div);
    }
}

createGrid(16);

document.getElementById("grid").addEventListener("mouseover", function(event) {
    if (event.target.tagName === 'DIV') {
        event.target.style.backgroundColor = "black";
    }
});
document.getElementById("reset").addEventListener("click", reset);

function hover(div) {
    div.target.style.backgroundColor = "black";
}

function resetGrid() {
    let gridSize = parseInt(prompt("How many squares per side would you like?"), 10);
    if (isNaN(gridSize) || gridSize <= 0) {
        alert("Please enter a valid number.");
        return;
    }
    createGrid(gridSize);
}