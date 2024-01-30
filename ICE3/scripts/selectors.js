/**
 * ICE3 - Part 2 - Selectors
 * Jaedyn Chinn
 * 2024/01/30
 */

console.log("selectors.js loaded");
$(function()
{
    console.log("DOM is ready");
})

/**
 * 
 * @param {*} element 
 */
function highlight(element)
{
    element.css('background-color', "#fcf30040");
}

function cssSelectors()
{
    // Updating by tag (<p></p>)
    $('p').css('background-color', "#2a9d8f");
    // Updating by class (class="red-box")
    $('.red-box').css('background-color', "#2a9d8f");
    // Updating by ID (id="list")
    $('#list').css('font-size', '40px');

    $('li:odd').css('background-color', "#fcf30040")
}

cssSelectors();