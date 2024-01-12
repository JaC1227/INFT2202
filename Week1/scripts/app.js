/*
    myFunction
    Define the functionality of the function
*/
function myFunction()
{
    alert("This is the about link");
}

// define variable to reference about link
var aboutLink = document.getElementById("alert");
// setting up even listener
// in this case, the "click" event
aboutLink.addEventListener("click", myFunction);