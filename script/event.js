//board
const gridSize = document.querySelector('#grid-size');
const gridSizeNum = document.querySelector('#grid-size-number')
const drawingBoard = document.querySelector("#drawing-board")
const colorPicker = document.querySelector('#color-picker');
const colorCurrent = document.querySelector('#current-color');

const divPerSide = gridSize.value;
let colorPicked = colorPicker.value;
let action = 'mousemove';


function windowLoad(divNum) {
    const newDivSide = drawingBoard.offsetHeight/divNum;
    for (let i = 0; i < divNum**2; i++) {
        const newDiv = drawingBoard.appendChild(document.createElement("div"));
        newDiv.style.height = `${newDivSide}px`;
        newDiv.style.width = `${newDivSide}px`;

    }

    

    drawingBoard.addEventListener(action, (e) => {
            if (e.target.id !== drawingBoard.id){
                e.target.style.backgroundColor = colorPicked;
        }
    })
}



colorPicker.addEventListener('change', (e) => {
    colorCurrent.style.backgroundColor = e.target.value;
    colorPicked = e.target.value;
})

gridSize.addEventListener('input', (e) => {
    gridSizeNum.textContent = `${e.target.value}X${e.target.value}`;
})


gridSize.addEventListener('change', (e) => {
    drawingBoard.replaceChildren();
    windowLoad(e.target.value);
})



colorCurrent.style.backgroundColor = colorPicker.value;
gridSizeNum.textContent = `${gridSize.value}X${gridSize.value}`;
windowLoad(divPerSide);