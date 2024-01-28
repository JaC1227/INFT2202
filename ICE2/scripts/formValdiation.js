console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function validateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
function validateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    var emailRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;

    //return true if the email address is valid - how to use regex
	return !!emailString && typeof emailString === 'string'
		&& emailString.match(emailRegex);
}

// validate username function

// source:
// https://www.codeease.net/programming/javascript/username-validation-in-javascript
function validateUsername(username) {
    // alphanumeric username
  const regex = /^[a-zA-Z0-9_]+$/;
  if (!regex.test(username))
  {
    return false;
  }

  // between 4 and 20 characters
  if (username.length <4 || username.length > 20)
  {
    return false;
  }
  else return true;
}
console.log(validateUsername("user123"));   // true
console.log(validateUsername("username123"));   // true
console.log(validateUsername("use"));   // false
console.log(validateUsername("thisisreallyquitealongusername"));   // false

// Clear all errors
function clearErrors() {
    document.getElementById("generalError").innerHTML = "";
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
}

//TODO:
// Make all fields required (HTML) 
// Add a pattern attribute in the telephone element (HTML) 
// Ensure the password is redacted into dots on screen when typed in (HTML) 
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!) 🗸
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)
// Validate the username when the form is submitted
// Clear any additional error message and highlighting when the form is reset
// COMMENT EVERYTHING :D
