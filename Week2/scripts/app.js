let headerEl = document.getElementById("header");
let h1 = document.getElementById("h1");
// Let homePageLink = document.getElementById("homePageLink");
let displayEvent = document.getElementById("displayEvent");
let loginForm = document.getElementById("login");

let username = document.getElementById("username");
let pass = document.getElementById("pass");


document.body.onload = function() {
    // Get url search params
    const urlParams = new URLSearchParams(window.location.search);

    // Get username param
    var usernameParam = urlParams.get("username");
    if (usernameParam) {
        // If value/parm exists update input
        username.value = usernameParam;
    }
}

function handleFormSubmit() {
    // Always assume form is not valid from beginning
    let isValid = false;
    

    // Select all elements with validation classes
    let hasInvalidClass = document.getElementsByClassName("is-invalid");
    let hasValidClass = document.getElementsByClassName("is-valid");
    

    // Remove classes for fresh validation
    for (var i =0; i< hasInvalidClass.length; i++) {
        hasInvalidClass[i].classList.remove("is-invalid");
    }

    for (var i =0; i< hasValidClass.length; i++) {
        hasValidClass[i].classList.remove("is-valid");
    }

    // Validation 
    // Add is-invalid class when field is invalid
    // Add is-valid class for when field is valid 
    if (username.value.length <= 0) {
        username.classList.add("is-invalid");
    } else {
        username.classList.add("is-valid");
    }

    if (pass.value.length <= 0) {
        pass.classList.add("is-invalid");
    } else {
        pass.classList.add("is-valid");
    }

    // Selecting all error element on form
    let errorEls = loginForm.getElementsByClassName("is-invalid");

    // Check number of errors
    if (errorEls.length > 0) {
        alert("Please correct errors");
        // do not submit form
        return false;
    }

    // Submit form
    return true;
}

function handleMouseOver() {
    console.log("handleMouseOver");
    h1.style.color = "red";
    // h1.style.fontSize = "80px";
}

function handleMouseOut() {
   console.log("handleMouseOut");
   h1.style.color = "black";
   h1.style.fontSize = "32px";
}

// Click event
headerEl.addEventListener("click", function() {
    console.log("Event: click");
    displayEvent.innerHTML = "Event: click (header)";
});

// Mouseover
headerEl.addEventListener("mouseover", handleMouseOver);

// mouseout
headerEl.addEventListener("mouseout", handleMouseOut);

// homePageLink.addEventListener("click", function() {
//     console.log("Event: click");
//     displayEvent.innerHTML = "Event: click (link)";

//     // prevents further default execution when using href="javascript:;"
//     return false;
// });




// DO NOT use below, only allows us to assign one event handler
// window.onload = function() {
//     alert("window onload triggered");
// }

// document.body.onclick = function() {
//     alert("document body clicked");
// }