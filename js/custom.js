  setTimeout(function() {
  $('body').addClass('loaded');
}, 500);

$(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
       $('#header').addClass('header-active');
    } else {
       $('#header').removeClass('header-active');
    }
});   


$(document).ready(function () {
    

        $("ul.desktop_menu_ul>li > a").on("mouseenter", function () {
            $("body").removeClass("megamenu_open");
            $(" ul.desktop_menu_ul li.mega_menu.MM_show").removeClass("MM_show");
        });
        $("header").on("mouseleave", function () {
            $("body").removeClass("megamenu_open");
            $("ul.desktop_menu_ul li.mega_menu.MM_show").removeClass("MM_show");
        });
    
    $(".header_nav").on("mouseleave", function () {
            $("body").removeClass("megamenu_open");
            $("ul.desktop_menu_ul li.mega_menu.MM_show").removeClass("MM_show");
        });
    
        $("ul.desktop_menu_ul li.mega_menu>a").on("mouseenter", function () {
            if ($("body").hasClass("megamenu_open")) {
                $("body").removeClass("megamenu_open");
            } else {
                $("body").addClass("megamenu_open");
            }
            $("ul.desktop_menu_ul li.mega_menu.MM_show").removeClass("MM_show");
            $(this).closest("li").addClass("MM_show");
        });
  
});


(function($) {
    'use strict';

    function cartboxToggler() {
        var trigger = $('.block__active'),
          container = $('.block_content');


        trigger.on('click', function (e) {
          e.preventDefault();
          container.toggleClass('is-visible');
        });

        $('.close__wrap').on('click', function () {
          container.removeClass('is-visible');
        });

    }
    cartboxToggler();

})(jQuery);
$(document).ready(function () {
 $('#tes_video_slick_slider').slick({
             autoplay: false,
             slidesToShow: 3,
             slidesToScroll: 1,
             autoplaySpeed: 4000,
             speed: 500,
             infinite: true,
             centerMode: true,
             centerPadding: '20px',
             dots: false,
             arrows: true,
             prevArrow:' .snav1 .prev',
             nextArrow:' .snav1 .next',
             responsive: [
                 {
                     breakpoint: 992,
                     settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                         centerMode: false,
             centerPadding: '0px',
                       
                     }
                 },
                 {
                     breakpoint: 768,
                     settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         centerMode: false,
                         centerPadding: '0px',
                         dots:false
                     
 
                     }
                 }
             ]
         });
    });