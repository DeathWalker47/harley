$(function () {

  $('.user-panel__btn').on('click', function () {
    $('.user-panel__btn').toggleClass('user-panel__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__item-link').on('click', function () {
    $('.user-panel__btn').removeClass('user-panel__btn--active');
    $('.menu__list').removeClass('menu__list--active');

  });


  $(".equipment__item--helmets").slice(0, 2).show();
  $(".equipment__show-all").on("click", function (e) {
    e.preventDefault();
    $(".equipment__item--helmets:hidden").slice(0, 10).slideDown();
    if ($(".equipment__item--helmets:hidden").length == 0) {
      $(".equipment__show-all").text("No Content").addClass("noContent");
    }
  });

  /* $(".equipment__item--jackets ").slice(0, 2).show();
  $(".equipment__show-all").on("click", function(e){
    e.preventDefault();
    $(".equipment__item--jackets:hidden").slice(0, 2).slideDown();
    if($(".equipment__item--jackets:hidden").length == 0) {
      $(".equipment__show-all").text("No Content").addClass("noContent");
    }
  });

  $(".equipment__item--cases ").slice(0, 2).show();
  $(".equipment__show").on("click", function(e){
    e.preventDefault();
    $(".equipment__item--cases:hidden").slice(0, 2).slideDown();
    if($(".equipment__item--cases:hidden").length == 0) {
      $(".equipment__show").text("No Content").addClass("noContent");
    }
  }); */



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


  $('.equipment__tabs-item').on('click', function (e) {
    e.preventDefault();
    $('.equipment__tabs-item').removeClass('equipment__tabs-item--active');
    $(this).addClass('equipment__tabs-item--active');

    $('.equipment__content-box').removeClass('equipment__content-box--active');
    $($(this).attr('href')).addClass('equipment__content-box--active');
  });


  $('.equipment__menu-link').on('click', function (e) {
    e.preventDefault();
    /* Убираю дефолтный переход по ссылкам */
    $('.equipment__menu-link').removeClass('equipment__menu-link--active');
    $('.equipment__menu-link').removeClass('equipment__menu-link--block');
    /* При клике на ссылку, убираю у ВСЕХ ссылок класс актив, также убираю у ВСЕХ ссылок класс блок, который делает ссылку видимой(css) */
    $(this).addClass('equipment__menu-link--active');
    /* а при клике на ссылку у нее добавляется класс актив*/

    $('.equipment__content-box').removeClass('equipment__content-box--active');
    /* также при клике на ссылку, у у всех боксов убирается класс актив */
    $($(this).attr('href')).addClass('equipment__content-box--active');
    /* А здесь мы ищем ссылку, на которую кликнули, у которой href имеет id бокса, и добавляем этому боксу класс актив */
  });

  $('.equipment__menu-btn').on('click', function () {
    $(this).removeClass('equipment__menu-link--block');
    /* При клике на кнопку меню то у ТОГО, на КОГО КЛИКНУЛИ, убирается класс блок*/
    $('.equipment__menu-link').toggleClass('equipment__menu-link--block');
    /* При клике на кнопку меню, у ссылок добавляектся класс блок */
  });

  $('.slider').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button class="slider-btn slider-left"><img src="images/icons/slider-left.svg"></button>',
    nextArrow: '<button class="slider-btn slider-right"><img src="images/icons/slider-right.svg"></button>',
    responsive: [{
        breakpoint: 761,
        settings: {
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 420,
        settings: {
          dots: true,
          arrows: true,
          prevArrow: '<button class="slider-btn slider-left"><img src="images/icons/slider-leftmobile.svg"></button>',
          nextArrow: '<button class="slider-btn slider-right"><img src="images/icons/slider-rightmobile.svg"></button>',
        }
      }
    ],



  });

  $(".star").rateYo({
    normalFill: "#A5A5A5",
    ratedFill: "#000",
    fullStar: true,
    readOnly: true,
  });

  new fullpage('#fullpage', {

    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: '.page-section',
    navigation: true,
    scrollOverflow: true,
    menu: '#header__nav',
    anchors: ['top', 'bikes', 'equipment', 'reviews', 'contact'],
    css3: true,
    scrollingSpeed: 1500,
  });

});


const swiper = new Swiper('.swiper-container', {
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
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