const container = document.querySelector('.container');


function calcSquareSize(squareCount){
    let computedStyle = getComputedStyle(container);
    return parseInt(computedStyle.height) / squareCount;
}

function setContainerSize(intSize){
    document.documentElement.style.setProperty('--size', `${intSize}px`);
}



function getSquare(size){
    const square = document.createElement('div')
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = nextColor();
    })
    square.style.height = size + 'px';
    square.style.width = size + 'px';
    return square;
}

let currColor = 0;
let hslColor = 360;

function nextColor(){
    currColor++;
    return `hsl(${currColor % hslColor}, 100%, 50%)`;
}

let noOfSquares = 128;

const squareSize = calcSquareSize(noOfSquares)
for (let index = 0; index < noOfSquares*noOfSquares; index++) {
    container.append(getSquare(squareSize));
}



