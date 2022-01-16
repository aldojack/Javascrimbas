const body = document.querySelector('body');
const container = document.getElementById('container');
const dateContainer = document.getElementsByClassName('date');
const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
const btnRandom = document.getElementById("random-btn")
const leftEmoji = document.getElementById('leftEmoji');
const rightEmoji = document.getElementById('rightEmoji');
const displayDate = document.getElementById('date');

const holidays = [{
  date: '31 October',
  leftEmoji: "🎃",
  rightEmoji: "😱",
  message: "Happy Halloween",
  fontFamily: "'Rubik Beastly', 'cursive'",
  backgroundColor: "#000000",
  fontColor: "#fd8405"
},
{
  date: '1 January',
  leftEmoji: "🎆",
  rightEmoji: "🎇",
  message: "Happy New Year",
  fontFamily: "'Smooch', 'cursive'",
  backgroundColor: "#4b0f84",
  fontColor: "#bf9000"
},
{
  date: "25 December",
  leftEmoji: "🎅",
  rightEmoji: "⛄",
  message: "Merry Christmas",
  fontFamily: "'Mountains of Christmas', 'cursive'",
  backgroundColor: "#77A047",
  fontColor: "#D42D2F"
},
{
  date: "14 February",
  leftEmoji: "😍",
  rightEmoji: "💌",
  message: "Happy Valentiness Day",
  fontFamily: "'Loved by the King', 'cursive'",
  backgroundColor: "#fd93c2",
  fontColor: "#757C9C" 
}]

const now = new Date();
let year = now.getFullYear();

btn.addEventListener('click',fix);
btnRandom.addEventListener('click',randomHoliday);

function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
  greeting.style.fontFamily = "'Mountains of Christmas', 'cursive'";
  console.log(btn)
  btn.style.fontFamily = 'cursive';
  leftEmoji.textContent = "🎅";
  rightEmoji.textContent = "⛄";
  btn.style.display = "none";
}

function randomHoliday(){
  btn.style.display = "none";
  const randomIndex = Math.floor(Math.random()*holidays.length)

  greeting.textContent = holidays[randomIndex].message;
  greeting.style.fontFamily = holidays[randomIndex].fontFamily;
  greeting.style.color = holidays[randomIndex].fontColor;
  leftEmoji.textContent = holidays[randomIndex].leftEmoji;
  rightEmoji.textContent = holidays[randomIndex].rightEmoji;
  body.style.backgroundColor = holidays[randomIndex].backgroundColor;
  showCountdown(holidays[randomIndex]);
}

function showCountdown(holiday){
  dateContainer[0].style.display = "flex";
  let holidayDate = new Date(`${holiday.date} ${year}`);
  if(now.getMonth() > holidayDate.getMonth()){
    year = 2022;
    holidayDate.setFullYear(year);
  }
  else{
    year = 2021;
    holidayDate.setFullYear(year);
  }
  const trimIndex = holidayDate.toString().indexOf("GMT");
  displayDate.textContent = holidayDate.toString().slice(0,trimIndex);
}

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.







