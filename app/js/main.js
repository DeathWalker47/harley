
$(function(){
  const section = $('.section'),
  nav = $('.page-section'),
  navHeight = nav.outerHeight(); // получаем высоту навигации 

// поворот экрана 
window.addEventListener('orientationchange', function () {
navHeight = nav.outerHeight();
}, false);

$(window).on('scroll', function () {
const position = $(this).scrollTop();


section.each(function () {
    const top = $(this).offset().top - navHeight - 5,
          bottom = top + $(this).outerHeight();

    if (position >= top && position <= bottom) {
        nav.find('a').removeClass('active');
        section.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
    }
});
});

nav.find('a').on('click', function () {
const id = $(this).attr('href');

$('html, body').animate({
    scrollTop: $(id).offset().top - navHeight
}, 487);

return false;
});

 /*  $('.menu__item-link').on('click', function(){
    $('.menu__item-link').removeClass('menu__item-link--active');
    $(this).addClass('menu__item-link--active');
  });

  $('.logotip').on('click', function(){
    $('.menu__item-link').removeClass('menu__item-link--active');
    $('.menu__item-link--top').addClass('menu__item-link--active');
  }); */
  
  $('.equipment__tabs-item').on('click', function(e){
    e.preventDefault();
    $('.equipment__tabs-item').removeClass('equipment__tabs-item--active');
    $(this).addClass('equipment__tabs-item--active');

    $('.equipment__content-box').removeClass('equipment__content-box--active');
    $($(this).attr('href')).addClass('equipment__content-box--active');
   
  });

  $('.slider').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    /* slidesToScroll: 1, */
    prevArrow: '<button class="slider-btn slider-left"><img src="images/icons/slider-left.svg"></button>',
    nextArrow: '<button class="slider-btn slider-right"><img src="images/icons/slider-right.svg"></button>'
  });

  $(".star").rateYo({
    starWidth: "29px",
    normalFill: "#A5A5A5",
    ratedFill: "#000",
    fullStar: true,
    readOnly: true,
   /*  starSvg: '<?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15pt" height="14pt" viewBox="0 0 15 14" version="1.1"><path style=" stroke:none;;" d="M 6.753906 0.488281 L 5.050781 4.105469 L 1.246094 4.6875 C 0.566406 4.792969 0.292969 5.675781 0.785156 6.183594 L 3.539062 9 L 2.886719 12.976562 C 2.769531 13.695312 3.492188 14.234375 4.097656 13.898438 L 7.5 12.019531 L 10.902344 13.898438 C 11.507812 14.234375 12.230469 13.695312 12.113281 12.976562 L 11.460938 9 L 14.214844 6.183594 C 14.707031 5.675781 14.433594 4.792969 13.753906 4.691406 L 9.949219 4.105469 L 8.246094 0.488281 C 7.941406 -0.160156 7.058594 -0.167969 6.753906 0.488281 Z M 6.753906 0.488281 "/></svg>', */
  });

  new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    sectionSelector: '.page-section',
    navigation: true,
    scrollingSpeed: 900,
    menu: '#header__nav',
    anchors: ['top', 'bikes', 'equipment', 'reviews', 'contact'],
    css3:true,
    scrollingSpeed: 1000,
  });

});


const swiper = new Swiper('.swiper-container', {
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
    crossFade: true
  },
  zoom: {
    maxRatio: 2,
  },
  
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });
  

  
 