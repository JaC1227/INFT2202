let headerEl = document.getElementById("header");
let displayEvent = document.getElementById("displayEvent");
let homePageLink = document.getElementById("homePage");

// click
headerEl.addEventListener("click", function() {
    console.log("Event: click");
    displayEvent.innerHTML = "Event: click (header)";
})


// mouseover
headerEl.addEventListener("mouseover", function() {
    console.log("Event: mouseover");
    displayEvent.innerHTML = "Event: mouseover (header)";

})

// mouseout
headerEl.addEventListener("mouseout", function() {
    console.log("Event: mouseout");
    displayEvent.innerHTML = "Event: mouseout (header)";

})

// click homepage
homePageLink.addEventListener("click", function() {
    console.log("Event: click");
    displayEvent.innerHTML = "Event: click (homepage)";

    // prevents further default execution
    return false;
})




// DO NOT use bwlow
// window.onload = function()
// {
//     alert("window onload triggered");
// }

// document.body.onclick = function()
// {
//     alert("document body clicked");
// }