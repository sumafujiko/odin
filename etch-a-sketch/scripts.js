//Two issues with the code:
//1. One extra box gets created at the bottom.
//2. A white box is created to the right that is gridSize - 1 after hovering.

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(gridSize) {
    var grid = document.getElementById("grid");
    grid.innerHTML = "";

    const divSize = 960 / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++){
        const div = document.createElement("div");
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.style.opacity = 1;
        div.dataset.opacity = 1;
        div.style.backgroundColor = randomColor();
        grid.appendChild(div);
    }
}

createGrid(16);

document.getElementById("grid").addEventListener("mouseover", function (event) {
    if (event.target.tagName === 'DIV') {
        event.target.style.backgroundColor = "white";
    }
});

function resetGrid() {
    let gridSize = parseInt(prompt("How many squares per side would you like?"), 16);
    if (isNaN(gridSize) || gridSize <= 0) {
        alert("Please enter a valid number.");
        return;
    }
    createGrid(gridSize);
}