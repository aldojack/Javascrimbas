const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time")
let currentLocation = ""
let timeTaken = 0

select.addEventListener('change',calculateSpeed);
time.addEventListener('change',(e)=>{
    timeTaken = e.target.value;
    calculateSpeed();
})
let destination = [
    {
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
]

function calculateSpeed() {
    let speed = 0    
    currentLocation = select.value
    const matchedDestination = destination.find(location => currentLocation === location.name)
    const destinationDistance = matchedDestination.distanceFromPrevDestination;
    const calculatedSpeed = Math.round(destinationDistance / timeTaken);
    speedometer.textContent = `Average speed is ${calculatedSpeed}`;
    // Task:
    // - Retrieve distance from previous destination from array of objects.
    // - Calculate speed and round speed to an integer (whole number).
    // - Display speed in speedometer paragraph.
}

// Stretch goals: 
// - Calculate average overall speed.
// - Display location as North Pole on pageload.
