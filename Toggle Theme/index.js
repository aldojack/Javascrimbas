const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const toggleBtn = document.getElementById('toggle-switch');
const slider = document.getElementsByClassName('slider')
const bgColorSelect = document.getElementById('bg-color');
const fontColorSelect = document.getElementById('font-color');
const widthSelect = document.getElementById('width');
const heightSelect = document.getElementById('height');
const container = document.getElementById('container');

// const christmasBtn = document.getElementById("christmas")
// const snowBtn = document.getElementById("snow")
toggleBtn.addEventListener('click',toggle);
bgColorSelect.addEventListener('change',changeBackgroundColour);
fontColorSelect.addEventListener('change',changeFontColour);
widthSelect.addEventListener('change',adjustWidth);
heightSelect.addEventListener('change',adjustHeight);




// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
function toggle(){
    if(body.classList.contains('christmas')){
        body.classList.replace('christmas','snow');
        greeting.textContent = "⛄ Merry Christmas!"
        bgColorSelect.value = "#F0F4F7";    
        fontColorSelect.value = "#F0F4F7";
    }
    else if(body.classList.contains('snow')){
        body.classList.replace('snow','christmas');
        greeting.textContent = "🎅 Merry Christmas!"
        bgColorSelect.value =  "#C7375F"; 
        fontColorSelect.value = "#344D2F";
    }
}


function changeBackgroundColour(){
    body.style.backgroundColor = bgColorSelect.value;
    slider[0].style.backgroundColor = bgColorSelect.value;
}

function changeFontColour(){
    greeting.style.color = fontColorSelect.value;
}

function adjustWidth(){
    container.style.minWidth = widthSelect.value;
}

function adjustHeight(){
    container.style.minHeight = heightSelect.value;
}

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.