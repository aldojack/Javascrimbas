const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)
const audio = new Audio();
audio.src = "./xmas-audio.mp3";

function christmassifyName() {
   // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
  greeting.classList.toggle('christmassified');

  if(greeting.classList.contains('christmassified')){
    christmassifierBtn.textContent = "De-christmassify";
    audio.play();
    setTimeout(christmassifyName,10000);
  }
  else{
    christmassifierBtn.textContent = "Christmassify";
    audio.pause();
  }

}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.

