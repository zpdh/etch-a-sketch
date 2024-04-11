
//Slider 
const slider = document.getElementById('range')
const gridSize = document.getElementById('gridsize')
gridSize.textContent = `Grid Size: ${slider.value}x${slider.value}`

slider.oninput = function() {
    gridSize.textContent = `Grid Size: ${this.value}x${this.value}`
}

//Grid
const gridContent = document.getElementById('gridContent')
const rows = document.getElementsByClassName('gridRow')
const cells = document.getElementsByClassName('gridCell')

function makeGrid() {
    makeRows()
    makeCells()
}

function makeRows() {
for (i = 0; i < slider.value ;i++) {
    const createRow = document.createElement('div')
    gridContent.appendChild(createRow).className = 'gridRow'
}}

function makeCells() {
    for (i = 0; i < rows.length ; i++) {
        for (j = 0; j < slider.value; j++) {
        const createCell = document.createElement('div')
        gridContent.appendChild(createCell).className = 'gridCell'
    }}}

addEventListener('load', () => {makeGrid()})


