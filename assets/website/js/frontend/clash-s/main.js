(function ($) {
    "use strict";

    /*----------------------------
       		preloader active
       	------------------------------*/

    $(window).on('load', function () {
        jQuery(".preloader").fadeOut(500);
    });

    /*----------------------------
       		sticky Header
       	------------------------------*/

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 2) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });

    /*----------------------------
       		main menu Active
       	------------------------------*/

    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    /*----------------------------
       		search form Active
       	------------------------------*/

    $('#close-btn').on('click', function () {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
    });
    $('#search-btn').on('click', function () {
        $('#search-overlay').fadeIn();
    });

    /*----------------------------
    		Counter Active
    	------------------------------*/

    $('.counter').counterUp({
        delay: 2,
        time: 1000
    });

    /*----------------------------
    		popup active
    	------------------------------*/

    $(".popup-video").magnificPopup({
        type: "iframe"
    });

    /*--------------------------
     swiper slider active
    ---------------------------- */

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        }
    });

    /*----------------------------
        		testimonial slider Active
        	------------------------------*/

    $(".testimonial-wraper").owlCarousel({
        loop: true,
        autoplay: false,
        animateOut: 'fadeInDown',
        animateIn: 'fadeInUp',
        smartSpeed: 1000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*----------------------------
    		Client Slider Active
    	------------------------------*/

    $(".all-client-slider").owlCarousel({
        loop: true,
        autoplay: false,
        smartSpeed: 1000,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    /*----------------------------
         		scrolltop active
         	------------------------------*/

    $('body').materialScrollTop();

})(jQuery);