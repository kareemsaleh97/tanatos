    /*global $*/
$(function () {

    'use strict';

    // trigger nice scroll
    
        $("body").niceScroll({
            cursorwidth: "10px",
            cursorcolor: "rgba(48, 53, 60, .8)",
            cursorborder: "0"
        });
    
    // change header height
    $('.header').height($(window).height());


    $(window).on('resize', function () {

        $('.header').height($(window).height());
    });

    // scroll to features

    $('.header .fa-chevron-down').click(function () {

        $('html, body').animate({
           
            scrollTop: $('#about').offset().top
        }, 1000);

    });
    
    // check testimonials 
    
    var arrowLeft = $('.testim .fa-chevron-left'),
        arrowRight = $('.testim .fa-chevron-right');


    function checkClients() {
      
        if ($('.client:first').hasClass('active')) {
            
            arrowLeft.fadeOut();
      
        } else {
          
            arrowLeft.fadeIn();
      
        }
        
        if ($('.client:last').hasClass('active')) {
           
           
            arrowRight.fadeOut();
      
        } else {
              
            arrowRight.fadeIn();
       
        }
    }

    checkClients();

    $('.testim i').click(function () {
       
        if ($(this).hasClass('fa-chevron-right')) {

            $('.testim .active').fadeOut(100, function () {

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                checkClients();
            });
        } else {

            $('.testim .active').fadeOut(100, function () {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                checkClients();
            });
        }
    });

    // show contact

    var contact = $('.contact'),
        contactP = $('.contact p'),
        contactH = $('.contact h2');

    $('.hire-us').click(function () {

        contact.css({
            
            position: 'fixed',
            height: $(window).height(),
            width: '100%',
            top: 0,
            background: 'none'
        
        });
        contactP.hide();
        contactH.hide();
        $('.fa-times').show();
    });
    $('.contact .fa-times').click(function () {

        contact.css({
            
            position: 'static',
            height: 'auto',
            top: 0,
            background: 'url(image/city-937541.jpg)'
        
        });
        contactP.show();
        contactH.show();
        $('.fa-times').hide();
    });
    // show our works 

    var ourWork = $('.our-work');
    $('.show').click(function () {

        ourWork.css({
            
            position: 'fixed',
            height: $(window).height(),
            width: '100%',
            top: 0,
            background: 'rgba(48, 53, 60, .8)',
            color: "#fff"
        });
        $('.our-work .iteam').css('box-shadow', 'none');
        $('.our-work .show').hide();
        $('.our-work .heidden, .our-work .fa-times').show();
    });
    $('.our-work .fa-times').click(function () {

        ourWork.css({
            
            position: 'static',
            height: 'auto',
            width: '100%',
            top: 0,
            background: 'none',
            color: '#3b434c'
        });
        $('.our-work .iteam').css('box-shadow', '15px 15px 15px #e0d7d7');
        $('.our-work .show').show();
        $('.our-work .heidden').hide();
    });
    ourWork.niceScroll({
        cursorwidth: "10px",
        cursorcolor: "#f7600e",
        cursorborder: "0",
        zindex: "9999"
    });
    // show menu box 
    var menuBox = $('.menu-box');
    $('.nav .links').click(function () {

        menuBox.show();
        menuBox.css({

            height: $(window).height(),
            width: '100%'
        });
    });
    // show menu box
    $('.menu-box .fa-times').click(function () {
        menuBox.hide();
    });

    $('.nav .menu-box ul li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.nav .menu-box li').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top
        },700);
        menuBox.hide();
    });
});