// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
function Love() {
    result = document.getElementById("resultlove");
    if (Math.random() >= 0.5) {
        result.innerHTML = "Yes! ❤️ :D"
    }
    else {
        result.innerHTML = "No :("
    }
}

function UnicornName() {
    result = document.getElementById("resultname");
    firstNameList = [
        'Flashy',
        'Sleepy',
        'Graceful',
        'Shiny',
        'Woopsy',
        'Tangled',
        'Wonder',
        'White',
        'Pink',
        'Pastel',
        'Fluffy',
        'Friendly',
        'Lovely',
        'Magic'
    ];
    lastNameList = [
        'Snow',
        'Wings',
        'Hooves',
        'Mane',
        'Fantasy',
        'Dream',
        'Light',
        'Hug',
        'Breeze',
        'Heart',
        'Smile',
        'Magic'
    ]
    result.innerHTML =
        firstNameList[Math.floor(Math.random() * firstNameList.length)]
        + " " +
        lastNameList[Math.floor(Math.random() * lastNameList.length)];
}