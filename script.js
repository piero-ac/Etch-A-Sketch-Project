const gridSizePicker = document.getElementById("gridsize-picker");
const gridSizeLabel = document.getElementById("gridsize-label");

// Grid Size Picker event listener to update the text showing current grid size
gridSizePicker.addEventListener("change", function() {
    let currentGridSize = gridSizePicker.value;
    gridSizeLabel.textContent = currentGridSize + " x " + currentGridSize;
});