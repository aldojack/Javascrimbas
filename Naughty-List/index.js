const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")

btn.addEventListener("click", sortList)

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]
function sortList(){
    naughtyList.innerHTML ="";
    niceList.innerHTML = "";
    sorteesArr.forEach(render);
}

function render(person){
    const list = document.createElement('li');
    list.addEventListener('click',switchList);
    list.textContent = person.name;
    person.hasBeenGood ? niceList.appendChild(list) : naughtyList.appendChild(list);
}

function switchList(){
    const name = this.textContent;
    const found = sorteesArr.find(person => name === person.name);
    found.hasBeenGood = !found.hasBeenGood;
    sortList();
}
// Task: 
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.