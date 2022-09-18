const container = document.querySelector('.container');
container.classList.add('grid');
const grid = document.querySelector('.grid');

function createTrail(e) {
    this.classList.add('trailEffect');
    this.setAttribute('style', 'background-color:blue');
}

function eraseCurrentGrid() {
    const preExistingGrid = document.querySelectorAll('.grid > div');
    preExistingGrid.forEach(preExistingGridElement => {
        preExistingGridElement.remove();
    });
    return;
}

function generateGrid(numberOfGridElements) {
    for(i = 0; i < numberOfGridElements; i++) {
        const gridElements = [];
        gridElements[i] = document.createElement('div');
        gridElements[i].classList.add(`gridElement${i}`);
        gridElements[i].setAttribute('style', 'background-color: black;');
        gridElements[i].addEventListener('mouseover', createTrail);
        grid.appendChild(gridElements[i]);
    }
}

function enterGridDimension(e) {
    const gridDimension = parseInt(prompt('Enter dimension of grid:'));
    if (gridDimension > 100) {
        alert('Please click again and enter a number smaller than 101');
        return;
    }
    grid.setAttribute('style', `display: grid; height: 960px; width: 960px; grid-template-columns: repeat(${gridDimension}, 1fr); grid-template-rows: repeat(${gridDimension}, 1fr); grid-column-gap: 2px; grid-row-gap: 2px`);
    const numberOfGridElements = gridDimension*gridDimension;
    eraseCurrentGrid();
    generateGrid(numberOfGridElements);
}

const button = document.querySelector('button');
button.addEventListener('click', enterGridDimension);

