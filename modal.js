$('.button').click(function () { 
    $('.modal-container').css('display', 'block');
});

$('.close-button').click(function () { 
    $('.modal-container').css('display', 'none');
});

$('.modal-container').click(function () { 
    $('.close-button').click();
});