//board
const gridSize = document.querySelector('#grid-size');
const gridSizeNum = document.querySelector('#grid-size-number')
const drawingBoard = document.querySelector("#drawing-board")
const colorPicker = document.querySelector('#color-picker');
const colorCurrent = document.querySelector('#current-color');

const eraserBtn = document.querySelector('#eraser-button');
const clearBtn = document.querySelector('#clear-button')

const autoDrawBtn = document.querySelector('#auto-draw');

let divPerSide = gridSize.value;
let colorPicked = colorPicker.value;
let autoClicked = true;
let eraserClicked = false;


function windowLoad(divNum) {
    const newDivSide = drawingBoard.offsetHeight/divNum;
    for (let i = 0; i < divNum**2; i++) {
        const newDiv = drawingBoard.appendChild(document.createElement("div"));
        newDiv.style.height = `${newDivSide}px`;
        newDiv.style.width = `${newDivSide}px`;
    } 
}

function btnClickEffectOn(elem) {
    elem.style.backgroundColor = 'black';
    elem.style.color = 'white';
}

function btnClickEffectOff(elem) {
    elem.style.backgroundColor = 'white';
    elem.style.color = 'black';
}

function refreshGrid(val){
    drawingBoard.replaceChildren();
    windowLoad(val)
}

colorPicker.addEventListener('change', (e) => {
    colorCurrent.style.backgroundColor = e.target.value;
    colorPicked = e.target.value;
})

eraserBtn.addEventListener('click', () => {
    if (!eraserClicked) {
        colorPicked = '#eeeeee';
        btnClickEffectOn(eraserBtn);
       
    } else {
        colorPicked = colorPicker.value;
        btnClickEffectOff(eraserBtn);
        
    }

    eraserClicked = !eraserClicked;
})

clearBtn.addEventListener('click', () => {
    refreshGrid(divPerSide);
})


gridSize.addEventListener('input', (e) => {
    gridSizeNum.textContent = `${e.target.value}X${e.target.value}`;
})

gridSize.addEventListener('change', (e) => {
    refreshGrid(e.target.value);
    divPerSide = e.target.value;
})



const mouseOverEvent = (e) => {
    if (e.target.id !== drawingBoard.id){
        e.target.style.backgroundColor = colorPicked; 
    }
}


autoDrawBtn.addEventListener('click', () => {
    if (autoClicked) {
        btnClickEffectOff(autoDrawBtn);
        drawingBoard.removeEventListener('mousemove', mouseOverEvent )
    } else {
        btnClickEffectOn(autoDrawBtn);
        drawingBoard.addEventListener('mousemove', mouseOverEvent);
    }

    autoClicked = !autoClicked;
})


colorCurrent.style.backgroundColor = colorPicker.value;
gridSizeNum.textContent = `${gridSize.value}X${gridSize.value}`;
windowLoad(divPerSide);
drawingBoard.addEventListener('mousemove', mouseOverEvent);
