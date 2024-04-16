
//Slider 
const slider = document.getElementById('range')
const gridSize = document.getElementById('gridsize')
gridSize.textContent = `Grid Size: ${slider.value}x${slider.value}`
let thisvalue = slider.value
let cellSize = 640 / slider.value
slider.oninput = function() {
    thisvalue = this.value
    gridSize.textContent = `Grid Size: ${this.value}x${this.value}`
    cellSize = 640 / thisvalue
} 
slider.onchange = () => remakeGrid()


//Make Grid
const gridContent = document.getElementById('gridContent')
const rows = document.getElementsByClassName('gridRow')
const cells = document.getElementById('gridCell')
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
        gridContent.appendChild(createCell).id = 'gridCell'
        //Defining cell size upon creation:
        createCell.style.cssText += `width:${cellSize}px;height:${cellSize}px;`
        //Event listeners to color grid square
        createCell.addEventListener('mouseover', changeColor)
        createCell.addEventListener('mousedown', changeColor)
    }}}

//Clear Grid
const clearBtn = document.getElementById('cleargrid')

function clearGrid() {
    while (gridContent.firstChild) {
        gridContent.removeChild(gridContent.firstChild)
    }
}

function remakeGrid() {
    clearGrid()
    makeGrid()
}

//Change grid square color
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


let currentColor = '#333333;'
const eraser = '#f5f2f0'


const colorPicker = document.getElementById('colorpicker')
function setNewColor(color) {currentColor = color}
colorPicker.oninput = (e) => setNewColor(e.target.value)


const brushBtn = document.getElementById('brush')
brushBtn.addEventListener('click', () => {eraserMode = false})

const eraserBtn = document.getElementById('eraser')
let eraserMode = false
eraserBtn.addEventListener('click', () => {eraserMode = true})


function changeColor(e) {
if (e.type === 'mouseover' && !mouseDown) return
else if (eraserMode == true) {
    e.target.style.cssText += `background-color:${eraser};`
}else {
    e.target.style.cssText += `background-color:${currentColor};`
}}



clearBtn.addEventListener('click', () => {remakeGrid()})

addEventListener('load', () => {makeGrid()})



