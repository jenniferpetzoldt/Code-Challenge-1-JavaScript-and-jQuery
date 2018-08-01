$(document).ready(onReady);

let clicks = 0;

function onReady() {
    //console.log('jquery is working');
    $('.generate-btn').on('click', appendDom);
    $('.container').on('click', '.swap-btn', swapClick);
    $('.container').on('click', '.delete-btn', deleteClick);
}


function addButtons() {
    clicks++;
        $('.new-div').html('<p>' + clicks + '</p><button class="swap-btn">Swap</button><button class="delete-btn">Delete</button>');
}

function appendDom() {
    $('.container').append('<div class="new-div"></div>'); 
    addButtons();
}

function deleteClick() {
    $(this).parent().remove();
}

function swapClick() {
    $(this).parent().toggleClass('yellow');
}