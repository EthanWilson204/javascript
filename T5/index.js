let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const storageKey = "items";

//Render/Display Items
//We know we want to put the items between the div tag in the html
//file so we need to actually access that file
function renderItems() {

    //fresh start because it will just be reloaded
    itemsDiv.innerHTML = null;

    //enumerate the items in a collection
    for (const [idx, item] of Object.entries(items)) {

        //to house multiple elements we need to create a container for it
        const container = document.createElement("div");
        container.style.marginBottom = "20px"; //adds space at the bottom of the container

        const text = document.createElement("p"); //paragraph tag
        text.style.display = "inline";
        text.style.marginRight = "10px";
        text.textContent = item; //set the text content

        //create button
        const button = document.createElement("button");
        button.textContent = "Delete";

        //wraps the removeItem functino in another function
        //calls the empty function before calling removeItem so it doesnt call remove item when unwanted
        button.onclick = () => removeItem(idx); //use index to make sure its the right item

        container.appendChild(text);
        container.appendChild(button);
 
        itemsDiv.appendChild(container);
    }

}


//Load Items
function loadItems() {
    const oldItems = localStorage.getItem(storageKey);

    //convert the string to an array which can be used in javascript
    if (oldItems) items = JSON.parse(oldItems); //convert the string of items to a javascript object
    renderItems();

}

//Save Items
function saveItems() {
    const stringItems = JSON.stringify(items); //list needs to be converted to a string

    //saves the items across browswer sessions, meaning when it is closed, data is saved
    //this also overwrites the old storageKey so that it is the most up to date data.
    localStorage.setItem(storageKey, stringItems);
}

//Add Items
function addItem() {
    const value = input.value;
    if (!value) {
        alert("Can't add an empty item...");
        return;
    }
    items.push(value);
    renderItems();
    input.value = "";
    saveItems();
}

//Remove Items
function removeItem(idx) {
    //remove 1 element at this index
    //update screen
    items.splice(idx, 1);
    renderItems();
    saveItems();
}

//listen for an event. specifically listen to see if all the HTML content has been loaded onto the screen
//if HTML content is loaded onto the screen, call the loadItems function
document.addEventListener("DOMContentLoaded", loadItems) 