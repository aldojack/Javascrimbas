const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
const container = Array.from(document.getElementsByClassName('container'));
decorator.addEventListener("click", deckTheHalls)


function deckTheHalls() {
  // Task:
  // Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled. 
  if(decorator.checked){
    house.prepend("🎄");
    house.append("🎄");
    container[0].classList.add('night');
    document.body.style.backgroundColor = "black";
  }
  else{
    house.textContent = "🏡";
    container[0].classList.remove('night');
    document.body.style.backgroundColor = "#344D2F";
  }
}

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
