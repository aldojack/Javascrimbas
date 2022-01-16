const meter = document.getElementById("meter")
const loadingText = document.getElementById('loading-text');
const now = new Date();

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!
function progressBar(){
    const day = now.getDate();
    // const day = 25;

    if(meter.value < day){
        meter.value++;
        loadingText.textContent = `Festivities Incoming ${meter.value}%`
    }
    else{
        loadingText.textContent = "It's Christmas!!!".toUpperCase();
    }
}

const interval = setInterval(progressBar,400);
// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
