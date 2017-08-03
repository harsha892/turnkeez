jQuery(document).ready(function ($) {
    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* ----------------------------
    Mobile menu click then remove
    -------------------------------*/
    $("#mainmenu ul.nav.navbar-nav li a").on("click", function () {
        $("#mainmenu").removeClass("in");
    });

    /*--------------------
    Scroll to top
    ----------------------*/
    $.scrollUp({
        scrollText: '<span class="fa fa-angle-up fa-2x"></span>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*--------------------
    Home Slider Active
    ----------------------*/
    $('.header-bg-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
    });
}(jQuery));


jQuery(window).on("load", function () {
    /*-----------------
    Preloader Js
    ------------------*/
    $('.preloader').fadeOut(500);

    /*------------------
    WoW js Active
    -------------------*/
    new WOW().init({
        mobile: true,
    });
});