const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
btn.addEventListener("click", rndGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

let randomIndex = ""
let counter = 0

function writeGreeting(rndNum){
    if (counter < greetings[rndNum].length) {
        greetingDisplay.textContent += greetings[rndNum].charAt(counter);
        counter++
        setTimeout(() => writeGreeting(rndNum), 150)
        btn.disabled = true
    } else {
        counter = 0;
        btn.disabled = false
    }
}

function rndGreeting() {
    greetingDisplay.textContent = ""
    randomIndex = Math.floor(Math.random() * greetings.length)
    writeGreeting(randomIndex)
}