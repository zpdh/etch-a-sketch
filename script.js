
//Slider 
const slider = document.getElementById('range')
const gridSize = document.getElementById('gridsize')
gridSize.textContent = `Grid Size: ${slider.value}x${slider.value}`
let thisvalue = slider.value
let cellSize = 480 / slider.value
slider.oninput = function() {
    thisvalue = this.value
    gridSize.textContent = `Grid Size: ${this.value}x${this.value}`
    cellSize = 480 / thisvalue
}

//Grid
const gridContent = document.getElementById('gridContent')
const rows = document.getElementsByClassName('gridRow')
const cells = document.getElementById('gridCell')
function makeGrid() {
    makeRows()
    makeCells()
    let allCells = document.querySelectorAll('#gridCell')
    allCells.forEach( cell => {
        cell.style.cssText += `width:${cellSize}px;height:${cellSize}px;`
    })
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
        gridContent.appendChild(createCell).id = 'gridCell'
    }}}

addEventListener('load', () => {makeGrid()})


