/* ================
!!!!!Preloader!!!!!
=================*/
$(window).on('load', function () {
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});

/* ================
!!!!!!!!Team!!!!!!!!
=================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});

/* ================
================
!!!Progress Bars!!!  
!!Waypoints plugin!!
=================
==================*/
$(function () {
    $("#progress-elements").waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + "%"
            }, 1200);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

// Dynamic date for footer
// var year = new Date().getFullYear;

// var date = `Copyright &copy : ${year}. All Rights Reserved.`;

// document.getElementsByTagName('footer')[0].innerHTML = date;


// navbar

$(function () {
    showNav();

    $(window).scroll(function () {

        showNav();
      });

    function showNav() {
        
            if ($(window).scrollTop() > 60) {
                $('nav').addClass("white-bar");
                $('#back-to-top').fadeIn();
            } else {
                $('nav').removeClass('white-bar');
                $('#back-to-top').fadeOut();
            }
      
    }

});

//smooth scrolling
$(function () {

    $('a.smooth-scroll').click(function (event) {
        event.preventDefault();
        var secId = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(secId).offset().top -64
        }, 1000);
    });

});

// Animation using wow
// import WOW from 'wow.js';
// const wow = new WOW({
//   boxClass: 'wow',
//   animateClass: 'animated',
//   offset: 0,
//   live: true
// });
$(function () {
    new WOW().init();
  });

$(function () {
    $('#top-heading').addClass('animated fadeInDown');
    $('#middle-heading').addClass('animated fadeInLeft');
    $('.home-text').addClass('animated zoomIn');
    $('#home-button').addClass('animated zoomIn');
    $('#arrow-down').addClass('animated fadeInDown infinite');
});