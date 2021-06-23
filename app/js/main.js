/* $(function(){
  
  

}); */
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
  