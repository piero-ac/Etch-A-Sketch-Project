const sketchBoard = document.getElementById("sketch-board");
const gridSizePicker = document.getElementById("gridsize-picker");
const gridSizeLabel = document.getElementById("gridsize-label");
const colorPicker = document.getElementById("color-picker");
const clearButton = document.getElementById("clear-btn");
const eraserButton = document.getElementById("eraser-btn");
const sketchBoardWidth = 500;

let sketchingColor = colorPicker.value;
let currentGridSize = parseInt(gridSizePicker.value);

// Run the populateGrid function on window load
window.onload = populateGrid(currentGridSize);

// Grid Size Picker event listener to update the text showing current grid size
gridSizePicker.addEventListener("change", function() {
    currentGridSize = gridSizePicker.value;
    gridSizeLabel.textContent = currentGridSize + " x " + currentGridSize;
});

// Event listener to update the number of square in the sketchboard

// Event listener to clear the sketchboard



function populateGrid(currentGridSize) {
    // Use for loop to create necessary number of grid squares
    // and add them to the sketch board
    const numberOfSquares = currentGridSize**2;
    for(let i = 0; i < numberOfSquares; i++){
        const gridSquare = createGridSquare(currentGridSize);
        sketchBoard.appendChild(gridSquare);
    }
}

function createGridSquare(currentGridSize){
    const gridSquareHeightAndWidth = sketchBoardWidth / currentGridSize;
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.style.height = gridSquareHeightAndWidth + "px";
    gridSquare.style.width = gridSquareHeightAndWidth + "px";
    gridSquare.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = sketchingColor;
    });
    return gridSquare;
}

// function clearBoard(){
//     const gridSquares = sketchBoard.
// }

