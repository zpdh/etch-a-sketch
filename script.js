let slider = document.getElementById('range')
let gridSize = document.getElementById('gridsize')
gridSize.textContent = `Grid Size: ${slider.value}x${slider.value}`

slider.oninput = function() {
    gridSize.textContent = `Grid Size: ${this.value}x${this.value}`
}