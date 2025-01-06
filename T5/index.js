let items = ["hello"];

const itemsDiv = document.getElementById("items");

//Render/Display Items
//We know we want to put the items between the div tag in the html
//file so we need to actually access that file
function renderItems() {
    //fresh start because it will just be reloaded
    itemsDiv.innerHTML = null;

    //enumerate the items in a collection
    for (const [idx, item] of Object.entries(items)) {
        //to house multiple elements we need to create a container for it
        const container = document.createElement("div")

        const text = document.createElement("p"); //paragraph tag
        
        text.textContent = item; //set the text content
 
        itemsDiv.appendChild(text);
        itemsDiv.appendChild(button);
    }

}


//Save Items
function saveItems() {

}

//Load Items
function loadItems() {

}

//Add Items
function addItem() {

}

//Remove Items
function removeItem() {

}

renderItems()