const colorCurrent = document.querySelector('#current-color');

const colorPicker = document.querySelector('#color-picker');
const grayScaleBtn = document.querySelector('#grayscale-button');
const rainbowBtn = document.querySelector('#rainbow-button');
const artisticBtn = document.querySelector('#artistic-button');
const eraserBtn = document.querySelector('#eraser-button');


let colorPicked = colorPicker.value;
let eraserClicked = false;

function btnClickEffectOn(elem) {
    elem.style.backgroundColor = 'black';
    elem.style.color = 'white';
}

function btnClickEffectOff(elem) {
    elem.style.backgroundColor = 'white';
    elem.style.color = 'black';
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


colorCurrent.style.backgroundColor = colorPicker.value;


function disabledBtn(elem) {
    elem.style.backgroundColor = 'gray';
    elem.style.cursor = 'not-allowed';
}

disabledBtn(grayScaleBtn);
disabledBtn(rainbowBtn);
disabledBtn(artisticBtn);


export { colorPicked, btnClickEffectOff, btnClickEffectOn }