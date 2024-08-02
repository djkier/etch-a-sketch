//board
const drawingBoard = document.querySelector("#drawing-board");
const divPerSide = 10;


const divs = document.querySelectorAll('#drawing-board div');
const colorPicker = document.querySelector('#color-picker');
const colorCurrent = document.querySelector('#current-color');
let colorPicked = colorPicker.value;
const action = 'mousemove';


//default styles
colorCurrent.style.backgroundColor = colorPicker.value;

for (let i = 0; i < (divPerSide**2); i++) {
    const newDiv = drawingBoard.appendChild(document.createElement("div"));
    newDiv.style.height = `${drawingBoard.clientWidth/divPerSide}px`
    newDiv.style.width = `${drawingBoard.clientWidth/divPerSide}px`
    newDiv.style.border = `0.5px solid rgba(0, 0, 0, 0.1)`
}



drawingBoard.addEventListener(action, (e) => {
    e.target.style.backgroundColor = colorPicked;
})


colorPicker.addEventListener('input', (e) => {
    colorCurrent.style.backgroundColor = e.target.value;
    colorPicked = e.target.value;
})