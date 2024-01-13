// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var groceryList = document.getElementById("groceries");

// ADD NEW ITEM TO END OF LIST
// Create element
const newListItem = document.createElement("li");
// Create text node
const listItemContent = document.createTextNode("banana");
// Add text node to element
newListItem.appendChild(listItemContent);
// Add element end of list
groceryList.appendChild(newListItem);

// ADD NEW ITEM START OF LIST

// Create element
const newListItem2 = document.createElement("li");
// Create text node
const listItemContent2 = document.createTextNode("bread");
// Add text node to element
newListItem2.prepend(listItemContent2);
// Add element to list
groceryList.prepend(newListItem2);



// All <li> elements
var listItems = groceryList.getElementsByTagName("li");
// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
var counter = listItems.length;
// Loop through elements
for (var i = 0; i < counter; i++)
{
    // Change class to cool
    listItems[i].classList.add("cool");
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
// h2 text
var heading = document.querySelector("h2");

// No. of <li> elements
var numberOfItems = counter;

// Content
var content = "Grocery List (" + numberOfItems + " items)";

// Update h2 using innerHTML (not textContent) because it contains markup
heading.innerHTML = content;