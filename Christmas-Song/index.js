const playBtn = document.getElementById("play-btn").addEventListener('click',playMusic)
const pauseBtn = document.getElementById("pause-btn").addEventListener('click',pauseMusic)
const stopBtn = document.getElementById("stop-btn").addEventListener('click',stopMusic)
const volumeSlider = document.getElementById('volume-btn')
const bells = Array.from(document.getElementsByClassName('bell'));
const audioFile = new Audio();
audioFile.src = "./bells.mp3";

volumeSlider.addEventListener('change', volumeControl);

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
function playMusic(){
    audioFile.play();
    bells.forEach(element => {
        element.classList.add('animate-bell');
        element.style.animationPlayState = "running";
    })
}

function pauseMusic(){
    
    if(!audioFile.paused){
        audioFile.pause();

        bells.forEach(element => {
            element.style.animationPlayState = "paused";
        })
    }

}

function stopMusic(){
    pauseMusic();
    audioFile.currentTime = 0;
    bells.forEach(element => {
        element.classList.remove('animate-bell');
    })
}

function volumeControl(){
    audioFile.volume = volumeSlider.value;
}
// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
 