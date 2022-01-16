const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = ["Me","Cat","Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]
btn.addEventListener('click',addGuestByInput)
input.addEventListener('keydown',e=>{
    console.log(e.key);

    if(e.key == "Enter")
    {
        console.log('function',e.key);
        addGuestByInput();
        e.preventDefault();
    }

})
// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.
function renderList(){
    guestList.innerHTML = "";
    guests.forEach(addGuest);
}

function addGuest(guest){
    const guestLi = document.createElement('li');
    guestLi.textContent = guest;
    guestList.appendChild(guestLi);
}

function addGuestByInput(){
    const newGuest = input.value;
    guests.push(newGuest);
    input.value = "";
    renderList();
}

renderList();
// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?


