(function($) {
    'use strict'

    //our code


    $('#clk').on('click', function () {
        $('.intro').html('We Love <a href="#">jquery</a>');

    });


    $('#popup').on('click', function () {
        $('.popup-window').fadeIn(); 
    });

    $('#popup-Close').on('click', function () {
        $('.popup-window').fadeOut();
    });


    $('.menu-icon i').on('click', function () {
        $('.menu').slideToggle();
    })





    
}) (jQuery);