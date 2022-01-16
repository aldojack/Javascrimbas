const items = ["Candles", "Decorations", "Chocolate",'Wrapping Paper'];
const checklist = document.getElementById("checklist");
const searchInput = document.getElementById('search');
const addBtn = document.getElementById('add');
addBtn.addEventListener('click',addItemByInput);


// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.
function renderList(){
    items.forEach(item => {
    addItem(item);
    });
}

function removeItem(){
    //Returns Div with label, checkbox and button
    const parent = this.parentElement;
    //Returns the name in the list i.e Candles
    const listItem = parent.children[1].textContent;
    //Finds index of item from array
    const index = items.indexOf(listItem);
    //Removes item from array
    items.splice(index,1);
    //Removes div from checklist
    parent.remove();
}

function addItem(item){
        //Element variables
        const div = document.createElement('div');
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        const button = document.createElement('button');
        
        //Add class to each div
        div.classList.add('checklist-item');
        //Set for label and text value
        label.setAttribute('for',item.toLowerCase());
        label.textContent = item;
        //Set input to checkbox with name attribute
        checkbox.setAttribute('type','checkbox');
        checkbox.setAttribute('name',item.toLowerCase());
        //Add remove button with on click function
        button.classList.add('remove');
        button.textContent = "x";
        button.addEventListener('click',removeItem)
        //Append all elements within the div
        div.append(checkbox,label,button);
        //append all of this to the checklist
        checklist.appendChild(div);
}

function addItemByInput(){
    //Finds value from search
    const newItem = searchInput.value;
    //Adds to the items array
    items.push(newItem);
    //Renders to the list
    addItem(newItem);
    //Defaults search blank
    searchInput.value = "";
}

renderList();
// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

