$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $('body').removeClass("overflow");
        $(this).remove();
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arro_top").fadeIn(500) : $(".arro_top").fadeOut(500);
    });
    $(".arro_top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
    });
    /////////Products Slider/////////
    $('.Product-slider').owlCarousel({
        autoplay: false,
        stagePadding: 20,
        margin: 17,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: true,
        dots: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            },
            1500: {
                items: 6
            }
        }
    });
    /////////////side////////////////
    $('.cats-btn').click(function (e) {
        $(".cats-dispaly").slideToggle("500");
        $(".mo-overlay").fadeToggle(500);
        $(".cats-btn ").toggleClass("active");
        if ($(window).width() <= 767) {
            $(".mo-overlay").hide();
            $('body').addClass("overflow");
        }
    });
    $('.mo-overlay').click(function () {
        $(".cats-dispaly").slideUp("500");
        $(".mo-overlay").fadeOut(500);
        $(".cats-btn ").removeClass("active");
    });

    if ($(window).width() <= 991) {
        /////////////////////////////////////////////////////
        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(400);
            $(".nav-cont").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        /////////////////////////////////////////////////
        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(300);
            $(".search-cont").addClass("open");
            $("body").addClass("overflow");
            $('.search-input').focus();
        });
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").removeClass("open");
            $(".search-form").fadeOut(400);
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
    }

    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })
});