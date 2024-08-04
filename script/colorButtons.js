
const colorCurrent = document.querySelector('#current-color');

const colorPicker = document.querySelector('#color-picker');
const grayScaleBtn = document.querySelector('#grayscale-button');
const rainbowBtn = document.querySelector('#rainbow-button');
const artisticBtn = document.querySelector('#artistic-button');
const eraserBtn = document.querySelector('#eraser-button');
const drawingBoard = document.querySelector("#drawing-board");


let activeColor = colorPicker.value;
let colorPicked = colorPicker.value;

let count = 0;
let startingRandom = 0;
let increasingCount = 0;




const opacityEffect = (e) => {
    count++;
    if (e.target.id !== drawingBoard.id) {
        e.target.style.opacity = `calc(${count/200})`;
    }
}

const rainbowEffects = () => {
    count++;
    count === 360 ? count = 0 : count;
    increasingCount = startingRandom + count;
    colorPicked = `hsl(${(increasingCount%360)*2}, 80%, 40%)`
  
   
}

const grayEffects = () => {
    startingRandom % 2 === 0 ? count++ : count--;
    if (count > 220) {
        count = 0;
    }
    if (count < 0) {
        count = 220;
    }
    console.log(startingRandom);
    colorPicked = `rgb(${count}, ${count}, ${count})`;
}

const button = {
    colorChanger: {
        btn: colorPicker,
        color: colorPicker.value,
        activeColor: colorPicker.value,
        isActive: true,
        },
    grayscale: {
        btn: grayScaleBtn,
        color: grayEffects,
        activeColor: `linear-gradient(90deg, rgba(33,33,33,1) 0%, rgba(228,228,228,1) 100%)`,
        isActive: false,
        },
    rainbow: {
        btn: rainbowBtn,
        color: rainbowEffects,
        activeColor: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
        isActive: false,
        },
    artistic: {
        btn: artisticBtn,
        color: opacityEffect,
        activeColor: 'black',
        isActive: false,
    },
    eraser: {
        btn: eraserBtn,
        color: '#eeeeee',
        activeColor: '#eeeeee',
        isActive: false,
        },
    }

const keys = Object.keys(button);


colorCurrent.style.background = button.colorChanger.color;


function btnClickEffectOn(elem) {
    if (elem !== colorPicker) {
        elem.style.backgroundColor = 'black';
        elem.style.color = 'white';
    }
}

function btnClickEffectOff(elem) {
    elem.style.backgroundColor = 'white';
    elem.style.color = 'black';
}

function activateOn(elem){
    btnClickEffectOn(elem.btn);
    elem.isActive = !elem.isActive;
    if (elem === button.artistic) {
        colorCurrent.style.background = `linear-gradient(90deg, rgba(228,228,228,0.2) 5%, ${colorPicked} 100%)`
    } else {
        colorCurrent.style.background = elem.activeColor;
    }
    
    if (elem === button.grayscale || elem === button.rainbow || elem === button.artistic) {
        drawingBoard.addEventListener('mouseout', elem.color)
    } else {
        colorPicked = elem.color;
    }

    
}

function activateOff(elem){
    count = 0;
    btnClickEffectOff(elem.btn);
    elem.isActive = false;

    if (elem === button.colorChanger) {
        colorCurrent.style.background = '';
        colorCurrent.style.backgroundColor = button.colorChanger.color;
    }

    if (elem === button.grayscale || elem === button.rainbow || elem === button.artistic) {
        drawingBoard.removeEventListener('mouseout', elem.color);
        colorPicked = activeColor;
        
    } 
}



function activated(btn){
    startingRandom = Math.floor(Math.random()*360);
    
    for (let keyst of keys) {
        if (button[keyst].btn === btn) {
            if (!button[keyst].isActive) {
                activateOn(button[keyst]);
            } else {
                activateOff(button[keyst]);
            
            }
        } else {
            activateOff(button[keyst]);
        }
    }
}

button.colorChanger.btn.addEventListener('click', () => activated(button.colorChanger.btn))

button.colorChanger.btn.addEventListener('change', (e) => {
    button.colorChanger.color = e.target.value;
    colorCurrent.style.backgroundColor = e.target.value;
    activeColor = e.target.value;
    colorPicked = e.target.value
});

button.grayscale.btn.addEventListener('click', () => activated(button.grayscale.btn));

button.rainbow.btn.addEventListener('click', () => activated(button.rainbow.btn));

button.eraser.btn.addEventListener('click', () => activated(button.eraser.btn));

button.artistic.btn.addEventListener('click', () => activated(button.artistic.btn));


export { colorPicked, btnClickEffectOff, btnClickEffectOn, drawingBoard }

