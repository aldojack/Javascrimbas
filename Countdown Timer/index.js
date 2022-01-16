const countdownDisplay = document.getElementById("countdown-display")
const fullCountDownDisplay = document.getElementById("full-countdown-display")
const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")


function renderCountdown(){
    const christmas = 24
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    const today = new Date();
    const daysUntilXmas =  christmas - today.getDate();
    
    const hoursInDay = 23
    const hoursUntil = hoursInDay - today.getHours();
    const minsInHour = 60;
    const minsUntil = minsInHour - today.getMinutes();
    const secsInMinute = 60;
    const secsUntil = secsInMinute - today.getSeconds();

    days.textContent = `${daysUntilXmas} `;
    hours.textContent = `${hoursUntil} `;
    minutes.textContent = `${minsUntil} `;
    seconds.textContent = `${secsUntil} `;
}

const countDown = setInterval(renderCountdown, 1000);
