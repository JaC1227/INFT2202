// define parrern for url protocol
// let urlProtocol = /https/;

// create using constructor
let urlProtocol = new RegExp("https");
let url = "http://www.durhamcollege.ca";
let searchResult = url.search(urlProtocol);
// returns -1
console.log(`url =${url} searchResult = ${searchResult}`)

url = "https://www.durhamcollege.ca";
searchResult = url.search(urlProtocol);
console.log(`url =${url} searchResult = ${searchResult}`)

/**                                                                                                                                                                                               
 * 
 * @param {*} email 
 */
function validateEmail(email)
{
    let emailPattern = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-z]{2,6})$/;
    let result;
    if (emailPattern.test(email)) 
    {
        result = true;
    } 
    else 
    {
        result = false;
    }
    // value of result is true
}