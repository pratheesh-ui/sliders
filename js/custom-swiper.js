$(document).ready(function () {
var swiper = new Swiper('.swiper_bnr', {

  autoplay: {
     delay: 3000,
     disableOnInteraction: false
   },
//   autoplay:false,

  effect: 'slide', //"slide", "fade", "cube", "coverflow", "flip"

  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  speed: 1200,
  mousewheel: false,
  watchSlidesProgress: true,
  parallax: true,
  spaceBetween:0,

  // If we need pagination
   pagination: {
      el: ".swiper-pagination",
			clickable: true,
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper_bnr .swiper-button-next',
    prevEl: '.swiper_bnr .swiper-button-prev',
  },

});

var swiper = new Swiper(".swiper-testimonial", {
  slidesPerView: 1,
  spaceBetween: 15,
    mousewheel: false,
    speed:1200,
  centeredSlides: false,
  freeMode: false,
  grabCursor: true,
 // loop: true,
 autoplay:false,
  autoHeight: true,
 
      navigation: {
    nextEl: ".stes .swiper-button-next",
    prevEl: ".stes .swiper-button-prev"
 
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
          
        
    },
    578: {
      slidesPerView: 1,
          
      
    },
     
      992: {
      slidesPerView: 1,
         
      
    },
      
     
  }
});  
    
    
var swiper = new Swiper(".swiper-gallery", {
  slidesPerView: 1,
  spaceBetween: 15,
    mousewheel: false,
    speed:1200,
  centeredSlides: false,
  freeMode: false,
  grabCursor: true,
 // loop: true,
 autoplay:false,

     navigation: {
    nextEl: ".sgallery .swiper-button-next",
    prevEl: ".sgallery .swiper-button-prev"
 
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
          
        
    },
    578: {
      slidesPerView: 1,
          
      
    },
     
      992: {
      slidesPerView: 1,
         
      
    },
      
     
  }
}); 
    
    });