
const colorCurrent = document.querySelector('#current-color');

const colorPicker = document.querySelector('#color-picker');
const grayScaleBtn = document.querySelector('#grayscale-button');
const rainbowBtn = document.querySelector('#rainbow-button');
const artisticBtn = document.querySelector('#artistic-button');
const eraserBtn = document.querySelector('#eraser-button');

const drawingBoard = document.querySelector("#drawing-board");





let colorPicked = colorPicker.value;
let currentColor = colorPicker.value;
let grayClicked = false;
let rainbowClicked = false;
let eraserClicked = false;

function disableBtn(elem) {
    elem.style.backgroundColor = 'gray';
    elem.style.cursor = 'not-allowed';
    elem.disabled = true;
}

function enableBtn(elem) {
    elem.style.backgroundColor = 'white';
    elem.style.cursor = 'pointer';
    elem.disabled = false;
}

function btnClickEffectOn(elem) {
    elem.style.backgroundColor = 'black';
    elem.style.color = 'white';
}

function btnClickEffectOff(elem) {
    elem.style.backgroundColor = 'white';
    elem.style.color = 'black';
}

function colorRandomEffects(btnfn, elem, gradient, fn){
    btnfn(elem);
    colorCurrent.style.background = gradient;
    fn(artisticBtn);
    fn(colorPicker);
}




const rainbowEffects = () => {
    colorPicked = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
   
}

const grayEffects = () => {
    const randColor = Math.floor(Math.random()*255);
    colorPicked = `rgb(${randColor}, ${randColor}, ${randColor})`;
}



colorPicker.addEventListener('change', e => {
    colorPicked = e.target.value;
    colorCurrent.style.background = e.target.value;
});





grayScaleBtn.addEventListener('click', ()=> {
    if (rainbowClicked) {
        drawingBoard.removeEventListener('mouseout', rainbowEffects);
        btnClickEffectOff(rainbowBtn);
        rainbowClicked = !rainbowClicked;
    }
    
    const grayScaleGradient = `linear-gradient(111deg, rgba(33,33,33,1) 0%, rgba(228,228,228,1) 100%)`;
    if (!grayClicked) {
        drawingBoard.addEventListener('mouseout', grayEffects);
        colorRandomEffects(btnClickEffectOn, grayScaleBtn, grayScaleGradient, disableBtn);
    } else {
        drawingBoard.removeEventListener('mouseout', grayEffects);
        colorRandomEffects(btnClickEffectOff, grayScaleBtn, currentColor, enableBtn);
        colorPicked = currentColor;
    }
    grayClicked = !grayClicked;
})

rainbowBtn.addEventListener('click', () => {
    if (grayClicked) {
        drawingBoard.removeEventListener('mouseout', grayEffects);
        btnClickEffectOff(grayScaleBtn);
        grayClicked = !grayClicked;
    }


    const rbScaleGradient = `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`;
    if (!rainbowClicked) {
        drawingBoard.addEventListener('mouseout', rainbowEffects);
        colorRandomEffects(btnClickEffectOn, rainbowBtn, rbScaleGradient, disableBtn);
    } else {
        drawingBoard.removeEventListener('mouseout', rainbowEffects);
        colorRandomEffects(btnClickEffectOff, rainbowBtn, currentColor, enableBtn);
        colorPicked = currentColor;
    }
    rainbowClicked = !rainbowClicked;
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




// disabledBtn(grayScaleBtn);
// disabledBtn(rainbowBtn);
// disabledBtn(artisticBtn);


export { colorPicked, btnClickEffectOff, btnClickEffectOn, drawingBoard }