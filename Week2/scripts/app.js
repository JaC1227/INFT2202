let headerEl = document.getElementById("header");
let h1 = document.getElementById("h1");
// let homePageLink = document.getElementById("homePage")
let displayEvent = document.getElementById("displayEvent");
let loginForm = document.getElementById("login");

let username = document.getElementById("username");
let pass = document.getElementById("pass");

document.body.onload = function()
{
    // get url search params
    const urlParams = new URLSearchParams(window.location.search);

    // get username param
    var usernameParam = urlParams.get("username");
    if (usernameParam)
    {
        // if value/param exists update input
        username.value = usernameParam;
    }
    
}

function handleFormSubmit()
{
    // always assume form is not valid from the beginning
    let isValid = false;

    // select all elements with validation classes
    let hasInvalidClass = document.getElementById("is-invalid");
    let hasValidClass = document.getElementById("is-valid");

    // removes classes for fresh validation
    for (var i =0; i < hasInvalidClass.length; i++)
    {
        hasInvalidClass[i].classList.remove("is-invalid");
    }

    for (var i =0; i < hasValidClass.length; i++)
    {
        hasInvalidClass[i].classList.remove("is-valid");
    }


    // validation
    if (username.value.length <= 0)
    {
        username.classList.add("is-invalid");
    } else {
        username.classList.add("is-valid")
    }

    if (pass.value.length <= 0)
    {
        pass.classList.add("is-invalid");
    } else {
        pass.classList.add("is-valid")
    }

    let errorEls = loginForm.getElementByClassName("is-invalid")
    if (errorEls.length > 0)
    {
        alert("Please correct errors");
        console.log("errors", errorEls);

        return false;
    }
    return true;
}

function handleMouseOver() 
{
    console.log("handleMouseOver");
    headerEl.style.color = "red";
    headerEl.style.fontSize = "80px";
}

function handleMouseOut()
{
    console.log("handleMouseOut");
    headerEl.style.color = "black";
    headerEl.style.fontSize = "32px";
}


// click event
headerEl.addEventListener("click", function() {
    console.log("Event: click");
    displayEvent.innerHTML = "Event: click (header)";
})

// mouseover
headerEl.addEventListener("mouseover", handleMouseOver);

// mouseout
headerEl.addEventListener("mouseout", handleMouseOut);

// click homepage
// homePageLink.addEventListener("click", function() {
    // console.log("Event: click");
    // displayEvent.innerHTML = "Event: click (homepage)";

    // prevents further default execution
    // return false;
// })




// DO NOT use bwlow
// window.onload = function()
// {
//     alert("window onload triggered");
// }

// document.body.onclick = function()
// {
//     alert("document body clicked");
// }