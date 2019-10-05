const gridWrapper = document.querySelector('.grid-wrapper');
const wrapper = document.querySelector('.wrapper');
const resetButton = document.querySelector('#reset-button');
let lbreak = document.createElement('br');
let size = 16;
resetButton.addEventListener('click', (e) => {
    size = prompt('How many squares per side?');
    removeGrid();
    createGrid(size);

})
function removeGrid() {
    while(gridWrapper.firstChild) {
        gridWrapper.removeChild(gridWrapper.firstChild);
         
    }
}


function Cell() {
    this.cell = document.createElement('div');
    this.hue = Math.floor(Math.random() * 360);
    this.lightness = 90;
    this.darken = function() {
        this.lightness -=10;
    }
    this.makeColor = function() {
        return 'hsla(' + this.hue + ',' + 100 + '%,' + this.lightness + '%' + ',' + 1.0 + ')';
    }
}
function createGrid(size) {
for(let i = 0; i < size; i++) {
    let gridRow = document.createElement('div');
    for(let j = 0; j < size; j++) {
        let newCell = new Cell();
        let square = new Cell().cell;
        square.classList.add('grid');
        square.addEventListener('mouseover',(e) => {
            square.style.backgroundColor = newCell.makeColor();
            newCell.darken();
         
      
    });
        gridRow.classList.add('grid-row'); 
        gridRow.appendChild(square);
  
    }
    gridWrapper.appendChild(gridRow); 
}
}
createGrid(16);


