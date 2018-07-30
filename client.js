$(document).ready(onReady);

let clicks = 0;

function onReady() {
    console.log('jquery is working');
    $('.generate-btn').on('click', appendDom);
    $('.generate-btn').on('click', totalClicks);
}

function appendDom() {
    $('.container').append('<div id="new-div"></div>');
}

function totalClicks() {
    clicks += 1;
    console.log(clicks)
    $('#new-div').html('<p> Clicks: ' + clicks + '</p>');
}