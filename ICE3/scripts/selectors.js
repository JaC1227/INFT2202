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

    $('li:odd').css('background-color', "#fcf30040");
}

function traversingTheDOM()
{
    // $('#list').prev().css('background-color', "#2a9d8f");
    // $('#list').next().css('background-color', "#2a9d8f");
    $('#list').prev().next().css('background-color', "#2a9d8f"); 

    $('#list').find('li').css('background-color', "#2a9d8f");
    // Traverse up one level
    $('#list').parent('div').css('font-size','24px');
    // Traverse all the way up, through all parents, grandparents, etc. to the body
    $('#list').parents('body').css('font-size','24px');

}

function filtering()
{
    
    $('#list').find('li').filter(':odd').css('background-color', "#2a9d8f");

    // long function of the shortcut .filter(:even)
    $('#list').find('li').filter(function (i)
    {
        return i % 2 === 0;
    }).css('background-color', "red");
}

function addReplaceRemove()
{
    $('ul#list li:first').append($("<ul><li>I'm going to be the last item of the first sub list</li></ul>"));
    // Prepended to top
    $('ul#list').prepend($("<li>Prepended</li>"));

    // use after to add elements after another
    $('.red-box').after("<div class=\"red-box new-box\">New red box</div>")

    let newText = 'Last night, Darth Vader came down from the planet Mustafar.'
    $('p.grumpy').replaceWith(`<p> ${newText} </p>`);
}
// cssSelectors();
// traversingTheDOM();
// filtering();
addReplaceRemove();

$("a").wrap("<h2></h2>");
$("#list2 li:first").remove();
var offsetTop = $("#list2").offset().top;
console.log(`offsetTop=${offsetTop}`)