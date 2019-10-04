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
        console.log('hahahahaha');  
    }
}
function createGrid(size) {
for(let i = 0; i < size; i++) {
    let gridRow = document.createElement('div');
    for(let j = 0; j < size; j++) {
       
        let square = document.createElement('div');
        square.classList.add('grid');
        square.addEventListener('mouseover',(e) => {
        square.classList.add('change-color');
    });
    gridRow.classList.add('grid-row');
    gridRow.appendChild(square);
  
    }

    gridWrapper.appendChild(gridRow);

    
}
}
createGrid(16);