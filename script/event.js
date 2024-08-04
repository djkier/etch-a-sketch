//board
import { colorPicked, btnClickEffectOff, btnClickEffectOn,drawingBoard } from './colorButtons.js'

const gridSize = document.querySelector('#grid-size');
const gridSizeNum = document.querySelector('#grid-size-number')



const clearBtn = document.querySelector('#clear-button');
const autoDrawBtn = document.querySelector('#auto-draw');

let divPerSide = gridSize.value;
let autoClicked = true;



function windowLoad(divNum) {
    const newDivSide = drawingBoard.offsetHeight/divNum;
    for (let i = 0; i < divNum**2; i++) {
        const newDiv = drawingBoard.appendChild(document.createElement("div"));
        newDiv.style.height = `${newDivSide}px`;
        newDiv.style.width = `${newDivSide}px`;
        newDiv.className = i;
    } 
}



function refreshGrid(val){
    drawingBoard.replaceChildren();
    windowLoad(val)
}





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



gridSizeNum.textContent = `${gridSize.value}X${gridSize.value}`;
drawingBoard.addEventListener('mousemove', mouseOverEvent);
windowLoad(divPerSide);

