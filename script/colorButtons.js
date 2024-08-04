
const colorCurrent = document.querySelector('#current-color');

const colorPicker = document.querySelector('#color-picker');
const grayScaleBtn = document.querySelector('#grayscale-button');
const rainbowBtn = document.querySelector('#rainbow-button');
const artisticBtn = document.querySelector('#artistic-button');
const eraserBtn = document.querySelector('#eraser-button');
const drawingBoard = document.querySelector("#drawing-board");

const rainbowEffects = () => {
    colorPicked = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
   
}

const grayEffects = () => {
    const randColor = Math.floor(Math.random()*255);
    colorPicked = `rgb(${randColor}, ${randColor}, ${randColor})`;
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
        activeColor: `linear-gradient(111deg, rgba(33,33,33,1) 0%, rgba(228,228,228,1) 100%)`,
        isActive: false,
        },
    rainbow: {
        btn: rainbowBtn,
        color: rainbowEffects,
        activeColor: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
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
let colorPicked = button.colorChanger.color;
let activeColor = button.colorChanger.color;
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
    colorCurrent.style.background = elem.activeColor;
    if (elem === button.grayscale || elem === button.rainbow) {
        drawingBoard.addEventListener('mouseout', elem.color);
    } else {
        colorPicked = elem.color;
    }

    
}

function activateOff(elem){
    btnClickEffectOff(elem.btn);
    elem.isActive = false;

    if (elem === button.colorChanger) {
        colorCurrent.style.background = '';
        colorCurrent.style.backgroundColor = button.colorChanger.color;
    }

    if (elem === button.grayscale || elem === button.rainbow) {
        drawingBoard.removeEventListener('mouseout', elem.color);
    } else {
        colorPicked = activeColor;
    }
    
}

function activated(btn){
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

button.colorChanger.btn.addEventListener('click', () => {
    activated(button.colorChanger.btn)
})

button.colorChanger.btn.addEventListener('change', (e) => {
    button.colorChanger.color = e.target.value;
    colorCurrent.style.backgroundColor = e.target.value;
    activeColor = e.target.value;
    colorPicked = e.target.value
});

button.grayscale.btn.addEventListener('click', () => {
    activated(button.grayscale.btn);
});

button.rainbow.btn.addEventListener('click', () => {
    activated(button.rainbow.btn);
});

button.eraser.btn.addEventListener('click', () => {
    activated(button.eraser.btn);
   
});







export { colorPicked, btnClickEffectOff, btnClickEffectOn, drawingBoard }


// let grayClicked = false;
// let rainbowClicked = false;
// let eraserClicked = false;

// function disableBtn(elem) {
//     elem.style.backgroundColor = 'gray';
//     elem.style.cursor = 'not-allowed';
//     elem.disabled = true;
// }

// function enableBtn(elem) {
//     elem.style.backgroundColor = 'white';
//     elem.style.cursor = 'pointer';
//     elem.disabled = false;
// }



// function colorRandomEffects(btnfn, elem, gradient, fn){
//     btnfn(elem);
//     colorCurrent.style.background = gradient;
//     fn(artisticBtn);
//     fn(colorPicker);
// }







// colorPicker.addEventListener('change', e => {
//     colorPicked = e.target.value;
//     colorCurrent.style.background = e.target.value;
// });





// grayScaleBtn.addEventListener('click', ()=> {
//     if (rainbowClicked) {
//         drawingBoard.removeEventListener('mouseout', rainbowEffects);
//         btnClickEffectOff(rainbowBtn);
//         rainbowClicked = !rainbowClicked;
//     }
    
//     const grayScaleGradient = `linear-gradient(111deg, rgba(33,33,33,1) 0%, rgba(228,228,228,1) 100%)`;
//     if (!grayClicked) {
//         drawingBoard.addEventListener('mouseout', grayEffects);
//         colorRandomEffects(btnClickEffectOn, grayScaleBtn, grayScaleGradient, disableBtn);
//     } else {
//         drawingBoard.removeEventListener('mouseout', grayEffects);
//         colorRandomEffects(btnClickEffectOff, grayScaleBtn, currentColor, enableBtn);
//         colorPicked = currentColor;
//     }
//     grayClicked = !grayClicked;
// })

// rainbowBtn.addEventListener('click', () => {
//     if (grayClicked) {
//         drawingBoard.removeEventListener('mouseout', grayEffects);
//         btnClickEffectOff(grayScaleBtn);
//         grayClicked = !grayClicked;
//     }


//     const rbScaleGradient = `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`;
//     if (!rainbowClicked) {
//         drawingBoard.addEventListener('mouseout', rainbowEffects);
//         colorRandomEffects(btnClickEffectOn, rainbowBtn, rbScaleGradient, disableBtn);
//     } else {
//         drawingBoard.removeEventListener('mouseout', rainbowEffects);
//         colorRandomEffects(btnClickEffectOff, rainbowBtn, currentColor, enableBtn);
//         colorPicked = currentColor;
//     }
//     rainbowClicked = !rainbowClicked;
// })




// eraserBtn.addEventListener('click', () => {
//     if (!eraserClicked) {
//         colorPicked = '#eeeeee';
//         btnClickEffectOn(eraserBtn);
//     } else {
//         colorPicked = colorPicker.value;
//         btnClickEffectOff(eraserBtn);
//     }
//     eraserClicked = !eraserClicked;
// })
