const btn = document.getElementById("btn")
let timer = document.getElementById("timer")
let affirmation = document.getElementById("affirmation")
const container = document.getElementById('container');
console.log(container)
let timeout;


let time = new Date();
time.setHours(0,0,11)
let minutes = time.getMinutes();
let seconds = time.getSeconds();

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

function countdown(){
    if(seconds === 0 && minutes === 0){
        console.log("timer stopped");
        affirmation.textContent = "Time to go again";
        clearInterval(countdownStart);
    }
    else if(seconds > 0){
        seconds--;
        console.log("seconds", seconds)
        seconds <10 ? timer.textContent = `${minutes}:0${seconds}` : timer.textContent = `${minutes}:${seconds}`;
        // console.log("minutes", minutes)
    }
    else if(seconds === 0){
        seconds = 59;
        minutes--;
        timer.textContent = `${minutes}:${seconds}`;
    }
}

const countdownStart = setInterval(countdown, 1000);

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.