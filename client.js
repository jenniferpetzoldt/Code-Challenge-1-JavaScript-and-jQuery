$(document).ready(onReady);

let clicks = 0;

function onReady() {
    //console.log('jquery is working');
    $('.generate-btn').on('click', appendDom);
    $('.generate-btn').on('click', totalClicks);
    $('.generate-btn').on('click', addButtons);
    $('.container').on('click', '.swap-btn', swapClick);
    $('.container').on('click', '.delete-btn', deleteClick);
}

function appendDom() {
    $('.container').append('<div id="new-div"></div>');
}

function addButtons() {
    //console.log('add buttons');
    $('#new-div').append('<button class="swap-btn">Swap</button>');
    $('#new-div').append('<button class="delete-btn">Delete</button>');
}

function totalClicks() {
    clicks += 1;
    //console.log(clicks)
    $('#new-div').html('<p> Clicks: ' + clicks + '</p>');
}

function swapClick() {
    $('#new-div').toggleClass('yellow');
}

function deleteClick() {
    $(this).parent().remove();
}