$(function(){
  
  $('.equipment__tabs-item').on('click', function(e){
    e.preventDefault();
    $('.equipment__tabs-item').removeClass('equipment__tabs-item--active');
    $(this).addClass('equipment__tabs-item--active');

    $('.equipment__content-box').removeClass('equipment__content-box--active');
    $($(this).attr('href')).addClass('equipment__content-box--active');
    /* $('.equipment__content-box').removeClass('equipment__content-box--active');
    $($(this).attr('href')).addClass('equipment__content-box--active'); */
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
  /* autoplay: {
    delay: 5000,
  }, */
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
  